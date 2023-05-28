import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './SlideGallery.module.css';

const SlideGallery = ({ slides }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideClick = (index) => {
    setActiveSlideIndex(index);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  if (!slides || slides.length === 0) {
    return null; // Return null or a placeholder component if there are no slides
  }

  const activeSlide = slides[activeSlideIndex] || {}; // Use an empty object as a fallback

  return (
    <div className={styles.container}>
      <div className={styles.bigSlide}>
        <img src={activeSlide.imageUrl} alt={activeSlide.caption} />
        <div className={styles.leftArrow} onClick={handlePrevSlide}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className={styles.rightArrow} onClick={handleNextSlide}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className={styles.smallSlides}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === activeSlideIndex ? styles.active : ''
            }`}
            onClick={() => handleSlideClick(index)}
          >
            <img src={slide.imageUrl} alt={slide.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideGallery;
