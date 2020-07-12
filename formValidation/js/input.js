$(function(){
  'use strict';

  window.Input = function(selector){
    var $ele
      , rule = {};

    function init(){
      find_ele();
      parse_rule()
    }
    // 解决我是谁的问题hhh
    function find_ele(){
      if(selector instanceof jQuery){
        $ele = selector;
      }else{
        $ele = $(selector);
      }
    }
    function parse_rule(){
      var rule_str = $ele.data('rule');
      if(!rule_str) return;

      var rule_arr = rule_str.split('|');
      for(var i  = 0; i < rule_arr.length; i++){
        var item_str = rule_arr[i];
        var item_arr = item_str.split(':');//['min','18']
        rule[item_arr[0]] = JSON.parse(item_arr[1])//{min:18}
      }
    }

    init();

  }
})