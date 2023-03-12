export default class RespostaModel {
    #valor: string;
    #certa: boolean
    #revelada: boolean

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static certa(value: string): RespostaModel {
        return new RespostaModel(value, true)
    }

    static errada(value: string) {
        return new RespostaModel(value, false)
    }

    get valor() {
        return this.#valor
    }

    get revelada() {
        return this.#revelada
    }

    get certa() {
        return this.#certa
    }

    revelar() {
        return new RespostaModel(this.#valor, this.#certa, true)
    }

    static criarUsandoObjeto(obj: RespostaModel): RespostaModel {
        return new RespostaModel(obj.valor, obj.certa, obj.revelada)
    }

    toObject() {
      return {
        valor: this.#valor,
        certa: this.#certa,
        revelada: this.#revelada,
      }}
}