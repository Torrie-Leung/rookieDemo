// 选中页面中所有的input[data-rule]

// 解析每一个input的验证规则

//验证
$(function(){
  'use strict';

  var validator = new Validator('hahdhfl',{
    max:100,
    min:18,
    maxlength:30
  })

  // var res = validator.validate_max();
  // var res = validator.validate_min();
  var res = validator.validate_maxlength();
  console.log('res:',res);
});
