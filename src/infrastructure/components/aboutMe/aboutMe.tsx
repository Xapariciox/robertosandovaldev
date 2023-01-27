import style from './aboutMe.module.css';
import { techStack } from '../../../utils/utils';

export const AboutMe = () => {
    return (
        <div className="container-fluid">
            {' '}
            <div className={`row  ${style.containerTotalA}`}>
                {' '}
                <div className="col-12 text-center mt-2">
                    <h2 className={`${style.aboutTitle}`}>About Me</h2>
                </div>
                <div className="col-12 col-sm-7 ">
                    {' '}
                    <p
                        className={` text-start ${style.marginTitle2} ${style.text}`}
                    >
                        I love to create new ways of solving problems, taking
                        advantage of my great performance when it comes to.
                    </p>
                    <p className={` ${style.marginTitle2} ${style.text}`}>
                        With testing as my main strategy, I consider myself a
                        clean code advocate, with special attention to
                        maintainability and scalability.
                    </p>
                    <p className={` ${style.marginTitle2} ${style.text}`}>
                        always wanting to give the best of me both in the
                        professional and personal field.
                    </p>
                    <div className={` d-flex flex-wrap align-items-center `}>
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
                                Full-stack Web Developer
                            </p>
                            <p className={` ${style.text}`}>
                                ISDI Coders (2021 World's best coding bootcamp)
                            </p>
                        </div>
                    </div>
                    <div className={` d-flex flex-wrap align-items-center `}>
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
                            <p className={` ${style.title}`}>Aepi</p>
                            <p className={` ${style.text}`}>
                                professional course python{' '}
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" col-sm-5 col-12 d-flex align-content-center ">
                    <img
                        src="../../../assets/ImagenCv.jpg"
                        className={`rounded-2   ${style.aboutImg}
                    `}
                        alt=""
                    />
                </div>
                <div className="col">
                    <h3
                        className={` ${style.marginTitle2} ${style.title2} text-center text-md-start mt-2`}
                    >
                        My stack
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
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
