<?php 
$file_name = "counter.txt";
$file = fopen($file_name, "r");

$count= fread($file, filesize($file_name));


fclose($file);
//code haye ezafe shodeh…
// $file = fopen($file_name, "w");
// $count = $count + 1;
// fwrite($file , $count);
// fclose($file);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>counter</title>
</head>
<body>
	<input type="text" value="<?php echo $count; ?>">
</body>
</html>