import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Injectable()
@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  public materials: string;
  id;
  totalComments;
  postID = 1;
  displayPosts = [];
  allPosts = [];
  comment = '';
  msg = '';
  post = {};
  response = {};
  replyPost = {};
  placeholder : string = "Add Comment";
  colorCode = "gray";
  clickedReply = false;
  numComments = 0;
  constructor(private activateRoute: ActivatedRoute, private router: Router, public storage: Storage) { }

  ngOnInit() {
    this.materials = this.activateRoute.snapshot.paramMap.get('id');
    this.updateScroll();
    this.storage.get('postID').then( (val) =>{
      console.log(val);
    for(let id = 1; id < val; id++){
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
    if (this.msg == '') {
      this.post['name'] = "John Doe";
      this.post['time'] = this.TwelveHourFormat(moment().format('HH:mm'));
      this.post['body'] = this.comment;
      this.post['id'] = this.postID;
      this.numComments = this.numComments += 1;
      this.post['numComments'] = this.numComments;
      this.post['replies'] = [];
      console.log(this.post);
      console.log(this.numComments)
      this.storePost(this.post);
      this.comment = null;
      this.post = {};
    }
    else if (this.msg == 'reply') {
      let index = this.displayPosts.indexOf(this.response);
      console.log(index);
      this.replyPost['name'] = "John Doe";
      this.replyPost['time'] = this.TwelveHourFormat(moment().format('HH:mm'));
      this.replyPost['body'] = this.comment;
      console.log(this.displayPosts[index].replies);
      this.displayPosts[index].replies.push(this.replyPost);
      this.storeReply();
      this.comment = null;
      this.replyPost = {};
      this.msg = '';
      this.placeholder = 'Add Comment';
    }
  }


  storePost(post) {
    this.storage.get('postID').then( (val) =>{
    this.postID = val;
    this.storage.set(`${this.postID}`, JSON.stringify(post));
    this.postID++;
    this.storage.set('postID', this.postID);
    this.displayPosts.push(post);
    console.log(this.displayPosts);
    this.updateScroll();
    });
  }

  storeReply() {
    let id = this.response.id;
    this.storage.set(`${id}`, JSON.stringify(this.displayPosts[id-1]));
  }

  reply(post) {
    this.clickedReply = !this.clickedReply;
    if(!this.clickedReply) {
      this.colorCode = "blue";
      this.placeholder = 'Replying to your comment';
      this.msg = 'reply';
      this.response = post;
    }else if(this.clickedReply) {
      this.colorCode = "gray";
      this.placeholder = "Add Comment";
    }
  }

  goBack() {
    this.router.navigate(['createtask'])
  }

}
