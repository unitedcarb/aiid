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

$app->options('/{routes:.+}', function($request, $response, $args){
    return $response;
});

$app->add(function($req,$res,$next){
    $response = $next($req,$res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
});
?>