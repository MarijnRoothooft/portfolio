import { RouterOutlet } from "@angular/router";
import { Component } from '@angular/core';import { HeaderComponent } from "./header/header.component";
4

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}



