import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(290, "Qual o melhor time do Rio?", false, 
    [ RespostaModel.errada("Botafogo"),
      RespostaModel.errada("Flamengo"),
      RespostaModel.certa("Fluminense"),
      RespostaModel.errada("Vasco") ]),
    
    new QuestaoModel(356, "Quem foi o campeão da libertadores em 2006?", false, 
    [ RespostaModel.errada("São Paulo"),
      RespostaModel.errada("Boca Juniors"),
      RespostaModel.certa("Internacional"),
      RespostaModel.errada("Peñarol") ]),
    
    new QuestaoModel(890, "Qual o ano Brasil ganhou o penta?", false, 
    [ RespostaModel.errada("2000"),
      RespostaModel.errada("2004"),
      RespostaModel.certa("2002"),
      RespostaModel.errada("2003") ])
];

export default questoes