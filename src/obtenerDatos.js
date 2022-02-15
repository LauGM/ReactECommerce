const obtenerDatos = () => {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
            req.open('GET', 'https://api.itbook.store/1.0/');
    
            req.onload = function() {
              if (req.status == 200) {
                resolve(JSON.parse(req.response));
              }
              else {
                reject();
              }
            };
    
            req.send();
        });
}