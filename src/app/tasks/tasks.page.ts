import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { icon, Map, tileLayer, marker, polyline, } from "leaflet";
import 'leaflet/dist/leaflet';
import * as L from 'leaflet'
import { CommentsPage } from '../comments/comments.page'
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Platform } from '@ionic/angular';
import { CreatetaskPage } from '../createtask/createtask.page'

@Injectable()
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})

export class TasksPage implements OnInit {
  time;
  displayPosts = {};
  public tasks: string;
  map: Map;
  marker: any;
  latLong = [];
  selectTabs = 'listView';

  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router, private geolocation: Geolocation, public commentsPage: CommentsPage, private nativeGeocoder: NativeGeocoder, public platform: Platform, public createtaskPage: CreatetaskPage) { }

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
    var mymap = L.map('mapid').setView([37.702, -122.11], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1Ijoiam9obm55cGhhbTEyMzczIiwiYSI6ImNrZHNpczhiZjBpYjQyeHIxaHIwemp4OGUifQ.Vewhq2l_JEbLg90GBgw_VA'
    }).addTo(mymap);
    var greenIcon = L.icon({
      iconUrl: '../assets/icon/marker-icon-green.png',
  
      iconSize:     [30, 30], // size of the icon
      iconAnchor:   [30, 30], // point of the icon which will correspond to marker's location
      popupAnchor:  [-30, -30] // point from which the popup should open relative to the iconAnchor
    });
    var brownIcon = L.icon({
      iconUrl: '../assets/icon/marker-icon-brown.png',
  
      iconSize:     [30, 30], // size of the icon
      iconAnchor:   [30, 30], // point of the icon which will correspond to marker's location
      popupAnchor:  [-30, -30] // point from which the popup should open relative to the iconAnchor
    });
        var orangeIcon = L.icon({
      iconUrl: '../assets/icon/marker-icon-orange.png',
  
      iconSize:     [30, 30], // size of the icon
      iconAnchor:   [30, 30], // point of the icon which will correspond to marker's location
      popupAnchor:  [-30, -30] // point from which the popup should open relative to the iconAnchor
    });
        var blueIcon = L.icon({
      iconUrl: '../assets/icon/marker-icon-blue.png',
  
      iconSize:     [30, 30], // size of the icon
      iconAnchor:   [30, 30], // point of the icon which will correspond to marker's location
      popupAnchor:  [-30, -30] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([37.705318450927734, -122.12457275390625], {icon: greenIcon}).addTo(mymap);
    L.marker([37.701895,-122.129308], {icon: brownIcon}).addTo(mymap);
    L.marker([37.7021, -122.114], {icon: orangeIcon}).addTo(mymap);
    L.marker([37.68151092529297, -122.13874053955078], {icon: blueIcon}).addTo(mymap);
    L.marker([37.704158782958984,-122.14347839355469], {icon: blueIcon}).addTo(mymap);
    L.marker([37.40696334838867,-121.98856353759766], {icon: blueIcon}).addTo(mymap);
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
  }

  changeTabs(tab) {
    console.log('hello');
    if(tab === 'mapView'){
      this.selectTabs = 'listView';
    }else {
      this.selectTabs = 'mapView';
    }
  
    console.log(this.selectTabs);
    return this.selectTabs;
  }
}
