import style from './aboutMe.module.css';
import { techStack } from '../../../utils/utils';

export const AboutMe = () => {
    return (
        <section id="aboutMe">
            {' '}
            <div className="container-fluid animation-right">
                {' '}
                <div className={`row  ${style.containerTotalA}`}>
                    {' '}
                    <div className="col-12 text-center my-4">
                        <h2 className={`${style.aboutTitle}`}>About Me</h2>
                    </div>
                    <div className="col-12 col-sm-7 ms-0 ms-md-5">
                        {' '}
                        <p
                            className={` text-start ${style.marginTitle2} ${style.text}`}
                        >
                            I love to solve problems the most creative way
                            giving high performances results.
                        </p>
                        <p className={` ${style.marginTitle2} ${style.text}`}>
                            I consider myself a clean code advocate, focusing on
                            maintainability and scalability, making testing my
                            main strategy.
                        </p>
                        <p className={` ${style.marginTitle2} ${style.text}`}>
                            Always giving the best of me both Professionaly in
                            personaly.
                        </p>
                        <div
                            className={` d-flex flex-wrap align-items-center `}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className={`bi bi-mortarboard-fill ${style.iconSchool}`}
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                            </svg>
                            <div
                                className={`d-flex flex-column justify-content-center w-75 ${style.marginTitle2}`}
                            >
                                <p className={` ${style.title} `}>
                                    ISDI Coders (2021-2022)
                                </p>
                                <p className={` ${style.text}`}>
                                    {' '}
                                    Full-stack Web Developer (2021 World's best
                                    coding bootcamp){' '}
                                </p>
                            </div>
                        </div>
                        <div
                            className={` d-flex flex-wrap align-items-center `}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-mortarboard-fill "
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                            </svg>
                            <div
                                className={`d-flex flex-column justify-content-center ${style.marginTitle2}`}
                            >
                                <p className={` ${style.title}`}>Aepi (2021)</p>
                                <p className={` ${style.text}`}>
                                    Professional course python{' '}
                                </p>
                            </div>
                        </div>
                        <div
                            className={` d-flex flex-wrap align-items-center `}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-mortarboard-fill "
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                            </svg>
                            <div
                                className={`d-flex flex-column justify-content-center ${style.marginTitle2}`}
                            >
                                <p className={` ${style.title}`}>
                                    Lourtec (2019-2020)
                                </p>
                                <p className={` ${style.text}`}>
                                    Microsoft support technician{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-sm-4 col-12 d-flex align-content-center ">
                        <img
                            src="../../../assets/ImagenCv.jpg"
                            className={`rounded-2   ${style.aboutImg}
                    `}
                            alt=""
                        />
                    </div>
                    <div className="col">
                        <h3
                            className={` ${style.marginTitle2} ${style.title2} text-center mt-4 mb-3 mt-md-0 mb-md-2  text-md-start mt-2`}
                        >
                            My stack:
                        </h3>
                        <div
                            className={`d-flex flex-wrap justify-content-center justify-content-md-start mb-4 ${style.icons} `}
                        >
                            {techStack.map((stack) => {
                                return (
                                    <img
                                        key={stack}
                                        height={70}
                                        width={70}
                                        alt={`${stack} logo`}
                                        src={`../../../assets/${stack}.svg`}
                                        className={style.iconsImg}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
