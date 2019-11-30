export class Alerta {

  constructor(
    public readonly tipoAlerta: TipoAlerta,
    public readonly mensagem: string
  ){}


}

export enum TipoAlerta {
  SUCESSO,
  ATENCAO,
  PERIGO,
  INFORMACAO
}
