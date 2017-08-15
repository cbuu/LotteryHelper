var Bet = require('bet')
function computer(result,bets){
    var sum = 0;
    for(var i in bets){
        var bet = bets[i];
        console.log(i+ '  pay = ' + bet.money);
        
        sum += bet.money;

        switch(bet.t){
            case Bet.type.TEMA:
                sum -= cal_tema(result[6],bet.num,bet.money);
                break;
        }
    }

    console.log('allpay = ' + sum);


    return sum;
}

function cal_tema(num,betnum,money){
    if(num === betnum){
        return 42 * money;
    }else{
        return 0
    }
}


module.exports = {
    computer: computer,
}