//
var body = $response.body;
var obj = JSON.parse(body);

// let edges = obj['data']['home']['elements']['edges']

let edges
if ('data' in json) {
    if ('news' in json.data)
        edges = json.data.news.elements.edges
    if ('home' in json.data)
        edges = json.data.home.elements.edges
    if ('popular' in json.data)
        edges = json.data.popular.elements.edges
}

for (let i = 0; i < edges.length; i++) {
    // console.log(edges[i]['node']['__typename'] == 'AdPost')
    if (edges[i]['node']['__typename'] == 'AdPost') {
        edges.splice(i, 1)
    }
}
obj['data']['home']['elements']['edges'] = edges

body = JSON.stringify(obj);

// console.log(body);

$done(body);