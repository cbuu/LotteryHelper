//index.js
//获取应用实例
var util = require('../../utils/util')
var Logic = require('../../utils/logic')
var Bet = require('../../utils/bet')
var app = getApp()
Page({
  data: {
    userInfo: {},
    numbers:[0,0,0,0,0,0,0],
    range:[],
    bets:[],
  },

  onShow: function () {
    var that = this;
    wx.getStorage({
      key:'bets',
      success: function(res) {
        console.log(res.data);
        that.setData({
          bets:res.data,
        })
      }
    });
  },

  bindPickerChange: function (e) {
    var numbers = this.data.numbers;
    var index = e.detail.value;
    var numIndex = e.target.id[3];
    numbers[numIndex] = this.data.range[index];
    this.setData({
      numbers:numbers,
    })
  },

  add : function() {
    console.log("add");
    wx.navigateTo({
      url:"../select/select"
    })
  },

  onShareAppMessage: function () {
    return {
      title: '转发给你的朋友吧',
      path: 'pages/index?id=123'
    }
  },

  addBet : function(bet){
      var bets = this.data.bets;
      bets.push(bet);
      this.setData({
        bets:bets,
      });

      wx.setStorage({
        key:'bets',
        data:bets,
        success:function(){
          console.log('save success');
        },
      });
  },

  computer : function() {
      var sum = Logic.computer(this.data.numbers,this.data.bets);
      console.log(sum);
      wx.showModal({
        title: '结算',
        content: '总共:'+sum,
        showCancel:false,
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
  },
  
  clear : function() {
    var that = this;
    wx.removeStorage({
      key: 'bets',
      success: function(res) {
        console.log(res.data);
        that.setData({
          bets:[],
        });
      } 
    })
  },

  onLoad: function (option) {
    console.log('onLoad ' + option)
    var that = this
    var range = []
    for(var i=1;i<50;i++){
      range.push(i);
    }
    this.setData({
      range:range,
    })
    console.log('end')
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo);
      that.setData({
        date: util.formatTime(new Date(Date.now())),
        userInfo:userInfo,
      })
    })

  }
})
