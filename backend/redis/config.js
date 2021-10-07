const Redis = require("ioredis");
const redisClient = new Redis({
  host:'redis-server', 
  port: 6379
});

const { promisify } = require('util');

const syncRedisGet = promisify(redisClient.get).bind(redisClient);
const syncRedisSet = promisify(redisClient.set).bind(redisClient);

module.exports = { syncRedisGet, syncRedisSet };