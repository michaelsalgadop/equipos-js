const equiposMayoresEdad = (equipos, edad) =>
  equipos.filter(
    ({
      asignado: {
        empleado: { edad: edadEquipo },
      },
    }) => edadEquipo > edad
  );
const equiposProvincia = (equipos, provinciaBuscar) =>
  equipos.filter(
    ({ asignado: { provincia } }) => provincia === provinciaBuscar
  );
const provincias = (equipos) =>
  equipos.reduce((acumulador, { asignado: { provincia } }) => {
    if (!acumulador.includes(provincia)) {
      // Si la provincia no está incluida en el array
      acumulador.push(provincia);
    }
    return acumulador;
  }, []);
const puestos = (equipos) =>
  equipos.map(
    ({
      asignado: {
        empleado: { puesto },
      },
    }) => puesto
  );
const edadMedia = (equipos) =>
  equipos.reduce(
    (
      acumulador,
      {
        asignado: {
          empleado: { edad },
        },
      },
      i,
      arrayEquipos
    ) => acumulador + edad / arrayEquipos.length,
    0
  );
const equiposPorEdad = (equipos) =>
  equipos.sort(
    (
      {
        asignado: {
          empleado: { edad: edadTA },
        },
      },
      {
        asignado: {
          empleado: { edad: edadTB },
        },
      }
    ) => edadTA - edadTB
  );
const equiposTipo = (equipos, tipo) =>
  equipos.filter(({ tipo: tipoPC }) => tipoPC === tipo);
const trabajadoresTipo = (equipos, tipo) =>
  equipos
    .filter(({ tipo: tipoPortatil }) => tipoPortatil === tipo)
    .map(({ asignado: { empleado } }) => empleado);
const equiposPorTipo = (equipos) =>
  equipos.reduce((acumulador, equipo) => {
    // Extraemos tipo de dentro del equipo que estamos iterando
    const { tipo } = equipo;
    /* Busca en el acumulador si ya hay algún array del tipo que estamos pasando,
       Sino, lo que haremos es "crearlo" en el acumulador, ya que todavia no está "creado" => en plan,
       si todavia no ha pasado ningún pc de "Sobremesa", crea {tipo: "Sobremesa", equipos: [el equipo que estamos iterando]}
      y cuando encuentre otro pc de "Sobremesa", en vez de crear otra vez {tipo: "Sobremesa", equipos: [el equipo que estamos iterando]},
      busca el que ya está creado y lo agrega al array de equipos => {tipo: "Sobremesa", equipos: [] < ==== AQUI}.
      Porque sino lo que haria es crear dos veces {tipo: "Sobremesa", equipos: [el equipo que estamos iterando]}.
    */
    const subResultado = acumulador.find((equipo) => equipo.tipo === tipo);
    if (subResultado) {
      // Si ya hay un subresultado con el mismo tipo, añade el equipo al array de equipos de ese subresultado
      subResultado.equipos.push(equipo);
      return acumulador;
    } else {
      // Si no hay un subresultado con el mismo tipo, crea uno nuevo y agrégalo al acumulador
      return [
        ...acumulador,
        {
          tipo,
          equipos: [equipo],
        },
      ];
    }
  }, []);
const equiposTipoLocalidad = (equipos, tipoBuscar, localidadBuscar) =>
  equipos.filter((equipo) => {
    const { tipo } = equipo;
    const {
      asignado: { provincia },
    } = equipo;
    return tipoBuscar === tipo && localidadBuscar === provincia;
  });
const resumenEquipos = (equipos) =>
  equipos.map((equipo) => ({
    id: equipo.id,
    poblacion: equipo.asignado.poblacion,
    provincia: equipo.asignado.provincia,
  }));
