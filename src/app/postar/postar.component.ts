import { PostService } from './../post/post.service';
import { Component, OnInit } from '@angular/core';
import {Posts} from './../posts/posts-model';


@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.css']//,
  //providers: [PostService]
})
export class PostarComponent implements OnInit {

  constructor(private postservice: PostService) { }

  ngOnInit() {
  }


    postar(texto1:string,texto2:string){
      let n = this.postservice.getposts();
      console.log(n.length);
      this.postservice.addcurso(new Posts(n.length+1,texto2,texto1,0));
      

  
    }
  

}
