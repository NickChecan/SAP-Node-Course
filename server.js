const https = require('https')

// Check https://nodejs.org/es/docs/guides/anatomy-of-an-http-transaction/
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (res) => {
    
    let body = ''
    
    res.on('data', (chunk) => {
        body += chunk
    })
    
    res.on('end', () => {
        console.log(JSON.parse(body).explanation)
    })

}).on("error", (err) => {
    console.log("Error: " + err.message)
})