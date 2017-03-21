import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    saveArticle(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('administrator');
    },
    destroyArticle(article) {
      if (confirm("Are you sure you want to delete this article?")) {
        article.destroyRecord();
        this.transitionTo('administrator');
      }
    }
  }
});
