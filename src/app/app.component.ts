import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NavController ,Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TasksPage } from "./tasks/tasks.page";
import {  MenuController } from '@ionic/angular';
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

  ngAfterViewInit() {
    this.alanBtnComponent.nativeElement.addEventListener('command', (data) => {
        const commandData = (<CustomEvent>data).detail;

        if (commandData.command === 'navigation') {
            //call client code that will react to the received command
        }
        if (commandData.command === 'Login'){
          this.router.navigate(['tasks']);
          this.menuCtrl.enable(true);
        }
        if (commandData.command === 'addTask'){
          this.router.navigate(['createtask']);
        }
        if (commandData.command === 'Logout'){
          this.router.navigate(['logout']);
        }
        if (commandData.command === 'settingsPage'){
          this.router.navigate(['settings']);
        }
        if (commandData.command === 'helpPage'){
          this.router.navigate(['support']);
        }
        if (commandData.command === 'cachePage'){
          this.router.navigate(['cache']);
        }
        if (commandData.command === 'taskPage'){
          this.router.navigate(['tasks']);
          this.TasksPage.changeTabs('mapView');
          this.TasksPage.selectTabs = 'mapView';
          console.log(this.TasksPage.selectTabs);
        }
    });
}

}