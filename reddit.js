//
var obj = JSON.parse(typeof $response != "undefined" && $response.body || null);

// let edges = obj['data']['home']['elements']['edges']

let edges
if ('data' in obj) {
    if ('news' in obj.data)
        removeAD(obj.data.news.elements.edges)
    else if ('home' in obj.data)
        removeAD(obj.data.home.elements.edges)
    else if ('popular' in obj.data)
        removeAD(obj.data.popular.elements.edges)
    else if ('children' in obj.data && 'commentsPageAds' in obj.data.children)
        obj.data.children.commentsPageAds = []
}

function removeAD(edges) {
    for (let i = 0; i < edges.length; i++) {
        if (edges[i]['node']['__typename'] == 'AdPost') {
            edges.splice(i, 1)
        }
    }
}

var body = JSON.stringify(obj);
// console.log(body);
$done(body);