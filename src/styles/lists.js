import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.form``;

export const Formulario = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    margin-top: 10px;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }

  a {
    display: block;
  }

  button {
    display: block;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    margin-top: 10px;
    background: #63f5b6;
    color: #fff;
    corder: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    width: 80px;

    &:hover {
      background: #52389f;
    }
  }
`;

export const FormularioDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    margin-top: 10px;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }

  a {
    display: block;
  }

  button {
    display: block;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    margin-top: 10px;
    background: #63f5b6;
    color: #fff;
    corder: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    width: 80px;

    &:hover {
      background: #52389f;
    }
  }
`;
