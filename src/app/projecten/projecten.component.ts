import { Component } from '@angular/core';
import { IVak } from '../../models/vak';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-projecten',
  imports: [MatCardModule, MatProgressBarModule, MatExpansionModule],
  templateUrl: './projecten.component.html',
  styleUrl: './projecten.component.scss'
})
export class ProjectenComponent {
  public vakken: IVak[] = [
    {
      id: 1,
      name: 'JavaScript',
      description: 'Programmeren met JavaScript',
      skills: 'Ik leerde interactieve functionaliteiten bouwen en logica implementeren in webapplicaties.',
      experience: '50'
    },
    {
      id: 2,
      name: 'Databasemodellering & SQL',
      description: 'Modelleren van databanken en schrijven van efficiënte SQL-queries.',
      skills: 'Ik weet nu hoe ik relationele databases ontwerp en beheer met performante query’s.',
      experience: '50'
    },
    {
      id: 3,
      name: 'HTML & CSS',
      description: 'Webpagina’s opmaken en stylen volgens moderne webstandaarden.',
      skills: 'Ik kan responsive webpagina’s bouwen die goed werken op verschillende schermgroottes.',
      experience: '75'
    },
    {
      id: 4,
      name: 'React',
      description: 'Front-end ontwikkeling met React en basiskennis van React Native.',
      skills: 'Ik ontwikkelde component-based UI’s voor zowel web als mobiele toepassingen.',
      experience: '60'
    },
    {
      id: 5,
      name: 'MVC Framework Development',
      description: 'Toepassingen bouwen volgens het Model-View-Controller patroon in ASP.NET.',
      skills: 'Ik begrijp hoe ik een duidelijke structuur aanbreng in backendprojecten via MVC.',
      experience: '90'
    },
    {
      id: 6,
      name: '.NET MAUI Development',
      description: 'Cross-platform applicaties bouwen met het MVVM-patroon.',
      skills: 'Ik bouwde native apps met gescheiden logica en UI dankzij MVVM in .NET MAUI.',
      experience: '85'
    },
    {
      id: 7,
      name: 'Next.js Development',
      description: 'Werken met SSR en CSR binnen het Next.js framework.',
      skills: 'Ik ontdekte hoe je performante webapps maakt met server- en client rendering.',
      experience: '40'
    },
    {
      id: 8,
      name: 'Angular Development',
      description: 'Modulaire applicaties ontwikkelen in Angular, inclusief stageprojecten.',
      skills: 'Ik bouwde schaalbare Angular-apps en leerde werken met componentstructuren en services, tijdens mijn stage bij Reynaers',
      experience: '65'
    },
    {
      id: 9,
      name: 'Progress OpenEdge Development',
      description: 'Applicaties bouwen met Progress en AppBuilder.',
      skills: 'Ik leerde zowel frontend als backend ontwikkelen binnen een legacy-omgeving, in mijn werkomgeving bij Reynaers',
      experience: '80'
    }
  ];
}

