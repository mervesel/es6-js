window.onload=function(){

    // var ninjaGreeting=function(){
    //     console.log("hiiiyaa");
    // }

    // var ninjaGreeting=()=>{
    //     console.log("hiiiyaa");
    // }

    //tek satırlık kod olduğunda süslü parantez içerisine yazmak zorunda değiliz.
    // var ninjaGreeting=(name)=>console.log(`${name} says hello.`);
    //eğer tek bir parametre gönderiyorsak () parantez kullanmak zorunda değiliz.
    // var ninjaGreeting=name=>console.log(`${name} says hello.`);

    // ninjaGreeting("merve");


    var ninja={
        name: "merve",
        chop(x){
            window.setInterval(()=>{
                if(x>0){
                    console.log(this.name+ " chopped the enemy.");
                    x--;
                }
            },1000);

        }
    };
    ninja.chop(6);
  





}