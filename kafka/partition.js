// const kafka = require('./config');
const { Kafka } = require('kafkajs');

const createPartition = async () => {
    try {
        const kafka = new Kafka({
            clientId: "nishad",
            brokers: ["https://3def-202-133-91-34.in.ngrok.io:9092"]
        });
        
        const admin = kafka.admin();
        await admin.connect();
    
        await admin.createTopics({
            topics: [
                {
                    "topic": "jersey7",
                    numPartitions: 2
                }
            ]
        });
        console.log(`2 partition created`);
        await admin.disconnect();
    } catch (error) {
        console.log(error);
    }
}

createPartition();