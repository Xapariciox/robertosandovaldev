import style from './header.module.css';
export const Header = () => {
    return (
        <header id="header" className="container-fluid p-0">
            <div
                className={`${style.headerNav} row nav g-0  justify-content-end justify-content-sm-between rounded-top  `}
            >
                <div
                    className={`logo col-auto d-none  d-sm-flex align-items-center  ps-0 ps-sm-5  ${style.divRol}  `}
                >
                    <p className={`mb-0 ${style.rol}`}>
                        {'<Full-Stack Web Developer/>'}
                    </p>
                </div>
                <nav
                    className={`menu col-auto d-flex align-items-stretch ${style.links} d-none d-md-flex`}
                >
                    <a
                        href="#aboutMe"
                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                    >
                        <div className="w-100">
                            <span>About</span>
                            <div className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-person-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a
                        href="#projects"
                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                    >
                        <div className="w-100">
                            {' '}
                            <span>Projects</span>
                            <div className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-briefcase-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a
                        href="#contact"
                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                    >
                        <div className="w-100">
                            {' '}
                            <span>Contact</span>
                            <div className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-phone-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </nav>
                <nav
                    className={`${style.burguer} menu col-auto d-flex align-items-stretch d-block d-md-none  `}
                >
                    <div
                        className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                    >
                        <button
                            className="btn btn-primary btn-lg dropdown-toggle dropdown-lg-toggle"
                            type="button"
                            id="drowup"
                            data-bs-toggle="dropdown"
                        ></button>
                        <ul className="dropdown-menu ">
                            <li className="mt-2">
                                <a
                                    href="#projects"
                                    className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        {' '}
                                        <span>Projects</span>
                                        <div className="icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-briefcase-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-2">
                                {' '}
                                <a
                                    href="#contact"
                                    className={`px-4 text-decoration-none d-flex align-items-center text-center ${style.linksHeader}`}
                                >
                                    <div className="w-100">
                                        {' '}
                                        <span>Contact</span>
                                        <div className="icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-phone-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="mt-2"></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};
