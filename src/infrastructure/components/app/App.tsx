import { AboutMe } from '../aboutMe/aboutMe';
import { Contact } from '../contact/contact';
import { Header } from '../header/header';
import { Introduction } from '../introduction/introduction';
import { Project } from '../projects/projects';

export const App = () => {

    // animaciones
    const itemLeft = document.getElementsByClassName("left");
    const itemRight = document.getElementsByClassName("right");
    const itemTop = document.getElementsByClassName("top");
    const itemBottom = document.getElementsByClassName("bottom");
    const itemOp = document.getElementsByClassName("appear");
    window.addEventListener('scroll', function () {
        for (let i = 0; i < itemLeft.length; i++) {
          if (isInViewport(itemLeft[i])) {
            itemLeft[i].classList.add('animation-left')
          } else if (!isInViewport(itemLeft[i])) {
            itemLeft[i].classList.remove('animation-left')
          }
        }
        for (let i = 0; i < itemRight.length; i++) {
          if (isInViewport(itemRight[i])) {
            itemRight[i].classList.add('animation-right')
          }
        }
        for (let i = 0; i < itemBottom.length; i++) {
          if (isInViewport(itemBottom[i])) {
            itemBottom[i].classList.add('animation-bottom')
          }
        }
        for (let i = 0; i < itemTop.length; i++) {
          if (isInViewport(itemTop[i])) {
            itemTop[i].classList.add('animation-top')
          }
        }
        for (let i = 0; i < itemOp.length; i++) {
          if (isInViewport(itemOp[i])) {
            itemOp[i].classList.add('animation-appear')
          }
        }
      });
      // animaciones
      
      // IS IN VIEWPORT
      function isInViewport(item: any) {
        
      
        let bounding = item.getBoundingClientRect(),
          myElementHeight = item.offsetHeight,
          myElementWidth = item.offsetWidth;
      
        if (bounding.top >= -myElementHeight
          && bounding.left >= -myElementWidth
          && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
          && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
          return true;
        } else {
          return false;
        }
      
      }
      // animaciones
    

    return (
        <>
            <Header></Header>
            <Introduction></Introduction>
            <AboutMe></AboutMe>
            <Project></Project>
            <Contact></Contact>
        </>
    );
};
