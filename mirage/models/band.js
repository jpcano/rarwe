import { Model, hasMany } from 'ember-cli-mirage';
//import DS from 'ember-data';

export default Model.extend({
 // name: DS.attr('string'),
  //description: DS.attr(),
  songs: hasMany('song')
});
