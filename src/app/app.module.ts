import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AmigoPageComponent } from './components/amigo-page/amigo-page.component';
import { AboutComponent } from './components/about/about.component';
import { StoryBoxComponent } from './components/story-box/story-box.component';
import { FormationComponent } from './components/formation/formation.component';
import { MemoryLaneComponent } from './components/memory-lane/memory-lane.component';

//pipes
import { ReelPipe } from './pipes/reel.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';

//routes
import { APP_ROUTING } from './app.routes';
import { SecureDOMPipe } from './pipes/secure-dom.pipe';
import { AmiCardComponent } from './components/ami-card/ami-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ThumbnailPipe,
    AmigoPageComponent,
    AboutComponent,
    AgePipe,
    StoryBoxComponent,
    FormationComponent,
    ReelPipe,
    MemoryLaneComponent,
    SecureDOMPipe,
    AmiCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
