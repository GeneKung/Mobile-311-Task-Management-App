import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NavController ,Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TasksPage } from "./tasks/tasks.page";
import { CreatetaskPage} from "./createtask/createtask.page";
import { SettingsPage } from "./settings/settings.page";
import { MaterialsPage } from "./materials/materials.page"
import { AlertController } from '@ionic/angular';
import { CommentsPage } from './comments/comments.page'
import * as moment from 'moment';
import { ViewTaskPage } from './view-task/view-task.page';
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('alanBtnEl', {static:false}) alanBtnComponent: ElementRef<HTMLAlanButtonElement>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private router: Router,
    public TasksPage: TasksPage,
    public menuCtrl: MenuController,
    public CreatetaskPage: CreatetaskPage,
    public SettingsPage: SettingsPage,
    public materialsPage: MaterialsPage,
    public alertCtrl: AlertController,
    public viewTaskPage: ViewTaskPage,
    public CommentsPage: CommentsPage
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  goToCache() {
    this.router.navigate(['cache'])
  }
  goToSettings() {
    this.router.navigate(['settings'])
  }
  goToSupport() {
    this.router.navigate(['support'])
  }
  gotoLogout() {
    this.router.navigate(['logout'])
  }
  gotoTasks() {
    this.router.navigate(['tasks'])
  }
    ngOnInit() {
  }

  setAddress(deliveryAddress) {
    this.CreatetaskPage.getAddress = deliveryAddress;
    document.getElementById("address").innerHTML = this.CreatetaskPage.getAddress;
  }

  setAssetID(AssetIDs) {
    this.CreatetaskPage.assetID = AssetIDs;
    document.getElementById("AssetID").innerHTML = this.CreatetaskPage.assetID;
  }

  setDescription(Descriptions) {
    this.CreatetaskPage.Description = Descriptions;
    document.getElementById("Description").innerHTML = this.CreatetaskPage.Description;
  }
  setMaterial(Material) {
    this.materialsPage.getMaterial = Material;
    document.getElementById("material").innerHTML = this.materialsPage.getMaterial;
  }
  setCategory(category) {
    this.CreatetaskPage.getCategory = category;
  }
  addComment(comment) {
    this.CommentsPage.comment = comment;
    document.getElementById("comment").innerHTML = this.CommentsPage.comment
  }
  ngAfterViewInit() {
    this.alanBtnComponent.nativeElement.addEventListener('command', (data) => {
        const commandData = (<CustomEvent>data).detail;

        if (commandData.command === 'searchTask'){
          if(this.router.url === '/logout'){
            this.alanBtnComponent.nativeElement.setVisualState({screen: "login"});
          } else {
            this.alanBtnComponent.nativeElement.setVisualState({screen: "search"});
            this.router.navigate(['search']);
            this.menuCtrl.enable(true);
            }
        }
        if (commandData.command === 'Login'){
          if(this.router.url === '/logout'){
            this.alanBtnComponent.nativeElement.setVisualState({screen: "login"});
            this.router.navigate(['createtask']);
            this.menuCtrl.enable(true);
          } else {
            this.alanBtnComponent.nativeElement.setVisualState({screen: "page"});
          }
          this.router.navigate(['tasks']);
          this.menuCtrl.enable(true);
        }
        if (commandData.command === 'addTask'){
          if(this.router.url === '/logout'){
            this.alanBtnComponent.nativeElement.setVisualState({screen: "login"});
          } else {
            this.alanBtnComponent.nativeElement.setVisualState({screen: "task"});
            this.router.navigate(['createtask']);
            this.menuCtrl.enable(true);
          }
        }
        if (commandData.command === 'Logout'){
          if(this.router.url === '/logout'){
            this.alanBtnComponent.nativeElement.setVisualState({screen: "logout"});
          } else {
            this.alanBtnComponent.nativeElement.setVisualState({screen: "page"});
            this.router.navigate(['logout']);
            }
        }
        if (commandData.command === 'settingsPage'){
          if(this.router.url === '/logout'){
          this.alanBtnComponent.nativeElement.setVisualState({screen: "login"});
        } else {
          this.alanBtnComponent.nativeElement.setVisualState({screen: "settings"});
          this.router.navigate(['settings']);
          this.menuCtrl.enable(true);
          }
        }
        if (commandData.command === 'helpPage'){
          if(this.router.url === '/logout'){
            this.alanBtnComponent.nativeElement.setVisualState({screen: "login"});
          } else {
            this.alanBtnComponent.nativeElement.setVisualState({screen: "support"});
            this.router.navigate(['support']);
            this.menuCtrl.enable(true);
            }
        }
        if (commandData.command === 'cachePage'){
          if(this.router.url === '/logout'){
            this.alanBtnComponent.nativeElement.setVisualState({screen: "login"});
          } else {
            this.alanBtnComponent.nativeElement.setVisualState({screen: "cache"});
            this.router.navigate(['cache']);
            this.menuCtrl.enable(true);
            }
        }
        if (commandData.command === 'listSetup'){
          if(this.router.url === '/logout'){
            this.alanBtnComponent.nativeElement.setVisualState({screen: "login"});
          } else {
            this.alanBtnComponent.nativeElement.setVisualState({screen: "listSetup"});
            this.router.navigate(['listsetup']);
            this.menuCtrl.enable(true);
            }
        }
        if (commandData.command === 'taskPage'){
          if(this.router.url === '/logout'){
            this.alanBtnComponent.nativeElement.setVisualState({screen: "login"});
          } else {
            this.alanBtnComponent.nativeElement.setVisualState({screen: "mapView"});
            this.router.navigate(['tasks']);
            this.TasksPage.changeTabs('mapView');
            this.TasksPage.selectTabs = 'mapView';
            console.log(this.TasksPage.selectTabs);
          }
        }
        if(commandData.command === 'toggle'){
          this.SettingsPage.toggle();
        }
        if (commandData.command === "address") {
          this.setAddress(commandData.address);
          console.log(this.CreatetaskPage.getAddress);
          return this.CreatetaskPage.listInfo;
        }
        if (commandData.command === "AssetID") {
          this.setAssetID(commandData.AssetID);
          console.log(this.CreatetaskPage.assetID)
          return this.CreatetaskPage.listInfo;
        }
        if (commandData.command === "Description") {
          this.setDescription(commandData.Description);
        }
        
        if (commandData.command === 'photo'){
          this.router.navigate(['photo-gallery']);
        }

        if (commandData.command === 'mGroup'){
          this.materialsPage.alanMaterials(commandData.mGroup)
          console.log(commandData.mGroup)
          this.materialsPage.getSelectedSubject = commandData.mGroup
          console.log(this.materialsPage.getSelectedSubject)
          this.materialsPage.group();
        }

        if (commandData.command === 'material') {
          this.alertCtrl.dismiss();
          this.setMaterial(commandData.material);
        }

        if(commandData.command === 'readNextCategory'){
          this.TasksPage.storage.get(`${501}`).then( (val) =>{
            console.log(val);
            val = JSON.parse(val);
            console.log(val.listInfo);
            this.alanBtnComponent.nativeElement.setVisualState({category: val.listInfo['category']});
          });
        }

        if(commandData.command === 'readNextDescription'){
          this.TasksPage.storage.get(`${501}`).then( (val) =>{
            console.log(val);
            val = JSON.parse(val);
            console.log(val['totalComments']);
            this.alanBtnComponent.nativeElement.setVisualState({totalComments: val['totalComments'], description: val.listInfo['description']});
          });
        }
        
        if(commandData.command === 'readComments'){
          this.TasksPage.storage.get(`${501}`).then( (val) =>{
            console.log(val);
            val = JSON.parse(val);
            console.log(JSON.stringify(val.comment['body']));
            console.log(JSON.stringify(val.comment[0]['body']));
            console.log(JSON.stringify(val.comment));
            console.log(JSON.stringify(val.comment['name']));
            this.alanBtnComponent.nativeElement.setVisualState({totalComments: val['totalComments'], description: val.listInfo['description']});
          });
        }
    });
}

}