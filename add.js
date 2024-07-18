//1ci

let cem = 0, hasil = 1;
for (let i = 1; i < 10; i++) {
    cem += i
    hasil *= i
}
// console.log("cem " + cem + ", ", "hasil " + hasil);


//2ci

let cem2 = 0, hasil2 = 1;
for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        // console.log(i);
        cem2 += i
        hasil2 *= i
    }
}
// console.log("cem " + cem2 + "," , "hasil "+ hasil);

//3 cu 3 rəqəmli ədədlərin ədədi ortasını tapın

let res = 0;
let count = 0;
let sum = 0;
for (let i = 100; i < 1000; i++) {
    sum += i
    count++

}

// console.log(sum/count);


//3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın

for (let i = 100; i < 1000; i++) {
    if (i % 7 == 0 && i % 8 == 0) {
        // console.log(i);
    }
}

//3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın
let sum2 = 0;
for (let i = 100; i < 1000; i++) {
    if (i % 7 == 0 && i % 8 == 0) {
        sum2 += i
    }
}
// console.log(sum2);

//3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın
for (let i = 100; i < 1000; i++) {
    if (i % 7 == 0 && i % 8 == 0) {
        // console.log(i);
        break;
    }
}

//3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
for (let i = 999; i > 100; i--) {
    if (i % 7 == 0 && i % 8 == 0) {
        // console.log(i);
        break;
    }
}

//1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın

for (let i = 2; i < 100; i++) {
    let INDEX = 0;
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) INDEX++
    }
    // if (INDEX > 1){
    //     console.log("mur = " + i)} 
    // else {console.log("sad =  " + i)}
}


//Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın

let a = 200, b = 1552, c = 112;
let boyuk = 0;
let kicik = 0;
if (a > b) {
    boyuk = a;
    kicik = b
} else {
    boyuk = b;
    kicik = a;
}
if (c > boyuk) {
    boyuk = c;
}
if (c < kicik) {
    kicik = c;
}
// console.log(boyuk , kicik);


//İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)



// let f = +prompt("eded daxil edin");
// if(f%2==0){
//     console.log("cutdur");
// }else{
//     console.log("tekdir");
// }

//11. İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın.


// let num1=+prompt("eded daxil edin")
// let num2=+prompt("ikinci ededi daxil edin")
// let riy=prompt("Riyazi emel daxil edin")
// switch (riy) {
//     case "*":
//             alert(num1*num2);
//         break;
//         case "+":
//             alert(num1+num2);
//         break;
//         case "-":
//             alert(num1-num2);
//         break;
//         case "/":
//             alert(num1/num2);
//         break;
//     default:
//         alert("Riyazi emel daxil edin");
//         break;
// }


//12. Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.


// let add= +prompt("eded daxil edin");
// for(let i=100; i<1000; i++){
//     if(i%add==0){
//         console.log(i);
//     }
// }

//13. Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.

// let add2=+prompt("eded daxil edin");
// for(let i=1; i<=add2; i++){
//     if(add2%i==0){
//         console.log(i);
//     }
// }

//14. 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)


// let num=12;
// let t=0;
// for(let i=12; i>0; i--){
//     console.log(t,i);
//     t++
// }

//15. İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, =&gt; x=6, y=5)

// let x=6;
// let y=5;
// let f=x;
// x=y;
// y=f
// console.log("x" + "=" + x, "y"+ "=" +y);



//16. Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın.

// let ed = +prompt("eded daxil edin");

//     if(ed%1==0){
//         console.log("tam ededdir");
//     }else{
//         console.log("tam eded deyil");
//     }


//17. number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin - beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın); - 3-ə bölünmədən qalan qalığını (tapın);

// let number=11;
// console.log(number**5);
// console.log(number%3);


// 18.Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.

// 0 &gt; �� cox soyuq
// 0-15 derece �� soyu
// 15-30 derece �� isti
// 30&lt; �� cox isti
// Əgər heç biri deyilse alerte versin ki temperatur yanlışdır.

// let deg=+prompt("havanin derecesini daxil edin");
// if(deg<0){
//     console.log("hava cox soyuqdur");
// }else if(deg<15){
//     console.log("hava soyuqdur");
// }else if(deg<=30){
//     console.log("hava istidir");
// }else if(deg>30){
//     console.log("hava cox istidir");
// }else{
//     alert("temperatur duzgun qeyd edilmeyib")
// }


//19.Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 =&gt; bazarertesi,3=&gt; cersenbe (heftenin 7 gunu ucun)

// let day = +prompt("heftenin bir gununu daxil edin");
// switch (day) {
//     case 1:
//         console.log("bazar ertesi");
//         break;
//     case 2:
//         console.log("cersenbe axsami");
//         break;
//     case 3:
//         console.log("cersenbe");
//         break;
//     case 4:
//         console.log("cume axsami");
//         break;
//     case 5:
//         console.log("cume");
//         break;
//     case 6:
//         console.log("senbe");
//         break;
//         case 7:
//             console.log("bazar");
//             break;
//     default:
//         alert("duzgun qeyd etmemisiniz")
//         break;
// }



//20. Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yaz fesli alertə çıxarın.

// let month = +prompt("ayin sira nomresini daxil edin");
// switch (month) {
//     case 1:
//         alert("yanvar, qis fesli");
//         break;
//     case 2:
//         alert("fevral, qis fesli");
//         break;
//     case 3:
//         alert("mart, yaz fesli");
//         break;
//     case 4:
//         alert("aprel, yaz fesli");
//         break;
//     case 5:
//         alert("may, yaz fesli");
//         break;
//     case 6:
//         alert("iyun, yay fesli");
//         break;
//     case 7:
//         alert("iyul, yay fesli");
//         break;
//     case 8:
//         alert("avqust, yay fesli");
//         break;
//     case 9:
//         alert("sentyabr, payiz fesli");
//         break;
//     case 10:
//         alert("oktyabr, payiz fesli");
//         break;
//     case 11:
//         alert("noyabr, payiz fesli");
//         break;
//     case 12:
//         alert("yanvar, qis fesli");
//         break;
//     default:
//         alert("duzgun qeyd etmemisiniz")
//         break;
// }