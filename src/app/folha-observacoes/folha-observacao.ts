export class FolhaObservacao {
    id: number;
    dataCadastro: string;
    folha: string;
    id_processo: number;
	nomePeca: string;
	id_maquina: number;
	id_operador: number;
	experiencia_servico: string;
	id_mestre: number;
    data: string;
    numero_operacao: number;
	numero_peca: number;
	numero_maquina: number;
	sexo: string;
	id_materia_prima: number;
	numeroSecao: string;
    inicio: string;
    fim: string;
    numero_maquinas: number;
	unidades_acabadas: number;
	fadiga: number;
    setup: number;
    jornada: number;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.folha = '';
        this.id_processo = 0;
        this.nomePeca = '';
        this.id_maquina = 0;
        this.id_operador = 0;
        this.experiencia_servico = '';
        this.id_mestre = 0;
        this.data = '';
        this.numero_operacao = 0;
        this.numero_peca = 0;
        this.numero_maquina = 0;
        this.sexo = '';
        this.id_materia_prima = 0;
        this.numeroSecao = '';
        this.inicio = '';
        this.fim = '';
        this.numero_maquinas = 0;
        this.unidades_acabadas = 0;
        this.fadiga = 0;
        this.setup = 0;
        this.jornada = 0;
      }
}