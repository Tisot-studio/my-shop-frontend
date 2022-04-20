import useWindowSize from '../../hooks/useWindowSize';
import { useLayoutEffect, useRef } from 'react';
import './my-smooth-scroll.scss';


export default function MySmoothScroll({children, history}) {


    // Хук из заготовленой функции
  const size = useWindowSize();

  let viewport = useRef(null)
  let container = useRef(null)

    // Configs
  const data = {
// Значение ease отвечает за сам эффект 0.1 - оптимальное значение. Чем меньше, тем ярче эффект, главное не переборщить.
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0
    };


// Run scrollrender once page is loaded.
useLayoutEffect(() => {
  requestAnimationFrame(() => skewScrolling());
}, []);

//set the height of the body.
useLayoutEffect(() => {
  setBodyHeight();
}, [size.height]);

//Set the height of the body to the height of the scrolling div
const setBodyHeight = () => {
  document.body.style.height = `${
    container.current.getBoundingClientRect().height
  }px`;
};

// Функция для скролла
const skewScrolling = () => {
  //Настроить текущее положение при сролле
  data.current = window.scrollY;
  // Set Настроить предытущее положение при скролле
  data.previous += (data.current - data.previous) * data.ease;
  // Округление
  data.rounded = Math.round(data.previous * 100) / 100;

  //Применить настройки скролла для нужного контейнера
   container.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

  
  requestAnimationFrame(() => skewScrolling());
};
    return (
    <div ref={viewport} id='viewport'> 
        <div ref={container} id='scroll-container'>
            {children}
        </div>
    </div>
    )
}
