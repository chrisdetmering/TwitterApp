const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const config = require("dotenv").config()
const token = process.env.BEARER_TOKEN;
const http = require('http')


// const http = require('http')
;
// const TOKEN = process.env.BEARER_TOKEN
// const server = http.createServer(app)

const app = express();


app.use(express.static(path.join(__dirname, "client", "build")));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))

console.log("token: " + token)


// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'


//const endpointUrl = "https://api.twitter.com/2/tweets/search/recent?query={query}&tweet.fields=public_metrics&expansions=author_id&user.fields=profile_image_url,verified";
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

async function getRequest() {

    // Edit query parameters below
    // specify a search query, and any additional fields that are required
    // by default, only the Tweet ID and text fields are returned
    const params = {
        'query': '49ers',
        'tweet.fields': 'author_id'
    }

    const res = await axios.get(endpointUrl, params, {
        headers: {
            Authorization: `Bearer ${token}`
            
        }
        
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

// search link
// https://api.twitter.com/2/tweets/search/recent?query={query}&tweet.fields=public_metrics&expansions=author_id&user.fields=profile_image_url,verified
