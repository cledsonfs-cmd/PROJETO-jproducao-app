export class Log {
    id: number;
    dataCadastro: string;
    id_usuario: number;
	id_empresa: number;
	id_evento: number;
	ocorrencia: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_usuario = 0;
        this.id_empresa = 0;
        this.id_evento = 0;
        this.ocorrencia = '';
    }
}