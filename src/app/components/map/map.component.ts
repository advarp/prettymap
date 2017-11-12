import {Component, OnInit} from '@angular/core';
import DG from '2gis-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})

export class MapComponent implements OnInit {

  loader = true;
  map;
  markers = DG.featureGroup();
  selectedType;
  zoom = 13;

  list = [
    {
      type: 'custom',
      markers: []
    },
    {
      type: 'pharmacies',
      markers: []
    },
    {
      type: 'gas',
      markers: []
    },
    {
      type: 'schools',
      markers: []
    },
    {
      type: 'restaurants',
      markers: []
    }
  ];

  ngOnInit() {
    this.loader = false;
    this.getCurrentLoc();
  }

  getCurrentLoc() {
    navigator.geolocation.getCurrentPosition(this.setCurrentLoc);
  }

  zoomIn() {
    this.map.setZoom(this.zoom += 1);
  }

  zoomOut() {
    this.map.setZoom(this.zoom -= 1);
  }

  addMarker(lat, long) {
    DG.marker([lat, long], {draggable: true}).addTo(this.markers);
  }

  hideMarkers() {
    this.markers.removeFrom(this.map);
  }

  showMarkers() {
    this.markers.addTo(this.map);
    this.map.fitBounds(this.markers.getBounds());
  }

  onType({target: {value}}) {
    this.selectedType = value;
  }

  saveMarkers() {
    console.log('this.selectedType:', this.selectedType);
    for (const prop of this.list) {
      if (prop['type'] === this.selectedType) {
        prop['markers'].push(this.markers);
      }
    }
  }

  setCurrentLoc = ({coords: {latitude, longitude}}) => {
    DG.then(() => {
      this.map = DG.map('map', {
        center: [latitude, longitude],
        zoomControl: false,
        fullscreenControl: false,
        zoom: this.zoom
      });

      this.addMarker(latitude, longitude);

      this.showMarkers();

      this.map.on('click', ({latlng: {lat, lng}}) => {
        this.addMarker(lat, lng);
      });

      this.markers.on('click', (e) => {
        this.map.setView([e.latlng.lat, e.latlng.lng]);
      });

    });
  }
}
