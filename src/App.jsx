import CreateUserPage from "./components/User";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main>
          <CreateUserPage
            id={1}
            fullName="Josué Leite"
            cpf="005.007.115-77"
            whatsapp="74 991114856"
            email="josueleite@outlook.com"
            payDay={25}
          />
          <CreateUserPage
            id={2}
            fullName="Paloma Moreira"
            cpf="006.008.116-78"
            whatsapp="11 991990032"
            email="palomamoreira@gmail.com"
            payDay={12}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
