<!DOCTYPE html>
<html lang="en" class="full-height">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title> Off The Beaten Path </title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Favicons -->
  <link rel="shortcut icon" href="<?php bloginfo('template_directory');?>/images/favicon.ico">

  <!-- Main Style -->
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/style.css">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i|Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Montserrat:400,700|Permanent+Marker" rel="stylesheet">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
  <script src="<?php bloginfo('template_directory');?>/https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="<?php bloginfo('template_directory');?>/https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <?php wp_head();?>

</head>
<body>

  <!-- Pre-loader -->
  <div class="preloader">
    <div class="status">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  </div>

  <header class="header" id="header">
    <div class="topbar">
      <div class="container">
        <div id="search">
          <form id="searchform" action="/search/">
            <div id="searchsubmit"></div>
            <input type="text" placeholder=" Search" value="" name="search" id="s" style="width: 1px;">
          </form>
        </div>

        <div class="magazines">
          <img src="<?php bloginfo('template_directory');?>/images/magazines.png" alt="Request your 2016 Travel Book" title="Request your 2016 Travel Book">
          <a href="#1">Get Your FREE Travel Book</a>
        </div>
        <div class="contactus"><a href="#">contact us</a> <span>»</span> <a href="#">1.800.455.2995</a> </div>


      </div>
    </div>
    <div class="header_bottom">
      <div class="container">
        <div class="logo">
          <a href="index.html">
            <img alt="Off The Beaten Path" title="Off The Beaten Path" src="<?php bloginfo('template_directory');?>/images/logo.png">
          </a>
        </div>
        <a id="menu-tog" href="#"><span class="base-bg-color"></span></a>
        <nav id="navigation" class="" role="navigation">
          <ul>
            <li><a href="#1">Where We travel</a>
              <div class="submenu">
                <ul>
                  <li><a href="#1">Drop down menu 1</a></li>
                  <li><a href="#1">Drop down menu 2</a></li>
                  <li><a href="#1">Drop down menu 3</a></li>
                  <li><a href="#1">Drop down menu 4</a></li>
                </ul>
              </div>
            </li>
            <li><a href="howwego.html">How we go </a></li>
            <li><a href="#1">who we are</a></li>
            <li><a href="#1">find a trip</a></li>
          </ul>
        </nav>
        <div class="contactus"><a href="#">contact us</a><span>»</span><a href="#">1.800.455.2995</a></div>
      </div>
    </div>

  </header>
