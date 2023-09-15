window.onload=function(){
    const pi=3; //global scope
    //const değişkenine bir değer atadıysak yeni bir değer atayamayız.yani deeğerini değiştiremeyiz.

    function calcArea(r){
        const pi=5; //local scope
        console.log("The area: "+ pi*r*r);
    }
    console.log(pi);


    calcArea(6);
}