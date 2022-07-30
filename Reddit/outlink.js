var url = $request.url.replace(/^https?:\/\/out.reddit.com\/.*url=(https?[\w%\.]+).*/g, "$1")
var modifiedHeaders = $response.headers;
modifiedHeaders['Location'] = decodeURIComponent(url);

var modifiedStatus = 'HTTP/1.1 302 Found';

$done({ status: modifiedStatus, headers: modifiedHeaders });
// $done({headers : modifiedHeaders});
// $done({}); // Not changed.