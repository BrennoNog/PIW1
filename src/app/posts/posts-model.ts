export class Posts{
    id: number;
    nome: string;
    fala: string;
    likes: number;

    constructor (id, nome, fala, likes){
        this.id = id;
        this.nome = nome;
        this.fala = fala;
        this.likes = likes;
    }
}