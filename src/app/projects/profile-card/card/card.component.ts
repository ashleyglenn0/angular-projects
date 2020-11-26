import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  image = 'assets/projects/profile-card/image-victor.jpg';
  name = 'Victor Crest';
  age = '26';
  city = 'London';
  amounts = ['80K', '803K','1.4K'];
  socialMedia = ['Followers','Likes','Photos'];

  constructor() { }

  ngOnInit(): void {
  }

}
