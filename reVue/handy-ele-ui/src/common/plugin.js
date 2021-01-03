let Toast = {}
Toast.install = function(Vue, options){
  let opt = {
    defaultType: 'center',// define default position
    duration: '1500',// default duartaion
  }
  for(let prop in options){
    opt[prop] = options[prop]
  }
  Vue.prototype.$toast = (tips,type) =>{
    if(type){
      opt.defaultType = type
    }
    // if(tips){}
    let toastTpl = Vue.extend({
      template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
    })
  }
}