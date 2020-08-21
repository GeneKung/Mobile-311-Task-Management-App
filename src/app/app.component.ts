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
import { EmployeesPage } from './employees/employees.page';
import { EquipmentPage } from './equipment/equipment.page'
import { ViewTaskPage } from './view-task/view-task.page';
import { PhotoService } from './services/photo.service';
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
    public CommentsPage: CommentsPage,
    public EquipmentPage: EquipmentPage,
    public EmployeesPage: EmployeesPage,
    public viewTaskPage: ViewTaskPage,
    public photoService: PhotoService
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
    console.log(category);
    document.getElementById("cate").innerHTML = this.CreatetaskPage.getCategory;
  }
  addComment(comment) {
    this.CommentsPage.comment = comment;
    document.getElementById("comment").innerHTML = this.CommentsPage.comment
  }
  ngAfterViewInit() {
    this.alanBtnComponent.nativeElement.addEventListener('command', (data) => {
        const commandData = (<CustomEvent>data).detail;
        //Navigation
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
        if (commandData.command === 'employeesPage'){
          this.router.navigate(['employees']);
        }
        if (commandData.command === 'materialPage'){
          this.router.navigate(['material']);
        }
        if (commandData.command === 'equipmentPage'){
          this.router.navigate(['equipment']);
        }
        if (commandData.command === 'view'){
          this.router.navigate(['view-task']);
        }
        //Material
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
          document.getElementById("unit").innerHTML = this.materialsPage.typeOfQuantity;
          console.log(this.materialsPage.typeOfQuantity);
        }
        if (commandData.command === 'quantity') {
          this.materialsPage.quantity = commandData.quantity;
          document.getElementById("quantity").innerHTML = this.materialsPage.quantity;
          console.log(this.materialsPage.quantity);
        }
        if (commandData.command === 'saveMat') {
          this.materialsPage.inputData();
          document.getElementById("unit").innerHTML = this.materialsPage.typeOfQuantity;
          document.getElementById("quantity").innerHTML = this.materialsPage.quantity;
          document.getElementById("material").innerHTML = this.materialsPage.getMaterial;
        }

        //Equipment
        if (commandData.command === 'ecrew') {
          this.EquipmentPage.getByGroup = commandData.ecrew;
          console.log(this.EquipmentPage.getByGroup);
        }
        if (commandData.command === 'equipment') {
          this.EquipmentPage.getEquipment = commandData.equipment;
          console.log(this.EquipmentPage.getEquipment);
        }
        if (commandData.command === 'ehours') {
          this.EquipmentPage.hours = commandData.ehours;
          console.log(this.EquipmentPage.hours);
        }
        if (commandData.command === 'saveEquip'){
          
        }
        //Employee
        if (commandData.command === 'crew'){
          this.EmployeesPage.getSelectedSubject = commandData.crew
          console.log(this.EmployeesPage.getSelectedSubject);
        }
        if (commandData.command === 'employees') {
          this.EmployeesPage.getEmployee = commandData.employee;
          console.log(this.EmployeesPage.getEmployee);
        }
        if (commandData.command === 'hours'){
          this.EmployeesPage.hours = commandData.hours;
          console.log(this.EmployeesPage.hours);
        }
        if (commandData.command === 'overtime'){
          this.EmployeesPage.overtime = commandData.overtime;
          console.log(this.EmployeesPage.overtime);
        }
        if (commandData.command === 'saveEmployee'){

        }
        //Photo Gallery
        if (commandData.command === 'photo'){
          this.router.navigate(['photo-gallery']);
        }
        if (commandData.command === 'camera'){
          this.photoService.addNewToGallery();
        }
        if (commandData.command === 'photadd'){
          this.photoService.addNewToGallerys();
        }

        //Create Task Page
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
        if (commandData.command === 'category') {
          this.setCategory(commandData.category);
          console.log(this.CreatetaskPage.getCategory);
        }
        if (commandData.command === 'Department') {
          this.CreatetaskPage.getDepartment = commandData.Department;
          console.log(this.CreatetaskPage.getDepartment)
          document.getElementById('department').innerHTML = this.CreatetaskPage.getDepartment;
        }
        if (commandData.command === 'Workgroup') {
          this.CreatetaskPage.getWorkGroup = commandData.workgroup;
          console.log(this.CreatetaskPage.getWorkGroup)
          document.getElementById('wgroup').innerHTML = this.CreatetaskPage.getWorkGroup;
        }
        if (commandData.command === 'workType'){
          this.CreatetaskPage.getWorkType = commandData.worktypes;
          console.log(this.CreatetaskPage.getWorkType);
          document.getElementById('wtype').innerHTML = this.CreatetaskPage.getWorkType;
        }
        if (commandData.command === 'Priority'){
          this.CreatetaskPage.getPriority = commandData.Priority;
          console.log(this.CreatetaskPage.getPriority);
          document.getElementById('priority').innerHTML = this.CreatetaskPage.getPriority;
        }
        if (commandData.command === 'Description') {
          this.CreatetaskPage.getDescription = commandData.Description;
          console.log(this.CreatetaskPage.getDescription);
          this.setDescription(commandData.Description);
        }
        if (commandData.command === 'save') {
          this.CreatetaskPage.listInfo['category'] = this.CreatetaskPage.getCategory;
          this.CreatetaskPage.listInfo['workGroup'] = this.CreatetaskPage.getWorkGroup;
          this.CreatetaskPage.listInfo['workType'] = this.CreatetaskPage.getWorkType;
          this.CreatetaskPage.listInfo['assetID'] = this.CreatetaskPage.assetID;
          this.CreatetaskPage.listInfo['department'] = this.CreatetaskPage.getDepartment;
          this.CreatetaskPage.listInfo['address'] = this.CreatetaskPage.getAddress;
          this.CreatetaskPage.listInfo['priority'] = this.CreatetaskPage.getPriority;
          this.CreatetaskPage.listInfo['description'] = this.CreatetaskPage.getDescription;
          this.TasksPage.createCard(this.CreatetaskPage.listInfo);
          this.CreatetaskPage.goTask();
        }

        //Comment Section
        if (commandData.command === 'commentsPage'){
          this.router.navigate(['comments']);
        }
        if (commandData.command === 'addComment'){
          this.addComment(commandData.comment);
          console.log(this.CommentsPage.comment)
        }

        if (commandData.command === 'send'){
          this.CommentsPage.post['name'] = "John Doe";
          this.CommentsPage.post['time'] = this.CommentsPage.TwelveHourFormat(moment().format('HH:mm'));
          this.CommentsPage.post['body'] = this.CommentsPage.comment;
          this.CommentsPage.post['id'] = this.CommentsPage.postID;
          this.CommentsPage.numComments = this.CommentsPage.numComments += 1;
          this.CommentsPage.post['numComments'] = this.CommentsPage.numComments;
          this.CommentsPage.post['replies'] = [];
          console.log(this.CommentsPage.post);
          console.log(this.CommentsPage.numComments)
          this.CommentsPage.storePost(this.CommentsPage.post);
          this.CommentsPage.comment = null;
          this.CommentsPage.post = {};
        }
        
        if (commandData.command === 'reply'){
          var post = {name: 'John Doe'};
          this.CommentsPage.reply(post);
          this.CommentsPage.comment = commandData.reply;
          console.log(this.CommentsPage.comment)
          let index = this.CommentsPage.displayPosts.indexOf(this.CommentsPage.response);
          console.log(index);
          this.CommentsPage.replyPost['name'] = "John Doe";
          this.CommentsPage.replyPost['time'] = this.CommentsPage.TwelveHourFormat(moment().format('HH:mm'));
          this.CommentsPage.replyPost['body'] = this.CommentsPage.comment;
          console.log(this.CommentsPage.displayPosts[index].replies);
          this.CommentsPage.displayPosts[index].replies.push(this.CommentsPage.replyPost);
          this.CommentsPage.storeReply();
          this.CommentsPage.comment = null;
          this.CommentsPage.replyPost = {};
          this.CommentsPage.msg = '';
          this.CommentsPage.placeholder = 'Add Comment';
        }

        if (commandData.command === 'cardTask'){
          this.TasksPage.showCard = true;
          console.log(this.TasksPage.showCard);
        }

        if(commandData.command === 'readNextCategory'){
          this.TasksPage.storage.get(`${501}`).then( (val) =>{
            val = JSON.parse(val);
            this.alanBtnComponent.nativeElement.setVisualState({category: val.listInfo['category']});
          });
        }

        if(commandData.command === 'readNextDescription'){
          this.TasksPage.storage.get(`${501}`).then( (val) =>{
            val = JSON.parse(val);
            this.alanBtnComponent.nativeElement.setVisualState({totalComments: val['totalComments'], description: val.listInfo['description']});
          });
        }
        
        if(commandData.command === 'readComments'){
          this.TasksPage.storage.get(`${501}`).then( (val) =>{
            console.log(val);
            val = JSON.parse(val);
            val.comment = JSON.parse(val.comment);
            let name = val.comment.name;
            let comment = val.comment.body;
            this.alanBtnComponent.nativeElement.setVisualState({name: name, comment: comment});
          });
        }
    });
}

}