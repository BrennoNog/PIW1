import {Posts} from './../posts/posts-model'; //importando classe posts
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class PostService{

    url:string = "http://rest.learncode.academy/api/brenno/posts"; //url do servidor

    constructor(private http: Http){}

    lista_posts: Posts[] = []; //lista de posts

    getposts(){ //função para conseguir posts
        return this.http.get(this.url) //retorno do get do servidor
            .map((response:Response) => {
                this.lista_posts = [];
                for(let b of response.json()){ //passado do obj json para o formato da lista normal
                    this.lista_posts.push(new Posts(b.id, b.nome, b.fala,0)) //add itens na lista
                }
                return this.lista_posts;  //retorna lista de posts
            })
            .catch((error: Response) => Observable.throw(error))
    }

    addcurso(texto:Posts){ //função para add posts
        console.log(texto);
        return this.http.post(this.url, texto)   //requisição post para o servidor
            .map((response: Response) => response.json()) //transformando o Posts em json
            .catch((error: Response)=> Observable.throw(error));
        
    }

    delcurso(post:Posts){ // função para deletar posts
        event.preventDefault();
        console.log(post);
        return this.http.delete(this.url + "/" + post.id) //requisição de delete com o id do post a ser deletado
            .catch((error: Response) => Observable.throw(error));
            
        
    }
}