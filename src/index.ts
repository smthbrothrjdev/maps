/// <reference types ="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";


const map = new CustomMap("map");
const user = new User();
const company = new Company();

const geoButton = document.getElementById("geolocate");

geoButton?.addEventListener


map.addMarker(user);
map.addMarker(company);


