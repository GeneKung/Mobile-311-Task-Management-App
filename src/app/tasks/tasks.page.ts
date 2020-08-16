import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { icon, Map, tileLayer, marker, polyline } from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import { CommentsPage } from '../comments/comments.page';
import { EmployeesPage } from '../employees/employees.page';
import { MaterialsPage } from '../materials/materials.page';
import { EquipmentPage } from '../equipment/equipment.page';
import { PhotoGalleryPage } from '../photo-gallery/photo-gallery.page';
import { Storage } from '@ionic/storage';
import * as L from 'leaflet';
import * as moment from 'moment';

@Injectable()
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})

export class TasksPage implements OnInit {
  time;
  date;
  now = moment().format('MM/DD/YYYY');
  category;
  numComments;
  workGroup;
  address;
  priority;
  assetID;
  commentArr = [];
  employeeArr = [];
  materialArr = [];
  equipArr = [];
  photoArr = [];
  cardID = 500;
  cardInfo = {};
  cards = [];
  public tasks: string;
  map: Map;
  marker: any;
  latLong = [];
  selectTabs = 'listView';
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router, private geolocation: Geolocation,
    public commentPage: CommentsPage, public employeesPage: EmployeesPage,
    public materialsPage: MaterialsPage, public equipmentPage: EquipmentPage,
    public photoGalleryPage: PhotoGalleryPage, public storage: Storage) { }

  ngOnInit() {
    this.tasks = this.activatedRoute.snapshot.paramMap.get('id');
    this.storage.get('cardID').then( (val) =>{
      this.cardID = val;
      console.log(this.cardID);
    for(let id = 500; id < val; id++){
      this.storage.get(`${id}`).then( (val) =>{
        this.cards.push(JSON.parse(val));
        console.log(this.cards);
        this.workGroup = JSON.stringify(this.cards['workGroup']);
        this.address = JSON.stringify(this.cards['address']);
        this.priority = JSON.stringify(this.cards['priority']);
        this.date = JSON.stringify(this.cards['time']);
        this.assetID = JSON.stringify(this.cards['assetID']);
        this.category = JSON.stringify(this.cards['category']);
        this.numComments = JSON.stringify(this.cards['numComments']);
      });
    }
  });
  }


  createCard(listInfo){
    this.commentPage.storage.get('postID').then( (val) =>{
      for(let i = 1; i < val; i++){
      this.commentPage.storage.get(`${i}`).then( (val) =>{
        this.commentArr = val;
        console.log(val);
      });
    }
          });
      this.cardInfo['comment'] = this.commentArr;
      this.employeesPage.storage.get('data').then( (val) =>{
      for(let i = 100; i < val; i++){
        this.employeesPage.storage.get(`${i}`).then( (val) =>{
          this.employeeArr.push(val);
        });
      }
    });
        this.cardInfo['employee'] = this.employeeArr;

      this.materialsPage.storage.get('materialID').then( (val) =>{
      for(let i = 300; i < val; i++){
        this.materialsPage.storage.get(`${i}`).then( (val) =>{
          this.materialArr.push(val);
        });
      }
    });
        this.cardInfo['material'] = this.materialArr;

      this.equipmentPage.storage.get('dataequipID').then( (val) =>{
      for(let i = 200; i < val; i++){
        this.equipmentPage.storage.get(`${i}`).then( (val) =>{
          this.equipArr.push(val);
        });
      }
    });
        this.cardInfo['equipment'] = this.equipArr;


      this.photoGalleryPage.storage.get('commentID').then( (val) =>{
      for(let i = 400; i < val; i++){
        this.photoGalleryPage.storage.get(`${i}`).then( (val) =>{
          this.photoArr.push(val);
        });
      }
    });
        this.cardInfo['photoGallery'] = this.photoArr;
        this.cardInfo['listInfo'] = listInfo;
        this.cardInfo['time'] = this.now;
        console.log(this.cardInfo);
        this.saveCard(this.cardInfo);
    }

    saveCard(cardInfo){
      this.storage.get('cardID').then( (val) =>{
        console.log(val);
      if(val == 1 || val == null){
        this.cardID = 500;
      }else{
        this.cardID = val;
      }
      this.storage.set(`${this.cardID}`, JSON.stringify(cardInfo));
      this.cardID++;
      console.log(this.cardID);
      this.storage.set('cardID', this.cardID);
      this.cards.push(this.cardInfo);
      console.log(this.cards);
      this.cardInfo = {};
      window.location.reload(false); 
      });
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
