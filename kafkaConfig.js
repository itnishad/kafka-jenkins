const {Kafka} = require('kafkajs');

const kafka = new Kafka({
    clientId: 'nishad',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();
producer.connect();

const comsumer = kafka.consumer({groupId: "nb-group"});
comsumer.connect();
comsumer.subscribe({topic: "nishad", fromBeginning: true});
comsumer.run({
    eachMessage: async ({topic, partition, message}) => {
        console.log({
            value: message.value.toString()
        });
    }
});

module.exports = {
    kafka,
    producer,
    comsumer
}