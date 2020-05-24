import { EventoComponent } from './components/evento/evento.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SalaComponent } from './components/sala/sala.component';

export class Rotas {

    constructor() {
    }

    public static get(): Array<any> {
        return [
            {
                path: 'evento',
                component: EventoComponent
            },
            {
                path: 'usuario',
                component: UsuarioComponent
            },
             {
                path: 'sala',
                component: SalaComponent
            },
        ];
    }
}
