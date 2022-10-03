import React from "react";

class client extends React.Component {
  constructor(fullName, cpf, whatsapp, email, payDay) {
    (this.fullName = fullName),
      (this.cpf = cpf),
      (this.whatsapp = whatsapp),
      (this.email = email),
      (this.payDay = payDay);
  }
}

export default function User() {
  return (
    <div>
      <h1>Fazer Cadastro de Usuário</h1>
    </div>
  );
}
