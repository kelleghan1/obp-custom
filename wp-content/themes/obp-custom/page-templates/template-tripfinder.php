<?php

/**

* Template Name: Trip Finder

*/

get_header();


?>



<section class="innertop tripfinder" style="background-image:url(<?php bloginfo('template_directory');?>/images/tripfinderbg.jpg);">
  <div class="billboard-overlay"></div>
  <div class="container">
    <div class="banner_caption">
      <h1 class="hero">How We Go</h1>
      <p>Donec interdum mi non pellentesque molestie. Praesent tincidunt enim eget leo dictum pretium. <br>Etiam a sollicitudin massa. Donec auctor ex quis diam faucibus, id efficitur enim facilisis. <br>Suspendisse nec pretium nisl, quis iaculis velit. Sed vehicula est vel mauris elementum.</p>
      <a href="#" class="btn-md">Find A Trip</a>
      <a class="scroll-down" href="#first">
        <img class="bounce" alt="Icon" src="<?php bloginfo('template_directory');?>/images/circle_arrows.svg">
      </a>
    </div>
    <!-- row -->
  </div>
  <!-- container -->
</section>

<div class="clearfix"></div>

<section id="first" class="sections">
  <div class="container">
    <img src="<?php bloginfo('template_directory');?>/images/screenshot.jpg" alt="">
  </div>
</section>







<?php get_footer(); ?>
