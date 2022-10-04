/// <reference types ="@types/google.maps" />
export class CustomMap {
  private map: google.maps.Map;

  constructor(elementId) {
    this.map = new google.maps.Map(
      document.getElementById(elementId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(location: placeable) {
    new google.maps.Marker({
      position: {
        lat: location.lat,
        lng: location.long,
      },
      map: this.map,
    });
  }
}

interface placeable {
  lat: number;
  long: number;
}
