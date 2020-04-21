export default class Simulation {
  id: number;
  year: number;
  startTime: number;
  endTime: number;
  status: string;

  constructor(
    id: number,
    year: number,
    startTime: number,
    endTime: number,
    status: string
  ) {
    this.id = id;
    this.year = year;
    this.startTime = startTime;
    this.endTime = endTime;
    this.status = status;
  }
}
