function leerDatos() {
  const bytes = FileSystem.read("data.txt");
  return bytes;
}

console.log(leerDatos());
console.log('---------------------------------');