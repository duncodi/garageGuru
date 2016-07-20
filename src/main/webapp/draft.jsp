<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<!DOCTYPE html PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN' 'http://www.w3.org/TR/html4/loose.dtd'>
<html>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
<title>Insert title here</title>
</head>
<body>

<div class='panel'>
            <div class='panel-heading'>
              <h3 class='panel-title'>Register Staff</h3>
            </div>
            <div class='panel-body container-fluid'>
              <form autocomplete='off' method='post' action='#'>
                <div class='form-group form-material floating'>
                  <input type='text' class='form-control' id='idNumber' name='idNumber' placeholder='Id/Passport/PF No.'/>
                  <label class='floating-label'>Id/Passport/PF No.</label>
                </div>
                <div class='form-group form-material floating'>
                  <input type='text' class='form-control' id='firstName' name='firstName' placeholder='First Name' />
                  <label class='floating-label'>First Name</label>
                </div>
                <div class='form-group form-material floating'>
                  <input type='text' class='form-control' id='secondName' name='secondName' placeholder='Second Name' />
                  <label class='floating-label'>Second Name</label>
                </div>
                <div class='form-group form-material floating'>
                  <input type='email' class='form-control' id='email' name='email' placeholder='Email' />
                  <label class='floating-label'>Email</label>
                </div>
                <div class='form-group form-material floating'>
                  <input type='text' class='form-control' id='phone' name='phone' placeholder='Phone e.g. 712345678' />
                  <label class='floating-label'>Cell Phone (+254)</label>
                </div>
               
              </form>
              <a class='btn btn-primary btn-block' onclick='savePerson();'>Register Staff</a>
            </div>
          </div>


</body>
</html>