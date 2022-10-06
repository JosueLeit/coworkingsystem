import CreateUserPage from "./components/User";
import { Header } from "./components/Header";
import "./global.css";

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Header />
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
    </div>
  );
}

export default App;
