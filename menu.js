const bars = document.querySelector('.bars');
const exit = document.querySelector('.exit');
const mobileMenu = document.querySelector('.mobilemenu');

bars.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(0%)';
  exit.style.opacity = '1';
});

exit.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(100%)';
  exit.style.opacity = '0';
});

      const pierogi = document.querySelector('.pierogi');
      const krokiety = document.querySelector('.krokiety');
      const inne = document.querySelector('.inne');
      const listMenuFirst = document.querySelector('.listmenu0');
      const listMenuTwo = document.querySelector('.listmenu1');
      const listMenuThree = document.querySelector('.listmenu2');

      listMenuFirst.style.display = 'flex';
        listMenuTwo.style.display = 'none';
        listMenuThree.style.display = 'none';
        pierogi.style.borderBottom = '3px solid #ECAA00';

      pierogi.addEventListener('click', () => {
        listMenuFirst.style.display = 'flex';
        pierogi.style.borderBottom = '3px solid #ECAA00';
        listMenuTwo.style.display = 'none';
        krokiety.style.borderBottom = 'none';
        listMenuThree.style.display = 'none';
        inne.style.borderBottom = 'none';
      });

      krokiety.addEventListener('click', () => {
        listMenuFirst.style.display = 'none';
        pierogi.style.borderBottom = 'none';
        listMenuTwo.style.display = 'flex' ;
        krokiety.style.borderBottom = '3px solid #ECAA00';
        listMenuThree.style.display = 'none';
        inne.style.borderBottom = 'none';
      });

      inne.addEventListener('click', () => {
        listMenuFirst.style.display = 'none';
        pierogi.style.borderBottom = 'none';
        listMenuTwo.style.display = 'none';
        krokiety.style.borderBottom = 'none';
        listMenuThree.style.display = 'flex';
        inne.style.borderBottom = '3px solid #ECAA00';
      });
    