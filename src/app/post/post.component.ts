import {Posts} from './../posts/posts-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() lista_posts: Posts[] = [
    new Posts(1,"Marcos","deu certo",0),
    new Posts(2,"juliano","deu?",0),
  ];

  quem(e){
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
