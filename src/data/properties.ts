export interface Agent {
  name: string;
  phone: string;
  email: string;
  image: string;
}

export interface Property {
  id: number;
  title: string;
  price: number;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'House' | 'Condo' | 'Penthouse' | 'Apartment' | 'Townhouse';
  images: string[];
  agent: Agent;
  amenities: string[];
  description: string;
  featured?: boolean;
  status: 'For Sale' | 'For Rent';
  yearBuilt: number;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    price: 450000,
    address: "123 Main St",
    city: "Downtown City",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "Condo",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@realtypro.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    amenities: ["Parking", "Gym", "Pool", "Pet Friendly", "Smart Home System"],
    description: "Stunning modern loft in the heart of downtown with city views and premium amenities. High ceilings, exposed brick, and floor-to-ceiling windows create an airy, open atmosphere.",
    featured: true,
    status: 'For Sale',
    yearBuilt: 2021
  },
  {
    id: 2,
    title: "Family Suburban Home",
    price: 650000,
    address: "456 Oak Avenue",
    city: "Riverside",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    type: "House",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    agent: {
      name: "Mike Chen",
      phone: "(555) 987-6543",
      email: "mike@realtypro.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    amenities: ["Garage", "Garden", "Fireplace", "Updated Kitchen", "Solar Panels"],
    description: "Beautiful family home with spacious backyard and modern updates throughout. Located in a top-rated school district with easy access to parks and shopping.",
    featured: true,
    status: 'For Sale',
    yearBuilt: 2015
  },
  {
    id: 3,
    title: "Luxury Penthouse Suite",
    price: 1200000,
    address: "789 Skyline Blvd",
    city: "Uptown",
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2800,
    type: "Penthouse",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    agent: {
      name: "Emily Rodriguez",
      phone: "(555) 456-7890",
      email: "emily@realtypro.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    amenities: ["Concierge", "Rooftop Access", "City Views", "Premium Finishes", "Private Elevator"],
    description: "Exclusive penthouse with panoramic city views and world-class amenities. Experience the height of luxury living with a private terrace and gourmet kitchen.",
    featured: true,
    status: 'For Sale',
    yearBuilt: 2023
  },
  {
    id: 4,
    title: "Cozy Garden Cottage",
    price: 350000,
    address: "321 Willow Lane",
    city: "Greenwood",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    type: "House",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    agent: {
      name: "David Smith",
      phone: "(555) 555-0123",
      email: "david@realtypro.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    amenities: ["Large Garden", "Workshop", "Quiet Neighborhood"],
    description: "Charming cottage with a massive garden, perfect for nature lovers.",
    featured: false,
    status: 'For Sale',
    yearBuilt: 1950
  },
  {
    id: 5,
    title: "Urban Studio Apartment",
    price: 2500,
    address: "555 Tech Way",
    city: "Innovation District",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    type: "Apartment",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@realtypro.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    amenities: ["Gym", "Coworking Space", "High Speed Internet"],
    description: "Modern studio in the tech hub. Ideal for young professionals.",
    featured: false,
    status: 'For Rent',
    yearBuilt: 2020
  }
];
