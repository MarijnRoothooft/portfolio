import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IPersoon } from '../../models/persoon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MatCardModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
