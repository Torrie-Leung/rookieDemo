// 选中页面中所有的input[data-rule]

// 解析每一个input的验证规则

//验证
$(function(){
  'use strict';

  var validator = new Validator('20',{
    max:100,
    min:18,
  })

  var res = validator.validate_max();
  console.log('res:',res);
});
