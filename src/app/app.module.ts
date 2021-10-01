import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { NinjasComponent } from './ninjas/ninjas.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistDetailComponent,
    PaintingsComponent,
    NinjasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
