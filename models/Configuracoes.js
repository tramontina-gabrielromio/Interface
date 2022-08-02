const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Configuracoes = new Schema({
  fechamento:{
    type: Number,
    required: true //0->5min, 1->10min, 2->20min, 3->30min, 4->nunca
  },
  cartao:{
    type: Number,
    required: true //0->desabilitado, 1->habilitado
  },
  desligamento:{
    type: Number,
    required: true //0->15min, 1->30min, 2->1h, 3->2h, 4->nunca
  },
  email:{
    type: String,
    required: true
  },
  dataRelatorio:{
    type: String,
    required: true
  }
})

mongoose.model("configuracoes", Configuracoes)
