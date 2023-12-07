const mongoose=require('mongoose')

const motoSchema = mongoose.Schema(
    {
        modelo:{
            type: String,
            required:[true,"Por favor insira modelo"]
        },
        ano:{
            type:Number,
            required:[true,"Por favor insira ano"]
        },
        preco:{
            type: String,
            required:[true,"Por favor insira preço"]
        }
    },
    {
        timestamps: true
    }
)

const Moto=mongoose.model('Moto',motoSchema)

module.exports= Moto