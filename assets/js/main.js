/* ---------------  SHOW MENU  --------------- */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*---- MENU SHOW ----*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*---- MENU HIDDEN ----*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ---------------  REMOVE MENU MOBILE  --------------- */
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ---------------  SHADOW HEADER  --------------- */
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* ---------------  EMAIL JS  --------------- */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ifaca1','template_fnfhsze','#contact-form','y5SwUO5O0YXGhljWc')
    .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //Remove message after five second
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //Clear input fields
        contactForm.reset()
    }, () =>
        //Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    )
}

contactForm.addEventListener('submit', sendEmail)

/* ---------------  SHOW SCROLL UP  --------------- */ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ---------------  SCROLL SECTIONS ACTIVE LINK  --------------- */


/* ---------------  DARK LIGHT THEME  --------------- */ 


/* ---------------  SCROLL REVEAL ANIMATION  --------------- */