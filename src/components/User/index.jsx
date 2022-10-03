import React, { useState } from "react";
// import { PaperClipIcon } from "@heroicons/react/20/solid";
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
  console.log(Props);
  return (
    <div>
      <h1>{Props.fullName}</h1>
      <h4>{Props.id}</h4>
      <h4>{Props.cpf}</h4>
      <h4>{Props.whatsapp}</h4>
      <h4>{Props.email}</h4>
      <h4>{Props.payDay}</h4>
    </div>
  );
}
