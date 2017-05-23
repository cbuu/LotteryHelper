//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name: 'Hello World',
    userInfo: {},
    array: [1, 2, 3, 4, 5]
  },
  //事件处理函数
  click: function(){
    this.setData({
      name:'fuck'
    })
    wx.switchTab({
      url: '/pages/setting/setting',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
