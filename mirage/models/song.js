import { Model, belongsTo } from 'ember-cli-mirage';
//import DS from 'ember-data';

export default Model.extend({
  //title: DS.attr('string'),
  //rating: DS.attr('number'),
  band: belongsTo('band')
});
