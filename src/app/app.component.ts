import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NavController ,Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import * as Leaflet from 'leaflet';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('alanBtnEl', {static:false}) alanBtnComponent: ElementRef<HTMLAlanButtonElement>;

  map: Leaflet.Map;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private router: Router,
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
    });
}

}
