const localStrategy = require("passport-local").Strategy
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
var FuncSenha = require("../routes/senha");
//Model de usuário
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
var senha = ""
var nome = ""

const method = function(passport){
  passport.use(new localStrategy({
    usernameField: 'nome',
    passwordField: 'senha',
  },
    function(nome, senha, done) {
      if (senha.length<=3){
          console.log("Verificando rfid... ")
          Usuario.findOne({rfid: nome}).then((usuario) => {
            if(!usuario){
              return done(null, false, {message: "Este cartão não está cadastrado"})
            }
            else{
              return done(null, usuario)
            }
          })
      }
      else{
        Usuario.findOne({ username: nome }, function (err, user) {
          console.log("Verificando login e senha... ")
          Usuario.findOne({nome: nome}).then((usuario) => {
            if(!usuario){
              return done(null, false, {message: "Esta conta não existe"})
            }
            bcrypt.compare(senha, usuario.senha, (erro, batem) => {
              if(batem){
                return done(null, usuario)
              }else{
                return done(null, false, {message: "Senha incorreta"})
              }
            })
          })
        })
      }
    }
  ))

  passport.serializeUser((usuario, done) => {
    done(null, usuario.id)
  })

  passport.deserializeUser((id, done) => {
    Usuario.findById(id, (err, usuario) =>{
      done(err, usuario)
    })
  })

}
module.exports = method
