export default class QuestaoModel {
    #id: number;
    #enunciado: string;
    #acertou: boolean;
    #respostas: any[];

    constructor(id: number,
                enunciado: string,
                acertou: boolean,
                respostas: any[]) {
        this.#acertou = acertou
        this.#enunciado = enunciado
        this.#id = id
        this.#respostas = respostas
    }

    get acertou() {
        return this.#acertou;
    }

    get id() {
        return this.#id;
    }

    get enunciado() {
        return this.#enunciado;
    }

    get respostas() {
        return this.#respostas
    }
}