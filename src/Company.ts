import { faker } from "@faker-js/faker";
import { placeable } from "./CustomMap";

export class Company implements placeable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h3> Company: ${this.companyName}</h3>
    <h5> -${this.catchPhrase}</h5>
    </div>
  `;
  }
}
