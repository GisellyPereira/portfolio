export default function cliqueCaixas() {
  const url = 'https://github.com/GisellyPereira/GisellyPereira';
  const clickOne = document.querySelector('.click-one');

  function openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
  }

  clickOne.addEventListener('click', () => {
    openInNewTab(url)
  });



  const url2 = 'https://github.com/GisellyPereira/animais-fantasticos';
  const clickTwo = document.querySelector('.click-two');

  function openInNewTab2(url2) {
    const wind = window.open(url2, '_blank');
    wind.focus();
  }

  clickTwo.addEventListener('click', () => {
    openInNewTab2(url2)
  });
}

