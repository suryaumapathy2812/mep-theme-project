import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent, AuthLayoutComponent } from "@suryaumapathy@2812/mep-theme";
import { NxWelcomeComponent } from "./nx-welcome.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "auth" },
    {
        path: "auth",
        component: AuthLayoutComponent,
        data: {
            layout: "fullWidth"
        },
        children: [
            { path: "", component: NxWelcomeComponent }
        ]
    }, {
        path: "admin",
        component: AdminLayoutComponent,
        data: {
            layout: "admin"
        },
        children: [
            { path: "", component: NxWelcomeComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }