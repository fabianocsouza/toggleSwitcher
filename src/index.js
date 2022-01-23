document.addEventListener('DOMContentLoaded', () => {

  const darkStorage =  localStorage.getItem('dark-mode')

  const html = document.querySelector('html')
  const toggleSwitch = document.getElementById('toggle')

  if(darkStorage){
    toggleSwitch.setAttribute('checked', true);
    html.setAttribute('lightDark', true)
  }

  toggleSwitch.addEventListener('change', () => {
    if(toggleSwitch.checked) {
      localStorage.setItem('dark-mode', true);

      html.setAttribute('lightDark', true);

      toggleSwitch.setAttribute('checked', true);
      localStorage.setItem('checked', true)

    }else {
      html.removeAttribute('lightDark');
      toggleSwitch.removeAttribute('checked');

      localStorage.clear();
    }
  })
});


