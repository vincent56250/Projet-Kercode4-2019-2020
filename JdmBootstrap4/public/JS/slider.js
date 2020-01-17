/*Grâce aux évènements onclick sur les flèches latérales,
*le code JavaScript lance la fonction ChangeSlide() 
*en passant le paramètre -1 pour la flèche gauche et 1 pour 
*la flèche droite.

*Pour ajouter un slide, il suffit de compléter la variable 
*de type tableau slide en ajoutant un nom d'image correspondant
*au slide.*/
//-------------------------parti auto---------------------------------------------
let slide = ["../img/slider_boutique/slide-4139.jpg, ../img/slider_boutique/slide-4513.jpg, ../img/slider_boutique/slide-4514.jpg, ../img/slider_boutique/slide-4515.jpg, ../img/slider_boutique/slide-820.jpg"];
let index = 0;

setInterval(function(){
    document.getElementById("slide").src = slide[index];
    index++; // j'incremente de 1
    if (index==5) index=0;// ma boucle
    
}, 3000);//3000 milliseconde= 3s (1000 milliseconde = 1 scd)

//--------------------------parti onclick--------------------------------------
function ChangeSlide(sens) {
    index = index + sens;
    if (index < 0)
        index = slide.length - 1;
    else if (index > slide.length - 1)
        index = 0;
    document.getElementById("slide").src = slide[index];
}
/*Lorsque l'utilisateur clique sur la flèche suivante,
*le paramètre sens est égal à 1 et la variable numero est incrémentée.
*L'instruction conditionnelle if permet de vérifier qu'on 
*ne dépasse pas le nombre d'images du slide. 
*Et si on dépasse, on réinitialise la variable numero, 
*ce qui permet de boucler le slider. slide.lenght 
*permet de compter le nombre d'images du tableau slide.
*on retire -1 car la première image du slide est slide[0].*/
