window.onload=function(){
    // var names=new Set();
    // names.add("merve").add("mesut").add("cansu").add("can"); //set metodu aynı elemanı eklememize engel olur.arrayden frakı burada
    // names.delete("merve");
    // //tek bir eleman değilde tüm elemanları silmek istediğimizde tek seferde
    // //clear kullanırız.
    // // names.clear();
    // console.log(names);
    // console.log(names.size);
    // console.log(names.has("mesut"));

    var ninjas=["merve","ekin","cem","su","merve","su"];
    console.log(ninjas);

    var refinedNinjas=new Set(ninjas);
    console.log(refinedNinjas);

    var ninjas=[...refinedNinjas];
    console.log(ninjas);




  




}