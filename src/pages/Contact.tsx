
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { toast } from 'sonner';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Thank you for your message! We'll get back to you shortly.");
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="relative bg-primary/5 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Contact Us</h1>
                    <p className="text-xl text-muted-foreground maxWidth-2xl mx-auto">
                        Get in touch with our expert team to find your dream property.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Whether you're looking to buy, sell, or rent, our team is here to help you every step of the way.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <Card>
                                <CardContent className="flex items-center p-6 space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <p className="text-muted-foreground">(555) 123-4567</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-center p-6 space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <p className="text-muted-foreground">hello@realtypro.com</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="flex items-center p-6 space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Office</h3>
                                        <p className="text-muted-foreground">123 Real Estate Blvd, City, ST 12345</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                    <Input id="firstName" placeholder="John" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                    <Input id="lastName" placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">Phone (Optional)</label>
                                <Input id="phone" type="tel" placeholder="(555) 000-0000" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea
                                    id="message"
                                    placeholder="How can we help you?"
                                    className="h-32"
                                    required
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                <Send className="mr-2 h-4 w-4" />
                                SendMessage
                            </Button>
                        </form>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default Contact;
