// This line uses object destructuring to extract the v4 method from the uuid module and assign it to a new variable called uuidv4. The v4 method is used to generate a version 4 UUID, which is a randomly generated UUID.
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());


const express = require('express');
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const CustomerModel = require('./models/customers')


mongoose.set('strictQuery', false)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Read from .env config file if it is not production
if(process.env.NODE_ENV !== 'production'){
    dotenv.config()
}

// Application config
const PORT = process.env.PORT || 3000

// DB Config
const CONNECTION = process.env.CONNECTION

const customers = [
    {
        "name": "John",
        "industry": "Music"
    },
    {
        "name": "Doe",
        "industry": "Networking"
    },
    {
        "name": "Marvellous",
        "industry": "Sports"
    }
]

const customer = new CustomerModel({
    name: 'Jacob',
    industry: 'Marketing'
})
// (req, res) => { ... } is a callback function that gets executed 
// when a request is made to the defined route. It takes two parameters: req (request) and res (response).
// The req object contains information about the incoming request, while the res object is used to send a response back to the client
app.get('/', (req, res)=>{
    res.send('Welcome')
})

//  Read data from MongoDB
app.get('/api/customers', async(req, res) => {
    try {
        const result = await CustomerModel.find()
        res.json({"Customers": result})
    }
    catch(e){
        res.status(500).json({error: e.message})
    }
} )

app.get('/api/customers/:id/', async(req, res) => {
    console.log({
        requestParams: req.params,
        requestQuery: req.query
    })
    try {
        const customerId = req.params.id
        console.log(customerId)

        const customer = await CustomerModel.findById(customerId);
        if(!customer){
            res.status(404).json({error:'User not found'})
        }
        else {
            res.json({customer})
        }
    } catch(e){
        res.status(500).json({error: 'Something went error'})
    }
    
})
app.post('/', (req, res) => {
    res.send('This is a post request - Nodemon')
})
app.post('/api/customers', async(req, res) => {
   console.log(req.body);
   const customer = new CustomerModel({
        name: req.body.name,
        industry: req.body.industry
   })
   try {
        await customer.save();
    res.status(201).json({customer})
   } catch(e){
    res.status(400).json({error: e.message})
   }
   
   
});

app.put('/api/customers/:id', async(req,res) => {
    try {
        const customerId = req.params.id;
        const result = await CustomerModel.replaceOne({_id: customerId}, req.body)
        console.log(result)
        res.json({updatedCount: result.modifiedCount});
    } catch(e){
        res.status(500).json({error: 'Something went wrong'})
    }
    
})

app.delete('/api/customers/:id', async (req, res) => {
    try {
        const customerId = req.params.id;
        const result = await  CustomerModel.deleteOne({_id: customerId})
        res.json({deletedCount: result.deletedCount})
    } catch(e){
        res.status(500).json({error: 'Something went wrong'})
    }
    
})

const start = async() => {
    try{
        await mongoose.connect(CONNECTION);
    app.listen(PORT, () => {
        console.log('App listening on port ' + PORT)
    });
    } catch(e) {
        console.log(e.message)
    }
        
};

start();