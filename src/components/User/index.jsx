import React, { useState } from "react";

class client extends React.Component {
  render([id, fullName, cpf, whatsapp, email, payDay]) {
    (Props.id = id),
      (Props.fullName = fullName),
      (Props.cpf = cpf),
      (Props.whatsapp = whatsapp),
      (Props.email = email),
      (Props.payDay = payDay);
  }
}

export default function CreateUserPage(Props) {
  //   const [newUser, setNewUser] = useState;
  //   const user = new client(Props);

  return (
    <div>
      <div>
        <div>
          <h3>Cadastro de Usuário</h3>
          <p>Dados Pessoais</p>
        </div>
        <div>
          <dl>
            <div>
              <dt>Full name</dt>
              <dd>{Props.fullName}</dd>
            </div>
            <div>
              <dt>CPF:</dt>
              <dd>{Props.cpf}</dd>
            </div>
            <div>
              <dt>Endereço de E-mail</dt>
              <dd>{Props.email}</dd>
            </div>
            <div>
              <dt>Número de telefone/ WhatsApp</dt>
              <dd>{Props.whatsapp}</dd>
            </div>
            <div>
              <dt>Dia de vencimento</dt>
              <dd>{Props.payDay}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
