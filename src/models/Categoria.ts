

export default interface Tema {
    tipo: string | number | readonly string[] | undefined;
    id: number;
    descricao: string;
    produto?: []
}
