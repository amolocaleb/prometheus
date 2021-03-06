<?php
return [
    'client_id' =>  env('PAYPAL_CLIENT',''),
    'secret'    =>  env('PAYPAL_SECRET',''),
    'settings'  =>  [
        'mode'  =>  env('PAYPAL_MODE',''),
        'http.ConnectionTimeout'    =>  30,
        'log.LogEnabled'    =>  true,
        'log.FileName'  =>  storage_path("/logs/paypal.log"),
        'log.LogLevel'  =>  'ERROR'
    ]
];