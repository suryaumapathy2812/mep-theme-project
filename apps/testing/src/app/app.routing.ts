import { Routes } from "@angular/router";
import { AuthLayoutComponent, AdminLayoutComponent, DefaultLayoutComponent } from "@suryaumapathy@2812/mep-theme";
import { NxWelcomeComponent } from "./nx-welcome.component";

export const routes: Routes = [
    // { path: "", pathMatch: "full", redirectTo: "admin" },
    {
        path: "",
        component: DefaultLayoutComponent,
        children: [
            { path: "", component: NxWelcomeComponent }
        ]
    },
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
