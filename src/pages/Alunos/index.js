import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import { Container } from '../../styles/GlobalStyles';
import * as styled from './styled';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data.alunos);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
      toast.success('Aluno Excluido com Sucesso');
    } catch (err) {
      // const errors = get(err, 'response.data.errors', []);
      // errors.map(error => toast.error(error));
      const status = get(err, 'response.status', 0);
      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }
      setIsLoading(false);
    }
  };
  const handleDeleteAsk = e => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <styled.Title>Alunos</styled.Title>
      <styled.AlunoContainer>
        {alunos.map((aluno, index) => (
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
            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation
              onClick={e => handleDelete(e, aluno.id, index)}
              size={16}
              display="none"
              cursor="pointer"
            />
          </div>
        ))}
      </styled.AlunoContainer>
      <styled.NovoAluno to="/aluno/">Novo Aluno</styled.NovoAluno>
    </Container>
  );
}
