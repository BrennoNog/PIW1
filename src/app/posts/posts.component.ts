import { PostService } from './../post/post.service';
import {Posts} from './posts-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() posts: Posts;

  constructor(private postservice: PostService) { }

  ngOnInit() {
  }

  @Output() receber = new EventEmitter();

  clicou(){
    event.preventDefault();
    this.posts.likes++;
    this.receber.emit(this.posts);

  }

  apagou(id){
    this.postservice.delcurso(id);
  }


}
