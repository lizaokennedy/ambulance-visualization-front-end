
export interface SimulationI {
  id: number;
  year: number;
  startTime: number;
  endTime: number;
  status: string;
}

export class Simulation implements SimulationI {
  constructor (
    public id: number,
    public year: number,
    public startTime: number,
    public endTime: number,
    public status: string
  ) {}

  getTimeTaken () {
    return (this.endTime - this.startTime) / 60
  }
}
