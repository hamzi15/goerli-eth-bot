require('dotenv').config();
const {REDIS_PORT, REDIS_HOST, REDIS_KEY} = process.env
const {createClient} = require('redis');
const api = require('./api.js');
// console.log(REDIS_HOST)

(async () => {
    const client = createClient({
        url: 'redis://musa:Password1!@redis-10774.c52.us-east-1-4.ec2.cloud.redislabs.com:10774'
    })

    // 
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();

})();

module.exports = {
    addToCache: async function(address){
        const time = new Date()
        await client.set(address, dailycount, weeklyCount, validatedTxs, 
            {
            EX: 604800,
            NX: true
        }
        
        )
    },

    checkWeeklyLimit: async function(address){
        const weeklyCount = await client.hget(address, weeklyCount);
        return weeklyCount <= 330;
    },
    checkDailyLimit: async function(address){
        const dailyCount = await client.hget(address, dailyCount);
        return dailyCount <= 66;
    },
    confirmTransaction: async function(address){
        // await client.hset(address, dailyCount);
        // await client.hset(address, weeklyCount);
        // await client.hset(address, validatedTransactions);
    },
}
