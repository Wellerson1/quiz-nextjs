import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(1, "Qual minha comida favorita?", 
    [ RespostaModel.errada("Panqueca"),
      RespostaModel.errada("Frutos do mar"),
      RespostaModel.certa("Lasanha"),
      RespostaModel.errada("Hamburguer") ]),
    
    new QuestaoModel(2, "Qual minha cor favorita?", 
    [ RespostaModel.errada("Azul"),
      RespostaModel.errada("Lilas"),
      RespostaModel.certa("Rosa"),
      RespostaModel.errada("Vermelho") ]),
    
    new QuestaoModel(3, "Qual dos RBDs é meu preferido?", 
    [ RespostaModel.errada("Dulce"),
      RespostaModel.errada("Poncho"),
      RespostaModel.certa("Christian"),
      RespostaModel.errada("Anahí") ]),

      new QuestaoModel(4, "Qual meu animal preferido?", 
    [ RespostaModel.errada("Cachorro"),
      RespostaModel.errada("Passarinho"),
      RespostaModel.certa("Cavalo"),
      RespostaModel.errada("Ovelha") ])
];

export default questoes