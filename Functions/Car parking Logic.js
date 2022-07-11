

let row="";
let careNumber;
let amountPaid;
let choice;



for(i=1;i<=10;i++){
        row+="* ";
}

do{
        userInput();
        printSlip();
        adminChoice();
}
while(choice!='c')

function userInput(){
        careNumber=prompt("Enter Car Number");
        amountPaid=prompt("Enter Amount Paid");
}

function printSlip(){
        starShape();
        console.log(`Care Number: ${careNumber}`);
        console.log(`Amount Paid: ${amountPaid}`);
        dashShape();
        console.log("  ");
}

function adminChoice(){
        choice= prompt("Enter C To Exit or Press any Key to Continue");
}


function crossShape(){
        let row="";
        for(i=1;i<=10;i++){
                row+="X ";
        }
       console.log(row);

}

function starShape(){
        let row="";
        for(i=1;i<=10;i++){
                row+="* ";
        }
        console.log(row);
}

function dashShape(){
        let row="";
        for(i=1;i<=10;i++){
                row+="- ";
        }
console.log(row);
}





