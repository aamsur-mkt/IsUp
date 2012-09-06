<?php
	header('Cache-Control: no-cache, no-store, max-age=0, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
header('Pragma: no-cache');
	ob_implicit_flush(true);
	ob_end_flush();
	$verbose = true;
	$html  = true;
	$url = explode("\n",$_POST['urls']);
		$context = stream_context_create(array( 
		    'http' => array( 
		        'timeout' => 5 
		        ) 
		    ) 
		); 
	foreach ($url as $value) {
		$con = @file_get_contents($value,false,$context);
		if($html)
		{
		 
		$valueU = "<a href='$value'>$value</a></h2><br />";
}
else {
	$valueU = $value;
}
if($con)
	{
		if(preg_match('/main\?url=/s',$con))
		{
			if($verbose)
			{
			echo "<h2>OFFLINE - ".$valueU."\n";
			}
		}
		else if (preg_match('/sedoparking/s',$con) || preg_match('/top.location.href/s',$con) || preg_match('/dsnextgen.com/s',$con) || preg_match('/domainpark/s',$con)|| preg_match('/DomainInterest/s',$con) ) {
			if($verbose)
						{
			echo "<h2>SPAM - ".$valueU."\n";
			}
		}
		else {
			
		echo "<h2>CLEAR - ".$valueU."\n";
		
	}
	}
	else{
		if($verbose && @strpos($http_response_header[0], "403"))
					{
		echo "<h2>BLOCKED - ".$valueU."\n";
		}
		else {
			echo "<h2>TIMEOUT - ".$valueU."\n";
		}
	}
	  ob_flush(); flush();
		}

?>