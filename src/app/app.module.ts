import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule, Storage } from '@ionic/storage';

import {Geolocation} from "@ionic-native/geolocation/ngx";

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { CreatetaskPage} from "./createtask/createtask.page"
import { TasksPage } from "./tasks/tasks.page";
import { SettingsPage } from "./settings/settings.page";
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { CommentsPage } from './comments/comments.page';
import { EmployeesPage } from './employees/employees.page';
import { MaterialsPage } from './materials/materials.page';
import { EquipmentPage } from './equipment/equipment.page';
import { PhotoGalleryPage } from './photo-gallery/photo-gallery.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    EmployeesPage,
    MaterialsPage,
    EquipmentPage,
    PhotoGalleryPage,
    CommentsPage,
    CreatetaskPage,
    TasksPage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    Geolocation,
    NativeGeocoder,
    CreatetaskPage,
    SettingsPage,
    Camera,
    File,
    WebView,
    MaterialsPage,
    EmployeesPage,
    EquipmentPage,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
