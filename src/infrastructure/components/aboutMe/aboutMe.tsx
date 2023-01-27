import style from './aboutMe.module.css';
import { techStack } from '../../../utils/utils';

export const AboutMe = () => {
    return (
        <div
            className={`row align-items-center px_4 mb_5 ${style.containerTotalA}`}
        >
            {' '}
            <div className="col-8">
                <h2>About Me</h2>
                <p>
                    I love to create new ways of solving problems, taking
                    advantage of my great performance when it comes to keeping
                    the code clean and scalable
                </p>
                <p>
                    With testing as my main strategy, I consider myself a clean
                    code advocate, with special attention to maintainability and
                    scalability.
                </p>
                <p>
                    always wanting to give the best of me both in the
                    professional and personal field.
                </p>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-mortarboard-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg>
                    <div>
                        <p>Full-stack Web Developer</p>
                        <p>ISDI Coders (2021 World's best coding bootcamp)</p>
                    </div>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-mortarboard-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg>
                    <div>
                        <p>Aepi</p>
                        <p>professional course python </p>
                    </div>
                </div>
                <div>
                    <h3>My stack</h3>
                    <div className="d-flex flex-wrap">
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
            <div className="col-4 text-center">
                <img
                    src="../../../assets/ImagenCv.jpg"
                    className={`rounded-2  ${style.aboutImg}
                    `}
                    alt=""
                />
            </div>
        </div>
    );
};
