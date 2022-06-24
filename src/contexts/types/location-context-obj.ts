import { Location } from './location';

export type LocationContextObj = {
  locations: Location[];
  updatedAt: number;
  saveLocations: (locations: Location[]) => void;
};
