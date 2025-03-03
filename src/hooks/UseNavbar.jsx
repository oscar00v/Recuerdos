import { useState, useRef, useEffect } from "react";

const useNavbar = (menuItems) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current || !indicatorRef.current) return;
  
    const menuItemsElements = menuRef.current.querySelectorAll("li a");
  
    if (menuItemsElements.length === 0) return;
  
    const activeItem = menuItemsElements[activeIndex];
  
    if (activeItem) {
      const offsetX = activeItem.offsetLeft; // Posición en X
      const width = activeItem.offsetWidth; // Ancho del elemento
  
      requestAnimationFrame(() => {
        indicatorRef.current.style.transition = "transform 0.5s ease-in-out, width 0.3s ease"; // 🔥 Agrega una transición correcta
        indicatorRef.current.style.transform = `translateX(${offsetX}px)`;
        indicatorRef.current.style.width = `${width}px`;
      });
    }
  }, [activeIndex]);
  

  return { activeIndex, setActiveIndex, indicatorRef, menuRef };
};

export default useNavbar;

// if (activeItem) {
//     const indicatorBoxes = indicatorRef.current.querySelectorAll(".indicator-box");
//     const offsetX = activeItem.offsetLeft;
//     const offsetY = activeItem.offsetTop;
//     const width = activeItem.offsetWidth;
//     const height = activeItem.offsetHeight;
//     const boxSize = height * 1.2; // Tamaño de los cuadros en relación al ítem

//     // Posicionar los cuadros a los lados del ítem seleccionado
//     indicatorBoxes[0].style.transform = `translate(${offsetX - boxSize * 0.5}px, ${offsetY}px)`;
//     indicatorBoxes[1].style.transform = `translate(${offsetX + width - boxSize * 0.5}px, ${offsetY}px)`;
//   }
// }, [activeIndex]);

// return { activeIndex, setActiveIndex, indicatorRef, menuRef };
// };

// export default useNavbar;