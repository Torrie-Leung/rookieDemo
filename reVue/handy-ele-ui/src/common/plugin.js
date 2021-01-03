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
    if(document.getElementsByClassName('vue-toast').length){
      return
    }
    let toastTpl = Vue.extend({
      template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
    })
    let tpl = new toastTpl().$mount().$el
    // insert tpl
    document.body.appendChild(tpl)
    // use timer to remove tpl
    setTimeout(()=>{
      document.body.removeChild(tpl)
    },opt.duration)
  }
  ['bottom','center','top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips,type)
    }
  })
}

export{
  Toast
}