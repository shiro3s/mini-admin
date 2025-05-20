import {Header} from ".//header"

import styles from "./styles.module.css"

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({
  children
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  )
}
