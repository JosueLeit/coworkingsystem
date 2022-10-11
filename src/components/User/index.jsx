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
          <strong>Dados Pessoais</strong>
        </div>
        <div>
          <dl>
            <div>
              <dt>
                <strong>Full name</strong>
              </dt>
              <dd>{Props.fullName}</dd>
            </div>
            <div>
              <dt>
                <strong>CPF:</strong>
              </dt>
              <dd>{Props.cpf}</dd>
            </div>
            <div>
              <dt>
                <strong>E-mail</strong>
              </dt>
              <dd>{Props.email}</dd>
            </div>
            <div>
              <dt>
                <strong></strong>Número de telefone/ WhatsApp
              </dt>
              <dd>{Props.whatsapp}</dd>
            </div>
            <div>
              <dt>
                <strong></strong>Dia de vencimento
              </dt>
              <dd>{Props.payDay}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
