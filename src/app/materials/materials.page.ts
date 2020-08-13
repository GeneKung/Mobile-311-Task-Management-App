import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {
  now = moment().format('MM/DD/YYYY');
  public employees: string;
  getSelectedSubject
  getMaterial
  hours
  overtime
  quantity
  typeOfQuantity
  data = {};
  materialID = 1;
  displayPosts = [];
  allPosts = [];

  constructor(private activateRoute: ActivatedRoute, private router: Router, public storage: Storage, public alertController: AlertController) { }

  ngOnInit() {
    this.employees = this.activateRoute.snapshot.paramMap.get('id');
    this.storage.get('materialID').then( (val) =>{
      console.log(val);
      this.materialID = val;  
    for(let id = 1; id < this.materialID; id++){
      this.storage.get(`${id}`).then( (val) =>{
        console.log(val);
        this.displayPosts.push(JSON.parse(val));
        console.log(this.displayPosts);
      });
    }
  });  
  }
  
  getSelectedSubjectValue(getSelectedSubject){
    console.log(getSelectedSubject)
    this.group();
  }
  getByMaterial(value){
    console.log(value);
    this.getMaterial = value;
    this.data['material'] = this.getMaterial
  }
  logHours(){
    console.log(this.hours);
  }
  logQuantity(){
    console.log(this.quantity)
  }
  inputData(){
    this.group();
    this.data['type'] = this.typeOfQuantity
    this.data['material'] = this.getMaterial
    this.data['quantity'] = this.quantity;
    this.storeData(this.data)
    this.getSelectedSubject = null
    this.getMaterial = null
    this.quantity = null
    this.data = {};
  }
  storeData(data){
    this.storage.set(`${this.materialID}`, JSON.stringify(data));
    this.materialID += 1;
    this.storage.set('materialID', this.materialID);
    this.displayPosts.push(data)
  }
  
  

  goBack() {
    this.router.navigate(['createtask'])
  }

  Materials() {
    if(this.getSelectedSubject === 'CC'){
      this.CommunityCompliances();
    } else if(this.getSelectedSubject === 'EaT'){
      this.EngTransportation();
    } else if(this.getSelectedSubject === 'PM') {
      this.PaveMarkings();
    } else if(this.getSelectedSubject === 'light'){
      this.Light();
    } else if(this.getSelectedSubject === 'paving'){
      this.Paving();
    } else if(this.getSelectedSubject === 'signs'){
      this.Signs();
    } else if(this.getSelectedSubject === 'services'){
      this.Services();
    }
  }

  group() {
    if(this.getSelectedSubject === 'CC'){
      this.typeOfQuantity = 'Unit:';
      console.log(this.typeOfQuantity);
    } else if(this.getSelectedSubject === 'EaT'){
      this.typeOfQuantity = 'LF:';
      console.log(this.typeOfQuantity);
    } else if(this.getSelectedSubject === 'PM') {
      this.typeOfQuantity = 'EA:';
      console.log(this.typeOfQuantity);
    } else if(this.getSelectedSubject === 'light'){
      this.typeOfQuantity = 'EA:';
      console.log(this.typeOfQuantity);
    } else if(this.getSelectedSubject === 'paving'){
      this.typeOfQuantity = 'Ton:';
      console.log(this.typeOfQuantity);
    } else if(this.getSelectedSubject === 'signs'){
      this.typeOfQuantity = 'EA:';
      console.log(this.typeOfQuantity);
    } else if(this.getSelectedSubject === 'services'){
      this.typeOfQuantity = 'EA:';
      console.log(this.typeOfQuantity);
    }
  }
  async CommunityCompliances() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  async EngTransportation() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Materials',
      inputs: [
        {
          name: '1 - C & G',
          type: 'radio',
          label: '1 - C & G',
          value: '1 - C & G',
        },
        {
          name: '2 - SWK',
          label: '2 - SWK',
          value: '2 - SWK'
        },
        {
          name: '3 - 6" DWY',
          label: '3 - 6" DWY',
          value: '3 - 6" DWY'
        },
        {
          name: '4 - 8" DWY',
          label: '4 - 8" DWY',
          value: '4 - 8" DWY'
        },
        {
          name: '5 - Wheelchair Ramp',
          label: '5 - Wheelchair Ramp',
          value: '5 - Wheelchair Ramp'
        },
        {
          name: '6 - Depress DWY',
          label: '6 - Depress DWY',
          value: '6 - Depress DWY'
        },
        {
          name: '7 - B.W. SWK',
          label: '7 - B.W. SWK',
          value: '7 - B.W. SWK'
        },
        {
          name: '8 - Valley Gutter',
          label: '8 - Valley Gutter',
          value: '8 - Valley Gutter'
        },
        {
          name: '9 - Stamped PCC',
          label: '9 - Stamped PCC',
          value: '9 - Stamped PCC'
        },
        {
          name: '10 - Vertical Curb',
          label: '10 - Vertical Curb',
          value: '10 - Vertical Curb'
        },

        {
          name: '11 - Grind SWK Offset',
          label: '11 - Grind SWK Offset',
          value: '11 - Grind SWK Offset'
        },

        {
          name: '12 - CIP Curb Drain',
          label: '12 - CIP Curb Drain',
          value: '12 - CIP Curb Drain'
        },

        {
          name: '13 - R & R PVRS',
          label: '13 - R & R PVRS',
          value: '13 - R & R PVRS'
        },

        {
          name: '14 - Retrofit Tree Frame',
          label: '14 - Retrofit Tree Frame',
          value: '14 - Retrofit Tree Frame'
        },

        {
          name: '15 - Cast in Place Frame',
          label: '15 - Cast in Place Frame',
          value: '15 - Cast in Place Frame'
        },
        {
          name: '16 - Install Gate',
          label: '16 - Install Gate',
          value: '16 - Install Gate'
        },
        {
          name: '17 - PCC Removal Only',
          label: '17 - PCC Removal Only',
          value: '17 - PCC Removal Only'
        },
        {
          name: '18 - Prov TCP with Arrow',
          label: '18 - Prov TCP with Arrow',
          value: '18 - Prov TCP with Arrow'
        },
        {
          name: '19 - Prov TCP without Arrow',
          label: '19 - Prov TCP without Arrow',
          value: '19 - Prov TCP without Arrow'
        },
        {
          name: '20 - R PVRS/PLACE DG',
          label: '20 - R PVRS/PLACE DG',
          value: '20 - R PVRS/PLACE DG'
        },
        {
          name: '21 - DG @ Tree Well',
          label: '21 - DG @ Tree Well',
          value: '21 - DG @ Tree Well'
        },
        {
          name: '22 - R/R AC for Comp Test',
          label: '22 - R/R AC for Comp Test',
          value: '22 - R/R AC for Comp Test'
        },
        {
          name: '23 - Compact Roadway Base',
          label: '23 - Compact Roadway Base',
          value: '23 - Compact Roadway Base'
        },
        {
          name: '24 - Excavation 6" Resurface',
          label: '24 - Excavation 6" Resurface',
          value: '24 - Excavation 6" Resurface'
        },
        {
          name: '25 - Excavation 9" Resurface',
          label: '25 - Excavation 9" Resurface',
          value: '25 - Excavation 9" Resurface'
        },
        {
          name: '26 - Excavation 12" Resurface',
          label: '26 - Excavation 12" Resurface',
          value: '26 - Excavation 12" Resurface'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (materials) => {
            console.log('Confirm Ok');
            console.log(materials);
            this.getMaterial = materials;
          }
        }
      ]
    });
    await alert.present();
  }

  async PaveMarkings() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Materials',
      inputs: [
        {
          name: 'Anchor Kit (bolts)',
          type: 'radio',
          label: 'Anchor Kit (bolts)',
          value: 'Anchor Kit (bolts)',
        },

        {
          name: 'Bases',
          label: 'Bases',
          value: 'Bases'
        },
        {
          name: 'Bot Dot',
          label: 'Bot Dot',
          value: 'Bot Dot'
        },
        {
          name: 'Crosswalk Skins',
          label: 'Crosswalk Skins',
          value: 'Crosswalk Skins'
        },
        {
          name: 'Delineators(white/yellow poles)',
          label: 'Delineators(white/yellow poles)',
          value: 'Delineators(white/yellow poles)'
        },
        {
          name: 'K-markers',
          label: 'K-markers',
          value: 'K-markers'
        },
        {
          name: 'Paint for Pavement Marking',
          label: 'Paint for Pavement Marking',
          value: 'Paint for Pavement Marking'
        },
        {
          name: 'Reflective Pavement Marker',
          label: 'Reflective Pavement Marker',
          value: 'Reflective Pavement Marker'
        },
        {
          name: 'Theromoplastic - 4"',
          label: 'Theromoplastic - 4"',
          value: 'Theromoplastic - 4"'
        },
        {
          name: 'Theromoplastic - 6"',
          label: 'Theromoplastic - 6"',
          value: 'Theromoplastic - 6"'
        },
        {
          name: 'Theromoplastic - 8"',
          label: 'Theromoplastic - 8"',
          value: 'Theromoplastic - 8"'
        },
        {
          name: 'Theromoplastic - 12"',
          label: 'Theromoplastic - 12"',
          value: 'Theromoplastic - 12"'
        },
        {
          name: 'Theromoplastic Arrow - 10"',
          label: 'Theromoplastic Arrow - 10"',
          value: 'Theromoplastic Arrow - 10"'
        },
        {
          name: 'Theromoplastic Arrow - 25"',
          label: 'Theromoplastic Arrow - 25"',
          value: 'Theromoplastic Arrow - 25"'
        },
        {
          name: 'Theromoplastic Turn Arrow - 25"',
          label: 'Theromoplastic Turn Arrow - 25"',
          value: 'Theromoplastic Turn Arrow - 25"'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (materials) => {
            console.log('Confirm Ok');
            console.log(materials);
            this.getMaterial = materials;
          }
        }
      ]
    });
    await alert.present();
  }

  async Light() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Material',
      inputs: [
        {
          name: '75w Lamp',
          type: 'radio',
          label: '75w Lamp',
          value: '75w Lamp',
        },
        {
          name: '100w Lamp',
          label: '100w Lamp',
          value: '100w Lamp',
        },
        {
          name: '150w Lamp',
          label: '150w Lamp',
          value: '150w Lamp',
        },
        {
          name: '175w Lamp',
          label: '175w Lamp',
          value: '175w Lamp',
        },
        {
          name: '200w HPS Fixture',
          label: '200w HPS Fixture',
          value: '200w HPS Fixture',
        },
        {
          name: '200w Light',
          label: '200w Light',
          value: '200w Light',
        },
        {
          name: '250w Lamp',
          label: '250w Lamp',
          value: '250w Lamp',
        },
        {
          name: '400w Lamp',
          label: '400w Lamp',
          value: '400w Lamp',
        },
        {
          name: '4 ft Ped Pole',
          label: '4 ft Ped Pole',
          value: '4 ft Ped Pole',
        },
        {
          name: '12 inch Arrow',
          label: '12 inch Arrow',
          value: '12 inch Arrow'
        },
        {
          name: '8 inch Ball',
          label: '8 inch Ball',
          value: '8 inch Ball'
        },
        {
          name: '12 inch Ball',
          label: '12 inch Ball',
          value: '12 inch Ball'
        },
        {
          name: 'Batteries',
          label: 'Batteries',
          value: 'Batteries'
        },
        {
          name: 'Crosswalk Lights',
          label: 'Crosswalk Lights',
          value: 'Crosswalk Lights'
        },
        {
          name: 'Fuse',
          label: 'Fuse',
          value: 'Fuse'
        },
        {
          name: 'Light Fixture',
          label: 'Light Fixture',
          value: 'Light Fixture'
        },
        {
          name: 'Misc. wire and hardware',
          label: 'Misc. wire and hardware',
          value: 'Misc. wire and hardware'
        },
        {
          name: 'PED Head',
          label: 'PED Head',
          value: 'PED Head'
        },
        {
          name: 'Parking Meter Case',
          label: 'Parking Meter Case',
          value: 'Parking Meter Case'
        },
        {
          name: 'Parking Meter Mechanism',
          label: 'Parking Meter Mechanism',
          value: 'Parking Meter Mech'
        },
        {
          name: 'Parking Meter Pole',
          label: 'Parking Meter Pole',
          value: 'Parking Meter Pole'
        },
        {
          name: 'Ped Button',
          label: 'Ped Button',
          value: 'Ped Button'
        },
        {
          name: 'Ped Button Frame',
          label: 'Ped Button Frame',
          value: 'Ped Button Frame'
        },
        {
          name: 'Ped Module',
          label: 'Ped Module',
          value: 'Ped Module'
        },
        {
          name: 'Photo Cell',
          label: 'Photo Cell',
          value: 'Photo Cell'
        },
        {
          name: 'Pole with Mast Arm(30ft)',
          label: 'Pole with Mast Arm(30ft)',
          value: 'Pole with Mast Arm(30ft)'
        },
        {
          name: 'Starter',
          label: 'Starter',
          value: 'Starter'
        },
        {
          name: 'T/S & PED Framework',
          label: 'T/S & PED Framework',
          value: 'T/S & PED Framework'
        },
        {
          name: 'T/S Head',
          label: 'T/S Head',
          value: 'T/S Head'
        },
        {
          name: 'Visor',
          label: 'Visor',
          value: 'Visor'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (materials) => {
            console.log('Confirm Ok');
            console.log(materials);
            this.getMaterial = materials;
          }
        }
      ]
    });
    await alert.present();
  }

  async Paving() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Materials',
      inputs: [
        {
          name: 'Asphalt',
          type: 'radio',
          label: 'Asphalt',
          value: 'Asphalt',
        },
        {
          name: 'Crack Seal',
          label: 'Crack Seal',
          value: 'Crack Seal'
        },
        {
          name: 'Detack',
          label: 'Detack',
          value: 'Detack'
        },
        {
          name: 'Perma Patch',
          label: 'Perma Patch',
          value: 'Perma Patch'
        },
        {
          name: 'Quick Set Concrete',
          label: 'Quick Set Concrete',
          value: 'Quick Set Concrete'
        },
        {
          name: 'Rip Rap Disposal',
          label: 'Rip Rap Disposal',
          value: 'Rip Rap Disposal'
        },
        {
          name: 'Crack Seal',
          label: 'Crack Seal',
          value: 'Crack Seal'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (materials) => {
            console.log('Confirm Ok');
            console.log(materials);
            this.getMaterial = materials;
          }
        }
      ]
    });
    await alert.present();
  }

  async Signs() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Materials',
      inputs: [
        {
          name: '10 ft Unistruct',
          type: 'radio',
          label: '10 ft Unistruct',
          value: '10 ft Unistruct',
        },
        {
          name: '12 ft Unistruct',
          label: '12 ft Unistruct',
          value: '12 ft Unistruct',
        },
        {
          name: '30 inch Unistruct Anchor',
          label: '30 inch Unistruct Anchor',
          value: '30 inch Unistruct Anchor',
        },
        {
          name: 'No Parking Sign',
          label: 'No Parking Sign',
          value: 'No Parking Sign',
        },
        {
          name: 'Parking Meter Case',
          label: 'Parking Meter Case',
          value: 'Parking Meter Case'
        },
        {
          name: 'Parking Meter Mechanism',
          label: 'Parking Meter Mechanism',
          value: 'Parking Meter Mech'
        },
        {
          name: 'Parking Meter Pole',
          label: 'Parking Meter Pole',
          value: 'Parking Meter Pole'
        },
        {
          name: 'Ped Rail',
          label: 'Ped Rail',
          value: 'Ped Rail',
        },
        {
          name: 'Sign Bracket',
          label: 'Sign Bracket',
          value: 'Sign Bracket',
        },
        {
          name: 'Sign Mounting Hardware',
          label: 'Sign Mounting Hardware',
          value: 'Sign Mount Hardware',
        },
        {
          name: 'Street Name Sign',
          label: 'Street Name Sign',
          value: 'Street Name Sign',
        },
        {
          name: 'Surface Mount',
          label: 'Surface Mount',
          value: 'Surface Mount',
        },
        {
          name: 'Traffic Control Sign',
          label: 'Traffic Control Sign',
          value: 'Traffif Control Sign',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (materials) => {
            console.log('Confirm Ok');
            console.log(materials);
            this.getMaterial = materials;
          }
        }
      ]
    });
    await alert.present();
  }

  async Services() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Materials',
      inputs: [
        {
          name: 'Services',
          type: 'radio',
          label: 'Concrete Removal',
          value: 'Concrete Removal',
        },
        {
          name: 'Services',
          label: 'Graffiti Paint',
          value: 'Graffiti Paint'
        },
        {
          name: 'Services',
          label: 'Graffiti Remover',
          value: 'Graffiti Remover'
        },
        {
          name: 'Services',
          label: 'Mega Off',
          value: 'Mega Off'
        },
        {
          name: 'Services',
          label: 'Tree Planting',
          value: 'Tree Planting'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (materials) => {
            console.log('Confirm Ok');
            console.log(materials);
            this.getMaterial = materials;
          }
        }
      ]
    });
    await alert.present();
  }
}
  
  

