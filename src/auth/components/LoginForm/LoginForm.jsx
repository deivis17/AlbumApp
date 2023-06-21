import { useForm } from "../../../hooks/useForm";

export const LoginForm = ({onLogin}) => {
  const { loginText, onInputChange } = useForm({
    loginText: "",
  });

  return (
<>

<div class="container">
    <h2>Iniciar sesión</h2>
    <form>
      <div class="form-group">
        <label for="loginUser">Usuario</label>
        <input type="text" id="loginUser" placeholder="Ingresa tu usuario" 
        name="user"
        value={loginText}
        onChange={onInputChange}
        autoFocus/>
      </div>
      <div class="form-group">
        <label for="loginPass">Contraseña</label>
        <input type="text"
        name="pass"
        id="loginPass"
        value={loginText}
        onChange={onInputChange}
        autoFocus
        placeholder="Escribe tu contraseña" />
      </div>
      <div class="form-group">
        <button onClick={onLogin} type="submit">Iniciar sesión</button>
      </div>
    </form>
  </div>



</>








  );
};
