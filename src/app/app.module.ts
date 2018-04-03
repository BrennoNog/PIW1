import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrimeiroComponent } from './app/primeiro/primeiro.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { CamposComponent } from './campos/campos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    PostsComponent,
    PostComponent,
    CamposComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
