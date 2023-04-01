export interface Destination {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  places: number[];
  trips: number[];
  geolocation?: {
    longitude: number;
    latitude: number;
  };
}

export interface Place {
  id: number;
  name: string;
  alias?: string;
  description: string;
  imageUrl: string;
  thumbnail: string;
}

export interface Trip {
  id: number;
  name: string;
  imageUrl: string;
  decsription: string;
  days: number;
  people: string;
  date: string;
  budget: string;
  images: string[];
  itinerary: {
    day: string;
    places: number[];
  }[];
  itemsToCarry: { tile: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  sthSpecials: string[];
}
