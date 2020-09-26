class RoundRobinBalancer{
    constructor(){
        this.serverArray = 'abcdefg'.split('');        
    }

    /* 
    Uses a queue to manage the servers being assigned. 
    The server at the front of the queue is returned then pushed back to the end of the queue.

    Assumptions:
        - The server list always has at least one server
    */
    nextServer(){
        let server = this.serverArray.shift();
        this.serverArray.push(server);
        return server;
    }
    
}

module.exports = RoundRobinBalancer;

