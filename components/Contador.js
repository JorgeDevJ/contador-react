const Contador = () => {
  const [contador, setContador] =
    React.useState(
      0
    ); /*a ver, state devuelve el estado de un elemento, en este caso se le puso 0 como valor inicial, se usa la destructuracion para acceder al valor del contador y a la funcion porque eso es lo que devuelve si se lanza a consola, setContador en este caso es el modificador del estado del contador */
  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);
  return (
    <div>
      <h1 className={contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h1>
      <hr />
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};
/*operador ternario pe en el h1 */
