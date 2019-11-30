import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Alerta, TipoAlerta} from "./Alerta";

@Injectable({providedIn: 'root'})
export class AlertaService {

  submeterAlerta: Subject<Alerta>;

  obterAlerta(){
    return this.submeterAlerta.asObservable();
  }

  sucesso(mensagem:string){
    this.alerta(TipoAlerta.SUCESSO, mensagem);
  }

  atencao(mensagem:string){
    this.alerta(TipoAlerta.ATENCAO, mensagem);
  }

  informacao(mensagem:string){
    this.alerta(TipoAlerta.INFORMACAO, mensagem);
  }

  perigo(mensagem:string){
    this.alerta(TipoAlerta.PERIGO, mensagem);
  }

  private alerta(tipoAlerta: TipoAlerta, mensagem: string) {
    this.submeterAlerta.next(new Alerta(tipoAlerta, mensagem));
  }

}
