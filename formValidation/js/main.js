// 选中页面中所有的input[data-rule]

// 解析每一个input的验证规则

//验证
$(function(){
  'use strict';

  var validator = new Validator('a8',{
    max:100,
    min:18,
    maxlength:30,
    pattern: '^[a-zA-Z0-9]*$'
  })

  // var res = validator.validate_max();
  // var res = validator.validate_min();
  // var res = validator.validate_maxlength();
  // var res = validator.validate_numeric();
  // var res = validator.validate_required();
  var res = validator.validate_pattern();
  console.log('res:',res);
});
