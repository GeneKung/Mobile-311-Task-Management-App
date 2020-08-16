import { Component, OnInit, Injectable } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Injectable()
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.page.html',
  styleUrls: ['./photo-gallery.page.scss'],
})
export class PhotoGalleryPage implements OnInit {
  displayPosts = [];
  allPosts = [];
  comment = '';
  post = {};
  commentID = 400;
  public materials: string;
  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController, public storage: Storage, public activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.photoService.loadSaved();
    this.materials = this.activateRoute.snapshot.paramMap.get('id');
    this.storage.get('commentID').then( (val) =>{
      console.log(val);
    for(let id = 400; id < val; id++){
      this.storage.get(`${id}`).then( (val) =>{
        console.log(val);
        this.displayPosts.push(JSON.parse(val));
        console.log(this.displayPosts);
      });
    }
    });  
  }
  add() {
    this.commentID++
    console.log(this.commentID)
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
    this.post['name'] = "John Doe";
    this.post['time'] = moment().format('MM/DD/YYYY HH:mm');
    this.post['body'] = this.comment;
    console.log(this.post);
    this.storePost(this.post);
    this.comment = null;
    this.post = {};
  }

  storePost(post){
    this.storage.set(`${this.commentID}`, JSON.stringify(post));
    this.commentID++;
    this.storage.set('commentID', this.commentID);
    this.displayPosts.push(post);
  }

  deleteComment(post){
    this.storage.remove('commentID');
    this.displayPosts.splice(post, 1);
  }
}
