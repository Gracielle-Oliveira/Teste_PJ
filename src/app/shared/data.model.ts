export interface Dados {
    id: number;
    nome: string; 
    cpf: string; 
    telefone: number;
}

export interface RetornoDados {
    id: number;
    nome: string;
    cpf: number;
    telefone: number;
    tabela: Dados[];
}


