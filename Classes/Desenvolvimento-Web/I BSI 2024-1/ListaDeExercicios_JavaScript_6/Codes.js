function FahrToCels() {
    var Fahr, Cels;
    Fahr = prompt("Fahrenheit");
    Cels = (Fahr - 32) * (5 / 9);
    alert(Fahr + " Fahrenheit é: " + Cels + " Celsius");
}

function Hipoten() {
    var CatA, CatB, Hipot;
    CatA = prompt("Cateto A ");
    CatB = prompt("Cateto B ")
    Hipot = Math.sqrt((CatA ** 2) + (CatB ** 2))
    alert(Hipot);
}

function InputAnswerL() {
    var Inicial = 170.00;
    var Proposta = prompt("Insira a proposta");
    var Lucro = Proposta - Inicial;
    alert(Lucro)
}
function InputAnswerT() {
    var TempoPC = 78;
    var TempoPD = prompt("Quantas horas por dia?");
    var Tempo = Math.ceil(TempoPC / TempoPD)
    var TempoR = (TempoPC % TempoPD) * 24
    alert("O Gamer vai levar " + Tempo + " Dias");
}

function InputAnswerM() {
    var Num1 = prompt("Numero 1");
    var Num2 = prompt("Numero 2");
    if (Num1 > Num2) {
        alert(Num1 + " É o Maior");
    }
    else if (Num1 < Num2) {
        alert(Num2 + " É o Maior");
    }
    else {
        alert("Eles são Iguais");
    }
}

function InputAnswerPN() {
    var Num = prompt("Numero");
    if (Num > 0) {
        alert(Num + " é Positivo")
    }
    else if (Num < 0) {
        alert(Num + " é Negativo")
    }
    else {
        alert(Num + " é Neutro")
    }
}

function InputAnswerIP() {
    var Nums = 0
    while (Nums != 16) {
        if (Nums % 2 == 0) {
            alert(Nums + " é Par")
        }
        else {
            alert(Nums + " é Impar")
        }
        Nums = Nums + 1
    }
}

function OutputAnswerS1_100() {
    var Nums1_100 = 0
    var Spar = 0
    var Simp = 0
    while (Nums1_100 != 101) {
        if (Nums1_100 % 2 == 0) {
            Spar = Spar + Nums1_100
        }
        else {
            Simp = Simp + Nums1_100
        }
        Nums1_100 = Nums1_100 + 1
    }
    alert("Soma par: " + Spar + " Soma Impar: " + Simp)
}