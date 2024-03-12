
const divs = document.querySelectorAll('.bars');

divs.forEach((div, index) => {
  div.addEventListener('click', () => {
    // Reset the color and border radius of all divs
    divs.forEach((d) => {
      d.classList.remove('white');
      d.classList.remove('radius-top-right');
      d.classList.remove('radius-bottom-right');
      d.classList.add('black');
    });

    // Set the selected div to white
    div.classList.remove('black');
    div.classList.add('white');

    // Apply border radius modifications to neighboring divs
    if (index > 0) {
      divs[index - 1].classList.add('radius-bottom-right');
    }
    if (index < divs.length - 1) {
      divs[index + 1].classList.add('radius-top-right');
    }
  });
});