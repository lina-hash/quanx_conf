//ting version 7.0.2
var body = $response.body;
var obj = JSON.parse(body);

var newobj = {
    "istingvip": true,
    "tingvipendtime": "2099-07-05T17:43:53Z",
    "tingviptype": "OrdinaryVip",
    "username": obj['username'],
    "email": obj['email'],
    "openid_type": "apple",
    "banned": false,
    "rechargehint": "",
    "has_old_password": true
}

body = JSON.stringify(newobj);

// console.log(body);

$done(body);
