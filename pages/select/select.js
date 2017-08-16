// select.js
var Bet = require("../../utils/bet");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:"请选择",
    currentT:0,
    inputValue:0,
    selections:[],
    range:[],
    numbers:[],
    hasSelect:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var range = [];
    for(var i in Bet.array){
      var AType = Bet.array[i];
      range.push(AType.des);
    }

    this.setData({
      range:range,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  bindPickerChange : function(e){
    var index = e.detail.value;
    var current = this.data.range[index];
    var currentType = Bet.array[index];
    console.log('curType = ' + currentType);
    var hasSelect = [];
    for(var i=0;i<currentType.nums.length;i++){
      hasSelect[i] = false;
    }
    this.setData({
      current:current,
      numbers:currentType.nums,
      currentT:currentType.t,
    })

    
  },

  selectTap : function(e){
    console.log(e);
    var id = e.target.id;
    console.log(id);
    var selections = this.data.selections;
    var hasSelect = this.data.hasSelect;
    if(selections.hasOwnProperty(id)){
        delete selections[id];
        hasSelect[id] = false;
    }else{
        console.log('change true ' + id);
        selections[id] = id;
        hasSelect[id] = true;
    }

    this.setData({
      selections: selections,
      hasSelect: hasSelect,
    })
  },

  //绑定事件
  select: function() {
    console.log("select");
    var pages = getCurrentPages();
    var indexPage = pages[pages.length - 2];
    for(var i in this.data.selections){
      var selection = this.data.selections[i];
      indexPage.addBet(Bet.create(this.data.currentT,selection,Number(this.data.inputValue),this.data.current));
    }
    
    wx.navigateBack()
  },
})