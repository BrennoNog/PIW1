import {Posts} from './../posts/posts-model';
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']//,
  //providers: [PostService]
})
export class PostComponent implements OnInit {

  @Input()
  postservice: PostService;

  quem(e){
    console.log(e);
  }
  lista_posts = [];

  constructor(_postservice: PostService) { 
    this.postservice = _postservice;
  }

  ngOnInit() {
    this.lista_posts = this.postservice.getposts();
  }

}
