import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Video.module.scss'

const cx = classNames.bind(styles)
const Video = () => {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster={'/assets/poster.jpg'}
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video