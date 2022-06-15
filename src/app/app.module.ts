import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientInterceptor } from './Httpinterceptor/Httpinterceptor';












@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    CKEditorModule,

    
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,



    MatDialogModule,
    MatFormFieldModule,

    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  





    
    NgxWebstorageModule.forRoot(),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
