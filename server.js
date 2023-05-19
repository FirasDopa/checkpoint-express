const express = require("express")
//create instance
const app = express();

const pug = require("pug");
const PORT = 4500;
const Workhours = require('./middleware/Workhours')


app.use(express.static('public'))

app.set('view engine', 'pug');

app.set('views','views')



app.get("/", Workhours, (req, res) => {
    
    res.render("index"),
    {title: 'home page'};

})

app.get("/service", Workhours , (req, res) => {
    
    res.render("service"),
    {title: 'Services'};

})

app.get("/error",  (req, res) => {
    
    res.render("error"),
    {title: 'Error page'};

})


app.listen(PORT,error => {
    if (error) {console.log(error);}

    else {
        console.log(`Server is running on ${PORT}`)
}
})
