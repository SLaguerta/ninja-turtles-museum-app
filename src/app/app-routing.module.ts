import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { NinjasComponent } from './ninjas/ninjas.component';

const routes: Routes = [
  { path: '', redirectTo: '/ninjas', pathMatch: 'full' },
  { path: 'ninjas', component: NinjasComponent},
  { path: 'artists', component: ArtistsComponent},
  { path: 'artist-detail/:id', component: ArtistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
