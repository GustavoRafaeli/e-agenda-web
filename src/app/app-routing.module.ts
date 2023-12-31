import { NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterModule,
  Routes,
} from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { __importDefault } from 'tslib';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'contatos',
    loadChildren: () => import('./views/contatos/contatos.module')
    .then(m => m.ContatosModule)
  },
  {
    path: 'compromissos',
    loadChildren: () => import('./views/compromissos/compromissos.module')
    .then(m => m.CompromissosModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./views/categorias/categorias.module')
    .then(m => m.CategoriasModule)
  },
  {
    path: 'despesas',
    loadChildren: () => import('./views/despesas/despesas.module')
    .then(m => m.DespesasModule)
  },
  {
    path: 'tarefas',
    loadChildren: () => import('./views/tarefas/tarefas.module')
    .then(m => m.TarefasModule)
  },


  // {
  //   path: 'compromissos',
  //   loadChildren: () =>
  //     import('./views/compromissos/compromissos.module').then(
  //       (m) => m.CompromissosModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}