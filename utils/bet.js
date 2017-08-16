
function create(t,num,money){
    var bet = {};
    bet.t = t;
    bet.num = num;
    bet.money = money;
    return bet;
}

var EType = {
  TEMA:1,
}

var TEMA = {
  t:EType.TEMA,
  nums:[],
  odds:42,
  des:'tama'
}
for(var i = 1;i<=3;i++){
    TEMA.nums.push(i);
}

var AType = [TEMA]

module.exports = {
  create: create,
  type : EType,
  array : AType,
}