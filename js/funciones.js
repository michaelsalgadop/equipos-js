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
