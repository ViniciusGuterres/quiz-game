import AnswersModel from "../../model/answers";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        AnswersModel.incorrectAnswer('Abelha'),
        AnswersModel.incorrectAnswer('Barata'),
        AnswersModel.incorrectAnswer('Pulga'),
        AnswersModel.correctAnswer('Barbeiro'),
    ]),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        AnswersModel.incorrectAnswer('Caju'),
        AnswersModel.incorrectAnswer('Côco'),
        AnswersModel.incorrectAnswer('Chuchu'),
        AnswersModel.correctAnswer('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        AnswersModel.incorrectAnswer('Manada'),
        AnswersModel.incorrectAnswer('Alcateia'),
        AnswersModel.incorrectAnswer('Rebanho'),
        AnswersModel.correctAnswer('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AnswersModel.incorrectAnswer('Equilátero'),
        AnswersModel.incorrectAnswer('Isóceles'),
        AnswersModel.incorrectAnswer('Trapézio'),
        AnswersModel.correctAnswer('Escaleno'),
    ]),
    // new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
    //     AnswersModel.incorrectAnswer('Castro Alves'),
    //     AnswersModel.incorrectAnswer('Manuel Bandeira'),
    //     AnswersModel.incorrectAnswer('Carlos Gomes'),
    //     AnswersModel.correctAnswer('Dom Pedro I'),
    // ]),
    // new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
    //     AnswersModel.incorrectAnswer('Perder'),
    //     AnswersModel.incorrectAnswer('Fracassar'),
    //     AnswersModel.incorrectAnswer('Desprezar'),
    //     AnswersModel.correctAnswer('Conseguir'),
    // ]),
    // new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
    //     AnswersModel.incorrectAnswer('Argentina'),
    //     AnswersModel.incorrectAnswer('Espanha'),
    //     AnswersModel.incorrectAnswer('Brasil'),
    //     AnswersModel.correctAnswer('Portugal'),
    // ]),
    // new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
    //     AnswersModel.incorrectAnswer('Costa e Silva'),
    //     AnswersModel.incorrectAnswer('Emílio Médici'),
    //     AnswersModel.incorrectAnswer('Ernesto Geisel'),
    //     AnswersModel.correctAnswer('João Figueiredo'),
    // ]),
    // new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
    //     AnswersModel.incorrectAnswer('Ás'),
    //     AnswersModel.incorrectAnswer('Nove'),
    //     AnswersModel.incorrectAnswer('Rei'),
    //     AnswersModel.correctAnswer('Valete'),
    // ]),
    // new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
    //     AnswersModel.incorrectAnswer('Vela'),
    //     AnswersModel.incorrectAnswer('Vento'),
    //     AnswersModel.incorrectAnswer('Vênia'),
    //     AnswersModel.correctAnswer('Veia'),
    // ]),
    // new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
    //     AnswersModel.incorrectAnswer('Abrupção'),
    //     AnswersModel.incorrectAnswer('Abolição'),
    //     AnswersModel.incorrectAnswer('Abnegação'),
    //     AnswersModel.correctAnswer('Ablução'),
    // ]),
    // new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
    //     AnswersModel.incorrectAnswer('Monte Branco'),
    //     AnswersModel.incorrectAnswer('Monte Fuji'),
    //     AnswersModel.incorrectAnswer('Monte Carlo'),
    //     AnswersModel.correctAnswer('Monte Everest'),
    // ]),
    // new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
    //     AnswersModel.incorrectAnswer('Estômago'),
    //     AnswersModel.incorrectAnswer('Pâncreas'),
    //     AnswersModel.incorrectAnswer('Rim'),
    //     AnswersModel.correctAnswer('Pescoço'),
    // ]),
    // new QuestionModel(214, 'A compensação por perda é chamada de...', [
    //     AnswersModel.incorrectAnswer('Déficit'),
    //     AnswersModel.incorrectAnswer('Indexação'),
    //     AnswersModel.incorrectAnswer('Indébito'),
    //     AnswersModel.correctAnswer('Indenização'),
    // ]),
    // new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
    //     AnswersModel.incorrectAnswer('Cuca'),
    //     AnswersModel.incorrectAnswer('Curupira'),
    //     AnswersModel.incorrectAnswer('Boitatá'),
    //     AnswersModel.correctAnswer('Saci-pererê'),
    // ]),
    // new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    //     AnswersModel.incorrectAnswer('Marechal Deodoro'),
    //     AnswersModel.incorrectAnswer('Barão de Mauá'),
    //     AnswersModel.incorrectAnswer('Marquês de Pombal'),
    //     AnswersModel.correctAnswer('Duque de Caxias'),
    // ]),
]   

export default questions;