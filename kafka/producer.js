const kafka = require('./config');

const produce = async () => {
    const producer = kafka.producer();
    try {
        // const jerseyNumber = process.argv[2];
        await producer.connect();
        // console.log("producer connected");
        //
        // const tamim =JSON.stringify({data:["Tamim Iqbal", "Opener"]})
        // // const buffer = Buffer.from(tamim);
        //
        // const players = {
        //     2: "Mashrafe Mortaza",
        //     3: "Taskin Ahmed",
        //     9: "Mushfiqur Rahim",
        //     28: "tamim",
        //     53: "Mehidy Hasan Miraz"
        // }

        const players = {
            0: "Mashrafe Mortaza",
            1: "Taskin Ahmed",
            2: "Mushfiqur Rahim",
            3: "tamim",
            4: "Mehidy Hasan Miraz"
        }

        // const producedData = await producer.send({
        //     topic: 'nishad',
        //     messages: [
        //         {
        //             value: players[jerseyNumber]
        //         }
        //     ]
        // });
        let count = 0;

        while (1) {

            const producedData = await producer.send({
                topic: 'nishad',
                messages: [
                    {
                        key: `${count++}`,
                        value: `${count}`
                    }
                ]
            });
            setTimeout(()=>{

            },5000);
        }

    //     while(1){
    //     let cnt = 5;

    //     while (cnt--) {

    //         const producedData = await producer.send({
    //             topic: 'nishad007',
    //             messages: [
    //                 {
    //                     key: `${count++}`,
    //                     value: `${count}`
    //                 }
    //             ]
    //         });
    //     }
    // }

        // console.log(`Produced data ${JSON.stringify(producedData)}`);
        await producer.disconnect();
    } catch (error) {
        console.log("error: ", error);
        // retry producing the message
        // or log the error for analysis
        // or ignore the error if it's not critical to your application

    } finally {
        await producer.disconnect();
    }
}
produce();