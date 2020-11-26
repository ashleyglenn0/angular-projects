import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() color!: string;
  @Input() image!: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}
