import { Empresa } from "../empresas/empresa";
import { Setor } from "../setores/setor";

export class Processo {
    id: number;
    dataCadastro: string;
    empresa: Empresa;
    setor: Setor;
    descricao: string;
    formula: string;
    observacao: string;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.empresa = new Empresa();
        this.setor = new Setor();
        this.descricao = '';
        this.formula = '';
        this.observacao = '';
        this.update = '';
    }
}