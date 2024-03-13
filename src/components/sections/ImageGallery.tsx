import React, { useState } from 'react'
import styles from './ImageGallery.module.scss'
import classNames from 'classnames/bind'
import Section from '../shared/Section'
import ImageViewer from '../ImageViewer'

const cx = classNames.bind(styles)

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIdx, setSelectedIndex] = useState(-1)
  const open = selectedIdx > -1
  const handleSelectedImg = (idx: number) => {
    setSelectedIndex(idx)
  }
  const handleClose = () => {
    setSelectedIndex(-1)
  }
  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImg(idx)
              }}
            >
              <img src={`${src}.jpg`} alt={src} />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        open={open}
        images={images}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
