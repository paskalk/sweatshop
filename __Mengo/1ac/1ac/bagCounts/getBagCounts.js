function getBagCounts(clientOrders, availableBagSizes) {
    let allBagCombinations = generatePossibleBagCombinations(availableBagSizes);

    const orderBasket = [];
    clientOrders.forEach(orderItem => {

        let validateOrder = isOrderValid(orderItem);
        if (validateOrder.valid){
            let preparedOrder = prepareIndividualClientOrder(orderItem, allBagCombinations);
            orderBasket.push(preparedOrder.bagConfiguration);            
        } else {
            orderBasket.push(validateOrder.message);
        }
        
    });

    if (clientOrders.length < 2){
        return orderBasket[0]; 
    }
    
    return orderBasket;
}

function isOrderValid(clientOrder){
    let status = {valid:true, message:"Ok"};
    if(clientOrder < 1){
        status.valid = false;
        status.message = "Order below Minimum";
    }
    if(clientOrder > 20){
        status.valid = false;
        status.message = "Order above Maximum";
    }

    let xd = (clientOrder *= 10);
    if(xd % 5 ){
        status.valid = false;
        status.message = "Order Cannot be processed. Enter valid order value";
        throw new Error('Order value is invalid');
    }

    return status;
}

function prepareIndividualClientOrder(clientOrder, allBagCombinations, bagTemplate){

    let optimizedbagConfiguration = [];
    var tres = allBagCombinations.forEach((bagCombination, ind) => { 
        let bagTemplate = bagCombination.map(bagItemSize => ({size:bagItemSize, count:0}));  
        let orderToProcess = clientOrder;
        let totalBags = 0;

        bagTemplate.forEach((currentValue, index) => {
            let bag = fitOrderToBags(orderToProcess, currentValue.size);
            bagTemplate[index].count = bag.bagsNeeded;
            orderToProcess = bag.orderSizeLeft;
            totalBags += bag.bagsNeeded;
        });   
        bagTemplate.sort((a, b) => {return b.size - a.size});
        
        optimizedbagConfiguration[ind] = {
            totalBags:totalBags ,
            bagConfiguration: bagTemplate
        };

    }); 

    optimizedbagConfiguration.sort((a, b) => {return a.totalBags - b.totalBags});

    return optimizedbagConfiguration[0];
}

function generatePossibleBagCombinations(bagSizes){
    var allPossibleBagCombinations = {};
    var allPossibleBagCombinations = bagSizes.reduce(function permute(res, item, key, arr) {
        
        return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) {
            return [item].concat(perm); 
            
        }) || item);
    }, []);
    return allPossibleBagCombinations;
}

function fitOrderToBags(orderSize, bagSize){
    noOfBagsNeeded = 0;
    while (orderSize >= bagSize) {
        noOfBagsNeeded += 1;
        orderSize -= bagSize;
    }
    if (orderSize === 0.5 && bagSize === 1){
        noOfBagsNeeded += 0.5;
        orderSize -= orderSize;
    }
    return { 
        bagsNeeded: noOfBagsNeeded,
        orderSizeLeft: orderSize
    };
}
generatePossibleBagCombinations([1,2,4]);

module.exports = getBagCounts;