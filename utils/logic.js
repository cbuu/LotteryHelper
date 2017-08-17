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
            case Bet.type.PITE:
                sum -= cal_pite(result,bet.num,bet.money);
                break;
            case Bet.type.HEQI:

                break;
            case Bet.type.LIQI:

                break;
            case Bet.type.LIMA:

                break;
        }
    }

    console.log('allpay = ' + sum);


    return sum;
}

function cal_tema(num,betnum,money){
    if(num == betnum){
        return 42 * money;
    }else{
        return 0
    }
}

function cal_pite(nums,betnum,money){
    var sum = 0;
    for(var i = 0;i<nums.length;i++){
        var r = Number(nums[i]);
        if(Math.abs(r-betnum)%12==0){
             if(betnum%12==1){
                return money * 1.8;
             }else{
                return money * 2;
             }
        }
    }
    return 0;
}

function cal_heqi(nums,betnum,money){
    
}

function cal_liqi(nums,betnum,money){

}

function cal_lima(nums,betnum,money){
    
}


module.exports = {
    computer: computer,
}