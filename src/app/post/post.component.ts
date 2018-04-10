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
    console.log(e); //?
  }

  @Input()
  
  lista_posts: Posts[]; //declara lista de posts
 

  constructor(_postservice: PostService) {  //construtor do serviço
    this.postservice = _postservice;
  }

  ngOnInit() {      // iniciar a pagina com getposts
    this.getPosts();
    }
  getPosts(){
    this.postservice.getposts()
      .subscribe((data)=>this.lista_posts=data) // pondo resposta do getposts na lista de posts
      
  }

}
