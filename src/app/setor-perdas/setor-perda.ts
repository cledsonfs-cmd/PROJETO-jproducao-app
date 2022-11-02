export class SetorPerda {
    id: number;
    dataCadastro: string;
    quantidade: number;
    revisado: boolean;
    id_setor: number;
    id_empresa: number;
    id_unidade: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.quantidade = 0;
        this.revisado = false;
        this.id_setor = 0;
        this.id_empresa = 0;
        this.id_unidade = 0;
        this.update = '';
    }
}