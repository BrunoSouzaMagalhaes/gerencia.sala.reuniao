import { Observable } from 'rxjs';

export interface IServico {
    Buscar(): Observable<any>;
    Incluir(entidade: any): Observable<any>;
    Editar(entidade: any): Observable<any>;
    Excluir(id: number): Observable<any>;
}
