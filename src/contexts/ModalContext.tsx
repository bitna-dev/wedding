// import Modal from '@shared/Modal'
// import { createContext, useContext, ComponentProps, useState } from 'react'
// import { createPortal } from 'react-dom'

// type ModalProps = ComponentProps<typeof Modal>
// type ModalOptions = Omit<ModalProps, 'open'>

// interface ModalContextValue {
//   open: (options: ModalOptions) => void
//   close: () => void
// }

// const Context = createContext<ModalContextValue | undefined>(undefined)

// const ModalContext = ({ children }: { children: React.ReactNode }) => {
//   const [] = useState()
//   const $portal_root = document.getElementById('root-portal')
//   const open = (options: ModalOptions) => {}
//   const close = () => {}
//   return (
//     <Context.Provider>
//       {children}
//       {$portal_root != null ? createPortal(<Modal />, $portal_root) : null}
//     </Context.Provider>
//   )
// }

// export default ModalContext
