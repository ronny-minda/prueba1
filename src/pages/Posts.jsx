import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/header";

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const pedido = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPost(data);
    };

    pedido();
  }, []);

  const guardar = (e, post) => {
    e.preventDefault;
    const viejoArrayFaborito = JSON.parse(localStorage.getItem("abjArray"));
    const postExists = viejoArrayFaborito.find((item) => item.id === post.id);
    if (!postExists) {
      const nuevoArrayFaborito = [...viejoArrayFaborito, post];
      localStorage.setItem("abjArray", JSON.stringify(nuevoArrayFaborito));
    }
  };

  return (
    <>
      {localStorage.getItem("token") == "Bearer" ? (
        <>
          <Header />
          <section className="h-full bg-gray-50" style={{ marginTop: "80px" }}>
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Todos los post de la api
            </h1>
            <div className="px-3">
              {post.map((value, key) => {
                return (
                  <div
                    key={key}
                    className="shadow-md w-full bg-white rounded-lg md:mt-0 first-letter:lx:p-0 my-10"
                  >
                    <section className="bg-white">
                      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <div className="max-w-screen-md">
                          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                            {value.title}
                          </h2>
                          <span className="block">
                            <b>id:</b> {value.id}
                          </span>
                          <span>
                            <b>userId:</b> {value.userId}
                          </span>
                          <p className="mb-8 font-light text-gray-500 sm:text-xl">
                            {value.body}
                          </p>
                          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <button
                              onClick={(e) => guardar(e, value)}
                              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 active:ring-4 active:ring-bg-orange-300"
                            >
                              Agregar a Destacados
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Post;
