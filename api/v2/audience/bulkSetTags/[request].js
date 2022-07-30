const baseRequest = require('request');

export default function handler(request, response) {
    request.pipe(baseRequest(`https://api.pushwoosh.com${request.url}`)).pipe(response);
}