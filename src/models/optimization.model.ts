
export interface OptimizationI {
    id: number;
    status: string;
    response_time: number;
  }

export class Optimization implements OptimizationI {
  constructor (
        public id: number,
        public status: string,
        public response_time: number
  ) {}
}
