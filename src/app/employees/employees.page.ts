import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
@Injectable()
@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  now = moment().format('MM/DD/YYYY');
  public employees: string;
  getSelectedSubject
  getEmployee
  hours
  overtime
  data = {};
  displayPosts = [];
  allPosts = [];
  dataID = 100; 

  constructor(private activateRoute: ActivatedRoute, private router: Router, public storage: Storage) { }

  ngOnInit() {
    this.employees = this.activateRoute.snapshot.paramMap.get('id');
    this.storage.get('data').then( (val) =>{
    console.log(val);
    for(let id = 100; id < val; id++){
      this.storage.get(`${id}`).then( (val) =>{
        console.log(val);
        this.displayPosts.push(JSON.parse(val));
        console.log(this.displayPosts);
      });
    }
  });  
  }
  
  getSelectedSubjectValue(getSelectedSubject){
  }
  getByEmployee(getEmployee){
  }
  logHours(){
    console.log(this.hours);
  }
  logOvertime(){
    console.log(this.overtime)
  }
  inputData(){
    this.data['crew'] = this.getSelectedSubject
    this.data['employee'] = this.getEmployee
    this.data['hours'] = this.hours
    this.data['overtime'] = this.overtime
    this.storeData(this.data)
    this.hours = null
    this.overtime = null
    this.getSelectedSubject = null
    this.getEmployee = null
    this.data = {};
  }
  storeData(data){
    this.storage.get('data').then( (val) =>{
    this.dataID = val;
    console.log(this.dataID);
    this.storage.set(`${this.dataID}`, JSON.stringify(data));
    this.dataID++;
    this.storage.set('data', `${this.dataID}`);
    this.displayPosts.push(data);
    });
  }
  

  goBack() {
    this.router.navigate(['createtask'])
  }

  
  

}
