
import { useState } from 'react';
import { Home, Menu, X, User, Heart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Buy', href: '/' },
    { name: 'Rent', href: '/' },
    { name: 'Sell', href: '/contact' },
    { name: 'Agents', href: '/contact' },
    { name: 'About', href: '/contact' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Home className="h-6 w-6 text-primary" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">RealtyPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm lg:text-base uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="font-medium">
              <Heart className="h-4 w-4 mr-2" />
              Favorites
            </Button>
            <Button variant="outline" size="sm" className="hidden lg:flex">
              Sign In
            </Button>
            <Button size="sm" onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="my-4" />
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Sign In
                  </Button>
                  <Button className="w-full" onClick={() => {
                    setIsOpen(false);
                    navigate('/contact');
                  }}>
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
