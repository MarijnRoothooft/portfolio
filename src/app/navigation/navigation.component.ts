import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(private router: Router) {}
  goToPage(route: string): void {
    this.router.navigate([route]);
  }
}
