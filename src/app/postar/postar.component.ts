import { PostService } from './../post/post.service'; //importa serviços do post
import { Component, OnInit } from '@angular/core';
import {Posts} from './../posts/posts-model';


@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.css']//,
  //providers: [PostService]
})
export class PostarComponent implements OnInit {

  constructor(private postservice: PostService) { } // para usar os serviços do post

  ngOnInit() {
  }


  getPosts(){
    this.postservice.getposts()
      .subscribe((data)=>console.log(data))
  }

    postar(texto1:string,texto2:string){ //função recebe texto1( nome ) e texto2( fala )
      
      this.postservice.addcurso(new Posts(1,texto2,texto1,0)) //usa serviço addcurso para enviar dados do post e add no servidor
      .subscribe((data)=>this.getPosts())
      

    }
  

}
