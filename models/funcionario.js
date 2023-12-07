const mongoose=require('mongoose')

const funcionarioSchema = mongoose.Schema(
    {
        nome:{
            type: String,
            required:[true,"Por favor insira nome"]
        },
        funcao:{
            type:String,
            required:[true,"Por favor insira nome"]
        },
        email:{
            type: String,
            required:[true,"Por favor insira email"]
        },
        telefone:{
            type: Number,
            required:[true,"Por favor insira telefone"]
        },
        senha:{
            type: String,
            required:[true,"Por favor insira senha"]
        },
        CEP:{
            type: Number,
            required:[true,"Por favor insira CEP"]
        },
        rua:{
            type: String
        },
        complemento:{
            type: String
        },
        bairro:{
            type: String
        },
        cidade:{
            type:String
        }
    },
    {
        timestamps: true
    }
)

const Funcionario=mongoose.model('Funcionario',funcionarioSchema)

module.exports= Funcionario