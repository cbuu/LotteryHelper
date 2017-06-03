//index.js
//获取应用实例
var util = require('../../utils/util.js')
var Player = require('../../bases/player.js')
var app = getApp()
Page({
  data: {
    input:'',
    date:'',
    userInfo: {},
    players: []
  },
  //事件处理函数
  addPlayer: function(){
      var newPlayer = Player.create(this.data.input)
      console.log(newPlayer)
      this.data.players.push(newPlayer)
      this.setData({
        players: this.data.players,
      })
  },

  tapForDetail : function(e){
    var index = e.currentTarget.dataset.index;
    var players = this.data.players;
    console.log(index);
  },

  inputChange : function(e){
    this.setData({ input: e.detail.value })
  },

  onShareAppMessage: function () {
    return {
      title: '转发给你的朋友吧',
      path: 'pages/index?id=123'
    }
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        date: util.formatTime(new Date(Date.now())),
        userInfo:userInfo
      })
    })
  }
})
