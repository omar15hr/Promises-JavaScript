function procesar() {
  const datos = API.leerDatos();
  const tasasInteres = BaseDatos.leerTasas();
  const deudores = Deudores.calcularDeuda(datos, tasasInteres);
  return PDF.generar(deudores);
}