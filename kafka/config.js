const {Kafka} = require('kafkajs');

const kafka = new Kafka({
    clientId: 'nishad',
    brokers: ['103.123.8.166:9092', '64.227.150.19:9092', '103.123.8.166:9093']
});

module.exports = kafka;