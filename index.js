/*const date = new Date();
const dia = 5//date.getDate();
const mes = 2//date.getMonth() + 1;*/
const message = document.getElementById("message");

var dia;
var mes;
var text_message;
var text_center = false;
function Muda_Data() {
    dia = parseInt(document.getElementById('dia').value);
    mes = parseInt(document.getElementById('mes').value);
    Mudar_Texto();
}
function Mudar_Texto() {
    Selcionar_Texto();
    if (text_center) {
        message.innerHTML = "<p class=\"text_center\" id=\"text_center\"> \n" +
            text_message +
            "</p>"
    } else {
        message.innerHTML = "<p class=\"text_justify\" id=\"text_justify\"> \n" +
            text_message +
            "</p>"
    }

}

function Selcionar_Texto() {
    switch (mes) {
        case 1: //Janeiro
            switch (dia) {
                case 1:
                    text_message = "";
                    break;
                case 2:
                    text_message = "";
                    break;
                case 3:
                    text_message = "";
                    break;
                case 4:
                    text_message = "";
                    break;
                case 5:
                    text_message = "";
                    break;
                case 6:
                    text_message = "";
                    break;
                case 7:
                    text_message = "";
                    break;
                case 8:
                    text_message = "";
                    break;
                case 9:
                    text_message = "";
                    break;
                case 10:
                    text_message = "";
                    break;
                case 11:
                    text_message = "";
                    break;
                case 12:
                    text_message = "";
                    break;
                case 13:
                    text_message = "";
                    break;
                case 14:
                    text_message = "";
                    break;
                case 15:
                    text_message = "";
                    break;
                case 16:
                    text_message = "";
                    break;
                case 17:
                    text_message = "";
                    break;
                case 18:
                    text_message = "";
                    break;
                case 19:
                    text_message = "";
                    break;
                case 20:
                    text_message = "";
                    break;
                case 21:
                    text_message = "";
                    break;
                case 22:
                    text_message = "";
                    break;
                case 23:
                    text_message = "";
                    break;
                case 24:
                    text_message = "";
                    break;
                case 25:
                    text_message = "";
                    break;
                case 26:
                    text_message = "";
                    break;
                case 27:
                    text_message = "";
                    break;
                case 28:
                    text_message = "";
                    break;
                default:
                    text_message = "Você não possui mensagens nos dias de hoje";
                    break;
            }
            break;
        case 2: //Fevereiro
            switch (dia) {
                case 1:
                    text_center = false;
                    text_message = "Eu amo absolutamente tudo em vc sua beleza, sua inteligência, seu caráter, sua personalidade e até as suas manias. Eu não poderia pedir por uma pessoa mais especial para compartilhar a minha vida. Parabéns pelo seu dia, meu amor ❣️❣️❣️😘😘😘<br><br>Te desejo tudo de bom que tem nesse mundo!!!";
                    break;
                case 2:
                    text_center = false;
                    text_message = "Você é a pessoa mais doce que eu já conheci, é a minha alegria ao amanhecer, é a felicidade que eu tenho em acordar, é a eternidade que quero que fique em mim para sempre!!!<br><br>Ah, bom dia minha gata !!!";
                    break;
                case 3:
                    text_center = false;
                    text_message = "Irei cuidar de você. Irei te proteger, te fazer sorrir, te entender, te ouvir. Irei secar qualquer lágrima que ousar cair. Desviarei todo mal de seu pensamento. Estarei contigo a todo momento.<br><br>Estou pensando em vc 😍 ";
                    break;
                case 4:
                    text_center = false;
                    text_message = "O amor é não poder desistir mesmo sabendo que haverá problemas e pedras nos caminhos e nas trilhas dessa vida, amor é ficar, perdoar, e muito mais, é insistir até o final. O amor é o que eu não me canso de sentir por você.<br><br>Será que vai chover hoje ?";
                    break;
                case 5:
                    text_center = true;
                    text_message = "Eu sei e você sabe, já que a vida quis assim" +
                        "<br>Que nada nesse mundo levará você de mim" +
                        "<br>Eu sei e você sabe que a distância não existe" +
                        "<br>Que todo grande amor" +
                        "<br>Só é bem grande se for triste" +
                        "<br>Por isso, meu amor" +
                        "<br>Não tenha medo de sofrer" +
                        "<br>Que todos os caminhos me encaminham pra você" +
                        "<br>Assim como o oceano" +
                        "<br>Só é belo com luar" +
                        "<br>Assim como a canção" +
                        "<br>Só tem razão se se cantar" +
                        "<br>Assim como uma nuvem" +
                        "<br>Só acontece se chover" +
                        "<br>Assim como o poeta" +
                        "<br>Só é grande se sofrer" +
                        "<br>Assim como viver" +
                        "<br>Sem ter amor não é viver" +
                        "<br>Não há você sem mim" +
                        "<br>E eu não existo sem você" +

                        "<br><br>Manda mensagem estou com saudades 😞";
                    break;
                case 6:
                    text_center = false;
                    text_message = "Eu escolhi você, e sempre vou escolher, escolho você dez mil vezes. É com você que me sinto bem, é ao seu lado que encontro tudo aquilo que eu precisava, aquilo que me faltava e o que eu não imaginaria ter. Te quero muito mais que você possa imaginar, algo que não consigo explicar, apenas demonstrar em carinhos, demonstrar todo o bem que você me faz.<br><br>Como passou a noite ? ";
                    break;
                case 7:
                    text_center = false;
                    text_message = "Ontem você fez parte dos meus melhores sonhos. Hoje você faz parte da minha melhor realidade.<br><br>Vc é meu sonho 😍😍";
                    break;
                case 8:
                    text_center = false;
                    text_message = "Eu queria que você estivesse aqui ou eu estivesse aí ou que a gente estivesse junto em qualquer lugar!<br><br>Sabia que amo seu sorriso ?";
                    break;
                case 9:
                    text_center = false;
                    text_message = "Às vezes me pego a pensar sobre todas as escolhas que fiz na vida, e com certeza, você foi a melhor delas.<br><br>Rayssa vc e a mulher que mais amo nesse mundo !!!";
                    break;
                case 10:
                    text_center = false;
                    text_message = "O amor verdadeiro não é aquele que queremos sentir. É o que sentimos independentemente de querer.<br><br>Meu amor por vc é";
                    break;
                default:
                    text_center = true;
                    text_message = "Você não possui mensagens nos dias de hoje";
                    break;
            }
            break;
        default:
            text_center = true;
            text_message = "Você não possui mensagens esse mês"
            break;
    }
}
