export class  Chat{
    id: number;
    dataCadastro: string;
    id_usuario: number;
	id_empresa: number;
	mensagem: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_usuario = 0;
        this.id_empresa = 0;
        this.mensagem = '';
    }
}