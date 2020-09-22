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
        type="date"
        name="date"
        placeholder="DD/MM/YYYY"
        value={service.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="entregues"
        value={service.entregues}
        onChange={handleInputChange}
        placeholder="Eq. Entregues"
        required
      />
      <input
        type="text"
        name="recebidos"
        value={service.recebidos}
        onChange={handleInputChange}
        placeholder="Eq. Recolhidos"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddServiceForm;
