
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
  propertyType: string;
  setPropertyType: (value: string) => void;
  bedrooms: string;
  setBedrooms: (value: string) => void;
}

const SearchFilters = ({
  searchQuery,
  setSearchQuery,
  priceRange,
  setPriceRange,
  propertyType,
  setPropertyType,
  bedrooms,
  setBedrooms
}: SearchFiltersProps) => {
  return (
    <section className="py-8 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-background rounded-xl p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Enter location, property name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11"
                aria-label="Search properties"
              />
            </div>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="h-11" aria-label="Select price range">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Price</SelectItem>
                <SelectItem value="0-200000">Under $200K</SelectItem>
                <SelectItem value="200000-400000">$200K - $400K</SelectItem>
                <SelectItem value="400000-600000">$400K - $600K</SelectItem>
                <SelectItem value="600000-800000">$600K - $800K</SelectItem>
                <SelectItem value="800000-1000000">$800K - $1M</SelectItem>
                <SelectItem value="1000000+">$1M+</SelectItem>
              </SelectContent>
            </Select>

            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="h-11" aria-label="Select property type">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Type</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>

            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger className="h-11" aria-label="Select number of bedrooms">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Bedrooms</SelectItem>
                <SelectItem value="1">1+ Bed</SelectItem>
                <SelectItem value="2">2+ Beds</SelectItem>
                <SelectItem value="3">3+ Beds</SelectItem>
                <SelectItem value="4">4+ Beds</SelectItem>
                <SelectItem value="5">5+ Beds</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center mt-6">
            <Button size="lg" className="px-12">
              <Search className="h-5 w-5 mr-2" />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
