import { Observable } from 'rxjs';
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
  @Input() lista_posts: Posts[];

  constructor(private postservice: PostService) { }

  ngOnInit() {
  }

  @Output() receber = new EventEmitter();

  clicou(){ 
    event.preventDefault();
    this.posts.likes++;
    this.receber.emit(this.posts);

  }


  getPosts(){
    this.lista_posts = [];
    this.postservice.getposts()
      .subscribe((data) => { this.lista_posts = data}, (error)=> console.log(error));
  }

  apagou(post:Posts){ //recebe post 
    event.preventDefault();
    this.postservice.delcurso(post) //usa serviço do Post para apagar post recebido
      .subscribe((data)=>{console.log("deu?");this.getPosts()})
  }


}
