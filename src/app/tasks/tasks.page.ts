import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { icon, Map, tileLayer, marker, polyline, } from "leaflet";
import 'leaflet/dist/leaflet';
import * as L from 'leaflet'
import { CommentsPage } from '../comments/comments.page'
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
  selectTabs = 'listView';
  AwesomeMarkers
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router, private geolocation: Geolocation, public commentsPage: CommentsPage) { }

  ngOnInit() {
    this.tasks = this.activatedRoute.snapshot.paramMap.get('id');
    this.commentsPage.storage.get('1').then( (val) =>{
      console.log(val);
      val = JSON.parse(val);
    
    });  }

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
      iconUrl: '../assets/icon/leaf-green.png',
      shadowUrl: '../assets/icon/leaf-shadow.png',
  
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
    L.marker([37.702, -122.11], {icon: greenIcon}).addTo(mymap);
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

