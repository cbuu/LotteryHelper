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
    value:0,
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

  bindfocus : function(e){
    console.log(e.detail.value);
    this.setData({
      value:'',
    })
  },

  bindblur:function(e){
    if(this.data.value==''){
      this.setData({
        value: 0,
      })
    }
  },

  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value,
      value: e.detail.value,
    })
  },

  bindPickerChange : function(e){
    var index = e.detail.value;
    var current = this.data.range[index];
    var currentType = Bet.array[index];
    console.log('curType = ' + currentType);
    var hasSelect = {};
    var qiaos = Bet.getqiao();
    for(var i in qiaos){
      hasSelect[qiaos[i]] = false;
    }
    console.log(qiaos + '  --   ' + hasSelect);
    var numbers = currentType.nums;
    if(currentType.nums.length==12){
      numbers = Bet.getqiao();
    }
    

    this.setData({
      current:current,
      numbers:numbers,
      currentT:currentType.t,
      hasSelect:hasSelect,
    })

    
  },

  selectTap : function(e){
    console.log(e);
    var id;
    if(this.data.currentT = Bet.type.TEMA){
      id = Number(e.target.id);
    }else{
      id = Number(Bet.getqiao().indexOf(e.target.id)+1);
    }
    console.log(id);
    var selections = this.data.selections;
    var hasSelect = this.data.hasSelect;
    var index = this.contains(id,selections);

    var qiao = Bet.getqiao()[id-1];
    if(this.data.currentT = Bet.type.TEMA){
      qiao = id;
    }else{
      qiao = Bet.getqiao()[id-1];
    }
    if(index !== -1){
        selections.splice(index,1);
        hasSelect[qiao] = false;
    }else{
        console.log('change true ' + id);
        selections.push(id);
        hasSelect[qiao] = true;
    }
    console.log('hasSelect '+hasSelect);
    this.setData({
      selections: selections,
      hasSelect: hasSelect,
    })
  },

  contains : function(obj,array){
    for (var i = 0; i < array.length; i++){
        if (array[i] == obj)
            return i;
    }
    return -1;
  },

  //绑定事件
  select: function() {
    console.log("select  " + this.data.selections + "  " + this.data.currentT + "    m = " + Number(this.data.inputValue));
    var pages = getCurrentPages();
    var indexPage = pages[pages.length - 2];
    
    switch(this.data.currentT){
            case Bet.type.TEMA:
            case Bet.type.PITE:
                for(var i in this.data.selections){
                  var selection = this.data.selections[i];
                  indexPage.addBet(Bet.create(this.data.currentT,selection,Number(this.data.inputValue),this.data.current));
                }
                break;
            case Bet.type.HEQI:
                indexPage.addBet(Bet.createheqi(this.data.currentT,this.data.selections,Number(this.data.inputValue)));
                break;
            case Bet.type.LIQI:
                indexPage.addBet(Bet.createliqi(this.data.currentT,this.data.selections,Number(this.data.inputValue))); 
                break;
            case Bet.type.LIMA:
                indexPage.addBet(Bet.createlima(this.data.currentT,this.data.selections,Number(this.data.inputValue)));
                break;
    }
    
    wx.navigateBack()
  },

  

  
})