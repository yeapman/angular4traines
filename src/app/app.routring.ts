import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";
import {ChildCompComponent} from "./child-comp/child-comp.component";
import {MainrouteComponent} from "./mainroute/mainroute.component";

const appRoutes: Routes = [
  {path: '', component: AppComponent },
  {
    path: 'main',
    component:  MainrouteComponent,
    children: [
      {
        path: 'first-link',
        component: ChildCompComponent
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
