import { Routes, RouterModule } from "@angular/router";
import { PostComponent } from './post/post.component';
import { PostarComponent } from "./postar/postar.component";

const APP_ROUTES: Routes = [
    
    {path:"", redirectTo: "/post", pathMatch: "full"}, //caso não tenha dados depois do /
    {path:"post", component: PostComponent}, // leva para a linha do tempo
    {path:"postar", component: PostarComponent} // leva para a tela de postar
]
export const routing = RouterModule.forRoot(APP_ROUTES);