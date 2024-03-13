import classNames from 'classnames/bind'
import Section from '../shared/Section'
import styles from './Calendar.module.scss'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const cx = classNames.bind(styles)
const css = `
  .rdp-nav{
    display: none;
  }
  .rdp-cell {
    cursor: none;
  }
  .rdp-head_cell {
    font-weight: 500;
    font-size: 14px;
    font-weight: bold;
  }
  .rdp-day{
    pointer-events: none;
  }
  .rdp-day_selected{
    background-color: var(--red);
    font-weight: 900;
    color: #fff;

  }
  .rdp-day_selected:hover{
    background-color: var(--red);

  }
`

const Calendar = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy-MM-dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          mode="single"
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
