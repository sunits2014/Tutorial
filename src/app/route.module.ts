import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
    // {
    //     path:'about',
    //     canActivate: [AuthGuardService],
    //     component: AboutComponent
    // },
    // {
    //     path:'tutorials',
    //     canActivate: [AuthGuardService],
    //     component: TutorialsComponent
    // },
    // {
    //     path: 'error',
    //     component: ErrorComponent
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }