import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    size: "small",
    buttons: {
        small: {
            "Expand": function () { this.get('router').transitionTo('products.show', this.productID); },
        },
        large: {
            "Coverage": () => console.log("Coverage"),
            "Download": () => console.log("Download")
        }
    },
    tabs: {
        large: {
            options: {
                "Data Sample": () => console.log("Data Sample"),
                "Coverage": () => console.log("Coverage")
            },
            selected: 0
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
