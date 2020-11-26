import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() image!: 'assets/projects/profile-card/image-victor.jpg';
  @Input() name!: string;
  @Input() age!: number;
  @Input() city!: string;
  @Input() amounts!: number;
  @Input() socialMedia!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
