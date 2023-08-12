import React from 'react'
import Navbar from '@components/Navbar/Navbar'
// import styles from './layout.module.css' //metodo 2:css module

const Layout: React.FC = ({ children }) => {
  //react.fc Function components, type de funciones que reciven un React.ReactNode (nodo de react) normales que retornan un elemento jsx
  return (
    <div className='container'> {/* metodo 3 igual que el metodo 1 */}
    {/* <div className={styles.container}> */} {/* metodo 2: css module( para cada componente) */}
      {/* <div className='container'> */} {/* metodo 1 global css: le asignamos la clase a la que le agregamos color en css */}
      <Navbar />
      {children}
      {/* aqui esta la pagina */}
      <footer>This is the footer</footer>

      <style jsx>{` 
      .container{
        background:black;
      }
      `}</style>{/* metodo 3:ccs en javascript style jsx de nextjs, se escribe como un css comun */}
    </div>
  )
}

export default Layout
