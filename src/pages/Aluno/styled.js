import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;
export const Form = styled.form`
  margin-top: 20px;
  display: felx;
  flex-direction: column;

  input {
    height: 40px;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0 10px;
  }
  button {
    width: 100%;
  }
`;
export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 25px;
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
