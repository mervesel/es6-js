window.onload=function(){
    //backtick kullanmanın avantaşı boşlukları ve line-breakleri koruması.diğer türlü olduğunda düzeltiliyor code editorü nedeniyle.
    // var temp=`hello,
    
    // my name is Merve`;

    // console.log(temp);

    // function logNinja(name,age){
    //     console.log("my name is "+name+ " and my age is "+age);
    // }
    // logNinja("merve",30);
    
    //yukarıdaki cümleyi şöyle de yazabiliriz.
    function logNinja(name,age){
        console.log(`my name is ${name} and my age is ${age}.`)
    }
    logNinja("merve",30);

   
    
}