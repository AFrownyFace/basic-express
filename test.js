// allows you to use packages in app
let express = require('express')

// allows us to use GET or POST methods and some others 'not case sensitive'
let app = express()




 

app.use(express.urlencoded({extended:true}));



app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// let anotherMiddleware = ( req, res, next ) => {
//   console.log('ohaio')
//     next()
// }

// applying this middleware to be used by all routes
// app.use(anotherMiddleware)

// using static files ,like html,css,js,images ,etc
app.use(express.static('public'))


// directory we are currently into
console.log(__dirname)

// uses .get method to request data from server
app.get('/', // anotherMiddleware,
(req,res) => {
    //sends response from server to front end  
    // res.send('Ohaio')
    let name = 'Bob'
    return res.render('test.ejs',{name})
})

app.post('/',(req,res)=>{
    console.log(req.body)
    // redirects to /success route

    if(!req.body.username)
    {
        console.log('no user')
        return res.redirect('/')

    }
    else {
    res.redirect('/success') 
    }
})
app.get('/success',(req,res)=>{
    res.send('Whalecum')
})
 


 

app.post('/bubz-a-bitch',(req,res)=>{
    console.log(req.body)
})

app.post('/the-legendary-hero',(req,res)=>{
    if(!req.body.name)
    {
        res.send(`There is no name field!`)
    }
    else {
          res.send(`The name is ${req.body.name}`)
    }
     
})


// identify which port your server should LISTEN to for requests
app.listen(3000, () => {
    console.log(' hi')
})