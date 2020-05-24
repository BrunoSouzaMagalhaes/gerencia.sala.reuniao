import {DomServiceService} from '../../../services/dom-service.service';
import { Component, OnInit } from '@angular/core';
import { EventoComponent } from '../../evento/evento.component';
import { UsuarioComponent } from '../../usuario/usuario.component';
import { SalaComponent } from '../../sala/sala.component';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(
    private domService: DomServiceService
  ) { }

  ngOnInit() {
  }

  EventoModal() {
    this.domService.appendComponentToBody(EventoComponent);
  }

  UsuarioModal() {
    this.domService.appendComponentToBody(UsuarioComponent);
  }

  SalaModal() {
    this.domService.appendComponentToBody(SalaComponent);
  }
}
