import CreateUserPage from "./components/User";

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <CreateUserPage
        id={1}
        fullName="Josué Leite"
        cpf="005.007.115-77"
        whatsapp="74 991114856"
        email="josueleite@outlook.com"
        payDay={25}
      />
    </div>
  );
}

export default App;
