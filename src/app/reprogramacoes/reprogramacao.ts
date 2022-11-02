export class Reprogramacao {
    id: number;
    dataCadastro: string;
    tipo: string;
    quantidade: number;
    custo: number;
    id_motivo_reprogramacao: number;
    id_setor: number;
    id_produto: number;
    id_componente: number;
    id_funcionario: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.tipo = '';
        this.quantidade = 0;
        this.custo = 0;
        this.id_motivo_reprogramacao = 0;
        this.id_setor = 0;
        this.id_produto = 0;
        this.id_componente = 0;
        this.id_funcionario = 0;
        this.update = '';
    }
}