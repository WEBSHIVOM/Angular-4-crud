import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/primeng';     //accordion and accordion tab
import { DataTableModule,SharedModule } from 'primeng/primeng'; // PrimeNG Library
import { MenubarModule, MenuItem } from 'primeng/primeng';
import {ProgressBarModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {TooltipModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BookService } from './book.service';
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import {MetadataService} from './services/metadata.service';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SearchComponent } from './search/search.component';
import { FileUploadComponent } from './fileupload/fileupload.component';
import { AlertComponent } from './_directives/alert.component';


import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { ListMetadataComponent } from './list-metadata/list-metadata.component';
import { SearchDocumentComponent } from './search-document/search-document.component';
import { MetadataComponent } from './metadata/metadata.component';




const ROUTES = [
  { path: '', redirectTo: 'user-login', pathMatch: 'full' },
  { path: 'books', component: BookComponent },
  { path: 'book-details/:id', component: BookDetailComponent },
  { path: 'book-create', component: BookCreateComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
  { path: 'users', component: UserComponent },
  { path: 'user-details/:id', component: UserDetailComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'search', component: SearchComponent},
  { path: 'fileupload', component: FileUploadComponent },
   { path : 'metadata' , component: MetadataComponent},
   { path : 'GetAllMetadata' , component:ListMetadataComponent },
   { path : 'documentSearch' , component:SearchDocumentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AlertComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    UserComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    SearchComponent,
    FileUploadComponent,
    MetadataComponent,
    FileUploadComponent,
    HeaderComponent,
    FooterComponent,
    ListMetadataComponent,
    SearchDocumentComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    DataTableModule,
    SharedModule,
    AccordionModule,
    MenubarModule,
    ProgressBarModule,
    FileUploadModule,
    MessagesModule,
    GrowlModule,
    MultiSelectModule,
    HttpModule,
    TooltipModule,
    InputTextModule,
    DropdownModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    BookService, UserService, AuthenticationService, AlertService,MetadataService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
