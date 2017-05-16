
function main()
{
    var r, v, a,PI;
    PI=3.14159;
    r = document.getElementById("r").value;
    v=4.0/3.0*PI*r*r*r;
    a=4.0*PI*r*r;


    var s ;
    
    s = "球體體積為：" + v + " <br/>";
    s += "表面積為：" + a + " <br/>";
 

    document.getElementById("demo").innerHTML = s;
    return 0;

}


/*
double r, volume, area;
printf("請輸入半徑：");
scanf("%lf",&r);
volume=4.0/3.0*PI*r*r*r;
area=4.0*PI*r*r;
printf("球體體積為%.2f\n",volume);
printf("表面積為%.2f\n",area);
return 0;
*/