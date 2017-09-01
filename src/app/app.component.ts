import { Component } from '@angular/core';
import {MenubarModule,MenuItem} from 'primeng/primeng';
import { Router } from '@angular/router';
import { HeaderComponent } from './common/header.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [HeaderComponent],
  providers: [UserService],
})
export class AppComponent {

   private items: MenuItem[];
   constructor( private router: Router) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon : 'fa fa-home',
                routerLink:['/users'],
            },
            {
                label: 'Users',
                icon: 'fa fa-user',
                items: [
                    {label: 'Add New User', icon: 'fa fa-user-plus', routerLink:['/user-create']},
                    {label: 'View All Users', icon: 'fa fa-users', routerLink:['/users']}
                ]
            },
            {
                label: 'Search',
                icon : 'fa fa-search',
                routerLink:['/search'],
            },
             {
                label: 'File Upload',
                icon : 'fa fa-upload',
                routerLink:['/fileupload'],
            },
            {
               label: 'Metadata',
                icon : 'fa fa-bars',
                items: [
                    {label: 'Upload', icon: 'fa fa-upload', routerLink:['/metadata']},
                    {label: 'Search', icon: 'fa fa-search', routerLink:['/documentSearch']},
                      {label: 'List Metadata', icon: 'fa fa-user', routerLink:['/GetAllMetadata']}
                ]

            },
             {
                label: 'Logout',
                icon : 'fa fa-power-off',
                routerLink:['/user-login'],
            },
        ];
    }
}
