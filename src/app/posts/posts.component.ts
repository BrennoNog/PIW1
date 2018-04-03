import {Posts} from './posts-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() posts: Posts;

  constructor() { }

  ngOnInit() {
  }

  @Output() receber = new EventEmitter();

  clicou(){
    event.preventDefault();
    this.posts.likes++;
    this.receber.emit(this.posts);

  }

  apagou(){
    event.preventDefault();
    console.log("adeus");
    this.receber.emit(this.posts);
  }


}
