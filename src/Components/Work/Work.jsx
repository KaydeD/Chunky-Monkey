import { useState, useEffect } from "react";
import styles from "./Work.module.css";
import { supabase } from "../../Upload/supabaseClient";

const Work = () => {
  const [workData, setWorkData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const fetchWork = async () => {
      const { data, error } = await supabase
        .from("work_items")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching work:", error);
      } else {
        setWorkData(data);
      }
      setLoading(false);
    };

    fetchWork();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % workData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + workData.length) % workData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const nextSlideFullscreen = (e) => {
    e.stopPropagation();
    nextSlide();
  };

  const prevSlideFullscreen = (e) => {
    e.stopPropagation();
    prevSlide();
  };

  if (loading) return <div className={styles.container}>Loading...</div>;
  if (workData.length === 0)
    return <div className={styles.container}>No work items found</div>;

  return (
    <div id="work" className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>PAST WORK</h1>
        <p className={styles.subtitle}>
          A collection of high-quality 3D models, showcasing precision,
          topology, and artistic detail.
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <button
          onClick={prevSlide}
          className={styles.navButton}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className={styles.slideContainer}>
          <div className={styles.imageWrapper} onClick={openFullscreen}>
            <img
              src={workData[currentIndex].image}
              alt={workData[currentIndex].title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3 className={styles.slideTitle}>
                {workData[currentIndex].title}
              </h3>
              <p className={styles.slideDescription}>
                {workData[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className={styles.navButton}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {workData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.scrollHint}>SCROLL TO EXPLORE</div>

      {isFullscreen && (
        <div className={styles.fullscreenModal} onClick={closeFullscreen}>
          <button
            className={styles.closeButton}
            onClick={closeFullscreen}
            aria-label="Close fullscreen"
          >
            ✕
          </button>

          <button
            onClick={prevSlideFullscreen}
            className={styles.fullscreenNavButton}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <div
            className={styles.fullscreenContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={workData[currentIndex].image}
              alt={workData[currentIndex].title}
              className={styles.fullscreenImage}
            />
            <div className={styles.fullscreenInfo}>
              <h3 className={styles.fullscreenTitle}>
                {workData[currentIndex].title}
              </h3>
              <p className={styles.fullscreenDescription}>
                {workData[currentIndex].description}
              </p>
            </div>
          </div>

          <button
            onClick={nextSlideFullscreen}
            className={styles.fullscreenNavButton}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
