<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Itemizer</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #5396FD;
                font-family: 'Indie Flower', cursive;
                color: #EC8A28;
                font-weight: bold;
                text-shadow: 5px 2px 40px #840300, -5px -2px 40px #596601;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin-left: 20px;
            }
            h1 {
              font-family: 'Lato', sans-serif;
              font-size: 65px;
              margin-top: 20px;
            }
            .available {
              border-radius: 20%;
              text-align: center;
            }
            .forms {
              padding: 0 25px;
              letter-spacing: .1rem;
              }
            h4 {
              color: yellow;
            }
        </style>
    </head>
    <body>
        <h1 style="text-align: center"> Itemizer </h1>
        <h4 style="text-align: center"> A React JS & Laravel PHP App </h4>
        <div id="root"></div>

        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
