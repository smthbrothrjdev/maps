import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number.parseFloat(faker.address.latitude()),
      long: Number.parseFloat(faker.address.longitude()),
    };
  }
}
