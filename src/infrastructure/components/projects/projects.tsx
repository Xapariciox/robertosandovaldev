import { Carousel } from '../carousel/carousel';
import style from './projects.module.css';
export const Project = () => {
    return (
        <>
            <div className={`container-fluid ${style.containerTotalProjects}`}>
                <div className="row">
                    <h2 className={` col text-center mt-4 ${style.aboutTitle}`}>
                        Projects
                    </h2>
                    <Carousel></Carousel>
                </div>
            </div>
        </>
    );
};
