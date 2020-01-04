//boite modal
// Get the modal-obtenir lelement  modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//obtenez le bouton qui ouvre le modal
var btn = document.getElementById("myBtnmodal");

// Get the <span> element that closes the modal
//recupere l'element qui ferme le modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//lorsque l'utilisateur click sur le bouton
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//lorsque l'utilisateur click en dehors du modal ferme le
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//-----------controle--mdp boite modal-----------------
let modalValid = document.getElementById('btnInscription');
let mdp = document.getElementById('password');
let noMdp = document.getElementById('noMdp');
let mdpValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}/;
console.log('plop')
modalValid.addEventListener('click', validMdp);

function validMdp(event) {
    //Si le champ est vide
    if (mdp.validity.valueMissing) {
        event.preventDefault();
        noMdp.textContent = 'mdp manquant';
        noMdp.style.color = 'red';
        //Si le format de données est incorrect
    } else if (mdpValid.test(mdp.value) == false) {
        event.preventDefault();
        noMdp.textContent = 'Format incorrect';
        noMdp.style.color = 'orange';
    } else {
        noMdp.style.color = 'green';
        console.log('ok')
    }
}
//-----------controle-confirmation-mdp boite modal-----------------
let confirmMdp = document.getElementById('confirmPassword');
let noConfirmMdp = document.getElementById('noConfirmMdp');


modalValid.addEventListener('click', validMdpConfirm);

function validMdpConfirm(event) {
    //Si le champ est vide
    if (confirmMdp.validity.valueMissing) {
        event.preventDefault();
        noConfirmMdp.textContent = 'confirmation mdp manquant';
        noConfirmMdp.style.color = 'red';
        //Si le format de données est incorrect
    } else if (mdpValid.test(confirmMdp.value) == false) {
        event.preventDefault();
        noConfirmMdp.textContent = 'Format incorrect';
        noConfirmMdp.style.color = 'orange';
    } else {
        noConfirmMdp.style.color = 'green';
        alert('Ze Zapelle Groot')
    }
}
//-------------------mdp identique-----------
modalValid.addEventListener('click', confirmPassword)

function confirmPassword(event) {

    var mdpIdentical = document.getElementById("password").value;
    var mdpConfirmIdentical = document.getElementById("confirmPassword").value;

    if (mdpIdentical !== mdpConfirmIdentical) {
        event.preventDefault();
        noMdp.textContent = 'mdp non identique';
        noMdp.style.color = 'red';
        noConfirmMdp.textContent = 'mdp non identique';
        noConfirmMdp.style.color = 'red';
    } else {
       noConfirmMdp.textContent = '\u2714';
        noConfirmMdp.style.color = 'green';
        console.log('ok')
    }
};
//----------mail-------------------------------------
let mail = document.getElementById('eMail');
let noMail = document.getElementById('noEmail');
let mailValid = /^[a-zA-Z0-9.-]+@[a-z0-9.-]+.[com|fr]{2,4}$/;

modalValid.addEventListener('click', validMail);

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
let prenom = document.getElementById('firstName');
let missPrenom = document.getElementById('noFirstName');
// /^=debut de la regexp - $/=fin de la regexp- {2,}=nombre minimun de caractere
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/

modalValid.addEventListener('click', validPrenom);

function validPrenom(event) {
    console.log('ok');
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
        console.log('ok')
    }
}
// ---------------nom-----------------------------------
let nom = document.getElementById('lastName');
let noName = document.getElementById('noLastName');
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/

modalValid.addEventListener('click', validNom);

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
        console.log('ok')
    }
}