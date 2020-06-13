<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>تمرین های php </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/css/main.css">
    <script src="assets/js/axios.min.js"></script>
    <script src="assets/js/particles.min.js"></script>
    <script src="assets/js/app.js" defer="true"></script>

</head>

<body>


    <div class="nav">
        <div>محمد مسعودی حصار</div>
        <div><a href="">دانلود سورس پروژه</a></div>
    </div>
    <div id="particles-js"></div>




    <div class="container">
    <br><br><br>
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
                <div class="sectionLeft sectionLeftQ1"></div>
            </div>
        </div>



        <div class="questionBox">
            <div class="title">
                <p>
                    <span>2</span>
                    دو عدد را گرفته و تقسیم را با تفریق و ضرب را با جمع محاسبه نماید
                </p>
            </div>
            <div class="content">
                <div class="box">
                    <h3>تقسیم</h3>
                    <input type="number" class="numbers1 input" placeholder="عدد اول">
                    <span> / </span>
                    <input type="number" class="numbers2 input" placeholder="عدد دوم">
                    <span> = </span>
                    <span class="answer1"></span>

                </div>
                <div class="box">
                    <h3>ضرب</h3>
                    <input type="number" class="number1 input" placeholder="عدد اول">
                    <span> x </span>
                    <input type="number" class="number2 input" placeholder="عدد دوم">
                    <span> = </span>
                    <span class="answer"></span>

                </div>
            </div>

        </div>


        <div class="questionBox">
            <div class="title">
                <p>
                    <span>3</span>
                    سه ضلع مثلث را گرفته و امکان رسم آن را بررسی کنید


                </p>
            </div>
            <div class="content">
                <div class="sectionRight">
                    <input type="number" class="radius_1" placeholder="ضلع اول">
                    <input type="number" class="radius_2" placeholder="ضلع دوم">
                    <input type="number" class="radius_3" placeholder="ضلع سوم">
                </div>
                <div class="sectionLeft sectionLeftQ3"></div>
            </div>

        </div>


        <div class="questionBox">
            <div class="title">
                <p>
                    <span>4</span>
                    عددی را گرفته و توان یک تا سه آن را با ضرب به دست آورد
                </p>
            </div>
            <div class="content">
                <div class="sectionRight">
                    <input type="number" class="numberQ4" placeholder="عدد را وارد کنید">

                </div>
                <div class="sectionLeft sectionLeftQ4"></div>
            </div>

        </div>

        <div class="questionBox">
            <div class="title">
                <p>
                    <span>5</span>
                    x , y , z
                    را گرفته
                    x را به توان y رسانده
                    ،
                    و با z جمع کند
                    .
                </p>
            </div>
            <div class="content">
                <div class="sectionRight">
                    <input type="number" class="numberQ5_1" placeholder="عدد اول">
                    <input type="number" class="numberQ5_2" placeholder="عدد دوم">
                    <input type="number" class="numberQ5_3" placeholder="عدد سوم">

                </div>
                <div class="sectionLeft sectionLeftQ5"></div>
            </div>

        </div>
        <div class="questionBox">
            <div class="title">
                <p>
                    <span>6</span>
                    دو عدد را گرفته و حاصل جمع اعداد زوج بین آنها را محاسبه نماید
                </p>
            </div>
            <div class="content">
                <div class="sectionRight">
                    <input type="number" class="numberQ6_1" placeholder="عدد اول">
                    <input type="number" class="numberQ6_2" placeholder="عدد دوم">


                </div>
                <div class="sectionLeft sectionLeftQ6"></div>
            </div>
        </div>

        <div class="questionBox">
            <div class="title">
                <p>
                    <span>7</span>
                    دو عدد را گرفته میانگین آن دو عدد را محاسبه نماید
                </p>
            </div>
            <div class="content">
                <div class="sectionRight">
                    <input type="number" class="numberQ7_1" placeholder="عدد اول">
                    <input type="number" class="numberQ7_2" placeholder="عدد دوم">
                </div>
                <div class="sectionLeft sectionLeftQ7"></div>
            </div>
        </div>


        <div class="questionBox">
            <div class="title">
                <p>
                    <span>8</span>
                    ضلع مربع را گرفته آن را رسم نماید
                </p>
            </div>
            <div class="content">
                <div class="sectionRight">
                    <input type="number" class="numberQ8_1" placeholder="ضلع مربع را وارد کنید">

                </div>
                <div class="sectionLeft sectionLeftQ8"></div>
            </div>
        </div>

        <div class="questionBox">
            <div class="title">
                <p>
                    <span>9</span>

                    طول و عرض مستطیل را گرفته و آن را رسم نمایید

                </p>
            </div>
            <div class="content">

                <div class="sectionRight">
                    <input type="number" class="numberQ9_1" placeholder="طول" max="30">
                    <input type="number" class="numberQ9_2" placeholder="عرض" max="30">
                    <div class="checkBox">
                        تو پر باشه ؟
                        <div class="cbx">
                            <input id="cbx" type="checkbox" onchange="fillRectangle(this)" />
                            <label for="cbx"></label>
                            <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                                <path d="M2 8.36364L6.23077 12L13 2"></path>
                            </svg>
                        </div>
                        <!-- Gooey-->
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo">
                                    <fegaussianblur in="SourceGraphic" stddeviation="4" result="blur"></fegaussianblur>
                                    <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo"></fecolormatrix>
                                    <feblend in="SourceGraphic" in2="goo"></feblend>
                                </filter>
                            </defs>
                        </svg>
                    </div>

                </div>
                <div class="sectionLeft sectionLeftQ9"></div>
            </div>

        </div>







        <div class="questionBox">
            <div class="title">
                <p>
                    <span>10</span>

                    ضلع مثلث را گرفته و آن را رسم کنید
                </p>
            </div>
            <div class="content">

                <div class="sectionRight">
                    <input type="number" class="numberQ10_1" placeholder="ضلع مثلث" max="30">

                    <div class="checkBox">
                        تو پر باشه ؟
                        <div class="cbx">
                            <input id="cbx" type="checkbox" onchange="fillTriangle(this)" />
                            <label for="cbx"></label>
                            <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                                <path d="M2 8.36364L6.23077 12L13 2"></path>
                            </svg>
                        </div>
                        <!-- Gooey-->
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo">
                                    <fegaussianblur in="SourceGraphic" stddeviation="4" result="blur"></fegaussianblur>
                                    <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo"></fecolormatrix>
                                    <feblend in="SourceGraphic" in2="goo"></feblend>
                                </filter>
                            </defs>
                        </svg>
                    </div>

                </div>
                <div class="sectionLeft sectionLeftQ10"></div>
            </div>

        </div>




        <div class="questionBox">
            <div class="title">
                <p>
                    <span>11</span>

                    چند عدد را گرفته و کوچکترین و بزرگترین آن را نمایش دهد


                </p>
            </div>
            <div class="content">

                <div class="sectionRight">
                    <input type="number" class="numberQ11_1" placeholder="عدد اول">
                    <input type="number" class="numberQ11_2" placeholder="عدد دوم">
                    <input type="number" class="numberQ11_3" placeholder="عدد سوم">


                </div>
                <div class="sectionLeft sectionLeftQ11"></div>
            </div>

        </div>


        <div class="questionBox">
            <div class="title">
                <p>
                    <span>12</span>

                    چند عدد را گرفته و
                    و سه عدد کوچکتر و بزرگتر آن را نمایش دهد

                </p>
            </div>
            <div class="content">
                <div class="sectionRight">
                    <input type="number" class="numberQ12_1" placeholder="عدد اول">
                    <input type="number" class="numberQ12_2" placeholder="عدد دوم">
                    <input type="number" class="numberQ12_3" placeholder="عدد سوم">
                    <input type="number" class="numberQ12_4" placeholder="عدد چهارم">
                    <input type="number" class="numberQ12_5" placeholder="عدد پنجم">
                    <input type="number" class="numberQ12_6" placeholder="عدد ششم">
                </div>
                <div class="sectionLeft sectionLeftQ12"></div>
            </div>

        </div>



        <div class="questionBox">
            <div class="title">
                <p>
                    <span>13</span>


                    ضلع یک لوزی را گرفته و آن را به صورت توخالی و تو پر رسم نماید


                </p>
            </div>
            <div class="content">
                <div class="sectionRight">
                    <input type="number" class="numberQ13_1" placeholder="ضلع لوزی">
                    <div class="checkBox">
                        تو پر باشه ؟
                        <div class="cbx">
                            <input id="cbx" type="checkbox" onchange="filldiamond(this)" />
                            <label for="cbx"></label>
                            <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                                <path d="M2 8.36364L6.23077 12L13 2"></path>
                            </svg>
                        </div>
                        <!-- Gooey-->
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo">
                                    <fegaussianblur in="SourceGraphic" stddeviation="4" result="blur"></fegaussianblur>
                                    <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo"></fecolormatrix>
                                    <feblend in="SourceGraphic" in2="goo"></feblend>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="sectionLeft sectionLeftQ13"></div>
            </div>

        </div>





        <div class="questionBox">
            <div class="title">
                <p>
                    <span>14</span>
                    مقسوم علیه های عدد داده شده را نمایش دهید
                </p>
            </div>
            <div class="content">
                <div class="sectionRight">
                    <input type="number" class="numberQ14_1" placeholder="عدد را وارد کنید">
                </div>
                <div class="sectionLeft sectionLeftQ14"></div>
            </div>

        </div>







    </div>










    </div>

    </div>







</body>

</html>