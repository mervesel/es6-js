window.onload=function(){

    // var num1=[1,2,3];
    // var num2=[...num1,4,5,6];

    // console.log(num2);

    var nums=[3,4,5];

    function addNums(a,b,c){
        console.log(a+b+c);
    }
    addNums(...nums);
    
}