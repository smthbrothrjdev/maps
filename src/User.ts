import { faker } from "@faker-js/faker";
import { placeable } from "./CustomMap";

export class User implements placeable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number.parseFloat(faker.address.latitude()),
      lng: Number.parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User: ${this.name}`;
  }
}
