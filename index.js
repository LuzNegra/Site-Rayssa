const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const message = document.getElementById("message");
var text_message;
var text_center = false;
/*
var dia;
var mes;
function Muda_Data() {
    dia = parseInt(document.getElementById('dia').value);
    mes = parseInt(document.getElementById('mes').value);
    Mudar_Texto();
}
*/
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
    console.log(date)
}

function Selcionar_Texto() {
    switch (mes) {
        case 1: //Janeiro
            switch (dia) {
                case 31:
                    text_center = false;
                    text_message = "Teste de seleção de data automatica do dia 31/01";
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
                    text_message = "O amor verdadeiro não é aquele que queremos sentir. É o que sentimos independentemente de querer.<br><br>Meu amor por vc é verdadeiro 😻";
                    break;
                case 11:
                    text_center = false;
                    text_message = "Um dia, a distância entre a gente vai ser assim: você logo ali no outro travesseiro.<br><br>Eu espero muito por esse dia!!!";
                    break;
                case 12:
                    text_center = false;
                    text_message = "Que eu possa caminhar contigo o mesmo caminho, que meus passos estejam sempre ao lado dos teus e que tuas mãos não soltem as minhas. Que a nossa vida possa se resumir em felicidade apesar de todos os pesares. Que o meu lugar seja sempre ao lado teu.<br><br>Como vc está ? 😘😘😘🤗";
                    break;
                case 13:
                    text_center = false;
                    text_message = "Quero acordar todas as manhãs com teu sorriso, me aconchegar em teu calor, te fazer rir sem nenhum motivo, desvendar o seu olhar, arrepiar sua pele com cada toque, te fazer feliz todos os dias, de um jeito que ninguém jamais fizera.<br><br>Sabe tem dias que eu não aguento e tenho que ser meloso 😌😌😌";
                    break;
                case 14:
                    text_center = true;
                    text_message = "O amor não se faz apenas de carinho, mas de sentimento." +
                        "<br>O amor não olha apenas aparência, mas o que há por dentro." +
                        "<br>Ele é sofredor, é amigo, é companheiro, é querido." +
                        "<br>E hoje, olhando para você, que me mostrou verdadeiramente o amor, eu posso dizer com certeza: te amo, te quero, te espero…" +
                        "<br>E a cada dia que passa, a cada momento que vivo, essas palavras só aumentam, e mesmo sofrendo ou lutando, eu vou continuar falando: te amo!" +
                        "<br><br>Eu amo vc !!! 😘😘😘";
                    break;
                case 15:
                    text_center = false;
                    text_message = "Eu te prometo arrancar todos os sorrisos que eu conseguir. Prometo te dar toda a minha atenção, todo o meu carinho, todo o meu cuidado. Todos os meus beijos, serão seus. Irei te proteger até onde eu conseguir, e quando eu não conseguir mais… Pedirei a Deus. Eu prometo, todo o amor que houver nessa vida.<br><br>Rayssa você é meu presente que Deus mandou só para mim.💓💓💓";
                    break;
                case 16:
                    text_center = false;
                    text_message = "Amor, meu grande amor. Meu braço direito, meu porto seguro, meu colo e minha paz. Como explicar o quanto te amo se o sentimento é maior que qualquer palavra?<br><br>Falta um dia 😱😱😱😱";
                    break;
                case 17:
                    text_center = false;
                    text_message = "Estava olhando para o céu e comecei a dar a cada estrela uma razão pela qual te quero tanto. Faltaram estrelas! Te amo!<br><br>Será que a minha gata vai vir hoje?";
                    break;
                case 18:
                    text_center = true;
                    text_message = "Amor é quando você se apaixona pela mesma pessoa todos os dias, como se fosse a primeira vez.<br><br>Minha gata esta vindo, vou ai te buscar beijo te amo !!!";
                    break;
                case 19:
                    text_center = false;
                    text_message = "Teu olhar me encanta, teu sorriso me fascina. Tua voz me estremece, teu corpo me enrijece. Teus braços me protegem daqueles que não me merecem.<br>Nossa como e bom dormir do seu lado meu amor saiba que vc foi a melhor coisa que aconteu na minha vida 😘😘😘<br><br>obs: da parabens para a Leticia kkkk acho que depois de ontem vc esqueceu kkkkk";
                    break;
                case 20:
                    text_center = false;
                    text_message = "Tudo o que o nosso amor precisa é de cuidado." +
                        "<br>É ser regado de carinho – todos os dias." +
                        "<br>Ser acalmado com palavras bonitas." +
                        "<br>Aconchegado no calor de um abraço." +
                        "<br>Ser afagado de confiança e cumplicidade." +
                        "<br>E ser morada da felicidade." +
                        "<br>Eu. Você." +
                        "<br>E só." +

                        "<br><br>Mais um dia juntinhos oq achou do cafe da manha que preparei para voce?";
                    break;
                case 21:
                    text_center = false;
                    text_message = "Seu sorriso. Ele mexe comigo. Ele me transmite paz. Ele me faz permanecer seguro. Ele me deixa louco. Ele é lindo.<br><br>Sera que meu amor vai embora hoje ? vai nao mora comigo ";
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
