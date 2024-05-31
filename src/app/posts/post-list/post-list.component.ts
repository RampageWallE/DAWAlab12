import { Component, OnInit } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts : Post[] = [
    {
      id: 1, 
      title: "I'm sick", 
      content: "Estoy enfermo alguien puede porfavor traerme comida porfavor? :C" ,  
      views: 300, 
      coments: 20, 
      image: 'https://us.123rf.com/450wm/dmitrimaruta/dmitrimaruta2003/dmitrimaruta200300362/143689759-hombre-enfermo-con-m%C3%A1scara-de-inhalador-en-la-cara-en-la-cama.jpg?ver=6'},
    {
      id: 2, 
      title: "I'm on my vacations please dont steal nothing in my house" , 
      content: "A los choros que esten pensando que pueden robar mi casa solo los hago sabes que hay un animal llamdo princesa esperando adentro, asi que portence bien", 
      views: 10, 
      coments: 1, 
      image: 'https://st2.depositphotos.com/1031551/6149/i/450/depositphotos_61496235-stock-photo-burglar-at-a-window.jpg'},
    {
      id: 3, 
      title: "Hi brother how are you", 
      content: "Im just writting this because today is your birthday, so enjoi man ", 
      views: 0, 
      coments: 0, 
      image:'https://previews.123rf.com/images/f8studio/f8studio1704/f8studio170401940/77039787-joven-adicto-al-tel%C3%A9fono-celular-hombre-despierto-por-la-noche-en-la-cama-con-tel%C3%A9fono-inteligente.jpg'
    }
  ]
  
  constructor() {}

  selectedPost : Post | null = null;

  selectPost(post:Post){
    this.selectedPost = post;
  }

  ngOnInit(): void {
    
  }

}
