import style from './carousel.module.css';
export const Carousel = () => {
    return (
        <div className={`container-fluid ${style.containerTotalC}`}>
            <div className="row slider">
                <div className="col">
                    <div
                        className="carousel "
                        data-bs-ride="carousel"
                        id="slider"
                    >
                        <div className={`carousel-inner  ${style.carrousel}  `}>
                            <div
                                className={`carousel-item ${style.carouselItem} active   `}
                                data-bs-interval="2300"
                            >
                                <img
                                    className={`d-block  img-fluid ${style.carouselImgPhone} `}
                                    src="../../../assets/meeseks-phone.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={`carousel-item ${style.carouselItem}   `}
                                data-bs-interval="2300"
                            >
                                <img
                                    className={`d-block  img-fluid ${style.carouselImgPhone} `}
                                    src="../../../assets/meeseks-Phone-2.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={`carousel-item ${style.carouselItem}   `}
                                data-bs-interval="2300"
                            >
                                <img
                                    className={`d-block  img-fluid ${style.carouselImgPhone} `}
                                    src="../../../assets/retro-gaming-phone.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={`carousel-item ${style.carouselItem}   `}
                                data-bs-interval="2300"
                            >
                                <img
                                    className={`d-block  img-fluid ${style.carouselImgPhone} `}
                                    src="../../../assets/retro-gaming-phone3.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#slider"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#slider"
                                data-bs-slide-to="1"
                                className="active"
                                aria-current="true"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#slider"
                                data-bs-slide-to="2"
                                className="active"
                                aria-current="true"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#slider"
                                data-bs-slide-to="3"
                                className="active"
                                aria-current="true"
                            ></button>
                        </div>
                    </div>
                    <div className="col-12 d-flex align-items-center justify-content-around">
                        {' '}
                        <button
                            className="carousel-control-rev btn "
                            type="button"
                            data-bs-target="#slider"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                        </button>
                        <button
                            className="carousel-control-rev btn "
                            type="button"
                            data-bs-target="#slider"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
