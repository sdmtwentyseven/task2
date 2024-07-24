// name and group
const name = "Dmitriy Skakovskiy";
const group = "MT-2201";

document.getElementById("name-group").innerHTML = `<p class="bold">Name: ${name}</p><p class="bold">Group: ${group}</p>`;

// day and time
const today = new Date();
const year = today.getFullYear();
const dayOfWeek = today.toLocaleString('en-US', { weekday: 'long' });
const day = today.getDate();
const month = today.toLocaleString('en-US', { month: 'long' });
const time = today.toTimeString().split(' ')[0];

const infoDiv = document.getElementById("info");
infoDiv.innerHTML = `
    <p>Year: ${year}</p>
    <p>Today is: ${dayOfWeek}</p>
    <p>Date: ${day}</p>
    <p>Month: ${month}</p>
    <p>Current time is: ${time}</p>
`;

// days left until graduation
const graduationDate = new Date('2025-05-30');
const timeDiff = graduationDate - today;
const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

const graduationDiv = document.getElementById("graduation");
graduationDiv.innerHTML = `<p>${daysLeft} days left until the freedom!</p>`;
