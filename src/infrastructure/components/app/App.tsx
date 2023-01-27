import { AboutMe } from '../aboutMe/aboutMe';
import { Carousel } from '../carousel/carousel';
import { Header } from '../header/header';
import { Introduction } from '../introduction/introduction';
import { Project } from '../projects/projects';

export const App = () => {
    return (
        <>
            <Header></Header>
            <Introduction></Introduction>
            <AboutMe></AboutMe>
            <Project></Project>
        </>
    );
};
