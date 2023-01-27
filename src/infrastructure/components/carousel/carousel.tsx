import style from './carousel.module.css';
export const Carousel = () => {
    return (
        <div className={`container-fluid ${style.containerTotalC}`}>
            <div className="row slider">
                <div className="col">
                    <div
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                        id="slider"
                    >
                        <div className={`carousel-inner  ${style.carrousel}  `}>
                            <div
                                className={`carousel-item ${style.carouselItem} active   `}
                                data-bs-interval="2500"
                            >
                                <img
                                    className={`d-block  img-fluid ${style.carouselImgIpad} `}
                                    src="../../../assets/retro-gaming-ipad.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={`carousel-item ${style.carouselItem}   `}
                                data-bs-interval="2500"
                            >
                                <img
                                    className={`d-block  img-fluid ${style.carouselImgPhone} `}
                                    src="../../../assets/retro-gaming-Phone.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={`carousel-item ${style.carouselItem}   `}
                                data-bs-interval="2500"
                            >
                                <img
                                    className={`d-block  img-fluid ${style.carouselImgIpad} `}
                                    src="../../../assets/meeseks-ipad.png"
                                    alt=""
                                />
                            </div>
                            <div
                                className={`carousel-item ${style.carouselItem}   `}
                                data-bs-interval="2500"
                            >
                                <img
                                    className={`d-block  img-fluid ${style.carouselImgPhone} `}
                                    src="../../../assets/meeseks-Phone.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-rev btn btn-primary"
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
                            className="carousel-control-rev btn btn-primary"
                            type="button"
                            data-bs-target="#slider"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                        </button>
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
                </div>
            </div>
        </div>
    );
};
