import styles from './Accordion.module.scss'
import classNames from 'classnames/bind'
import { PropsWithChildren, useState } from 'react'

const cx = classNames.bind(styles)

interface AccordionProps {
  label: string
}
const Accordion = ({ label, children }: PropsWithChildren<AccordionProps>) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={cx('wrap-accordion', isOpen ? 'open' : '')}>
      <div
        className={cx('wrap-header')}
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      >
        <span>{label}</span>
        <ArrowDown className={cx('icon-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

const ArrowDown = ({ className }: { className: string }) => {
  return (
    <>
      <svg
        className={className}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" />
        <path d="M0-.75h48v48h-48z" fill="none" />
      </svg>
    </>
  )
}
export default Accordion
