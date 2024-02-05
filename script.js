function toggleMode() {
  const html = document.documentElement

  // html.classList.contains('light') ? html.classList.remove('light') : html.classList.add('light')
  html.classList.toggle('light')
}