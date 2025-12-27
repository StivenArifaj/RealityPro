
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Home, User, ArrowLeft, Check, Calendar, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import { properties } from '@/data/properties';
import { toast } from 'sonner';

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const property = properties.find(p => p.id === Number(id));

    if (!property) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
                    <Button onClick={() => navigate('/')}>Return Home</Button>
                </div>
            </div>
        );
    }

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent successfully! The agent will contact you soon.");
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="max-w-7xl mx-auto px-4 py-8">
                <Button
                    variant="ghost"
                    className="mb-6 hover:bg-muted"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Listings
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="overflow-hidden rounded-xl h-[400px] md:h-[500px]">
                                <img
                                    src={property.images[0]}
                                    alt={property.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {property.images.slice(1).map((img, idx) => (
                                    <div key={idx} className="overflow-hidden rounded-lg h-48">
                                        <img
                                            src={img}
                                            alt={`${property.title} view ${idx + 2}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Property Info */}
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge>{property.type}</Badge>
                                        <Badge variant="outline">{property.status}</Badge>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                                        {property.title}
                                    </h1>
                                    <div className="flex items-center text-muted-foreground">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span>{property.address}, {property.city}</span>
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-primary">
                                    ${property.price.toLocaleString()}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-6 bg-muted/20 rounded-xl border">
                                <div className="text-center">
                                    <div className="font-bold text-xl">{property.bedrooms}</div>
                                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-xl">{property.bathrooms}</div>
                                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-xl">{property.sqft}</div>
                                    <div className="text-sm text-muted-foreground">Sq Ft</div>
                                </div>
                                <div className="text-center hidden md:block">
                                    <div className="font-bold text-xl">{property.yearBuilt}</div>
                                    <div className="text-sm text-muted-foreground">Built</div>
                                </div>
                            </div>

                            <div className="prose max-w-none">
                                <h3 className="text-xl font-semibold mb-3">About this property</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {property.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {property.amenities.map((amenity) => (
                                        <div key={amenity} className="flex items-center text-muted-foreground">
                                            <Check className="h-4 w-4 mr-2 text-primary" />
                                            {amenity}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card className="p-6 sticky top-24">
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={property.agent.image}
                                    alt={property.agent.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/10"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{property.agent.name}</h3>
                                    <div className="text-sm text-muted-foreground">Listing Agent</div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <Button variant="outline" className="w-full justify-start">
                                    <Phone className="mr-2 h-4 w-4" />
                                    {property.agent.phone}
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Mail className="mr-2 h-4 w-4" />
                                    {property.agent.email}
                                </Button>
                            </div>

                            <form onSubmit={handleContactSubmit} className="space-y-4">
                                <Input placeholder="Your Name" required />
                                <Input placeholder="Email Address" type="email" required />
                                <Input placeholder="Phone Number" type="tel" />
                                <Textarea
                                    placeholder="I am interested in this property..."
                                    className="h-32"
                                    required
                                />
                                <Button type="submit" className="w-full text-lg font-semibold h-12">
                                    Schedule Viewing
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PropertyDetails;
