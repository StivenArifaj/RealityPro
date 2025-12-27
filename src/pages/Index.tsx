import { useState } from 'react';
import { Search, MapPin, Home, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import PropertyCard from '@/components/PropertyCard';
import HeroSection from '@/components/HeroSection';
import SearchFilters from '@/components/SearchFilters';
import { properties } from '@/data/properties';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [bedrooms, setBedrooms] = useState('any');

  // Filter properties based on search criteria
  const filteredProperties = properties.filter(property => {
    // Search query filter (matches title, city, or address)
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase());

    // Price range filter
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (priceRange.endsWith('+')) {
        matchesPrice = property.price >= parseInt(priceRange);
      } else {
        matchesPrice = property.price >= min && property.price <= max;
      }
    }

    // Property type filter
    const matchesType = propertyType === 'all' || property.type.toLowerCase() === propertyType.toLowerCase();

    // Bedrooms filter
    const matchesBedrooms = bedrooms === 'any' || property.bedrooms >= parseInt(bedrooms);

    return matchesSearch && matchesPrice && matchesType && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection />

      <SearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
      />

      {/* Featured Properties Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {searchQuery || priceRange !== 'all' || propertyType !== 'all' || bedrooms !== 'any'
              ? 'Search Results'
              : 'Featured Properties'}
          </h2>
          <p className="text-muted-foreground text-lg">
            {filteredProperties.length} properties found matching your criteria
          </p>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No properties found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setPriceRange('all');
                setPropertyType('all');
                setBedrooms('any');
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Properties
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Platform</h2>
            <p className="text-muted-foreground text-lg">We make finding your dream property simple and efficient</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
                <p className="text-muted-foreground">Find exactly what you're looking for with our powerful search filters</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Agents</h3>
                <p className="text-muted-foreground">Connect with experienced real estate professionals in your area</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location Insights</h3>
                <p className="text-muted-foreground">Get detailed neighborhood information and market insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8" />
                <span className="text-xl font-bold">RealtyPro</span>
              </div>
              <p className="text-background/80">Your trusted partner in finding the perfect property.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Buyers</h4>
              <ul className="space-y-2 text-background/80">
                <li>Search Properties</li>
                <li>Property Alerts</li>
                <li>Mortgage Calculator</li>
                <li>Buying Guide</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Agents</h4>
              <ul className="space-y-2 text-background/80">
                <li>List Properties</li>
                <li>Agent Dashboard</li>
                <li>Lead Management</li>
                <li>Marketing Tools</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 RealtyPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
