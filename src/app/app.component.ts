import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  route!: string;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event: any) => (event instanceof NavigationStart)
        )
      )
      .subscribe((event: NavigationStart) => this.route = event.url);
  }
}
