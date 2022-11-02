import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { AcessosModule } from './acessos/acessos.module';
import { AlmoxarifadosModule } from './almoxarifados/almoxarifados.module';
import { CartaoOpsModule } from './cartao-ops/cartao-ops.module';
import { CarteirasModule } from './carteiras/carteiras.module';
import { ChatsModule } from './chats/chats.module';
import { ClientesModule } from './clientes/clientes.module';
import { ComponenteMateriaPrimasModule } from './componente-materia-primas/componente-materia-primas.module';
import { ComponenteProcessosModule } from './componente-processos/componente-processos.module';
import { ComponentesModule } from './componentes/componentes.module';
import { ConsumoSetoresModule } from './consumo-setores/consumo-setores.module';
import { DevolucoesModule } from './devolucoes/devolucoes.module';
import { ElementosModule } from './elementos/elementos.module';
import { ElementoTemposModule } from './elemento-tempos/elemento-tempos.module';
import { EmbalagensModule } from './embalagens/embalagens.module';
import { EmpresasModule } from './empresas/empresas.module';
import { EquipamentosModule } from './equipamentos/equipamentos.module';
import { EstoquesModule } from './estoques/estoques.module';
import { EventosModule } from './eventos/eventos.module';
import { FaturamentosModule } from './faturamentos/faturamentos.module';
import { FolhaElementosModule } from './folha-elementos/folha-elementos.module';
import { FolhaObservacoesModule } from './folha-observacoes/folha-observacoes.module';
import { FuncionarioEquipamentosModule } from './funcionario-equipamentos/funcionario-equipamentos.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ItemPedidosModule } from './item-pedidos/item-pedidos.module';
import { LinhaProducoesModule } from './linha-producoes/linha-producoes.module';
import { LogsModule } from './logs/logs.module';
import { LotesModule } from './lotes/lotes.module';
import { MaquinasModule } from './maquinas/maquinas.module';
import { MateriaPrimasModule } from './materia-primas/materia-primas.module';
import { MenusModule } from './menus/menus.module';
import { MotivoPerdasModule } from './motivo-perdas/motivo-perdas.module';
import { MotivoReprogramacoesModule } from './motivo-reprogramacoes/motivo-reprogramacoes.module';
import { MovimentoSetoresModule } from './movimento-setores/movimento-setores.module';
import { OperacoesModule } from './operacoes/operacoes.module';
import { OrdemProducoesModule } from './ordem-producoes/ordem-producoes.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PerfisModule } from './perfis/perfis.module';
import { PontoControlesModule } from './ponto-controles/ponto-controles.module';
import { PopsModule } from './pops/pops.module';
import { PrazoEntregasModule } from './prazo-entregas/prazo-entregas.module';
import { ProcedimentosModule } from './procedimentos/procedimentos.module';
import { ProcessosModule } from './processos/processos.module';
import { ProducoesModule } from './producoes/producoes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { RepresentantesModule } from './representantes/representantes.module';
import { ReprogramacoesModule } from './reprogramacoes/reprogramacoes.module';
import { SetoresModule } from './setores/setores.module';
import { SetorPerdasModule } from './setor-perdas/setor-perdas.module';
import { SubProcessosModule } from './sub-processos/sub-processos.module';
import { SubSetoresModule } from './sub-setores/sub-setores.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { TelasModule } from './telas/telas.module';
import { TipoSetoresModule } from './tipo-setores/tipo-setores.module';
import { UnidadesModule } from './unidades/unidades.module';
import { UsuariosModule } from './usuarios/usuarios.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    AcessosModule,
    AlmoxarifadosModule,
    CartaoOpsModule,
    CarteirasModule,
    ChatsModule,
    ClientesModule,
    ComponenteMateriaPrimasModule,
    ComponenteProcessosModule,
    ComponentesModule,
    ConsumoSetoresModule,
    DevolucoesModule,
    ElementosModule,
    ElementoTemposModule,
    EmbalagensModule,
    EmpresasModule,
    EquipamentosModule,
    EstoquesModule,
    EventosModule,
    FaturamentosModule,
    FolhaElementosModule,
    FolhaObservacoesModule,
    FuncionarioEquipamentosModule,
    FuncionariosModule,
    ItemPedidosModule,
    LinhaProducoesModule,
    LogsModule,
    LotesModule,
    MaquinasModule,
    MateriaPrimasModule,
    MenusModule,
    MotivoPerdasModule,
    MotivoReprogramacoesModule,
    MovimentoSetoresModule,
    OperacoesModule,
    OrdemProducoesModule,
    PedidosModule,
    PerfisModule,
    PontoControlesModule,
    PopsModule,
    PrazoEntregasModule,
    ProcedimentosModule,
    ProcessosModule,
    ProducoesModule,
    ProdutosModule,
    RepresentantesModule,
    ReprogramacoesModule,
    SetoresModule,
    SetorPerdasModule,
    SubProcessosModule,
    SubSetoresModule,
    TarefasModule,
    TelasModule,
    TemplateModule,
    TipoSetoresModule,
    UnidadesModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
