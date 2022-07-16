
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


/////////////////////////////////////////////////////////////////////

//coding Challenge #2

const calcTip = bill => 50>=bill && bill<=300 ? bill*015 : bill*0.2; 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills,tips,total);



