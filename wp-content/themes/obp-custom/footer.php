
<section class="npcafooter">
	<div class="container">
		<div class="npcarow">
			<div class="npcalogo"><img src="<?php bloginfo('template_directory');?>/images/footer_npca.png" alt=""></div>
			<div class="lefttext">
				<img src="<?php bloginfo('template_directory');?>/images/npcatext.png" alt="">
				<span>OBP travelers receive a free one-year membership to NPCA with any small group or custom travel booking. Ask a travel advisor » 1.800.445.2995</span>
			</div>
		</div>
	</div>
</section>

<footer id="footer">
	<div class="container">
		<div class="footer_top">
			<div class="footerblock1">
				<div class="book_sm"><img src="<?php bloginfo('template_directory');?>/images/book_sm.png" alt=""></div>
				<h5>Get Your FREE Travel Book</h5>
				<p>Lorem ipsum dolor sit amet, consectetr adipiscing elit. Phasellus fermentum libero nibh.</p>
				<a class="btn-md" href="#">Get Your FREE Travel Book</a>
			</div>
			<div class="footerblock2">
				<h5>more obp</h5>
				<ul>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Media</a></li>
					<li><a href="#">FAQs</a></li>
					<li><a href="#">Request Information</a></li>
					<li><a href="#">Request a Travel Guide</a></li>
					<li><a href="#">Work For Us</a></li>
					<li><a href="#">Contact Us</a></li>
				</ul>
			</div>
			<div class="footerblock3">
				<h5>who we are</h5>
				<ul>
					<li><a href="#">Our Mission</a></li>
					<li><a href="#">Our Staff</a></li>
					<li><a href="#">Our Guides</a></li>
					<li><a href="#">Company History</a></li>
				</ul>
			</div>
			<div class="footerblock4">
				<h5>Newsletter Sign up</h5>
				<p>Sign up for our newsletter to receive insights & offers from our travel experts</p>
				<form lpformnum="87">
					<div class="form-group"><input type="email" id="email" class="form-control" placeholder="Email Address" required=""></div>
					<div class="form-group"><button class="btn-md full" type="submit" name="submit" value="Join">get the newsletter</button></div>
				</form>
			</div>
		</div>
		<div class="footer_middle"><img src="<?php bloginfo('template_directory');?>/images/bestjourneys.png" alt=""></div>
		<div class="footer_bottom">
			<div class="copyright"> © 2015 Off The Beaten Path, LLC. All content and photography in this website may not be reproduced without permission. <br> <a href="#">Terms & Conditions</a> <a href="#">Travel Protection</a> <a href="#">Privacy Policy</a> <a href="#">Site Map</a>
			</div>
			<div class="social_icons">
				<ul>
					<li class="facebook"><a target="_blank" href="1#">
						<i class="fa fa-facebook"></i></a>
					</li>
					<li class="googleplus"><a target="_blank" href="#1">
						<i class="fa fa-google-plus"></i>
					</a></li>
					<li class="twitter"><a target="_blank" href="#1">
						<i class="fa fa-twitter"></i>
					</a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<!-- End wrap -->

<div class="go-up">
	<i class="fa fa-chevron-up"></i>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="<?php bloginfo('template_directory');?>/js/bootstrap.min.js"></script>
<script src="<?php bloginfo('template_directory');?>/js/ekko-lightbox.js"></script>
<script src="<?php bloginfo('template_directory');?>/js/owl.carousel.js"></script>
<script>
$('#how_travel').owlCarousel({
	stagePadding:70,
	loop:true,
	margin:20,
	nav:true,
	dots: false,
	navText: [ '', '' ],
	responsive:{
		0:{
			items:1,
			stagePadding:40,
			margin:10,
		},
		600:{
			items:2
		},
		1000:{
			items:2
		}
	}
});
$('#trips').owlCarousel({
	loop:true,
	margin:20,
	nav:true,
	dots: false,
	navText: [ '', '' ],
	responsive:{
		0:{
			items:1,
			margin:10,
		},
		600:{
			items:2,
		},
		1000:{
			items:3
		}
	}
});
</script>


<!-- Custom js -->
<script src="<?php bloginfo('template_directory');?>/js/custom.js"></script>
<!-- End Custom js -->

<?php wp_footer(); ?>
</body>
</html>
