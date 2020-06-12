<?php
header("Content-type: application/json");
if (isset($_GET['q1'])) {
    if (isset($_GET['radius'])) {
        $r = $_GET['radius'];
        $environment = (M_PI * ($r * $r));
        $environment_round =  floor((M_PI * ($r * $r)));
        $area = (($r * M_PI) * 2);
        $area_round = floor(($r * M_PI) * 2);
        $result = [
            "environment" => $environment,
            "environment_round" => $environment_round,
            "area" => $area,
            "area_round" => $area_round,
            "diameter" => $r * $r
        ];
        echo json_encode($result);
    } else {
        $error = [
            "msg" => "radius can not be empty!",
        ];
        echo json_encode($error);
    }
}
if (isset($_GET['q2'])) {
    if (isset($_GET['a']) && isset($_GET['b'])) {
        $a = $_GET['a'];
        $b = $_GET['b'];
        for ($i = 1; $i <= $b; $i++) {
            $sum += $a;
        }
        $result = [
            "result" => $sum
        ];
        echo json_encode($result);
    }
}
if (isset($_GET['q2_1'])) {
    if (isset($_GET['a']) && isset($_GET['b'])) {
        $a = $_GET['a'];
        $b = $_GET['b'];
        $counter = 0;
        while ($a >= $b) {
            $a -= $b;
            $counter++;
        }
        $result = [
            "result" => $counter + ($a / $b)
        ];
        echo json_encode($result);
    }
}
if (isset($_GET['q_3'])) {
    if (isset($_GET['x']) && isset($_GET['y']) && isset($_GET['z'])) {
        $x = $_GET['x'];
        $y = $_GET['y'];
        $z = $_GET['z'];
        if (($x + $y > $z) && ($x + $z > $y) && ($y + $z > $x)) {
            $status = "رسم میشه";
        } else {
            $status = "رسم نمیشه!";
        }
        $result = [
            "result" => $status
        ];
        echo json_encode($result);
    }
}
if (isset($_GET['q_4'])) {
    if (isset($_GET['n'])) {
        $number = $_GET['n'];
        $res = $number * $number * $number;
        $result = [
            "result" => $res
        ];
        echo json_encode($result);
    }
}
if (isset($_GET['q_5'])) {
    if (isset($_GET['x']) && isset($_GET['y']) && isset($_GET['z'])) {
        $x = $_GET['x'];
        $y = $_GET['y'];
        $z = $_GET['z'];

        for ($i = 1; $i < $y; $i++) {
            $res += $x * $x;
        }
        $result_a = $res + $z;

        $result = [
            "result" => $result_a
        ];
        echo json_encode($result);
    }
}


if (isset($_GET['q_6'])) {
    if (isset($_GET['x']) && isset($_GET['y'])) {

        $num = $_GET['x'];
        $num2 = $_GET['y'];
        for ($i = 0; $i < $num; $i++) {
            if (($i % 2) === 0) {
                $num_1 += $i;
            }
        }


        for ($j = 0; $j < $num2; $j++) {
            if (($j % 2) === 0) {
                $num_2 += $j;
            }
        }
        $results = $num_1 + $num_2;
        $result = [
            "result" => $results
        ];
        echo json_encode($result);
    }
}

if (isset($_GET['q_7'])) {
    if (isset($_GET['x']) && isset($_GET['y'])) {

        $num = $_GET['x'];
        $num2 = $_GET['y'];
        function calcAvg($firstNum, $secondNum)
        {
            return (($firstNum + $secondNum) / 2);
        }

        $result = [
            "result" => calcAvg($num, $num2)
        ];
        echo json_encode($result);
    }
}


if (isset($_GET['q_8'])) {
    if (isset($_GET['x'])) {
        $input = $_GET['x'];
        $output = '';
        for($i=1;$i<=$input;$i++){
            $output .= PHP_EOL;
            for($j=1;$j<=$input;$j++){
                if(($i==1 || $i==$input) || ($j==1 || $j==$input)){
                    $output .=  "*";
                }
                else{
                    $output .= "*";
                }
            }
            
        }
        $result = [
            "result" => $output
        ];
        echo json_encode($result);
    }
}




