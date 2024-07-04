import { Routes } from '@angular/router';
import { RegisterRoomComponent } from './register-room/register-room.component';

export const routes: Routes = [
    {
        path: 'register-room',
        component: RegisterRoomComponent,
        title: 'Register room',
    }
];
