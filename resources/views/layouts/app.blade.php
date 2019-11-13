<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ p_asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet">
    <script src="https://js.braintreegateway.com/web/dropin/1.20.4/js/dropin.min.js"></script>



    <!-- Styles -->
    <link href="{{ p_asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ p_asset('css/pizzaapp.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <div class="navigation"></div>
        <div class="app"></div>
        
    </div>
    
</body>
</html>
