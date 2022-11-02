export class Pop {
    id: number;
    dataCadastro: string;
    codigo: string;
    id_setor: number;	
	revisao: number;
    data: string;
    responsavel: string;
    revisor: string;
    tarefa: string;
    resultado: string;
    equipamentos: string;
    epi: string;
    epc: string;
    recomendacao: string;
    observacao: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.codigo = '';
        this.id_setor = 0;
        this.revisao = 0;
        this.data = '';
        this.responsavel = '';
        this.revisor = '';
        this.tarefa = '';
        this.resultado = '';
        this.equipamentos = '';
        this.epi = '';
        this.epc = '';
        this.recomendacao = '';
        this.observacao = '';
    }
}