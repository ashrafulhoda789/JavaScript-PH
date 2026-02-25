const firstName = 'Kamruzzaman';
const lastName = "Khalid";

const aboutMe = `My Name is ${firstName}`;
console.log(aboutMe);

function getCardHTML(name, description, price){
    const div = `
        <div class="card">
            <h2>${name.toUpperCase()}</h2>
            <p>${description}</p>
            <p>Price: ${price}</p>
        </div>
    `

    console.log(div);
}

getCardHTML('iphone 12', "It's my phone", 12000);
