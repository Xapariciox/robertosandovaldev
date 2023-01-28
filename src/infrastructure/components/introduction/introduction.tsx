import style from './introduction.module.css';
export const Introduction = () => {
    return (
        <section id="introduction">
            {' '}
            <div
                className={`container-fluid ${style.containerTotalI} w-100 d-flex align-items- flex-column justify-content-center`}
            >
                <div className="col-12">
                    <p className={style.imIntroduction}>Hi, I'm</p>
                </div>

                <div className={`col-12 d-flex `}>
                    {' '}
                    <h1 className={style.nameIntroduction}>
                        Roberto Sandoval
                        <span className={style.nameIntroductionSpan}>.</span>
                    </h1>
                </div>
                <div className="col-12">
                    <h2 className={style.IntroductionRol}> Web developer </h2>
                </div>
                <div className={`col-12  ${style.divIntroductionWho}`}>
                    {' '}
                    <p className={`w-50  w-md-25 ${style.IntroductionWho}`}>
                        I'm a full stack web developer who loves to face
                        challenges to reach a very optimal result.
                    </p>
                </div>
            </div>
        </section>
    );
};
