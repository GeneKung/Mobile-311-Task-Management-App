import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  time = moment().format('HH:mm');
  public materials: string;
  postID = 1;
  displayPosts = [];
  allPosts = [];
  comment = '';
  post = {};
  constructor(private activateRoute: ActivatedRoute, private router: Router, public storage: Storage) { }

  ngOnInit() {
    
    this.materials = this.activateRoute.snapshot.paramMap.get('id');
    this.updateScroll();
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

  updateScroll(){
    var element = document.getElementById("content");
    element.scrollTop = element.scrollHeight;
  }

  TwelveHourFormat(time) {
    var dtParts = time.split(":");

    var hours = dtParts[0];
    var minutes = dtParts[1];
    var suffix = "AM";

    if (hours > 12) {
        hours = hours - 12;
        suffix = "PM";
    }
    else if (hours == "00") {
        hours = 12;
        suffix = "AM";
    }
    else if (hours == "12") {
        suffix = "PM";
    }

    let now = hours + ":" + minutes + " " + suffix;
    return now;
}
  logForm() {
    this.post['name'] = "John Doe";
    this.post['time'] = this.TwelveHourFormat(moment().format('HH:mm'));
    this.post['body'] = this.comment;
    console.log(this.post);
    this.storePost(this.post);
    this.comment = null;
    this.post = {};
  }

  storePost(post){
    this.storage.set(`${this.postID}`, JSON.stringify(post));
    this.postID += 1;
    this.storage.set('postID', this.postID);
    this.displayPosts.push(post);
    this.updateScroll();
  }

  goBack() {
    this.router.navigate(['createtask'])
  }

}
