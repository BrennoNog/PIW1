import { Routes, RouterModule } from "@angular/router";
import { PostComponent } from './post/post.component';
import { PostarComponent } from "./postar/postar.component";

const APP_ROUTES: Routes = [
    
    {path:"", redirectTo: "/post", pathMatch: "full"},
    {path:"post", component: PostComponent},
    {path:"postar", component: PostarComponent}
]
export const routing = RouterModule.forRoot(APP_ROUTES);