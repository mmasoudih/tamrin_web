<?php
// header("Content-type: application/json");
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
        for ($i = 1; $i <= $input; $i++) {
            $output .= PHP_EOL;
            for ($j = 1; $j <= $input; $j++) {
                if (($i == 1 || $i == $input) || ($j == 1 || $j == $input)) {
                    $output .=  "*";
                } else {
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




if (isset($_GET['q_9'])) {
    if (isset($_GET['x']) || isset($_GET['y']) && $_GET['status']) {
        $x = $_GET['x'];
        $y = $_GET['y'];
        $status = $_GET['status'];

        function print_rectangle($n, $m, $filled)
        {
            $output = '';
            for ($i = 1; $i <= $n; $i++) {
                $output .= PHP_EOL;
                for ($j = 1; $j <= $m; $j++) {
                    if (
                        $i == 1 || $i == $n ||
                        $j == 1 || $j == $m
                    )
                        $output .= $filled != 1 ? ("* &nbsp;") : ("*&nbsp;");
                    else
                        $output .= $filled != 1 ? ("&nbsp;&nbsp;&nbsp;") : ("*&nbsp;");
                }
            }
            return $output;
        }
    }
    $result = [
        "result" => print_rectangle($x, $y, $status)
    ];

    echo json_encode($result);
}
if (isset($_GET['q_10'])) {
    if (isset($_GET['x']) && $_GET['status']) {
        $x  = $_GET['x'];
        $status = (int) $_GET['status'];
        function q10Triangle($num1, $isfilled = 0)
        {

            $triangle1 = "";
            $triangle2 = "";
            $triangle3 = "";
            $triangle4 = "";

            for ($i = 0; $i <= $num1; $i++) {
                $triangle1 .= "<br>";
                for ($j = 1; $j <= $i; $j++) {
                    if ($isfilled === 2) {
                        $triangle1 .= "*";
                    } else {
                        $triangle1 .= ($j == 1 || $j == $i || $i == $num1) ? '*' : '&nbsp;';
                    }
                }
            }

            for ($i = 0; $i <= $num1; $i++) {
                $triangle2 .= "<br>";
                for ($j = $num1; $j >= $i; $j--) {
                    if ($isfilled === 2) {
                        $triangle2 .= "*";
                    } else {
                        $triangle2 .= ($j == $num1 || $j == $i || $i == 0) ? '*' : '&nbsp;';
                    }
                }
            }

            for ($i = 0; $i <= $num1; $i++) {
                $triangle3 .= "<br>";
                for ($j = 0; $j < $num1 - $i; $j++)
                    $triangle3 .= '&nbsp';
                for ($j = 1; $j <= $i; $j++) {

                    if ($isfilled === 2) {
                        $triangle3 .= "*";
                    } else {
                        $triangle3 .= ($j == 1 || $j == $i || $i == $num1) ? '*' : '&nbsp';
                    }
                }
            }

            for ($i = $num1; $i >= 0; $i--) {
                $triangle4 .= "<br>";
                for ($j = 0; $j < $num1 - $i; $j++)
                    $triangle4 .= '&nbsp;';
                for ($j = 1; $j <= $i; $j++) {
                    if ($isfilled === 2) {
                        $triangle4 .= "*";
                    } else {
                        $triangle4 .= ($j == 1 || $j == $i || $i == $num1) ? '*' : '&nbsp;';
                    }
                }
            }

            return [
                $triangle1, $triangle2, $triangle3, $triangle4
            ];
        }
        $results = [
            "triangle1" => q10Triangle($x, $status)[0],
            "triangle2" => q10Triangle($x, $status)[1],
            "triangle3" => q10Triangle($x, $status)[2],
            "triangle4" => q10Triangle($x, $status)[3]
        ];
        echo json_encode($results);
    }
}
if (isset($_GET['q_11'])) {
    if (isset($_GET['x']) && isset($_GET['y']) && isset($_GET['z'])) {
        $x = $_GET['x'];
        $y = $_GET['y'];
        $z = $_GET['z'];
        $array = array($x, $y, $z);

        function minMax($array)
        {
            $min = min($array);
            $max = max($array);
            return ["minimum" => $min, "maximum" => $max];
        }
        $results = [
            "result" => minMax($array),

        ];
        echo json_encode($results);
    }
}


if (isset($_GET['q_12'])) {
    if (
        isset($_GET['a']) &&
        isset($_GET['b']) &&
        isset($_GET['c']) &&
        isset($_GET['d']) &&
        isset($_GET['e']) &&
        isset($_GET['f'])
    ) {
        $a = $_GET['a'];
        $b = $_GET['b'];
        $c = $_GET['c'];
        $d = $_GET['d'];
        $e = $_GET['e'];
        $f = $_GET['f'];
        $array = array($a, $b, $c, $d, $e, $f);

        function minMaxThree($array)
        {
            $n1 = $n2 = $n3 = 1000000;  // some high number
            $m1 = $m2 = $m3 = 0;
            for ($i = 0; $i < count($array); $i++) {
                $x = $array[$i];
                //min        
                if ($x <= $n1) {
                    $n3 = $n2;
                    $n2 = $n1;
                    $n1 = $x;
                } elseif ($x < $n2) {
                    $n3 = $n2;
                    $n2 = $x;
                } elseif ($x < $n3) {
                    $n3 = $x;
                }

                //max
                if ($x >= $m1) {
                    $m3 = $m2;
                    $m2 = $m1;
                    $m1 = $x;
                } elseif ($x > $m2) {
                    $m3 = $m2;
                    $m2 = $x;
                } elseif ($x > $m3) {
                    $m3 = $x;
                }
            }
            return [$n1, $n2, $n3, $m1, $m2, $m3];
        }
        $results = [
            "min1" => minMaxThree($array)[0],
            "min2" => minMaxThree($array)[1],
            "min3" => minMaxThree($array)[2],
            "max1" => minMaxThree($array)[3],
            "max2" => minMaxThree($array)[4],
            "max3" => minMaxThree($array)[5],
        ];
        echo json_encode($results);
    }
}


if (isset($_GET['q_13'])) {

    if (isset($_GET['x']) && isset($_GET['status'])) {
        $x = $_GET['x'];
        $status = (int) $_GET['status'];


        function printPattern($n, $filled)
        {
            $output = '';
            $k = 0;
            $output .= PHP_EOL;
            // Print upper triangle 
            for ($i = 1; $i <= $n; $i++) {

                // Print spaces 
                for ($j = 1; $j <= $n - $i; $j++) {
                    // echo " &nbsp;"; 
                    $output .= ($filled !== 2) ? "&nbsp;" : " &nbsp;";
                }

                // Print # 
                while ($k != (2 * $i - 1)) {
                    if ($k == 0 or $k == 2 * $i - 2)
                        $output .= "*";
                    else
                        $output .= ($filled !== 2) ? " " : " *";
                    $k++;
                }
                $k = 0;

                // move to next row 
                $output .= PHP_EOL;
            }
            $n--;

            // Print lower triangle 
            for ($i = $n; $i >= 1; $i--) {

                // Print spaces 
                for ($j = 0; $j <= $n - $i; $j++) {
                    $output .= ($filled !== 2) ? "&nbsp;" : " &nbsp;";
                }

                // Print # 
                $k = 0;
                while ($k != (2 * $i - 1)) {
                    if ($k == 0 or $k == 2 * $i - 2)
                        $output .= "*";
                    else

                        $output .= ($filled !== 2) ? " " : " *";
                    $k++;
                }
                $output .= PHP_EOL;
            }
            return $output;
        }


        $results = [
            "result" => printPattern($x, $status)
        ];
        echo json_encode($results);
    }
}
if (isset($_GET['q_14'])) {
    if (isset($_GET['x'])) {
        $x = $_GET['x'];
        function printDivisors($n)
        {
            $output = '';
            for ($i = 1; $i <= $n; $i++) {
                if ($n % $i == 0) {
                    $output .=  '<span class="res">  '.$i .'  </span>';
                }
            }
            return $output;
        }
        $results = [
            "result" => printDivisors($x)
        ];
        echo json_encode($results);
    }
}
