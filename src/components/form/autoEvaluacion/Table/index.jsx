import InputText from "../../../elements/InputText";

export const TablaLaboral = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Relación de Dependencia</th>
          <th>Relación de Dependencia</th>
          <th>Cargo</th>
          <th>Empresa</th>
          <th>Observación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const TablaPersonal = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Relación </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
        </tr>
        <tr>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
          <td>
            <InputText />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
