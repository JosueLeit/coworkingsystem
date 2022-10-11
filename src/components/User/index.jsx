import React, { useState } from "react";
import styles from "./User.module.css";

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
      <div className={styles.clientBox}>
        <div className={styles.clientBoxHeader}>
          <h3>Cadastro de Usuário</h3>
          <strong>Dados Pessoais: </strong>
        </div>
        <div>
          <dl>
            <div>
              <dt>
                <strong>Full name: </strong>
                {Props.fullName}
              </dt>
            </div>
            <div>
              <dt>
                <strong>CPF: </strong>
                {Props.cpf}
              </dt>
            </div>
            <div>
              <dt>
                <strong>E-mail: </strong>
                {Props.email}
              </dt>
            </div>
            <div>
              <dt>
                <strong>Telefone/ WhatsApp: </strong>
                {Props.whatsapp}
              </dt>
            </div>
            <div>
              <dt>
                <strong>Data de cobrança: </strong>
                {Props.payDay}
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
