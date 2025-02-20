function leerDatos(callback) {
  FileSystem.readAsync("data.txt", function(bytes) {
    callback(bytes);
  });
}

leerDatos(function(datos) {
  console.log(datos);
});
console.log('---------------------------------');