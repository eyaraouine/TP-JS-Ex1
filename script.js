
function jeuChifCache(t){
     var chif=Math.floor(Math.random()*10);
 for(var i=0;i<t;i++){
     c=prompt("saisir un chiffre")
     if (c==chif){
         alert("bravo, vous avez deviné le chiffre !!")
         break
     }
    else {if(i!=t-1){
        c=confirm("faux,vous voulez continuer ?")
        if(!c) {
            break    
        }

    }
 }

}if (i==t){
    alert("vous avez perdu :(")
}
}
t=prompt("donner le nombre de tentatives?")
jeuChifCache(t)
