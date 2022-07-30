var obj = JSON.parse($response.body);
obj['hide_ads'] = true;
obj['third_party_site_data_personalized_ads'] = false;
obj['third_party_personalized_ads'] = false;
obj['activity_relevant_ads'] = false;
obj['third_party_data_personalized_ads'] = false;
$done({ body: JSON.stringify(obj) });