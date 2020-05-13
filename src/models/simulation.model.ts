
export interface SimulationI {
  id: number;
  year: number;
  sim_end: number;
  sim_start: number;
  status: string;
}

export class Simulation implements SimulationI {
  constructor (
    public id: number,
    public year: number,
    public sim_end: number,
    public sim_start: number,
    public status: string
  ) {}
}
