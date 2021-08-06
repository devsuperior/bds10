import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';
import { useContext, useState } from 'react';
import { AuthContext } from 'AuthContext';
import { saveAuthData } from 'util/storage';
import { getTokenData } from 'util/auth';

import './styles.css';

type CredentialsDTO = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
}

const Home = () => {

  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/admin' } };

  const { setAuthContextData } = useContext(AuthContext);

  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<CredentialsDTO>();

  const history = useHistory();

  const onSubmit = (formData: CredentialsDTO) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        })
        history.replace(from);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

  return (
    <div className="container home-container">
      <div className="base-card login-card">
        <h1>LOGIN</h1>
        {hasError && (
          <div className="alert alert-danger">Erro ao tentar efetuar o login</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register('username', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido'
                }
              })}
              type="text"
              className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">{errors.username?.message}</div>
          </div>
          <div className="mb-2">
            <input
              {...register('password', {
                required: 'Campo obrigatório'
              })}
              type="password"
              className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Password"
              name="password"
            />
            <div className="invalid-feedback d-block">{errors.password?.message}</div>
          </div>
          <div className="login-submit">
            <button className="btn btn-primary text-white btn-home-login">
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
