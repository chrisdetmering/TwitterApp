const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const config = require("dotenv").config()
const token = process.env.BEARER_TOKEN;

const app = express();






app.use(express.static(path.join(__dirname, "client", "build")));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))

console.log("token: " + token)


const endpointUrl = "https://api.twitter.com/2/tweets/search/recent?query=49ers&tweet.fields=public_metrics&expansions=author_id&user.fields=profile_image_url,verified";

async function getRequest() {

    const res = await axios.get(endpointUrl, {
        headers: {Authorization: `Bearer ${token}`}    
    })

    if (res.body) {
        console.log(res.body)
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

(async () => {

    try {
        // Make request
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });

    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();
