axios.get('https://api.github.com/users/joaogdcarvalho')
  .then(function(response) {
    //console.log(response.data.name);
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });