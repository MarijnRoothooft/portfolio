import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from '../../models/project';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ervaring',
  standalone: true,
  imports: [CommonModule, MatCardModule],
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
      imageUrl: 'assets/projects/sport-app.jpg'
    },
    {
      name: 'Voetbal statistieken app',
      description: 'React Native applicatie voor het beheren van voetbalspelers en statistieken.',
      skills: 'React Native, TypeScript, SQLite , MKKV',
      framework: 'React Native',
      imageUrl: 'assets/projects/voetbal-app.jpg',
      githubUrl: 'https://github.com/it-graduaten/project-mobile-development-MarijnRoothooft'
    },
    {
      name: 'Ziekenfonds reizen app',
      description: 'ASP.NET Core applicatie voor het beheren van ziekenfonds reizen. Beveiligd platform voor gebruikers en administrators.',
      skills: 'C#, ASP.NET Core, SQL Server, Entity Framework',
      framework: 'ASP.NET Core',
      imageUrl: 'assets/projects/ziekenfonds-app.jpg'
    },
    {
      name: 'Workout Tracker',
      description: 'Persoonlijk project voor het tracken van fitness vooruitgang. Inclusief statistieken en voedingslogboek.',
      skills: 'Angular, TypeScript, Sessiebeheer, Material UI',
      framework: 'Angular',
      imageUrl: 'assets/projects/workout-app.jpg'
    }
  ];
}
