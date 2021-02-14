var books = {
  books: [],
  template: $('#book-tmeplate').html(),
  intit: function(){
    this.cacheDom();
  },
  cacheDom: function(){
    this.$el = $('#bookModule');
    this.$button = this.$el.find('button');
    this.$input = this.$el.find('input');
    this.$ul = this.$el.find('ul');
  }
}