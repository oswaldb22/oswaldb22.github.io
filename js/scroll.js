const sr = ScrollReveal();

sr.reveal('.avatar',{
  duration: 1000,
  opacity: 0.5,
  distance:'50px',
  origin: 'top'
})

sr.reveal('.text',{
  duration: 1000,
  delay:1000,
  opacity: 0,
  distance:'50px',
  origin: 'left'
})

sr.reveal('.sub-text',{
  duration: 1000,
  opacity: 0,
  delay:1000,
  distance:'100px',
  origin: 'left'
})

sr.reveal('.button',{
  duration: 1000,
  opacity: 0,
  delay:1000,
})
