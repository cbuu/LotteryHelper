var Bet = require('bet')
var TEMA_INDEX = 6;
function computer(result,bets){
    var sum = 0;
    for(var i in bets){
        var bet = bets[i];
        console.log(i+ '  pay = ' + bet.money);
        sum += bet.money;

        switch(bet.t){
            case Bet.type.TEMA:
                sum -= cal_tema(result[TEMA_INDEX],bet.num,bet.money);
                break;
            case Bet.type.PITE:
                sum -= cal_pite(result,bet.num,bet.money);
                break;
            case Bet.type.HEQI:
                sum -= cal_heqi(result[TEMA_INDEX],bet.num,bet.money);
                break;
            case Bet.type.LIQI:
                sum -= cal_liqi(result,bet.num,bet.money);
                break;
            case Bet.type.LIMA:
                sum -= cal_lima(result,bet.num,bet.money);
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
    for(var i = 0;i<nums.length;i++){
        var r = nums[i]%12;
        if(betnum%12==r){
             if(betnum%12==1){
                return money * 1.8;
             }else{
                return money * 2;
             }
        }
    }
    return 0;
}

function cal_heqi(num,betnums,money){
    var sum = 0;
    var r = num%12;
    for(var i in betnums){
        if(betnums[i]%12 == r){
            return money * 1.8;
        }
    }
    return 0;
}

function cal_liqi(nums,betnum,money){
    switch(betnum.length){
        case 2:
        bet.des = '2you';
        break;

      case 3:
        bet.des = '3you';
        break;
      case 4:
        bet.des = '4you';
        break;
      case 5:
        bet.des = '5you';
        break;
      case 6:
        bet.des = '6you';
        break;
    }
}

function cal_lima(nums,betnum,money){

}


module.exports = {
    computer: computer,
}