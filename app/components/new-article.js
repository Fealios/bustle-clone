import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image_url: this.get('image_url'),
        text: this.get('text')
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
