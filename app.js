const express = require('express')
const { render } = require('ejs');
const path = require('path');

app = express()
app.set('view engine', 'ejs')


app.use(express.static(path.join(__dirname, 'public'))); 

const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
];

const batteries = [
    {
        id: 1,
        name: 'Duracell AA',
        price: 5.99,
        description: 'Long-lasting AA batteries for all your devices.',
        image: 'https://example.com/duracell-aa.jpg'
    },
    {
        id: 2,
        name: 'Energizer AAA',
        price: 6.99,
        description: 'Reliable AAA batteries for everyday use.',
        image: 'https://example.com/energizer-aaa.jpg'
    },
    {
        id: 2,
        name: 'Energizer AAA',
        price: 6.99,
        description: 'Reliable AAA batteries for everyday use.',
        image: 'https://example.com/energizer-aaa.jpg'
    },
    // Add more battery objects as needed
];

const services = [
    {
        id: 1,
        name: 'Battery Installation',
        price: 49.99,
        description: 'Professional installation of batteries for all types of devices.',
        image: 'https://example.com/installation.jpg'
    },
    {
        id: 2,
        name: 'Battery Recycling',
        price: 19.99,
        description: 'Safe and eco-friendly battery recycling service.',
        image: 'https://example.com/recycling.jpg'
    },
    {
        id: 3,
        name: 'Battery Testing',
        price: 29.99,
        description: 'Comprehensive testing of battery health and performance.',
        image: 'https://example.com/testing.jpg'
    },
    // Add more service objects as needed
];


app.get('/',(req,res) => {

    res.render('home', {title: 'Home', images, batteries, services });

})
/*
app.get('/contact', (req, res) => {
    res.render('contact'); // Render the contact EJS template
});
*/
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;

    // Here you can handle the contact form submission, e.g., save to a database or send an email
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Redirect or respond with a success message
    res.send('Thank you for your message! We will get back to you soon.');
});



app.listen(3000,()=>console.log('Server is running on PORT: 3000'))