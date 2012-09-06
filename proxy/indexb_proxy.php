<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript" language="Javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" language="Javascript" src="http://malsup.github.com/jquery.form.js"></script>
<script type="text/javascript"> 
$(document).ready(function() { 
    var options = { 
        target:        '#response',   // target element(s) to be updated with server response 

    }; 
 
    // bind form using 'ajaxForm' 
    $('#check').ajaxForm(options); 
}); 
 
    </script> 
</head>
<body>
Enter One Proxy Per Line
<form id="checkw" action="check.php" method="POST">
<textarea cols="50" rows="4" name="urls"></textarea><br />
<input type="submit" value="submit" />
</form>
<div id="response" class="response"></div>			
</body>
</html>