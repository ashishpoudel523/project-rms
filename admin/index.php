<?php  
 session_start();  
 if(isset($_SESSION["user"]))  
 {  
      header("location:home.php");  
 }  
 
 ?>
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>BUDDHA RESORT ADMIN</title>
  
  
     
      <link rel="stylesheet" href="css/style.css">

  
</head>

<body>
  <div id="clouds">
	<div class="cloud x1"></div>
	<!-- Time for multiple clouds to dance around -->
	<div class="cloud x2"></div>
	<div class="cloud x3"></div>
	<div class="cloud x4"></div>
	<div class="cloud x5"></div>
</div>

 <div class="container">


      <div id="login">

        <form method="post">

          <fieldset class="clearfix">
            <script>
              function validateUser() {
                  var user = document.getElementById('user').value;
                  if (user== "" || user == 0) {
                      document.getElementById('euser').innerHTML = "<b>Admin name is empty</b>"
                      return false;
                  }
                  else {
                      document.getElementById('vuser').innerHTML = "<b>Valid</b>"
                      return true;
                  }
              }

              function validatePassword(){
                var pass = document.getElementById('pass').value;
                if(pass == 0){
                  document.getElementById('epass').innerHTML = "password incorrcect";
                  return false;
                }
              }
            </script>
            <p><span class="fontawesome-user"></span><input type="text"  name="user" value="Username" onBlur="if(this.value == '') this.value = 'Username'" id="user" onchange="validateUser()" onFocus="if(this.value == 'Username') this.value = ''" required >
            <small id="euser" style="color:red"></small>
            <small id="vuser" style="color:green"></small></p> <br> <!-- JS because of IE support; better: placeholder="Username" -->

            <p><span class="fontawesome-lock"></span><input type="password" name="pass"  value="Password" onchange="validatePassword()" id="pass" onBlur="if(this.value == '') this.value = 'Password'" onFocus="if(this.value == 'Password') this.value = ''" required>
            <small id="epass" style="color:red"></small>
            <small id="vpass" style="color:green"></small>
          </p> <!-- JS because of IE support; better: placeholder="Password" -->
            <p><input type="submit" name="sub"  value="Login"></p>

          </fieldset>

        </form>

       

      </div> <!-- end login -->

    </div>
    <div class="bottom">  <h3><a href="../index.php">BUDDHA RESORT HOMEPAGE</a></h3></div>
  
  
</body>
</html>

<?php
   include('db.php');
  
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($con,$_POST['user']);
      $mypassword = mysqli_real_escape_string($con,$_POST['pass']); 
      
      $sql = "SELECT id FROM login WHERE usname = '$myusername' and pass = '$mypassword'";
      $result = mysqli_query($con,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
         
         $_SESSION['user'] = $myusername;
         
         header("location: home.php");
      }else {
         echo '<script>alert("Your Login Name or Password is invalid") </script>' ;
      }
   }
?>
