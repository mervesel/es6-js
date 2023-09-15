window.onload=function(){
    var name="merve";
    var age=30;

    var ninja={
        //name: name
        //age: age böyle yazmak zorunda değilsin.aşağıdaki de aynı sonucu verir.
        name, 
        age,
        //chop: function(x){
            // console.log(`you chopped the enemy ${x} times.`)
        // } aşağıdaki gibi yazabilirsin.
        chop(x){
            console.log(`you chopped the enemy ${x} times.`)
        }
    };
    console.log(ninja.name);
    console.log(ninja.age);
    console.log(ninja.chop(3)); 
}