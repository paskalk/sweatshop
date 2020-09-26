const assert = require('assert');
const getBagCounts = require('../bagCounts/getBagCounts');


describe("Extra Tests", () => {
    it("Able to process multiple orders", () => {
        const clientOrders = [6,4,19];
        const availableBagSizes = [1, 2, 4];

        const result = getBagCounts(clientOrders, availableBagSizes);

        assert.deepEqual(result, [
            [
                { size: 4, count: 1 },
                { size: 2, count: 1 },
                { size: 1, count: 0 }
            ],
            [
                { size: 4, count: 1 },
                { size: 2, count: 0 },
                { size: 1, count: 0 }
            ],
            [
                { size: 4, count: 4 },
                { size: 2, count: 1 },
                { size: 1, count: 1 }
            ]
        ]);
    });

    it("Minimizes number of bags", () => {
        const clientOrders = [6];
        const availableBagSizes = [1, 3, 4];

        const result = getBagCounts(clientOrders, availableBagSizes);

        assert.deepEqual(result, [
            { size: 4, count: 0 },
            { size: 3, count: 2 },
            { size: 1, count: 0 }
        ]);
    });

    it("Able to handle half bags", () => {
        const clientOrders = [3.5, 12.5];
        const availableBagSizes = [1, 2, 4];

        const result = getBagCounts(clientOrders, availableBagSizes);

        assert.deepEqual(result, [
            [
                { size: 4, count: 0 },
                { size: 2, count: 1 },
                { size: 1, count: 1.5 }
            ],
            [
                { size: 4, count: 3 },
                { size: 2, count: 0 },
                { size: 1, count: 0.5 }
            ]
        ]);
    });

});