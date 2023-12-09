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
      //Si la provincia no está incluida en el array
      acumulador.push(provincia);
    }
    return acumulador;
  }, []);
