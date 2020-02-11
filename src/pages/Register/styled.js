import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.8);

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: 600;
  }

  input {
    height: 40px;
    font-size: 15px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 1.5px solid ${colors.primaryColor};
    }
  }
`;
