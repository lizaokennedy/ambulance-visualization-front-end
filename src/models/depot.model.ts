
export interface DepotI {
    id: number;
    lng: number;
    lat: number;
    ambulances: number;
  }

export class Depot implements DepotI {
  constructor (
        public id: number,
        public lng: number,
        public lat: number,
        public ambulances: number
  ) {}
}
