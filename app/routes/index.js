import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('article');
   }
  //  actions: {
  //   saveRental3(params) {
  //     var newRental = this.store.createRecord('news', params);
  //     newRental.save();
  //     this.transitionTo('index');
  //   }
  // }
});
