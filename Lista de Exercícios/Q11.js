/*
    Calculo da nota do aluno:
    
    Média Semestral: MS = (Av1+Av2+Av3) / 3

    Média Final: MF = (6 *MS + 4*AF) / 10
*/

let av1 = 5.2;
let av2 = 7.5;
let av3 = 4.7;

const ms = (av1 + av2 + av3) / 3;

if(ms >= 7){
    console.log(`Sua média semestral foi ${ms.toFixed(2)}, você passou por média.`);
}
else if(ms >= 4){
    const precisa = (7 * 10 - 6 * ms) / 4;
    console.log(`Sua média semestral foi ${ms.toFixed(2)}, você fará a prova final precisando tirar pelo menos ${precisa.toFixed(2)} para passar na final.`);
    let af = 8.8;
    const mf = (6 * ms + 4 * af) / 10;

    if(mf >= 7){
        console.log(`Sua média final foi ${mf.toFixed(2)}, você passou.`);
    }
    else {
        console.log(`Sua média final foi ${mf.toFixed(2)}, você reprovou.`)
    }
}
else {
    console.log(`Sua média semestral foi ${ms.toFixed(2)}, você reprovou por média.`);
}