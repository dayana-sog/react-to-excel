/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

const EditWO = (props) => {
  const [service, setService] = useState(props.currentService);

  useEffect(() => {
    setService(props.currentService);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setService({ ...service, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateWO(service.id, service);
      }}
    >
      <input
        type="text"
        name="wo"
        value={service.wo}
        onChange={handleInputChange}
        placeholder="WO"
      />
      <input
        type="date"
        name="date"
        value={service.date}
        onChange={handleInputChange}
        placeholder="DD/MM/YYYY"
      />
      <input
        type="text"
        name="entregues"
        value={service.entregues}
        onChange={handleInputChange}
        placeholder="Eq. Entregues"
      />
      <input
        type="text"
        name="recebidos"
        value={service.recebidos}
        onChange={handleInputChange}
        placeholder="Eq. Recebidos"
      />
      <button type="submit">Editar WO</button>
      <button
        type="button"
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>
  );
};

export default EditWO;
