
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Find Your Perfect
          <span className="text-primary block">Dream Home</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover thousands of properties from trusted agents and sellers. 
          Your journey to the perfect home starts here.
        </p>
        
        {/* Quick Search */}
        <div className="bg-background rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Enter city, neighborhood, or address..." 
                className="h-12 text-lg"
              />
            </div>
            <Button size="lg" className="h-12 px-8">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {['Downtown Condos', 'Suburban Homes', 'Luxury Properties', 'Pet-Friendly'].map((term) => (
              <Button key={term} variant="link" size="sm" className="h-auto p-0 text-sm text-primary">
                {term}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-muted-foreground">Properties Listed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Expert Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50K+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">25</div>
            <div className="text-muted-foreground">Cities Covered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
