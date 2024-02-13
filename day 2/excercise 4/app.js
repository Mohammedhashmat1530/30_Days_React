import React from 'react';
import ReactDOM from 'react-dom/client';


/*
Write your name in a JSX element and store it in a name variable


*/

const name="hash";

const heading = <h1> {name}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));



// Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
const firstname="hashmat";
const lastname="mohammed ";
const country="India";
const title="pakka hustler";
const gender="male";
const email="hashmat2020vskp@gmail.com";
const ph="9492424780";

const userVariable = <div>
    <h1>{firstname} {lastname}</h1>
    <p>{country}</p>
    <p>{title}</p>
    <p>{gender}</p>
    <p>{email}</p>
    <p>{ph}</p>
</div>

root.render(userVariable)