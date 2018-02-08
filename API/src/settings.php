<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
            'level' => \Monolog\Logger::DEBUG,
        ],
        // MariaDB settings
       /* 'db' => [
            'host' => 'localhost',
            'dbname' => 'aiid',
            'user' => 'root',
            'pass' => 'root'
        ], */
        'db' => [
            'host' => 'gmgcjwawatv599gq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            'dbname' => 'choil1mdfgevnn7z',
            'user' => 'y7fhbz2nvghokyw1',
            'pass' => 've4yow8xi3hzbasq'
        ],
        'auth' => [
          'root' => 'wayne',
          'aiid' => 'Pa33w0rd'
        ]
    ]
];
