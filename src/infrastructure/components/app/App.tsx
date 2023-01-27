import { AboutMe } from '../aboutMe/aboutMe';
import { Carousel } from '../carousel/carousel';
import { Header } from '../header/header';
import { Introduction } from '../introduction/introduction';

export const App = () => {
    return (
        <>
            <Header></Header>
            <Introduction></Introduction>
            <AboutMe></AboutMe>
            <Carousel></Carousel>
        </>
    );
};
