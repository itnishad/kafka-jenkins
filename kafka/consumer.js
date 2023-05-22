const kafka = require('./config');

const consume = async() => {
    try {
        const consumer = kafka.consumer({ groupId: 'jersey-group' });
        await consumer.connect();
        console.log('consumer connected');
    
        await consumer.subscribe({
            topic: 'nishad001',
            fromBeginning: false
        });
    
        await consumer.run({
            eachMessage: ({topic, partition, message}) => {
                // const arr = Buffer.from(message.value);
                // const myArray = JSON.parse(message.value);
                // console.dir(myArray,{ depth: null })
                console.log(`To Partiton ${partition} -> message ${message.value.toString()}`);
            }
        });
    } catch (error) {
        console.log(error)
    }
}
consume();