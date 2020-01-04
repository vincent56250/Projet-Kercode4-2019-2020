// ----------------------les cookies---------------------------------
//je créer mes variables en recuperant l'id de mes boutons
let ok = document.getElementById("ok");
let non = document.getElementById("refuser")
// je leur dit d'ecouter et d'aplliquer a levenement au click
ok.addEventListener("click", hidden)
non.addEventListener("click",redirectory)
function redirectory(){
    // je lui dit de rediriger ailleur 
    document.location.href="https://www.google.fr";
}
function hidden(){
    
  //je lui dit quand tu vas cliquer sur ton bouton ils se masquera
  document.getElementById("cookies").style.display = "none";
}
