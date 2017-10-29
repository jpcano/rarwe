import Ember from 'ember';
import wait from '../../../utils/wait';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('bands.band');
    //return wait(this.modelFor('bands.band'), 3000);
  },

  actions: {

    save: function() {
      var controller = this.get('controller'),
        band = controller.get('model');
      return band.save();
    },

    willTransition: function (transition) {
      var controller = this.get('controller'),
        leave;
      if (controller.get('isEditing')) {
        leave = window.confirm("You have unsaved changes. Are you sure you want to leave ? ");
        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    }
  }
});
