import { Carousel } from '../carousel/carousel';
import style from './projects.module.css';
export const Project = () => {
    return (
        <>
            <section id="projects">
                {' '}
                <div
                    className={`container-fluid ${style.containerTotalProjects}`}
                >
                    <div className="row">
                        <h2
                            className={` col text-center my-4 ${style.aboutTitle}`}
                        >
                            Projects
                        </h2>
                        <Carousel></Carousel>
                        <h2 className={`text-center my-5 ${style.aboutTitle}`}>
                            Curently working on
                        </h2>
                        <div className="col-6 ">
                            <div className="d-flex justify-content-center mb-5">
                                <img
                                    className={` ${style.currentlyImg} me-2`}
                                    src="../../../assets/retro-gaming-phone.png"
                                    alt=""
                                />
                                <img
                                    className={` ms-2 d-none d-md-block ${style.currentlyImg}`}
                                    src="../../../assets/retro-gaming-phone3.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <h2 className={` mb-3 ${style.titleProject}`}>
                                Retro-gaming
                            </h2>
                            <p className={`me-4  ${style.text}`}>
                                An e-commerce based on data working with{' '}
                                <strong>nodeJs</strong> via{' '}
                                <strong>mongoDB</strong> connected with a{' '}
                                <strong>Rest API</strong> via{' '}
                                <strong>mongoose</strong> using{' '}
                                <strong>expressJs</strong>. I have developed it
                                using <strong>Typescript</strong> and{' '}
                                <strong>React</strong> working with{' '}
                                <strong>redux</strong>, <strong>hooks</strong>,
                                clean code, SOLID pattern and{' '}
                                <strong>TDD</strong> principles for testing for
                                which I achieve <strong>100% coverage.</strong>
                            </p>
                            <p className={`me-4  ${style.text}`}>
                                <strong>Responsive design</strong> and styles
                                applied with <strong>bootstrap 5</strong>{' '}
                                project controlled by <strong>Git</strong>{' '}
                                version control.
                            </p>
                            <div className="my-4">
                                <a
                                    className=""
                                    target="_blank"
                                    href="https://github.com/Xapariciox/Retro-Gaming-Front"
                                    rel="noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        fill="currentColor"
                                        className="bi bi-github me-2 "
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://retro-gaming-roberto-sandoval.netlify.app/"
                                    className="text-decoration-none "
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {' '}
                                    <img
                                        src="../../../assets/www.svg"
                                        width={50}
                                        height={50}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>{' '}
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center mb-4">
                            <p className={`  ${style.textGithub}`}>
                                Looking for more?
                            </p>
                            <p className={`  ${style.textGithub}`}>
                                Come to my github!
                            </p>
                            <a
                                href="https://github.com/Xapariciox"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {' '}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    fill="currentColor"
                                    className="bi bi-github me-2"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
