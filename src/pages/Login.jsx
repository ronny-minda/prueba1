import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/header";

const Login = () => {
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);
  const [sesion, setSesion] = useState({
    email: "",
    password: "",
  });

  const valores = (e) => {
    setSesion({ ...sesion, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const inicioSecion = (e) => {
    e.preventDefault();
    const usuarioCorrecto = "admin@gmail.com";
    const claveCorrecta = "admin";

    if (sesion.email === usuarioCorrecto && sesion.password === claveCorrecta) {
      localStorage.setItem("token", "Bearer");
      console.log("logeado!!!");
      setLogin(true);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      console.log("contraseña mal!!!");
    }
  };

  return (
    <>
      {login || localStorage.getItem("token") == "Bearer" ? (
        <Navigate to="/post" />
      ) : null}
      <Header />

      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="shadow-md w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Iniciar sesión en su cuenta
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => inicioSecion(e)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => valores(e)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => valores(e)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                  {setError && <div>credenciales incorrectas</div>}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Recordarme
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    ¿Has olvidado tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-sky-400 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
                >
                  Inicio Sesion
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
