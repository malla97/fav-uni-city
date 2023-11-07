// Define a class for City
export class City {
    name: string;
    latitude: number;
    longitude: number;
  
    constructor(name: string, latitude: number, longitude: number) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  
    displayInfo() {
      console.log(`City: ${this.name}`);
      console.log(`Coordinates: ${this.latitude}, ${this.longitude}`);
    }
  }