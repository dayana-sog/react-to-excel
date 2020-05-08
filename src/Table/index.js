/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

const Table = (props) => (
  <Container>
    <table>
      <thead>
        <tr>
          <th>Wo</th>
          <th>Data</th>
          <th>Eq. Entregues</th>
          <th>Eq. Recebidos</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.services.length > 0 ? (
          props.services.map((service) => (
            <tr key={service.id}>
              <td>{service.wo}</td>
              <td>{service.date}</td>
              <td>{service.entregues}</td>
              <td>{service.recebidos}</td>
              <td>
                <button
                  type="button"
                  className="button muted-button"
                  onClick={() => props.editRow(service)}
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="button muted-button"
                  onClick={() => props.deleteWo(service.id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Sem serviços</td>
          </tr>
        )}
      </tbody>
    </table>
  </Container>
);

export default Table;
