import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor } from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const NovoAluno = styled(Link)`
  display: block;
  color: white;
  padding: 10px 0 10px 0;
  background: ${primaryColor};
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  transition: 0.9s;
  &:hover {
    filter: brightness(80%);
  }
`;
export const Title = styled.h1`
  text-align: center;
`;
