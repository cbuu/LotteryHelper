//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    numbers:[0,0,0,0,0,0,0],
    range:[],
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var numbers = this.data.numbers;
    var index = e.detail.value;
    var numIndex = e.target.id[3];
    numbers[numIndex] = this.data.range[index];
    this.setData({
      numbers:numbers,
    })
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
      that.setData({
        date: util.formatTime(new Date(Date.now())),
        userInfo:userInfo,
      })
    })

  }
})
