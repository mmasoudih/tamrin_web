<?php
	header("Content-type: application/json");
	if(isset($_GET['radius'])){
		$r = $_GET['radius'];
		$environment = (M_PI * ($r*$r));
		$environment_round =  floor((M_PI * ($r*$r)));
		$area = (($r*M_PI) * 2);
		$area_round = floor(($r*M_PI) * 2);
		$result = [
			"environment" => $environment,
			"environment_round" => $environment_round,
			"area" => $area,
			"area_round" => $area_round,
			"diameter"=> $r * $r
		];
		echo json_encode($result);
	}else{
		$error = [
			"msg" => "radius can not be empty!",
		];
		echo json_encode($error);
	}
	
?>

