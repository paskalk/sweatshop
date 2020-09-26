const RoundRobinBalancer = require('./objective1');

describe('Objective 1 Tests: ', () => {

    test('can output next server in the round robin sequence', () => {
        const rrBal = new RoundRobinBalancer();
        rrBal.nextServer();
        rrBal.nextServer();
        expect(rrBal.nextServer()).toEqual('c');
    });

});

const LoadBalancer = require('./objective2');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});
    
describe('Objective 2 Tests: ', () => {

    test('can find the least connected server from the pool', () => {
        const serversList = 'abcdefg'.split('');
        const lBal = new LoadBalancer(serversList);
        lBal.smartServerObject['a'].connections = 5;
        lBal.smartServerObject['b'].connections = 5;
        lBal.smartServerObject['c'].connections = 2;
        lBal.smartServerObject['d'].connections = 5;
        lBal.smartServerObject['g'].connections = 5;
        expect(lBal._getLeastConnectedServer()).toEqual('e');
    });

    test('can correctly assign the least connected server with simulations applied', () => {
        const serversList = 'abc'.split('');
        const lBal = new LoadBalancer(serversList);
        lBal.nextServer();
        lBal.nextServer();
        lBal.smartServerObject['a'].connections = 3;
        lBal.smartServerObject['b'].connections = 2;
        lBal.nextServer();
        lBal.nextServer();
        lBal.nextServer();
        expect(console.log.mock.calls[0][0]).toEqual('Queued to server a');
        expect(console.log.mock.calls[1][0]).toEqual('Queued to server b');
        expect(console.log.mock.calls[2][0]).toEqual('Queued to server c');
        expect(console.log.mock.calls[3][0]).toEqual('Queued to server c');
        expect(console.log.mock.calls[4][0]).toEqual('Queued to server b');
    });

    test('can find the server with least load in terms of time', () => {
        const serversList = 'abcdefg'.split('');
        const lBal = new LoadBalancer(serversList);
        lBal.smartServerObject['a'].totalTime = 5;
        lBal.smartServerObject['c'].totalTime = 5;
        lBal.smartServerObject['d'].totalTime = 5;
        lBal.smartServerObject['e'].totalTime = 5;
        lBal.smartServerObject['f'].totalTime = 5;
        lBal.smartServerObject['g'].totalTime = 5;

        expect(lBal._getLeastBusyServer()).toEqual('b');
    });


});