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
  dataequipID = 1;
  displayPosts = [];
  allPosts = [];

  constructor(private activateRoute: ActivatedRoute, private router: Router, public storage: Storage) { }

  ngOnInit() {

    this.equipment = this.activateRoute.snapshot.paramMap.get('id');
    this.storage.get('dataequipID').then( (val) =>{
      console.log(val);
      this.dataequipID = val;  
    for(let id = 1; id < this.dataequipID; id++){
      this.storage.get(`${id}`).then( (val) =>{
        console.log(val);
        this.displayPosts.push(JSON.parse(val));
        console.log(this.displayPosts);
      });
    }
  });  
  }

  getGroupValue(getByGroup){
    console.log(getByGroup)
  }
  getByEquipment(getby){
    console.log(this.getEquipment)
  }
  logHours(){
    console.log(this.hours);
  }
  inputEquipmentData(){
    this.dataequip['group'] = this.getByGroup
    this.dataequip['equipment'] = this.getEquipment
    this.dataequip['hours'] = this.hours
    this.storeData(this.dataequip)
    this.getByGroup = null
    this.getEquipment = null
    this.hours = null
    this.dataequip = {};
  }

  storeData(dataequip){
    this.storage.set(`${this.dataequipID}`, JSON.stringify(dataequip));
    this.dataequipID += 1;
    this.storage.set('dataequipID', this.dataequipID);
    this.displayPosts.push(dataequip)
  }

  
  goBack() {
    this.router.navigate(['createtask'])
  }

}
