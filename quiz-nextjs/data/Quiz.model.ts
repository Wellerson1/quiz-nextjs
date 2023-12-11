import QuestaoModel from "../model/questao"

export interface Quiz {
    id: number,
    name: string,
    countQuestion: number
    questoes?: any;
}