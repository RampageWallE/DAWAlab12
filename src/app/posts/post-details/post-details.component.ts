import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post-list/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent{
  @Input() post : Post|any;

}
