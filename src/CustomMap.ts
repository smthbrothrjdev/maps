/// <reference types ="@types/google.maps" />
export class CustomMap {
  private map: google.maps.Map;
  private infoWindow: google.maps.InfoWindow;

  constructor(elementId) {
    this.infoWindow = new google.maps.InfoWindow();
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

    const locationButton = document.createElement("button");

    locationButton.textContent = "Geolocate test";
    locationButton.classList.add("custom-map-control-button");

    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      locationButton
    );

    locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            console.log(pos);
          },
          () => {
            handleLocationError(true, this.infoWindow, this.map.getCenter()!);
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, this.infoWindow, this.map.getCenter()!);
      }
    });
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

function handleLocationError(
  browserHasGeolocation: boolean,
  infoWindow: google.maps.InfoWindow,
  pos: google.maps.LatLng
) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(this.map);
}
export interface placeable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}
