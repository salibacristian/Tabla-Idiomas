import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guard/auth.guard";
import { NoGuardGuard } from "./guard/no-guard.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'log-in', loadChildren: './log-in/log-in.module#LogInPageModule', canActivate: [NoGuardGuard] },
  { path: 'colores', loadChildren: './page/colores/colores.module#ColoresPageModule' },
  { path: 'animales', loadChildren: './page/animales/animales.module#AnimalesPageModule' },
  { path: 'numeros', loadChildren: './page/numeros/numeros.module#NumerosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
