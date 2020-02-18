import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form, Title } from './styled';

import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

export default function Register() {
  const dispacth = useDispatch();
  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;
    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email Inválido');
    }
    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha precisa ter entre 6 e 50 caracteres');
    }
    if (formErrors) return;
    dispacth(actions.registerRequest({ nome, email, password, id }));
    console.log('to be');
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar Dados' : 'Crie sua Conta'}</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </label>
        <button type="submit">{id ? 'Salvar' : 'Criar minha conta'}</button>
      </Form>
    </Container>
  );
}
