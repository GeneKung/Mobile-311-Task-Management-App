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

@Injectable()
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})

export class TasksPage implements OnInit {
  time;
  commentArr = [];
  employeeArr = [];
  materialArr = [];
  equipArr = [];
  photoArr = [];
  cardID = 500;
  cardInfo = {};
  card = {};
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
    this.commentPage.storage.get('1').then( (val) =>{
      console.log(val);
      val = JSON.parse(val);
      this.time = val.time;
    });  
      this.storage.get('500').then( (val) =>{
        console.log(val);
        this.card = JSON.parse(val);
        console.log(this.card);
        console.log(this.card.comment);
      });
  }
  createCard(){
    this.commentPage.storage.get('postID').then( (val) =>{
      for(let i = 1; i < val; i++){
      this.commentPage.storage.get(`${i}`).then( (val) =>{
        this.commentArr = JSON.parse(val);
      });
    }
          });
      this.cardInfo['comment'] = JSON.stringify(this.commentArr);
      
      this.employeesPage.storage.get('data').then( (val) =>{
      for(let i = 100; i < val; i++){
        this.employeesPage.storage.get(`${i}`).then( (val) =>{
          this.employeeArr = JSON.parse(val);
        });
      }
    });
        this.cardInfo['employee'] = this.employeeArr;

      this.materialsPage.storage.get('materialID').then( (val) =>{
      for(let i = 300; i < val; i++){
        this.materialsPage.storage.get(`${i}`).then( (val) =>{
          this.materialArr = JSON.parse(val);
        });
      }
    });
        this.cardInfo['material'] = this.materialArr;

      this.equipmentPage.storage.get('dataequipID').then( (val) =>{
      for(let i = 200; i < val; i++){
        this.equipmentPage.storage.get(`${i}`).then( (val) =>{
          this.equipArr = JSON.parse(val);
        });
      }
    });
        this.cardInfo['equipment'] = this.equipArr;


      this.photoGalleryPage.storage.get('commentID').then( (val) =>{
      for(let i = 400; i < val; i++){
        this.photoGalleryPage.storage.get(`${i}`).then( (val) =>{
          this.photoArr = JSON.parse(val);
        });
      }
    });
        this.cardInfo['photoGallery'] = this.photoArr;
        console.log(this.cardInfo);
        this.saveCard(this.cardInfo);
        this.card = this.cardInfo;
    }

    saveCard(cardInfo){
      this.storage.set(`${this.cardID}`, JSON.stringify(cardInfo));
      this.cardInfo = {};
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

