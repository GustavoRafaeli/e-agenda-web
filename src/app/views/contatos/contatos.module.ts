import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirContatoComponent } from './inserir-contato/inserir-contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { contatosService } from './services/contatos.service';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { RouterModule } from '@angular/router';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { ExcluirContatoComponent } from './excluir-contato/excluir-contato.component';
import 'src/app/extensions/form-group.extension';
import { CardContatoComponent } from './card-contato/card-contato.component';
import { ContatosRoutingModule } from './contatos-routing.module';



@NgModule({
  declarations: [
    InserirContatoComponent,
    ListarContatosComponent,
    EditarContatoComponent,
    ExcluirContatoComponent,
    CardContatoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContatosRoutingModule,
  ],
  providers: [contatosService],
})
export class ContatosModule { }
