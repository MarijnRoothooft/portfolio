import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from '../../models/project';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ervaring',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './ervaring.component.html',
  styleUrls: ['./ervaring.component.scss']
})
export class ErvaringComponent {
  projects: IProject[] = [
    {
      name: 'Sport adminstratie app',
      description: 'Een .NET MAUI applicatie voor het bijhouden van sportactiviteiten en oefeningen. Gebruikers kunnen hun workouts plannen en volgen.',
      skills: 'C#, .NET MAUI, XAML, SQL',
      framework: '.NET MAUI',
      imageUrl: 'sport-app.png',
      githubUrl: 'https://github.com/it-graduaten/itc2-javascript-lier-jensmarijn'
    },
    {
      name: 'Voetbal statistieken app',
      description: 'React Native applicatie voor het beheren van voetbalspelers en statistieken. Gebruikers kunnen spelers beheren en de kalender bekijken.',
      skills: 'React Native, TypeScript, SQLite , MKKV',
      framework: 'React Native',
      imageUrl: 'voetbal-app.jpg',
      githubUrl: 'https://github.com/MarijnRoothooft/mobile-development'
    },
    {
      name: 'Ziekenfonds reizen app',
      description: 'ASP.NET Core applicatie voor het beheren van ziekenfonds reizen. Beveiligd platform voor gebruikers en administrators.',
      skills: 'C#, ASP.NET Core, SQL Server, Entity Framework',
      framework: 'ASP.NET Core',
      imageUrl: 'ziekenfonds-app.png',
      githubUrl: 'https://github.com/MarijnRoothooft/ziekenfonds'
    },
    {
      name: 'Workout Tracker',
      description: 'Persoonlijk project voor het tracken van fitness vooruitgang. Inclusief statistieken en voedingslogboek.',
      skills: 'Next.js, TypeScript, Sessiebeheer, Material UI',
      framework: 'Next.js',
      imageUrl: 'workout-app.png',
      githubUrl: 'https://github.com/MarijnRoothooft/workout-app'
    }
  ];
}
