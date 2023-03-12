import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainComponent } from './commpents/train/train.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
 import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule, 
    MatIconModule,
    MatButtonToggleModule
    // MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
