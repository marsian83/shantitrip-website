export type Destination = {
  id: number;
  name: string;
  imageUrl: string;
  headline: string;
  rating: number;
  days: number;
  people: string;
  date: string;
  budget: {
    total?: number;
    perPerson?: number;
  } & ({ total: number } | { perPerson: number });
  images: string[];
  description: string;
  places: {
    imageUrl: string;
    thumbnail: string;
    day?: string;
    title: string;
    description: string;
    alias?: string;
  }[];
  geolocation?: {
    longitude: number;
    latitude: number;
  };
};
