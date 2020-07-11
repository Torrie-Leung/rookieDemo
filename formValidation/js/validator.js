$(function(){
  'use strict';
  window.Validator = function(val,rule){

    this.validate_max = function(){
      pre_max_min()
      return val <= rule.max
    }
    this.validate_min = function(){
      pre_max_min()
      return val >= rule.min
    }
    this.validate_maxlength = function(){
      pre_length()
      return val.length <= rule.maxlength
    }
    this.validate_minlength = function(){
      pre_length()
      return val.length >= rule.minlength
    }
    this.validate_numeric = function(){
      return $.isNumeric(val);
    }
    this.validate_nullable = function(){
      var real = $.trim(val)
      if(!real && real !== 0){
        return false;
      }
      return true;
    }
    // for this.validate_max or this.validate_min
    function pre_max_min(){
      val = parseFloat(val);
    }

    // for this.validate_maxlength or this.validate_minlength
    function pre_length(){
      val = val.toString();
    }
  }
})