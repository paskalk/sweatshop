class LoadBalancer{
    /* 
    I use an object to enable the storage of useful properties about each server. 
    The assumption is that only number of connections and time are important for this task.
    */
    constructor(serversList){
        this.serverArray = serversList;
        this.smartServerObject = {};

        this.serverArray.forEach(val => {
            this.smartServerObject[val] = {
                totalTime: 0,
                connections: 0
            };
        });
        
    }

    /* 
    Selects the server to use based on the total duration of time taken to process each request by the server.
    This function is working and tested but not implemented as it wasn't a requirement, however, it offers some advantages such as faster processing times since the durations for each request are known. 
    */
    _getLeastBusyServer(){
        let leastLoadedServer = Object.keys(this.smartServerObject)[0];
        
        for (let item in this.smartServerObject){
            
            if (this.smartServerObject[item].totalTime < this.smartServerObject[leastLoadedServer].totalTime){
                leastLoadedServer = item;
            }
        }

        return leastLoadedServer;
    }

    /*  Selects the server to use based on the number of connections per server */
    _getLeastConnectedServer(){
        let leastLoadedServer = Object.keys(this.smartServerObject)[0];
        
        for (let item in this.smartServerObject){
            
            if (this.smartServerObject[item].connections < this.smartServerObject[leastLoadedServer].connections){
                leastLoadedServer = item;
            }
        }

        return leastLoadedServer;
    }

    /* 
    This function uses inbuilt Math libraries to obtain a random number between 1 and 10 that will be used as  duration.
    The number of connections made to each server is used to determine which server gets the next assignemnt. 
    An extra function _getLeastBusyServer() provides the capability to make the next assignemnt based on the total time the server will be used before it is released.
    The server used can also be returned here if required.

    Assumes connections are made sequentially and no race conditions, if any, are handled.
    */
    nextServer(){
        let randomTime = Math.floor(Math.random() * 10);

        let server = this._getLeastConnectedServer();

        this._simulateConnection(server, randomTime);  
    }

    /* 
    This simulates the connection to the available server

    I used the timer provided by the setTimeout function to reset the timeTaken and connections properties in the server object after the time elapses. 
    It happens asynchronously which allows the rest of the code to continue executing.
    */
    _simulateConnection(server, duration){
        console.log(`Queued to server ${server}`);
        this.smartServerObject[server].connections += 1;
        this.smartServerObject[server].totalTime += duration;

        setTimeout(()=>{
            console.log(server, this.smartServerObject[server].connections);
            this.smartServerObject[server].connections -= 1;
            this.smartServerObject[server].totalTime -= duration;
        }, duration * 1000); 
    }
    
}

module.exports = LoadBalancer;


