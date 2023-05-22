(async () => {
    const kafka = require('./config');
    const admin = kafka.admin();   
    try {
        await admin.connect();
        // await admin.createTopics({
        //     waitForLeaders: true,
        //     topics: [
        //         {
        //             topic: "nishad",
        //             numPartitions: 10,
        //             replicationFactor: 3
        //         }
        //     ],
        // });

        // await admin.createPartitions({
        //     topicPartitions: [
        //         {
        //             topic:"nishad",
        //             count:3,
        //         },
        //     ],
        // });

        // const ofsetList = await admin.fetchTopicOffsets("nishad");
        // console.log(ofsetList);

        // await admin.deleteTopics({
        //     topics: ['nishad']
        // });

        // const topicList = await admin.listTopics();
        // console.log(topicList);

        // const clusterDescribe = await admin.describeCluster()
        // console.log(clusterDescribe);

        // const topicMetadata = await admin.fetchTopicMetadata({topics: ["nishad"]});
        // console.log(topicMetadata.topics[0].partitions);
        // console.log(topicMetadata);
    } catch (error) {
        console.log(error)
    }finally{
        await admin.disconnect();
    }
})()