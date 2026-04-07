import { Routes } from '@angular/router';
import { TaskContainerComponent } from './task/task-container/task-container.component';

export const routes: Routes = [
    { path: 'tasks', component: TaskContainerComponent },
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: '**', redirectTo: 'tasks' }
];
