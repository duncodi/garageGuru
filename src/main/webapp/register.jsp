<!DOCTYPE html>
<html class="no-js css-menubar" lang="en">
<head>
  	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
   	<title>Garage Guru</title>
    <meta name="description" content="Garage Guru is a platform that enables garage owners to manage their garage online" />
    <meta name="keywords" content="Garage Guru, Garage, vehicles" />
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="assets/images/logo.png" />


    <!-- Stylesheets -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap-extend.min.css">
    <link rel="stylesheet" href="assets/css/site.min.css">
    
   
    <!-- Page -->
    <link rel="stylesheet" href="assets/css/login.min.css">
    
    <!-- Fonts -->
    <link rel="stylesheet" href="assets/fonts/web-icons/web-icons.min.css">
    <link rel="stylesheet" href="assets/fonts/brand-icons/brand-icons.min.css">
    
    <script src="assets/js/more/modernizr/modernizr.min.js"></script>
    <script src="assets/js/more/breakpoints/breakpoints.min.js"></script>
    <script>
    Breakpoints();
    </script>
</head>
<body class="page-login-v2 layout-full page-dark">
  <div class="page animsition" data-animsition-in="fade-in" data-animsition-out="fade-out">
    <div class="page-content">
      <div class="page-brand-info">
        <div class="brand">
          <img class="brand-img" src="assets/images/logo.png" alt="Garage Guru Logo">
          <h2 class="brand-text font-size-40">Garage Guru</h2>
        </div>
        <p class="font-size-20">This is a platform that enables you to manage your garage online</p>
      </div>

      <div class="page-login-main" id="register">
        <div class="brand visible-xs">
          <img class="brand-img" src="assets/images/logo.png" alt="Garage Guru Logo">
          <!--<h3 class="brand-text font-size-40">Garage Guru</h3>-->
        </div>
        <h3 class="font-size-24">Sign Up</h3>
        <p>Please Sign Up to use GarageGuru...</p>

        <form method="post" action="#">
          <div class="form-group">
            <label class="sr-only" for="idNumber">Id/Company Reg No.:</label>
            <input type="text" class="form-control" onkeyup="isNull('idNumber'); setLength('idNumber', '3', '10');" id="idNumber" name="idNumber" placeholder="Id/Company Reg No.">
            <span id="idNumber_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="firstName">First Name</label>
            <input type="text" class="form-control" onkeyup="isNull('firstName'); setLength('firstName', '3', '20');" id="firstName" name="firstName" placeholder="First Name">
          	<span id="firstName_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="secondName">Second Name</label>
            <input type="text" class="form-control" onkeyup="isNull('secondName'); setLength('secondName', '3', '10');" id="secondName" name="secondName" placeholder="Second Name">
          	<span id="secondName_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="phone">Cell Phone (+254)</label>
            <input type="text" class="form-control" onkeyup="isNull('phone'); isPhone('phone');" id="phone" name="phone" placeholder="Cell Phone (+254) e.g. 712345678">
          	<span id="phone_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="email">Email</label>
            <input type="email" class="form-control" onkeyup="isNull('email'); isEmail('email');" id="email" name="email" placeholder="Email">
          	<span id="email_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="garageName">Garage Name</label>
            <input type="text" class="form-control" onkeyup="isNull('garageName'); setLength('garageName', '3', '40');" id="garageName" name="garageName" placeholder="Garage Name">
          	<span id="garageName_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="address">Garage Address</label>
            <input type="text" class="form-control" onkeyup="isNull('address'); setLength('address', '10', '50');" id="address" name="address" placeholder="P.O BOX 111-0000 TOWN" value="P.O BOX ">
          	<span id="address_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="location">Garage Location (Town)</label>
            <select onchange="isNull('location');" name="location" id="location" class="form-control">
            	<option value="">Where is your garage located?</option>
            	<option value="Nairobi">Nairobi</option>
            	<option value="Nakuru">Nakuru</option>
            	<option value="Mombasa">Mombasa</option>
            </select>
          	<span id="location_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="country">Country</label>
            <input type="text" class="form-control" onkeyup="isNull('country'); setLength('country', '3', '20');" id="country" name="country" value="KENYA" readonly placeholder="Country">
          	<span id="country_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <label class="sr-only" for="garageDescription">Garage Description</label>
            <textarea rows="3" name="garageDescription" onkeyup="isNull('garageDescription'); setLength('garageDescription', '20', '100');" id="garageDescription" class="form-control" placeholder="Brief Garage Description"></textarea>
          	<span id="garageDescription_error" style="color:red; font-size:11px"></span>
          </div>
          <div class="form-group">
            <input type="button" class="btn btn-primary btn-block" id="signUpButton" onclick="validateSignUp();" value="Sign Up" />
          	<span id="signUpButton_error" style="color:red; font-size:11px"></span>
          </div>
         
        </form>
		
        <p>You have an account? <a href="login.jsp">Sign In</a></p>

        <footer class="page-copyright">
          <p>Garage Guru</p>
          <p>&copy; 2016. All RIGHTS RESERVED.</p>
          <div class="social">
            <a class="btn btn-icon btn-round social-twitter" href="javascript:void(0)">
              <i class="icon bd-twitter" aria-hidden="true"></i>
            </a>
            <a class="btn btn-icon btn-round social-facebook" href="javascript:void(0)">
              <i class="icon bd-facebook" aria-hidden="true"></i>
            </a>
            <a class="btn btn-icon btn-round social-google-plus" href="javascript:void(0)">
              <i class="icon bd-google-plus" aria-hidden="true"></i>
            </a>
          </div>
        </footer>
      </div>

    </div>
  </div>
  <!-- End Page -->

	
	<!-- custom js -->
		<script src="assets/custom/custom.js"></script>
		<script src="assets/custom/register.js"></script>
		<script src="assets/custom/duncodiValidator.js"></script>
		<script src="assets/custom/validate.js"></script>
	<!-- --- -->

  <!-- Core  -->
  <script src="assets/js/more/jquery/jquery.min.js"></script>
  <script src="assets/js/more/bootstrap/bootstrap.min.js"></script>
  <script src="assets/js/more/animsition/animsition.min.js"></script>
  <script src="assets/js/more/asscroll/jquery-asScroll.min.js"></script>
  <script src="assets/js/more/mousewheel/jquery.mousewheel.min.js"></script>
  <script src="assets/js/more/asscrollable/jquery.asScrollable.all.min.js"></script>
  <script src="assets/js/more/ashoverscroll/jquery-asHoverScroll.min.js"></script>

  <!-- Plugins -->
  <script src="assets/js/more/switchery/switchery.min.js"></script>
  <script src="assets/js/more/intro-js/intro.min.js"></script>
  <script src="assets/js/more/screenfull/screenfull.min.js"></script>
  <script src="assets/js/more/slidepanel/jquery-slidePanel.min.js"></script>

  <!-- Plugins For This Page -->
  <script src="assets/js/more/jquery-placeholder/jquery.placeholder.min.js"></script>

  
  <!-- Scripts -->
  <script src="assets/js/core.min.js"></script>
  <script src="assets/js/site.min.js"></script>

  <script src="assets/js/sections/menu.min.js"></script>
  <script src="assets/js/sections/menubar.min.js"></script>
  <script src="assets/js/sections/gridmenu.min.js"></script>
  <script src="assets/js/sections/sidebar.min.js"></script>

  <script src="assets/js/components/asscrollable.min.js"></script>
  <script src="assets/js/components/animsition.min.js"></script>
  <script src="assets/js/components/slidepanel.min.js"></script>
  <script src="assets/js/components/switchery.min.js"></script>

  <script src="assets/js/components/jquery-placeholder.min.js"></script>


  
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