import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import axios from '../../services/axios';

import { Container } from '../../styles/GlobalStyles';
import * as styled from './styled';

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data.alunos);
    }
    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      <styled.AlunoContainer>
        {alunos.map(aluno => (
          <div key={String(aluno.id)}>
            <styled.ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="FotoPerfil" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </styled.ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </styled.AlunoContainer>
    </Container>
  );
}
