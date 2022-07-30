//
if ($response.body.includes("adEvents")) {
    var body = JSON.parse($response.body || null);
    if (body.data.news) {
        removeAD(body.data.news.elements)
        $done({ body: JSON.stringify(body) });
    } else if (body.data.home) {
        removeAD(body.data.home.elements)
        $done({ body: JSON.stringify(body) });
    } else if (body.data.popular) {
        removeAD(body.data.popular.elements)
        $done({ body: JSON.stringify(body) });
    } else if (body.data.children && body.data.children.commentsPageAds) {
        body.data.children.commentsPageAds = []
        $done({ body: JSON.stringify(body) });
    } else {
        $done({});
    }
} else {
    $done({});
}

function removeAD(elements) {
    elements.edges = elements.edges.filter((n) => !n.node.adEvents)
}