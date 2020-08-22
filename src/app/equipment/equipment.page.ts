import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
@Injectable()
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
})
export class EquipmentPage implements OnInit {
  now = moment().format('MM/DD/YYYY');
  public equipment: string;
  getByGroup
  getEquipment
  hours
  dataequip = {};
  dataequipID = 200;
  displayPosts = [];
  allPosts = [];

  constructor(private activateRoute: ActivatedRoute, private router: Router, public storage: Storage) { }

  ngOnInit() {
    this.equipment = this.activateRoute.snapshot.paramMap.get('id');
    this.storage.get('dataequipID').then( (val) =>{
      console.log(val);
    for(let id = 200; id < val; id++){
      this.storage.get(`${id}`).then( (val) =>{
        console.log(val);
        this.displayPosts.push(JSON.parse(val));
        console.log(this.displayPosts);
      });
    }
  });  
  }

  getGroupValue(getByGroup){
  }
  getByEquipment(getby){
  }
  logHours(){
    console.log(this.hours);
  }
  inputEquipmentData(){
    this.dataequip['group'] = this.getByGroup
    this.dataequip['equipment'] = this.getEquipment
    this.dataequip['hours'] = this.hours
    console.log(this.dataequip);
    this.storeData(this.dataequip)
    this.getByGroup = null
    this.getEquipment = null
    this.hours = null
    this.dataequip = {};
  }

  storeData(dataequip){
    this.storage.get('dataequipID').then( (val) =>{
      console.log(val);
      if(val == 1 || val == null){
        this.dataequipID = 200;
      }else{
        this.dataequipID = val;
      }    this.storage.set(`${this.dataequipID}`, JSON.stringify(dataequip));
    this.dataequipID++;
    this.storage.set('dataequipID', this.dataequipID);
    this.displayPosts.push(dataequip);
  });
}

  
  goBack() {
    this.router.navigate(['createtask'])
  }

}
