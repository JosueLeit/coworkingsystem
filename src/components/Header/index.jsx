import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <strong>
          <h2>Registro de Usuários</h2>
        </strong>
      </div>
    </header>
  );
}
