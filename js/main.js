const firstName = prompt("Inserisci il tuo Nome");
const lastName = prompt("Inserisci il tuo Cognome");
const favouriteColor = prompt("Inserisci il tuo colore preferito");
const age = parseInt(prompt("Inserisci la tua età"));

//bonus
const bonus = (age + 21);

const password = (firstName + lastName + favouriteColor + bonus);

document.getElementById("your-password").innerHTML= password;