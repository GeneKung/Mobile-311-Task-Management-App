import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { icon, Map, tileLayer, marker, polyline } from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})

export class TasksPage implements OnInit {
  public tasks: string;
  map: Map;
  marker: any;
  latLong = [];
  lat: number;
  lng: number;
  lName: string;
  selectTabs = 'listView';
  forwardInfo: any;
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router, private geolocation: Geolocation, public geocoder: NativeGeocoder) { }

  ngOnInit() {
    this.tasks = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goSearch(){
    this.router.navigate(['search'])
  }
  goListSetup(){
    this.router.navigate(['listsetup'])
  }
  goList(){
    this.router.navigate(['tasks'])
  }
  goCreateTask(){
    this.router.navigate(['createtask'])
  }

  showMap() {
    this.map = new Map('mapId').setView([37.725685, -122.156830], 10);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
  }

  getPositions(){
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      return this.latLong = [
        res.coords.latitude,
        res.coords.longitude
      ]
    }).then((latlng) => {
      this.showMarker(latlng);
    });
  }


  showMarker(latLong) {
    this.marker = marker(latLong);
    this.marker.addTo(this.map)
    .bindPopup('San Leandro');
  }
}

