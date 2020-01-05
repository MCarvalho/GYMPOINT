import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/images/logo-extend.svg';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';

export default function Header() {
  const user = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />
          <NavLink to="/students">ALUNOS</NavLink>
          <NavLink to="/plans">PLANOS</NavLink>
          <NavLink to="/enrollments">MATRÍCULAS</NavLink>
          <NavLink to="/helpoders">PEDIDOS DE AUXÍLIO</NavLink>
        </nav>

        <div>
          <strong>{user.name}</strong>
          <button type="button" onClick={() => handleSignOut()}>
            SAIR
          </button>
        </div>
      </Content>
    </Container>
  );
}
