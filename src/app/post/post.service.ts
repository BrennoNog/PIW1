import {Posts} from './../posts/posts-model';
import { Injectable } from '@angular/core';

@Injectable()

export class PostService{
    lista_posts: Posts[] = [new Posts(1,"Marcos","deu certo",0),
    new Posts(2,"juliano","deu?",0)]; 

    getposts(){
        return this.lista_posts;
    }

    addcurso(texto:Posts){
        this.lista_posts.push(texto);
        console.log(this.lista_posts);
    }

    delcurso(apaga:number){
        for(let i=0; i<this.lista_posts.length; i++){
            if(apaga==this.lista_posts[i].id){
                this.lista_posts.splice(i, 1);
                console.log(this.lista_posts);
            }
        }
    }
}