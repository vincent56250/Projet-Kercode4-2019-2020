/*L’idée est toute simple, détecter si la page à défilée en
*ajoutant la capture de l’événement onscroll. 
*De tester si la position dans la page" window.pageYOffset" est
*plus grand que 100. On pourra ici ajouter une comparaison avec
*la hauteur de la page window.innerHeight au lieu de 100 pixels.
*Dans quel cas, il suffit de changer la classe du bouton
*(className) pour le rendre visible.*/
document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
  });

 /* 1. On ajouter un « écouteur » en anglais un « listener » qui s'assure que la page soit chargée :
 * document.addEventListener('DOMContentLoaded', function() {... };});
  
  *2. Une fois chargé, il détecte quand la page défile :
  *window.onscroll = function(ev) {...};
  
  *3. Si c'est le cas, on cible la classe de l'élément "cRetour"
  *document.getElementById("cRetour").className
  
  *4. Et on interchange la classe selon la position dans la page, visible dès qu'elle est à plus de 100 pixels du haut. 
  *(window.pageYOffset > 100) ? "cVisible" : "cInvisible";
  
  *5. opacity:0 étant invisible et opacity:1 visible.*/
  


