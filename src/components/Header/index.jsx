import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <strong>
          <h2>Registro de Usuários</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            adipisci architecto hic iure odio sed reiciendis ab illum
            reprehenderit illo tempora magni id! Dicta illo ad velit corrupti
            repudiandae rem.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem
            repellat nisi, voluptatem cumque, nemo, voluptatibus sequi error
            voluptates molestiae tempora consequuntur. Perspiciatis fuga odit
            officiis porro tenetur quasi eos.
          </p>
        </strong>
      </div>
    </header>
  );
}
