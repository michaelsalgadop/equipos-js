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
