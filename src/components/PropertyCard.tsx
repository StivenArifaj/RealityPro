import { Heart, MapPin, Home, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 bg-background/80 hover:bg-background"
          onClick={(e) => {
            e.stopPropagation();
            // Handle favorite logic here
          }}
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {property.type}
        </Badge>
        <Badge variant={property.status === 'For Sale' ? 'default' : 'secondary'} className="absolute bottom-3 left-3">
          {property.status}
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{property.address}, {property.city}</span>
          </div>
        </div>

        <div className="text-2xl font-bold text-primary mb-4">
          {formatPrice(property.price)}
          {property.status === 'For Rent' && <span className="text-sm font-normal text-muted-foreground">/month</span>}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} bed</span>
          </div>
          <div className="flex items-center">
            <span>{property.bathrooms} bath</span>
          </div>
          <div className="flex items-center">
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4 h-12 overflow-hidden">
          {property.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {property.amenities.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{property.amenities.length - 3} more
            </Badge>
          )}
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={property.agent.image}
                alt={property.agent.name}
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
              <span className="text-sm font-medium">{property.agent.name}</span>
            </div>
            <Button size="sm" variant="outline" onClick={(e) => {
              e.stopPropagation();
              navigate(`/property/${property.id}`);
            }}>
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
