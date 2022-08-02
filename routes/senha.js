var memoriaSenha=""

var senha = function(op, data){

  if(op=="insertKey"){
    memoriaSenha = memoriaSenha + data
    return memoriaSenha;
  }
  else if(op=="removeKey"){
    memoriaSenha = memoriaSenha.substring(0, (memoriaSenha.length - 1));
    return memoriaSenha;
  }
  else if(op=="showPass"){
    return memoriaSenha
  }
  else if(op=="resetPass"){
    memoriaSenha=""
    return memoriaSenha
  }
}

module.exports = senha;
