const request = require('request');
const cheerio = require('cheerio');

function unblock(url) {
  return new Promise((resolve, reject) => {
    // Send an HTTP request to the website
    request(url, (error, response, html) => {
      if (error) {
        reject(error);
      } else {
        // Parse the HTML response
        const $ = cheerio.load(html);
        
        // Find the content you want to access
        const content = $('#content').html();
        
        // Return the content to the user
        resolve(content);
      }
    });
  });
}

// Test the unblocker
unblock('http://www.Youtube.com').then(content => console.log(content)).catch(error => console.error(error));
