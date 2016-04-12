cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.example.hello/www/CoolPlugin.js",
        "id": "com.example.hello.CoolPlugin",
        "clobbers": [
            "CoolPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.example.hello": "0.2.11"
};
// BOTTOM OF METADATA
});