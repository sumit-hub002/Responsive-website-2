// Menubar Responsive
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener("click", ()=> {
  mobileMenu.classList.toggle("hidden");
});

// Swiper for Testimonials

const testimonialSwiper = new Swiper ('.testimonial-slider', {
  slidesPerView: 1,
  spaceBetween : 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction:  false,

    },

    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints:{
      640:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
      },
    }
});


// AOS Animation
AOS.init({
  duration:1000,
  once:true,

});



const form = document.getElementById('appointmentForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;   

    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const   
 message = document.getElementById('message').value;

    // Replace this with your actual server-side script or API endpoint
    fetch('your_server_script.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${name}&email=${email}&phone=${phone}&date=${date}&time=${time}&message=${message}`
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Handle server response
        // Display success message or redirect to a confirmation page
        alert('Appointment booked successfully!');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error, display error message to user
        alert('An error occurred. Please try again later.');
    });
});



