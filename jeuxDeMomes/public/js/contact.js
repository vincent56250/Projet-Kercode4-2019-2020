/*je verifie les données lors du clic sur le bouton envoyer,
 *si le champs est vide un message d'erreure doit etre affiché là ou la valeur est manquante*/
// je créer un gestionnaire d'evenement "click" contenant ma fonction de validation

/*let formValid = document.getElementById('btnEnvoi');
 *formValid.addEventListener('click', validation);
 //function validation() {}*/

/* ensuite, je verifie la presence de donné en soi 
*je vais utiliser la proprieté "validity" de l'objet "Element"
*Cette propriété contient elle même différentes propriétés 
*permettant de vérifier des données et qui vont renvoyer un booléen.
*Pour vérifier qu’un champ n’est pas vide,
*je vais utiliser la propriété "valueMissing", 
*qui renvoie true si un champ possédant un attribut "required" est vide.
*Dans le cas où "valueMissing" renvoie "true",
*je vais donc bloquer l’envoi du formulaire et renvoyer un message d’erreur.
*Pour bloquer l’envoi du formulaire,
*je vais utiliser la méthode preventDefault() si aucune valeur n’est envoyée.
*Pour rappel, "preventDefault()"" est une méthode de l’objet "Event" qui va annuler 
*le déclenchemnt d’un évènement si celui-ci est annulable.
*Finalement, je vais vouloir afficher un message décrivant l’erreur à côté du champ.
*Pour cela, je vais rajouter un élément "span" avec un id dans notre formulaire.
je vais ensuite utiliser la propriété "textContent" pour afficher l’erreur.*/

/**let formValid = document.getElementById('btnEnvoi');
*let prenom = document.getElementById('prenom');
*let missPrenom = document.getElementById('missPrenom');

*formValid.addEventListener('click', validation);

*function validation(event) {
*    //Si le champ est vide
*    if (prenom.validity.valueMissing) {
*        event.preventDefault();
*        missPrenom.textContent = 'Prénom manquant';
*        missPrenom.style.color = 'red';
*    }
}*/
/*La première partie du travail est faite pour notre champ prénom.
*Maintenant, nous voulons également vérifier que l’utilisateur n’envoie pas n’importe quoi.

*Nous n’allons autoriser que les lettres, les apostrophes, les tirets et les espaces pour ce champ.

*De plus, nous n’autoriserons l’utilisation de majuscule qu’en début de mot et
nous n’autoriserons pas les tirets en début ou en fin de chaîne.

*La meilleure façon de faire tout cela est, vous l’avez certainement deviné, 
*d’utiliser les expressions régulières.*/
//------------------prenom--------------------------
let formValid = document.getElementById('btnEnvoi');
let prenom = document.getElementById('prenomContact');
let missPrenom = document.getElementById('missPrenom');
// /^=debut de la regexp - $/=fin de la regexp- {2,}=nombre minimun de caractere
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/

formValid.addEventListener('click', validPrenom);

function validPrenom(event) {
    //Si le champ est vide
    if (prenom.validity.valueMissing) {
        /*"preventDefault()"" est une méthode de l’objet "Event" qui va annuler 
        *le déclenchemnt d’un évènement si celui-ci est annulable.*/
        event.preventDefault();
        // ".textContent"= c'est pour allez remplir la balise span
        missPrenom.textContent = 'Prénom manquant';
        missPrenom.style.color = 'red';
        
        //Si le format de données est incorrect
    } else if (prenomValid.test(prenom.value) == false) {
        event.preventDefault();
        missPrenom.textContent = 'Format incorrect';
        missPrenom.style.color = 'orange';
    } else {
        missPrenom.textContent = '\u2714';
        missPrenom.style.color = 'green';
        console.log('ok')}
}
// ---------------nom-----------------------------------
let nom = document.getElementById('nomContact');
let noName = document.getElementById('noName');
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/

formValid.addEventListener('click', validNom);

function validNom(event) {
    //Si le champ est vide
    if (nom.validity.valueMissing) {    
        event.preventDefault();
        noName.textContent = 'nom manquant';
        noName.style.color = 'red';
        //Si le format de données est incorrect
    } else if (nomValid.test(nom.value) == false) {
        event.preventDefault();
        noName.textContent = 'Format incorrect';
        noName.style.color = 'orange';
    } else {
        noName.textContent = '\u2714';
        noName.style.color = 'green';
        console.log('ok')}
}
//----------mail-------------------------------------
let mail = document.getElementById('emailContact');
let noMail = document.getElementById('noMail');
let mailValid =  /^[a-zA-Z0-9.-]+@[a-z0-9.-]+.[com|fr]{2,4}$/;

formValid.addEventListener('click', validMail);

function validMail(event) {
    //Si le champ est vide
    if (mail.validity.valueMissing) {
        event.preventDefault();
        noMail.textContent = 'Mail manquant';
        noMail.style.color = 'red';
        //Si le format de données est incorrect
    } else if (mailValid.test(mail.value) == false) {
        event.preventDefault();
        noMail.textContent = 'Format incorrect';
        noMail.style.color = 'orange';
    } else {
        noMail.textContent = '\u2714';
        noMail.style.color = 'green';
        // console.log('ok')
    }
}
//--------------tel--------------
let tel = document.getElementById('telContact');
let noTel = document.getElementById('noTel');
let telValid = /^((\+)33|0)[1-9](\d{2}){4}$/;
formValid.addEventListener('click', validTel);

function validTel(event) {
    //Si le champ est vide
    if (tel.validity.valueMissing) {
        event.preventDefault();
        noTel.textContent = 'tel manquant';
        noTel.style.color = 'red';
        //Si le format de données est incorrect
    } else if (telValid.test(tel.value) == false) {
        event.preventDefault();
        noTel.textContent = 'Format incorrect';
        noTel.style.color = 'orange';
    } else {
        //https://outils-javascript.aliasdmc.fr/encodage-caracteres-formulaire/encode-caractere-2714-html-css-js-autre.html#comment-lire-tableau
        noTel.textContent = '\u2714';
        noTel.style.color = 'green';
        console.log('ok')
    }
}
