const assert = require('assert');
const getBagCounts = require('../bagCounts/getBagCounts');


describe("Exceptions to be thrown", () => {

    it("Check if errors are thrown for invalid orders", () => {
        const clientOrders = [1.25];
        const availableBagSizes = [1, 2, 4];

        assert.throws(() => getBagCounts(clientOrders, availableBagSizes), Error, 'Order value is invalid');
    });

});