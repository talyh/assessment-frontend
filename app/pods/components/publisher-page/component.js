import Ember from 'ember'
import Component from '@ember/component';

export default Component.extend({
    publisher: null,
    products: null,
    mode: "summary",
    gridSize: Ember.computed("mode", function () { return this.get("mode") == "summary" ? "small" : "large" }),
    logoSize: Ember.computed("mode", function () { return `logo-${this.mode}` })
});
