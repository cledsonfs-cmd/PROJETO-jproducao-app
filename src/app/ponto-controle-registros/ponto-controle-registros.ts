import { PontoControle } from "../ponto-controles/ponto-controle";

export class PontoControleRegistros {
    
    id: number;    
    pontoControle: PontoControle;
	data: string;
    id_produto: number;	
	quantidade: number;		
	peso: number;	
	valor: number;	
	observacao: string;
    extra1: string;
    extra2: string;
	extra3: string;

    constructor() {  
        this.id = 0;        
        this.pontoControle = new PontoControle;
        this.data = '';
        this.id_produto = 0;	
        this.quantidade = 0;		
        this.peso = 0;	
        this.valor = 0;	
        this.observacao = '';
        this.extra1 = '';
        this.extra2 = '';
        this.extra3 = '';
    }
}