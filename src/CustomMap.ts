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

  //TODO implement dynamic info windows
  addMarker(location: placeable): void {
    const marker = new google.maps.Marker({
      position: location.location,
      map: this.map,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: location.markerContent(),
    });

    marker.addListener("click", () => {
      infoWindow.open(this.map, marker);
    });
  }
}

export interface placeable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}
