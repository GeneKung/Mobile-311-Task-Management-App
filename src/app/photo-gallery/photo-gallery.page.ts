import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.page.html',
  styleUrls: ['./photo-gallery.page.scss'],
})
export class PhotoGalleryPage implements OnInit {
  displayPosts = [];
  allPosts = [];
  comment
  post = {};
  now = moment().format('MM/DD/YYYY HH:mm');
  public materials: string;
  postID = 1;
  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController, public storage: Storage, public activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.photoService.loadSaved();
    this.materials = this.activateRoute.snapshot.paramMap.get('id');

    this.storage.get('postID').then( (val) =>{
      console.log(val);
      this.postID = val;  
    for(let id = 1; id < this.postID; id++){
      this.storage.get(`${id}`).then( (val) =>{
        console.log(val);
        this.displayPosts.push(JSON.parse(val));
        console.log(this.displayPosts);
      });
    }
  });  
  }

  public async showActionSheet(photo, position) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }

  logForm() {
    this.post['body'] = this.comment;
    this.post['name'] = "John Doe";
    console.log(this.post);
    this.storePost(this.post);
    this.comment = null;
  }

  storePost(post){
    this.storage.set(`${this.postID}`, JSON.stringify(post));
    this.postID += 1;
    this.storage.set('postID', this.postID);
    this.displayPosts.push(post);
    this.comment = null;
  }

  deleteComment(post){
    this.storage.remove('postID');
    this.displayPosts.splice(post, 1);
  }
}
