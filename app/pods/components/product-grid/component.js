import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    title: null,
    data: null,
    footer: null,
    productID: null,
    router: service(),
    customActions: {
        "Expand": function () { this.get('router').transitionTo('products.show', this.productID); }
    },
});
