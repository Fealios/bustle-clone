import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image_url: this.get('image_url'),
        text: this.get('text')
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
