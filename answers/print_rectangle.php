<?php
header("Content-type: application/json");
	if(isset($_GET['n']) && isset($_GET['m']) && isset($_GET['filled'])){
	$n = $_GET['n'];
	$m = $_GET['m'];
	$isFilled = $_GET['filled'];
	$result = [
		"rectangle" => print_rectangle($n,$m,$isFilled),
		"filled" => $isFilled
	];
		echo json_encode($result);
	}else{
		$error = [
			"msg" => "n and m can not be empty!",
		];
		echo json_encode($error);
	}
function print_rectangle($n, $m, $filled) 
{ 
    $i;  
    $j; 
    for ($i = 1; $i <= $n; $i++) 
    { 
    	$aa .= PHP_EOL; 
        for ($j = 1; $j <= $m; $j++) 
        { 
            if ($i == 1 || $i == $n ||  
                $j == 1 || $j == $m)          
                $aa .= $filled != 1 ? ("* &nbsp;") :  ("*&nbsp;");          
            else
                $aa .= $filled != 1 ? ("&nbsp;&nbsp;&nbsp;") : ("*&nbsp;");          
        } 
        
    } 
    return $aa;
  
} 
  
    

?>