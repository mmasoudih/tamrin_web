<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>تمرین های php </title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="assets/css/main.css">
	<script src="assets/js/axios.min.js"></script>
	<script src="assets/js/app.js" defer="true"></script>

</head>
<body>







<div class="container">
	<div class="questionBox">
		<div class="title">
			<p>
				<span>1</span>
				شعاع دایره را گرفته قطر، محیط و مساحت آن را به‌دست آورید.
			</p>
		</div>
		<div class="content">
			<div class="sectionRight">
				<input type="number" class="radius" placeholder="شعاع دایره را وارد کنید">
			</div>
			<div class="sectionLeft"></div>
		</div>
	</div>
</div>












<!-- 
<input type="text" class="radius">
<button onclick="func()">pass data</button>

<form action="<?php echo $_SERVER['PHP_SELF']?>" method="POST"> -->
	<!-- <input type="text" name="radius" placeholder="شعاع دایره را وارد کنید"> -->
<!-- 	<input type="text" name="numbers[1]">
<input type="text" name="numbers[2]">
<input type="text" name="numbers[3]">
<input type="text" name="numbers[4]">
<input type="text" name="numbers[5]">
<input type="text" name="numbers[6]">
<input type="text" name="numbers[7]">
<input type="text" name="numbers[8]">
<input type="text" name="numbers[9]"> -->

	<!-- <input type="submit" value="محاسبه کن"> -->
<!-- </form> -->
<!-- shoa * pi * 2 // mohit
pi *  (R*R) // masahat -->
<?php
/*if(isset($_POST['radius'])){
	$r = $_POST['radius'];
	echo (M_PI * ($r*$r));
	echo "<br>";
	echo floor((M_PI * ($r*$r)));

	echo "<br>";
	echo (($r*M_PI) * 2);
	echo "<br>";
	echo floor(($r*M_PI) * 2);

}
*/



// function print_rectangle($n, $m) 
// { 
//     $i;  
//     $j; 
//     for ($i = 1; $i <= $n; $i++) 
//     { 
//         for ($j = 1; $j <= $m; $j++) 
//         { 
//             if ($i == 1 || $i == $n ||  
//                 $j == 1 || $j == $m)          
//                 echo("* ");          
//             else
//                 echo("&nbsp;&nbsp;&nbsp;");          
//         } 
//         echo("<br>"); 
//     } 
  
// } 
  
//     // Driver Code 
//     $rows = 5;  
//     $columns = 5; 
//     // echo "<pre>";
//     print_rectangle($rows, $columns); 
//     // echo "</pre>";






/*	$a = 3000;
	$b = 2;
  for ($i=1; $i <= $b; $i++) { 
  	$sum += $a; 
  }
  echo $sum;*/

/*$a = 60;
$b = 12;
$counter = 0;
	while ($a >= $b) {
		if (($a - $b) >= $b) {
			$a -= $b; 
			$counter++;
		}
	}
echo $counter;
*/

/*
$a = 60;
$b = 12;
$counter = 0;
while ($a >= $b) {
    $a -= $b; 
    $counter++;
}
echo $counter + ($a / $b);
*/



/*$x = 10;
$y = 5;
$z = 10;
if (($x + $y > $z) && ($x + $z > $y) && ($y + $z > $x)){
echo "ok";
}else{
	echo "not ok";
}
*/

/*$number = 3;
$res = $number * $number * $number;
echo $res;
*/



/*$x = 2;
$y = 5;
$z = 5;
for ($i=1; $i < $y; $i++) { 
	$res += $x * $x;
}
echo $res + $z;*/



/*$num = 20;
$num2 = 50;
for ($i=0; $i < $num; $i++) { 
	if (($i % 2) === 0) {
		$num_1 += $i;
	}
}


for ($j=0; $j < $num2; $j++) { 
	if (($j % 2) === 0) {
		$num_2 += $j;
	}
}
echo $num_1 + $num_2 ;*/

/*function calcAvg($firstNum,$secondNum){
	return (($firstNum + $secondNum) / 2);
}
echo calcAvg(18.5,17);
*/

/*$input = $_POST['numbers'];
function minMax($array){
	// $array;
	$min = min($array);
	$max = max($array);
	return["minimum"=>$min,"maximum"=>$max];
}
var_dump(minMax($input));
*/


/*
$array = $_POST['numbers'];

$n1 = $n2 = $n3 = 1000000;  // some high number
$m1 = $m2 = $m3 = 0 ;
for ($i = 1 ; $i <= count($array); $i++) {
    $x = $array[$i] ; 
    //min        
    if ($x <= $n1){
        $n3 = $n2 ;
        $n2 = $n1 ;            
        $n1 = $x ;
    } elseif ($x < $n2){
        $n3 = $n2;
        $n2 = $x;
    } elseif ($x < $n3){
        $n3 = $x;
    }

    //max
    if ($x >= $m1){
        $m3 = $m2 ;
        $m2 = $m1 ;            
        $m1 = $x ;
    } elseif ($x > $m2){
        $m3 = $m2;
        $m2 = $x;
    } elseif ($x > $m3){
        $m3 = $x;
    }        

}

echo "Min Number = $n1 $n2 $n3<br>";
echo "Max Number = $m1 $m2 $m3";


*/

/*echo "<pre>";
$a = 20;
for ($i = 1; $i < $a; $i++) {
    for ($j = $i; $j < $a; $j++)
        echo "&nbsp;&nbsp;&nbsp;";
    for ($j = 2 * $i - 1; $j > 0; $j--)
        echo ("&nbsp;*");
    echo "<br>";
}
// $n = 8;
for ($i = $a; $i > 0; $i--) {
    for ($j = $a - $i; $j > 0; $j--)
        echo "&nbsp;&nbsp;&nbsp;";
    for ($j = 2 * $i - 1; $j > 0; $j--)
        echo ("&nbsp;*");
    echo "<br>";
}
echo "</pre>";
*/
/*
echo "<pre>";
function printPattern($n,$filled = false) 
{ 
      
    $k = 0; 
  
    // Print upper triangle 
    for ($i = 1; $i <= $n; $i++)  
    { 
          
        // Print spaces 
        for ($j = 1; $j <= $n - $i; $j++)  
        { 
            // echo " &nbsp;"; 
            echo ($filled !== false) ? "&nbsp;" : " &nbsp;"; 
        } 
          
        // Print # 
        while ($k != (2 * $i - 1))  
        { 
            if ($k == 0 or $k == 2 * $i - 2) 
                echo "*"; 
            else
                echo ($filled !== false) ? " " : "*"; 
            $k++; 
        } 
        $k = 0; 
          
        // move to next row 
        echo "\n"; 
    } 
    $n--; 
      
    // Print lower triangle 
    for ($i = $n; $i >= 1; $i--) 
    { 
          
        // Print spaces 
        for ($j = 0; $j <= $n - $i; $j++)  
        { 
            echo ($filled !== false) ? "&nbsp;" : " &nbsp;"; 
        } 
          
        // Print # 
        $k = 0; 
        while ($k != (2 * $i - 1))  
        { 
            if ($k == 0 or $k == 2 * $i - 2) 
                echo "*"; 
            else
                
              	echo ($filled !== false) ? " " : "*"; 
            $k++; 
        } 
        echo "\n"; 
    } 
} 
  
    // Driver Code 
    $n = 12; 
    printPattern($n,true); 
  
// This Code is contributed by mits  

*/
// echo "</pre>";

/*
function printDivisors($n) 
{ 
    for ($i = 1; $i <= $n; $i++) 
        if ($n % $i == 0) 
            echo $i," "; 
} 
 

printDivisors(); 
  */



/*function printRectangle($h , $w, $filled = false) 
{ 
    for ($i = 0; $i < $h; $i++) 
    { 
        echo"<br>"; 
        for ($j = 0; $j < $w; $j++) 
        { 
              
            // Print @ if this is first row 
            // or last row. Or this column 
            // is first or last. 
            if ($i == 0 || $i == $h - 1 ||  
                $j == 0 || $j == $w - 1) 
            echo"*"; 
            else
            
            echo ($filled !== false) ? "*" : "&nbsp;&nbsp;";  
        } 
    } 
} 
  
    // Driver code 
    $h = 20; 
    $w = 10	; 
    printRectangle($h, $w,false);

*/

/*for($i=5;$i>=1;$i--){  
	for($j=$i;$j>=1;$j--){  
	echo "*";  
	}  
	echo "<br>";  
}  
 


for($i=0;$i<=15;$i++){  
	for($j=1;$j<=$i;$j++){  
		echo  "*";  
	}  
echo "<br>";  
}   





for($i=0;$i<=15;$i++){  
 for($j=1;$j<=$i;$j++){  
  echo  ($j == 1 || $j == $i || $i == 15) ? '*' : '&nbsp; ';  
 }  
echo "<br>";  
}



for($i=0;$i <= 15;$i++){  
 for($j=15;$j >= $i;$j--){  
  echo  ($j == 15 || $j == $i || $i == 0) ? '*' : '&nbsp; ';  
  // echo "*";
 } 
echo "<br>";  
}


for($i=0;$i<=15;$i++) {  
    for ($j = 0; $j < 15 - $i; $j++)
        echo '&nbsp ';
    for($j=1;$j<=$i; $j++)
        echo  ($j == 1 || $j == $i || $i == 15) ? '*' : '&nbsp ';
    echo "<br>";  
}



for ($i = 15; $i >= 0; $i--) {  
    for ($j = 1; $j <= $i; $j++)
        echo  ($j == 1 || $j == $i || $i == 15) ? '*' : '&nbsp;&nbsp';
    echo "<br>";  
}


for ($i = 15; $i >= 0; $i--) { 
    for ($j = 0; $j < 15 - $i; $j++)
        echo '&nbsp;&nbsp';
    for ($j = 1; $j <= $i; $j++)
        echo  ($j == 1 || $j == $i || $i == 15) ? '*' : '&nbsp;&nbsp';
    echo "<br>";  
}*/
// for($i=0;$i<=5;$i++){  
// 	for($j=5-$i;$j>=;$j--){  
// 	echo "* ";  
// 	}  
// echo "<br>";  
// }  

?>


</body>
</html>