function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    
    setTimeout(function(){
      return idade >= 18 ? resolve() : reject();
    }, 2000);
  });
};

checaIdade(15)
  .then(
    function() {
      console.log("Idade maior que 18");
    }
  )
  .catch(
    function() {
      console.log("Idade menor que 18");
    }
  );