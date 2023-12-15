import { embaralhar } from "../functions/arrays";
import RespostaModel from "./resposta";

export default class QuestaoModel {
    #id?: number;
    #enunciado: string;
    #acertou?: boolean;
    #respostas: RespostaModel[];

    constructor(id?: number, 
                enunciado?: string,
                respostas?: RespostaModel[],
                acertou = false,
                ) {
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

    get respondida() {
        for(let resposta of this.#respostas) {
           return resposta.revelada === true
        }
        return false
    }

    responderCom(indice: number) {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((res, i) => {
            const respostasSelesionada = indice === i
            const deveRevelar = respostasSelesionada || res.certa

            return deveRevelar ? res.revelar() : res
        })

        return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
    }

    embaralharRespostas(): QuestaoModel {
        const respostasEmbaralhadas = embaralhar(this.respostas)
        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    static criarUsandoObjeto(obj: QuestaoModel): QuestaoModel {
        const respostas = obj.respostas.map(resp => RespostaModel.criarUsandoObjeto(resp))
        return new QuestaoModel(obj.id, obj.enunciado, embaralhar(respostas), obj.acertou)
    }

    toObject() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            acertou: this.#acertou,
            respondida: this.respondida,
            respostas: this.#respostas.map(resp => resp.toObject())
        }
    }
}