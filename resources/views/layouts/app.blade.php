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



    <!-- Styles -->
    <link href="{{ p_asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ p_asset('css/pizzaapp.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light  m-0 p-0 custom-nav">
            <div class="container-fluid">
                <a class="navbar-brand absolute-logo" href="{{ url('/') }}">
                    <img src="{{'/storage/logo.png'}}" alt="" srcset="">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        <li class="nav-item">
                            <a href="" class="text-gray">Home</i></a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="text-gray">About Us</a>
                        </li>
                       <li class="nav-item">
                           <a href="" class="text-gray">Cart<i class="la la-shopping-cart text-white"></i></a>
                       </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="app"></div>
        
    </div>
</body>
</html>
