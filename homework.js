// question 6
// function checkID() {
//     let id = prompt('what is your id?');
//     if (id && id.length === 9 && !isNaN(id)) {
//         alert('thx');
//     } else {
//         alert('again');
//     }
// }
// checkID()

function checkID() {
    let id = prompt('what is your id?');

    while (!id || id.length !== 9 || isNaN(Number(id))) { 
        id = prompt('again');
    }

    alert('thx');
}

//  checkID();


function checkID() {
    let id = prompt('what is your id?');
    while (!id || id.length!==9 || isNaN(Number(id))) {
       id = prompt("again");
    }
    alert ('thx');
}

 checkID();