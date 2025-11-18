import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoPauseOutline } from "react-icons/io5";
import { IoPlaySharp } from "react-icons/io5";
import bannerImg1 from "../assets/images/bannerImg/bannerImg1.png";
import bannerImg2 from "../assets/images/bannerImg/bannerImg2.png";
import bannerImg3 from "../assets/images/bannerImg/bannerImg3.png";
import { useEffect, useState, useRef } from "react";

function Main() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    // 자동 슬라이드
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPlaying]);

    // 이전 배너 버튼 클릭 시
    const handlePrev = () => {
        setCurrentBanner((prev) => (prev - 1 + 3) % 3);
    };

    // 다음 배너 버튼 클릭 시
    const handleNext = () => {
        setCurrentBanner((prev) => (prev + 1) % 3);
    };

    // 터치 슬라이드
    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null || touchEndX.current === null) return;

        const swipeDistance = touchEndX.current - touchStartX.current;

        if (Math.abs(swipeDistance) > 50) {
            swipeDistance > 0 ? handlePrev() : handleNext();
        }

        // 초기화
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <main className="main">
            <section className="banner">
                <div
                    className={`banner__slides banner__slides--${currentBanner}`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <img
                        src={bannerImg1}
                        alt="배너1"
                        className="banner__slide"
                    />
                    <img
                        src={bannerImg2}
                        alt="배너2"
                        className="banner__slide"
                    />
                    <img
                        src={bannerImg3}
                        alt="배너3"
                        className="banner__slide"
                    />
                </div>
                <div className="banner__control">
                    <div className="banner__progress">
                        <span
                            className={`banner__progress-bar banner__progress-bar--${currentBanner}`}
                        ></span>
                    </div>
                    <button id="prev" onClick={handlePrev}>
                        <IoIosArrowBack className="banner__control-icon" />
                    </button>
                    <button id="next" onClick={handleNext}>
                        <IoIosArrowForward className="banner__control-icon" />
                    </button>
                    <button id="pause" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? (
                            <IoPauseOutline className="banner__control-icon" />
                        ) : (
                            <IoPlaySharp className="banner__control-icon" />
                        )}
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Main;
