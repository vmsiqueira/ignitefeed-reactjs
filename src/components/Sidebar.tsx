import { PencilLine } from "phosphor-react"

import styles from "./Sidebar.module.scss"
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        className={styles.cover} 
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/vmsiqueira.png" />
        <strong>Vitor Siqueira</strong>
        <span>web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>

  );
}