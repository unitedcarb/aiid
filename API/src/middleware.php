<?php
// Application middleware
$auth = $container->get('settings')['auth'];
// e.g: $app->add(new \Slim\Csrf\Guard);
$app->add(new \Slim\Middleware\HttpBasicAuthentication([
    "secure" => false,
    "users" => [
        "root" =>$auth['root'],
        "aiid" => $auth['aiid']
    ]
]));

?>