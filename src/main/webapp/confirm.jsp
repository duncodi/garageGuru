<!DOCTYPE html>
<html class='no-js css-menubar' lang='en'>
<head>
  	<meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
	<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'>
   	<title>Complete Registration - Garage Guru</title>
    <meta name='description' content='Garage Guru is a platform that enables garage owners to manage their garage online' />
    <meta name='keywords' content='Garage Guru, Garage, vehicles' />
    <meta name='author' content=''>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='icon' href='assets/images/logo.png' />


    <!-- Stylesheets -->
    <link rel='stylesheet' href='assets/css/bootstrap.min.css'>
    <link rel='stylesheet' href='assets/css/bootstrap-extend.min.css'>
    <link rel='stylesheet' href='assets/css/site.min.css'>
    
   
    <!-- Page -->
    <link rel='stylesheet' href='assets/css/login.min.css'>
    
    <!-- Fonts -->
    <link rel='stylesheet' href='assets/fonts/web-icons/web-icons.min.css'>
    <link rel='stylesheet' href='assets/fonts/brand-icons/brand-icons.min.css'>
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,300italic'>
    
    <script src='assets/js/more/modernizr/modernizr.min.js'></script>
    <script src='assets/js/more/breakpoints/breakpoints.min.js'></script>
    <script>
    Breakpoints();
    </script>
    
    <script>
    
    function getParameter(theParameter) { 
   		var params = window.location.search.substr(1).split('&'); 
   		for (var i = 0; i < params.length; i++) {
    		var p=params[i].split('=');
    			if (p[0] == theParameter) {
				return decodeURIComponent(p[1]);
    		  
    		}
    	}
    	return false;
    }
    
    (function confirmRegistration(){
    	var ajax = new XMLHttpRequest();
    	
    	ajax.onreadystatechange = function(){
    		if(ajax.readyState == 4){
    			if(ajax.status == 200){
    				document.getElementById('confirmRegistration').innerHTML = ajax.responseText;
    			}
    		}
    	}
    	ajax.open("GET", "./register/confirmation?challenge="+getParameter('challenge'), true);
    	ajax.send();
    })();

    </script>
    
</head>
<body class='page-forgot-password layout-full'>
  <div class='page animsition vertical-align text-center' data-animsition-in='fade-in'
  data-animsition-out='fade-out'>
    <div class='page-content vertical-align-middle'>
    	<div class='brand'>
          <img class='brand-img' src='assets/images/logo.png' alt='Garage Guru Logo'>
          
        </div>
        
        <div id="confirmRegistration">
        	
        </div>
        
      

      	<footer class='page-copyright'>
          <p>Garage Guru</p>
          <p>&copy; 2016. All RIGHTS RESERVED.</p>
          <div class='social'>
            <a class='btn btn-icon btn-round social-twitter' href='javascript:void(0)'>
              <i class='icon bd-twitter' aria-hidden='true'></i>
            </a>
            <a class='btn btn-icon btn-round social-facebook' href='javascript:void(0)'>
              <i class='icon bd-facebook' aria-hidden='true'></i>
            </a>
            <a class='btn btn-icon btn-round social-google-plus' href='javascript:void(0)'>
              <i class='icon bd-google-plus' aria-hidden='true'></i>
            </a>
          </div>
        </footer>
    </div>
  </div>
  <!-- End Page -->

	<!-- custom js -->
		<script src="assets/custom/custom.js"></script>
		<script src="assets/custom/register.js"></script>
	<!-- --- -->

  <!-- Core  -->
  <script src='assets/js/more/jquery/jquery.min.js'></script>
  <script src='assets/js/more/bootstrap/bootstrap.min.js'></script>
  <script src='assets/js/more/animsition/animsition.min.js'></script>
  <script src='assets/js/more/asscroll/jquery-asScroll.min.js'></script>
  <script src='assets/js/more/mousewheel/jquery.mousewheel.min.js'></script>
  <script src='assets/js/more/asscrollable/jquery.asScrollable.all.min.js'></script>
  <script src='assets/js/more/ashoverscroll/jquery-asHoverScroll.min.js'></script>

  <!-- Plugins -->
  <script src='assets/js/more/switchery/switchery.min.js'></script>
  <script src='assets/js/more/intro-js/intro.min.js'></script>
  <script src='assets/js/more/screenfull/screenfull.min.js'></script>
  <script src='assets/js/more/slidepanel/jquery-slidePanel.min.js'></script>

  <!-- Plugins For This Page -->
  <script src='assets/js/more/jquery-placeholder/jquery.placeholder.min.js'></script>

  
  <!-- Scripts -->
  <script src='assets/js/core.min.js'></script>
  <script src='assets/js/site.min.js'></script>

  <script src='assets/js/sections/menu.min.js'></script>
  <script src='assets/js/sections/menubar.min.js'></script>
  <script src='assets/js/sections/gridmenu.min.js'></script>
  <script src='assets/js/sections/sidebar.min.js'></script>

  <script src='assets/js/components/asscrollable.min.js'></script>
  <script src='assets/js/components/animsition.min.js'></script>
  <script src='assets/js/components/slidepanel.min.js'></script>
  <script src='assets/js/components/switchery.min.js'></script>

  <script src='assets/js/components/jquery-placeholder.min.js'></script>


  
  <script>
    (function(document, window, $) {
      'use strict';

      var Site = window.Site;
      $(document).ready(function() {
        Site.run();
      });
    })(document, window, jQuery);
  </script>
</body>
</html>