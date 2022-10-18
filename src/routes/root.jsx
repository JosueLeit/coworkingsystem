import App from "../App";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Coworking Business Services</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Pesquisa"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">Novo</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`contacts/10`}>Clientes</a>
            </li>
            <li>
              <a href={`contacts/20`}>Faturamento</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <App />
      </div>
    </>
  );
}
