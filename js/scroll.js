const sr = ScrollReveal();

sr.reveal('.avatar',{
  duration: 1000,
  opacity: 0.5,
  distance:'50px',
  origin: 'top'
})

sr.reveal('.text',{
  duration: 1000,
  delay:500,
  opacity: 0,

})

sr.reveal('.sub-text',{
  duration: 1000,
  opacity: 0,
  delay:500,

})

sr.reveal('.button',{
  duration: 800,
  opacity: 0,
  delay:1000,
})
