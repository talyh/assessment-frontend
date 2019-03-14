import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    size: "small",
    customActions: {
        small: {
            "Expand": function () { this.get('router').transitionTo('products.show', this.productID); },
        },
        large: {
            "Coverage": () => console.log("coverage"),
            "Download": () => console.log("download")
        }
    },
    title: null,
    data: null,
    footer: null,
    productID: null,
    router: service(),
    didRender() {
        // console.log(this.customActions.chosen)
    }
});
