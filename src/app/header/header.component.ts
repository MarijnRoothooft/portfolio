import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { IPersoon } from '../../models/persoon';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'portfolio';
  headerImage: string = './headerImage.jpg';

  Marijn: IPersoon = {
    voornaam: 'Marijn',
    naam: 'Roothooft',
    geboortedatum: "31/10/1998",
    geslacht: 'Man',
    gemeente: 'Lier',
    land: 'België',
    email: 'marijn.roothooft@student.thomasmore.be'
  }
}
