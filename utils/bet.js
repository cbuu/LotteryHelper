
function create(t,num,money,des){
    var bet = {};
    bet.t = t;
    bet.num = num;
    bet.money = money;
    bet.des = des;
    return bet;
}

function createheqi(t,nums,money){
    var bet = {};
    bet.t = t;
    bet.num = nums;
    bet.money = money;
    switch(nums.length){
      case 2:
        bet.des = '2li';
        break;

      case 3:
        bet.des = '3li';
        break;
      case 4:
        bet.des = '4li';
        break;
      case 5:
        bet.des = '5li';
        break;
      case 6:
        bet.des = '6li';
        break;
    }
    
    return bet;
}

var EType = {
  TEMA:1,
  PITE:2,
  HEQI:3,
  LIQI:4,
  LIMA:5,
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

//heqiao

var HEQI = {
  t:EType.HEQI,
  nums:[],
  des:'heqiao'
}
for(var i = 1;i<=12;i++){
    HEQI.nums.push(i);
}


//lianqiao

var LIQI = {
  t:EType.LIQI,
  nums:[],
  des:'lianqiao'
}

for(var i = 1;i<=12;i++){
    LIQI.nums.push(i);
}

//lianma

var LIMA = {
  t:EType.LIMA,
  nums:[],
  des:'lianma'
}

for(var i = 1;i<=49;i++){
    LIMA.nums.push(i);
}

var AType = [TEMA,PITE,HEQI,LIQI,LIMA];

module.exports = {
  create: create,
  type : EType,
  array : AType,
}