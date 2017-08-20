
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
        bet.des = '2肖';
        break;

      case 3:
        bet.des = '3肖';
        break;
      case 4:
        bet.des = '4肖';
        break;
      case 5:
        bet.des = '5肖';
        break;
      case 6:
        bet.des = '6肖';
        break;
    }
    
    return bet;
}

function createliqi(t,nums,money){
    var bet = {};
    bet.t = t;
    bet.num = nums;
    bet.money = money;
    switch(nums.length){
      case 2:
        bet.des = '2连肖';
        break;

      case 3:
        bet.des = '3连肖';
        break;
      case 4:
        bet.des = '4连肖';
        break;
      case 5:
        bet.des = '5连肖';
        break;
      case 6:
        bet.des = '6连肖';
        break;
    }
    
    return bet;
}

function createlima(t,nums,money){
var bet = {};
    bet.t = t;
    bet.num = nums;
    bet.money = money;
    switch(nums.length){
      case 2:
        bet.des = '2有码';
        break;

      case 3:
        bet.des = '3有码';
        break;
      case 4:
        bet.des = '4有码';
        break;
      case 5:
        bet.des = '5有码';
        break;
      case 6:
        bet.des = '6有码';
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
  des:'特马'
}
for(var i = 1;i<=49;i++){
    TEMA.nums.push(i);
}


//pingte

var PITE = {
  t:EType.PITE,
  nums:[],
  des:'平特',
}
for(var i = 1;i<=12;i++){
    PITE.nums.push(i);
}

//heqiao

var HEQI = {
  t:EType.HEQI,
  nums:[],
  des:'合肖'
}
for(var i = 1;i<=12;i++){
    HEQI.nums.push(i);
}


//lianqiao

var LIQI = {
  t:EType.LIQI,
  nums:[],
  des:'连肖'
}

for(var i = 1;i<=12;i++){
    LIQI.nums.push(i);
}

//lianma

var LIMA = {
  t:EType.LIMA,
  nums:[],
  des:'连码'
}

for(var i = 1;i<=49;i++){
    LIMA.nums.push(i);
}

var AType = [TEMA,PITE,HEQI,LIQI,LIMA];

module.exports = {
  create: create,
  createheqi:createheqi,
  createliqi:createliqi,
  createlima,createlima,
  type : EType,
  array : AType,
}