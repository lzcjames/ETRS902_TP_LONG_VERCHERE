<?php
$matricule=$argv[1];
$action = $argv[2]; 

$file= file_get_contents('/usr/share/asterisk/static-http/tp4.json', true);
$arr= json_decode($file, true);
foreach ($arr as $element) {
	switch($action){
	    case "note":
	        if($element['matricule']==$matricule){
	    	    echo $element['note'];
	    	}
	    	break;
	    case "mention":	
	    	if($element['matricule']==$matricule){
	    	    echo $element['mention'];
	    	}
	    	break;
	    default:
	        echo "action or note not found";
	}
}

?>
