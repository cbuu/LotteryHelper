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
    var ji = false;
    if(betnums.length==2){
        var r1 = betnums[0]%12;
        var r2 = betnums[1]%12;
        if(r1==1||r2==1){
            ji = true;
        }
    }
    for(var i in betnums){
        if(betnums[i]%12 == r){
            switch(betnums.length){
                case 6:
                    return money * 1.8;
                case 5:
                    return money * 2;
                case 4:
                    return money * 2.6;
                case 3:
                    return money * 3.5;
                case 2:
                    if(ji){
                        return  money * 4.66;
                    }else{
                        return money * 5.4;
                    }
            }
            
        }
    }
    return 0;
}

function cal_liqi(nums,betnums,money){
    var zhong = true;
    var ji = false;
    for(var i in betnums){
        var r = false;
        for(var j in nums){
            var ir = betnums[i]%12;
            var jr = nums[j]%12;
            if(jr==ir){
                r = true;
                if(ir==1){
                    ji = true;
                }
                break;
            }
        }
        if(!r){
            zhong = false;
            break;
        }
    }
    if(zhong){
        switch(betnums.length){
            case 2:
            if(ji){
                return money * 3.8;
            }else{
                return money * 4;
            }
            break;
    
          case 3:
            if(ji){
                return money * 9;
            }else{
                return money * 10;
            }
            break;
          case 4:
            if(ji){
                return money * 27;
            }else{
                return money * 29;
            }
            break;
          case 5:
            if(ji){
                return money * 81;
            }else{
                return money * 91;
            }
            break;
        }
    }else{
        return 0;
    }
    
}

function cal_lima(nums,betnums,money){
    var zhong = true;
    for(var i in betnums){
        var r = false;
        for(var j in nums){
            var ir = betnums[i];
            var jr = nums[j];
            if(jr==ir){
                r = true;
                break;
            }
        }
        if(!r){
            zhong = false;
            break;
        }
    }
    if(zhong){
        switch(betnums.length){
            case 2:
                return money * 600;
            break;
    
          case 3:

            break;
          case 4:

            break;
          case 5:

            break;
          case 6:

        }
    }else{
        return 0;
    }
}


module.exports = {
    computer: computer,
}