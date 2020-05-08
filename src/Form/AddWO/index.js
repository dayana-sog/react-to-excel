/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// import { Container } from './styles';

const AddServiceForm = (props) => {
  const initialFormState = {
    id: null,
    wo: '',
    date: '',
    entregues: '',
    recebidos: '',
  };

  const [service, setService] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setService({ ...service, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!service.wo || !service.date) return;
        props.addWO(service);
        setService(initialFormState);
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
        type="text"
        name="date"
        value={service.date}
        onChange={handleInputChange}
        placeholder="Date"
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
        placeholder="Eq. Recolhidos"
      />
      <button type="submit">Adicionar Serviço</button>
    </form>
  );
};

export default AddServiceForm;
