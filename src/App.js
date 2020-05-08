/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Lottie from 'lottie-react-web';

import AddServiceForm from './Form/AddWO';
import EditUserForm from './Form/EditWO';
import ServicesTable from './Table';

import avatar from './assets/avatar.json';
// import { Container } from './styles';

const App = () => {
  // Data
  const woData = [
    {
      id: 1,
      wo: 14425,
      date: 86876987,
      entregues: 7653765,
      recebidos: 76547625,
    },
    {
      id: 2,
      wo: 98928,
      date: 9786876,
      entregues: 7653765,
      recebidos: 76547625,
    },
    {
      id: 3,
      wo: 76787,
      date: 7658765,
      entregues: 7653765,
      recebidos: 76547625,
    },
  ];

  const initialFormState = {
    id: null,
    wo: '',
    date: '',
    entregues: '',
    recebidos: '',
  };

  // Setting states:
  const [services, setServices] = useState(woData);
  const [currentService, setCurrentService] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD Operation:
  const addWO = (service) => {
    service.id = services.length + 1;
    setServices([...services, service]);
  };

  const deleteWo = (id) => {
    setEditing(false);

    setServices(services.filter((service) => service.id !== id));
  };

  const updateWO = (id, updateWO) => {
    setEditing(false);
    setServices(
      services.map((service) => (service.id === id ? updateWO : service))
    );
  };

  const editRow = (service) => {
    setEditing(true);

    setCurrentService({
      id: service.id,
      wo: service.wo,
      date: service.date,
      entregues: service.entregues,
      recebidos: service.recebidos,
    });
  };

  // Export Excel
  const objectToCsv = (d) => {
    const csvRows = [];
    // get the headers
    const headers = Object.keys(d[0]);
    csvRows.push(headers.join(','));

    // loop over the rows
    for (const row of d) {
      const values = headers.map((header) => {
        return `"${row[header]}"`;
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  const download = (data) => {
    const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleExcel = () => {
    const data = services.map((row) => ({
      Wo: row.wo,
      Data: row.date,
      Entregues: row.entregues,
      Recolhidos: row.recebidos,
    }));

    const csvData = objectToCsv(data);
    download(csvData);
  };

  return (
    <>
      <div className="header">
        <div className="header-avatar">
          <Lottie
            width="80%"
            options={{
              animationData: avatar,
              loop: true,
            }}
          />
        </div>
        <div className="header-user__informations">
          <h3>Herbert Dantas</h3>
          <p>Contacto: 910 777 926</p>
          <p>Email: hgd1313@gmail.com</p>
        </div>
      </div>

      <div className="container">
        <h1>Serviços</h1>
        <button type="button" onClick={handleExcel}>
          Export Excel
        </button>

        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <div>
                <h2>Editar Serviço</h2>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentService={currentService}
                  updateWO={updateWO}
                  services={services}
                />
              </div>
            ) : (
              <div>
                <h2>Adicionar Serviço</h2>
                <AddServiceForm addWO={addWO} />
              </div>
            )}
          </div>
          <div className="flex-large">
            <h2>Todos Serviços</h2>
            <ServicesTable
              services={services}
              deleteWo={deleteWo}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
