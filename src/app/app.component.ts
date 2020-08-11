import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NavController ,Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TasksPage } from "./tasks/tasks.page";
import { CreatetaskPage} from "./createtask/createtask.page";
import { SettingsPage } from "./settings/settings.page";
 
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
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigateByUrl('logout');
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
    this.CreatetaskPage.address = deliveryAddress;
    document.getElementById("address").innerHTML = this.CreatetaskPage.address;
  }

  setAssetID(AssetIDs) {
    this.CreatetaskPage.AssetID = AssetIDs;
    document.getElementById("AssetID").innerHTML = this.CreatetaskPage.AssetID;
  }

  setDescription(Descriptions) {
    this.CreatetaskPage.Description = Descriptions;
    document.getElementById("Description").innerHTML = this.CreatetaskPage.Description;
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
          console.log(this.CreatetaskPage.address);
          return this.CreatetaskPage.address;
        }
        if (commandData.command === "AssetID") {
          this.setAssetID(commandData.AssetID);
        }
        if (commandData.command === "Description") {
          this.setDescription(commandData.Description);
        }
    });
}

}