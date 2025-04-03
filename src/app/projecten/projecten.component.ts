import { Component } from '@angular/core';
import { IVak } from '../../models/vak';

@Component({
  selector: 'app-projecten',
  imports: [],
  templateUrl: './projecten.component.html',
  styleUrl: './projecten.component.scss'
})
export class ProjectenComponent {
  public vakken: IVak[] = [{
    id: 1,
    name: 'Javascript',
    description: 'Javascript essentials & Javascript advanced',
    skills: 'Javascript skills',
    experience: '50'
  },
  {
    id: 2,
    name: 'Databasemodeleren & SQL',
    description: 'Introductie tot datamodeleren & SQL',
    skills: 'Hoe een database op te zetten & efficiënte queries te schrijven',
    experience: '50'
  },
  {
    id:3,
    name: 'HTML & CSS',
    description: 'Hoe HTML en CSS te gebruiken',
    skills: 'Hoe HTML en CSS te stylen & responsive design te realiseren',
    experience: '75'
  },
  {
    id:4,
    name: 'React',
    description: 'React basics & React native',
    skills: 'React skills voor zowel een webapplicatie als een mobiele applicatie',
    experience: '60'
  },
  {
    id:5,
    name: 'MVC framework development',
    description: 'ASP projecten uitwerken volgens het MVC-patroon',
    skills: 'Hoe een MVC patroon te gebruiken om een ASP project te maken',
    experience: '90'
  },
  {
    id:6,
    name: '.NET MAUI development',
    description: '.NET MAUI projecten uitwerken volgens het MVVM-patroon',
    skills: 'Hoe een MVVM patroon te gebruiken om een .NET MAUI project te maken',
    experience: '85'
  },
  {
    id: 7,
    name: 'Next.js development',
    description: 'Next.js projecten uitwerken volgens het Server-Side Rendering (SSR) en Client-Side Rendering (CSR) patroon',
    skills: 'Hoe een SSR en CSR patroon te gebruiken om een Next.js project te maken',
    experience: '40'
  },
  {
    id: 8,
    name: 'Angular development',
    description: 'Angular projecten opzetten & herwerken, dit heb ik geleerd op mijn stage bij Reynaers Aluminum',
    skills: 'Hoe een schaalbare applicatie te maken in Angular',
    experience: '65'
  },
  {
    id: 9,
    name: 'Progress openedge development',
    description: 'Progress code schrijven & de appbuilder gebruiken om een ui op te stellen hiervoor',
    skills: 'Hoe een programma gemaakt wordt om zowel de frontend als backend af te handelen',
    experience: '80'

  }
]
}
