const descripcion = {
  demand: true,
  alias: "d",
};

const completado = {
  alias: "c",
  default: true,
};

const argv = require("yargs")
  .command("crear", "Crear un elemento por hacer", {
    descripcion
  })
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado
  })
  .command("borrar", "Elimina un elemento segun la descripcion mandada", {
    descripcion
  })
  .help().argv;

module.exports = {
  argv,
};
