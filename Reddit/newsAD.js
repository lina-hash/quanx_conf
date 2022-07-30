//
if ($response.body.includes("is_created_from_ads_ui")) {
    var body = JSON.parse($response.body || null);
    if (body.data.children) {
        body.data.children = body.data.children.filter((n) => !n.data.is_created_from_ads_ui)
        $done({ body: JSON.stringify(body) });
    } else {
        $done({});
    }
} else {
    $done({});
}