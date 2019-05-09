let sections = document.getElementsByTagName('section')
  sections[0].style.backgroundColor = 'blue'
  sections[1].style.backgroundColor = 'green'
  sections[2].style.backgroundColor = 'red'
  sections[3].style.backgroundColor = 'yellow'

window.addEventListener('scroll', function() {
   let hehe = document.getElementsByClassName('oof')
   if(window.scrollY >= 1) {
     hehe[0].classList.remove('hidden')
     hehe[0].classList.add('show')
}
   if(window.scrollY >= 666) {
     hehe[1].classList.remove('hidden')
     hehe[1].classList.add('show')
}
   if(window.scrollY >= 1212) {
     hehe[2].classList.remove('hidden')
     hehe[2].classList.add('show')
 }
   if(window.scrollY >= 2400) {
     hehe[3].classList.remove('hidden')
     hehe[3].classList.add('show')
   }
  })




// let sections = document.getElementsByTagName('section')
//
// window.addeventlistener('scroll', function(event) {
//   if (window.scrollY > 500) {
//     div[0].classlist.remove('hidden')
//     div[0].classlist.add('show')
//   }
//
//   if (window.scrollY > 500) {
//     div[1].classlist.remove('hiddden')
//     div[1].classlist.add('show')
//   }
// })

// let section = document.getElementsByClassName('oof')
//
// window.addEventListener('scroll', function(event) {
//   if (window.scrollY > 800) {
//     section.classList.remove('hidden')
//     section.classList.add('show')
//     console.log(window.scrollY)
//   }
// })

// let sections = document.getElementsByTagName()
// let divs = document.getElementsByTagName()
//
// window.addEventListener('scroll', function(event) {
//   if (window.scrollY > 500) {
//     divs[0].classList.remove('hidden')
//     divs[0].classList.add('show')
//   }
// })
