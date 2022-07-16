
//////////////////////////////////////////////////////////////////////
//Coding Challenge #1


const calcAverage = (a,b,c) => (a+b+c) /3;

console.log(calcAverage(4,6,8));
const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);

const checkWinner = function(avgDolphins,avgKoalas) {
if(avgDolphins >= 2 * avgKoalas){
    console.log(`Dolphins win the trophy (${avgDolphins} vs. ${avgKoalas})`);
}else if(avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolphins})`);
}else{
    console.log(`Match Draw No Team Win`);
}
}
checkWinner(scoreDolphins,scoreKoalas);