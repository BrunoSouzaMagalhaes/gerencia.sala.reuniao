import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './app.module.material';
import { MatNativeDateModule } from '@angular/material';
import { Rotas } from './rotas';
import { HeaderMenuComponent } from './components/layout/header-menu/header-menu.component';
import { ComumService } from './services/comum.service';
import { PainelDirective } from './directive/painel.directive';
import { EventoComponent } from './components/evento/evento.component';
import { EventoService } from './services/evento.service';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridBrasilService } from './services/ag-grid-brasil-service.service';
import {IMaskModule} from 'angular-imask';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BarraBotaoComponent } from './components/layout/barra-botao/barra-botao.component';
import { CadastroBaseComponent } from './components/cadastro-base/cadastro-base.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SalaComponent } from './components/sala/sala.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    EventoComponent,
    PainelDirective,
    BarraBotaoComponent,
    CadastroBaseComponent,
    UsuarioComponent,
    SalaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Rotas.get()),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    PerfectScrollbarModule,
    IMaskModule,
  ],
  providers: [
    ComumService,
    EventoService,
    AgGridBrasilService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ],
  entryComponents: [
    EventoComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
