import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  public materials: string;
  postID = 1;
  displayPosts = [];
  allPosts = [];
  post = {};
  constructor(private activateRoute: ActivatedRoute, private router: Router, public storage: Storage) { }

  ngOnInit() {
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

  logForm() {
    this.post['name'] = "John Doe";
    console.log(this.post);
    this.storePost(this.post);
    this.post['body'] = null;
  }

  storePost(post){
    this.storage.set(`${this.postID}`, JSON.stringify(post));
    this.postID += 1;
    this.storage.set('postID', this.postID);
  }

  goBack() {
    this.router.navigate(['createtask'])
  }

}
