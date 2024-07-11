const fetch = require('node-fetch');

const getData = async () => {
    try {
        const apiKey = 'YOUR_ACTUAL_API_KEY';  // Replace with your actual API key
        let response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-06-11&sortBy=publishedAt&apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.log('Fetch error:', err);
    }
}

getData();
