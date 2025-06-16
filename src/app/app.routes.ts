import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login';
import { Dashboard } from './vistas/dashboard/dashboard';
import { Editar } from './vistas/editar/editar';
import { authGuard } from './auth-guard';
import { RegisterRegister } from './register-register/register-register';
import { Create } from './vistas/create/create';
export const routes: Routes = [
  { path: '', component:Dashboard,canActivate:[authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: Dashboard },
  { path: 'editar', component: Editar },
  { path: 'register', component: RegisterRegister },
  {path: 'create', component: Create}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
