import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four-card-feature',
  templateUrl: './four-card-feature.component.html',
  styleUrls: ['./four-card-feature.component.scss']
})
export class FourCardFeatureComponent implements OnInit {

  cards = [
    {
      title: 'Team Builder',
      color: 'red',
      description: 'some text',
      image: ''
    },
    {
      title: 'Supervisor',
      color: 'green',
      description: 'some other text',
      image: ''
    },
    {
      title: 'Calculator',
      color: 'blue',
      description: 'even some other text',
      image: ''
    },
    {
      title: 'Karma',
      color: 'yellow',
      description: 'some text',
      image: ''
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
