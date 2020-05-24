import { Sala } from './sala';
import { Usuario } from './Usuario';

export class Evento {

    public CodEvento: number;
    public Nome: string;
    public CodUsuario: Usuario;
    public CodSala: Sala;
    public DataInicio: string;
    public DataFim: string;

    // constructor() {
    //     this.CodEvento = null;
    //     this.CodEvento = '';
    // }
}
