import { RouterOutlet } from "@angular/router";
import { Component } from '@angular/core';import { HeaderComponent } from "./header/header.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ProjectenComponent } from "./projecten/projecten.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { ErvaringComponent } from "./ervaring/ervaring.component";
4

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavigationComponent, ProjectenComponent, ContactComponent, FooterComponent, ErvaringComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}



