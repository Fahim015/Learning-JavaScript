
//////////////////////////////////////////////////////////////////////
//Coding Challenge #1
/*

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
*/

/////////////////////////////////////////////////////////////////////
//coding Challenge #2
/*
const calcTip = bill => 50>=bill && bill<=300 ? bill*015 : bill*0.2; 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills,tips,total);

*/
/////////////////////////////////////////////////////////////////////
//Codding Challenge #3
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
       this.bmi= this.mass/this.height **2;
    return this.bmi;
    }

    
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi= this.mass/this.height **2;
        return this.bmi;
    }
    
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher then 
    ${john.fullName}'s BMI (${john.bmi})
    `)
}else if (john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher then 
    ${mark.fullName}'s BMI (${mark.bmi})
    `)
}
*/
/////////////////////////////////////////////////////////////////////

//Coding Challenge # 4
/*
const calcTip = function(bill){
    return bill>=50 && bill<=300? bill*0.15: bill *0.2;
}

const bills = [22,292,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
const tip = calcTip(bills[i]);
tips.push(tip);
totals.push(tip+bills[i]);
}
console.log(`Bills is: [${bills}] and 
Tips is: [${tips}] and 
Total is: [${totals}]`);
*/
//////////////////////////////////////////////////////////////////////
