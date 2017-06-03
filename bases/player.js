var Player = {
    name:'',
    antes:[],
    count:0,

    create : function(name){
      this.name = name
      return this;
    },

    addAnte : function(ante){
      this.antes.push(ante)
    }
    
}


module.exports = Player;





