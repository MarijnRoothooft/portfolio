import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectenComponent } from './projecten/projecten.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'vaardigheden', component: ProjectenComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: ''}

];
