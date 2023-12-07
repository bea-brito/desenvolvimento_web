const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const Cliente=require('./models/cliente')
const Funcionario=require('./models/funcionario')
const Moto=require('./models/moto')
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cliente',async (req,res)=>{
    try {
        const cliente = await Cliente.find({});
        res.status(200).json(cliente)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.get('/cliente/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const cliente = await Cliente.findById(id);
        res.status(200).json(cliente)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.post('/cliente',async (req,res)=>{
    try{
        const cliente= await Cliente.create(req.body)
        res.status(200).json(cliente)
    } catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.put('/cliente/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const cliente=await Cliente.findByIdAndUpdate(id,req.body)
        if(!cliente){
            return res.status(404).json({message: 'Id nao encontrado'})
        } else{
        const updatedCliente= await Cliente.findById(id);
        res.status(200).json(updatedCliente)
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.delete('/cliente/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const  cliente= await Cliente.findByIdAndDelete(id);
        if(!cliente){
            return res.status(404).json({message: 'Id nao encontrado'})
        } else {
            res.status(200).json(cliente);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})
app.get('/funcionario',async (req,res)=>{
    try {
        const funcionario = await Funcionario.find({});
        res.status(200).json(funcionario)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.get('/funcionario/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const funcionario = await Funcionario.findById(id);
        res.status(200).json(funcionario)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.post('/funcionario',async (req,res)=>{
    try{
        const funcionario= await Funcionario.create(req.body)
        res.status(200).json(funcionario)
    } catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.put('/funcionario/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const funcionario=await Funcionario.findByIdAndUpdate(id,req.body)
        if(!funcionario){
            return res.status(404).json({message: 'Id nao encontrado'})
        } else{
        const updatedFuncionario= await Funcionario.findById(id);
        res.status(200).json(updatedFuncionario)
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.delete('/funcionario/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const  funcionario= await Funcionario.findByIdAndDelete(id);
        if(!funcionario){
            return res.status(404).json({message: 'Id nao encontrado'})
        } else {
            res.status(200).json(funcionario);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.get('/moto',async (req,res)=>{
    try {
        const moto = await Moto.find({});
        res.status(200).json(moto)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.get('/moto/:id',async (req,res)=>{
    try {
        const {id} = req.params;
        const moto = await Moto.findById(id);
        res.status(200).json(moto)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.post('/moto',async (req,res)=>{
    try{
        const moto= await Moto.create(req.body)
        res.status(200).json(moto)
    } catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.put('/moto/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const moto=await Moto.findByIdAndUpdate(id,req.body)
        if(!moto){
            return res.status(404).json({message: 'Id nao encontrado'})
        } else{
        const updatedMoto= await Moto.findById(id);
        res.status(200).json(updatedMoto)
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

app.delete('/moto/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const  moto= await Moto.findByIdAndDelete(id);
        if(!moto){
            return res.status(404).json({message: 'Id nao encontrado'})
        } else {
            res.status(200).json(moto);
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

mongoose.connect('mongodb+srv://Gabriel:NuBlyGBNpWpfHf2R@cluster0.8wdweim.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=> {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
    console.log('connected to MongoDB')
}).catch((error)=>{
    console.log(error)
})