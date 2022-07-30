const baseRequest = require('request');

export default function handler(request, response) {
    request.pipe(baseRequest("https://api.pushwoosh.com/api/v2/audience/bulkSetTags")).pipe(response);
}