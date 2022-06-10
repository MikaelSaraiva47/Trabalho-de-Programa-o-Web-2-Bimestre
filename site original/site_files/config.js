
window._mtm = window._mtm || {};
window._mtm.projectId = "prj:dbddfd8c-4a0a-488a-b16e-c802f9871132";
window._mtm.configAutoblocking =
{
    "rules": [
        {
            "providerId": "facebook",
            "matches": [
                {
                    "value": "https://connect.facebook.net",
                    "type": "HOSTNAME"
                }
            ],
            "policyId": "pol:16b968d0-2b4d-49a1-b9bc-f04a8eb80f97",
            "policySlug": "marketing"
        },
        {
            "providerId": "facebook",
            "matches": [
                {
                    "value": ".fb-like, .fb-share-button, .fb-save",
                    "type": "SELECTOR"
                }
            ],
            "placeholder": {
                "source": "@metomic/facebook",
                "params": {}
            },
            "policyId": "pol:16b968d0-2b4d-49a1-b9bc-f04a8eb80f97",
            "policySlug": "marketing"
        },
        {
            "providerId": "google_analytics",
            "matches": [
                {
                    "value": ".*\\.?google-analytics.com",
                    "type": "HOSTNAME"
                }
            ],
            "policyId": "pol:4b7198dd-6aef-4a39-b55e-7bf1176afeba",
            "policySlug": "statistics"
        },
        {
            "providerId": "youtube",
            "matches": [
                {
                    "value": "iframe[src^='https://youtube.com/embed' i], iframe[src^='https://www.youtube.com/embed' i]",
                    "type": "SELECTOR"
                }
            ],
            "placeholder": {
                "source": "@metomic/youtube",
                "params": {}
            },
            "policyId": "pol:0e2e9caa-bcaa-4f85-9146-0d49f7347352",
            "policySlug": "media"
        },
        {
            "providerId": "youtube",
            "matches": [
                {
                    "value": ".*\\.?youtube.com",
                    "type": "HOSTNAME"
                }
            ],
            "policyId": "pol:0e2e9caa-bcaa-4f85-9146-0d49f7347352",
            "policySlug": "media"
        }
    ],
    "autoblockingEnabled": true
}