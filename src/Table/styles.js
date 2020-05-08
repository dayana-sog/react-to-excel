import styled from 'styled-components';

export const Container = styled.div`
  table {
    margin: 0 auto;
    text-align: center;
    border-collapse: collapse;
    border: 1px solid #d4d4d4;
  }

  tr:nth-child(even) {
    background: #d4d4d4;
  }

  th,
  td {
    padding: 10px 30px;
  }

  th {
    border-bottom: 1px solid #d4d4d4;
  }
`;
