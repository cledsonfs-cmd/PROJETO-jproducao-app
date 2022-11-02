export class Cliente{
    id: number;
    dataCadastro: string;
    codigo: string;
	nome: string;
	rua: string;
	bairro: string;
	municipio: string;
	uf: string;
	cep: string;
	telefone: string;
	fax: string;
	celular: string;
	percentual_comissao: number;	
	percentual_comissao_sem_desconto: number;
	email: string;
	conta_contabil: string;
	nome_fantasia: string;
	ativo: boolean;
	update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.codigo = '';
        this.nome = '';
        this.rua = '';
        this.bairro = '';
        this.municipio = '';
        this.uf = '';
        this.cep = '';
        this.telefone = '';
        this.fax = '';
        this.celular = '';
        this.percentual_comissao = 0;	
        this.percentual_comissao_sem_desconto = 0;
        this.email = '';
        this.conta_contabil = '';
        this.nome_fantasia = '';
        this.ativo = false;
        this.update = '' 
    }
}