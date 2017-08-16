
function create(t,num,money,des){
    var bet = {};
    bet.t = t;
    bet.num = num;
    bet.money = money;
    bet.des = des;
    return bet;
}

var EType = {
  TEMA:1,
  PITE:2,
}


//tema
var TEMA = {
  t:EType.TEMA,
  nums:[],
  odds:42,
  des:'te'
}
for(var i = 1;i<=49;i++){
    TEMA.nums.push(i);
}


//pingte

var PITE = {
  t:EType.PITE,
  nums:[],
  des:'pt',
}
for(var i = 1;i<=12;i++){
    PITE.nums.push(i);
}

var AType = [TEMA,PITE]

module.exports = {
  create: create,
  type : EType,
  array : AType,
}