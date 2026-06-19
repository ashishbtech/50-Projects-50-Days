const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'David Singh',
    position: 'Senior Film Critic',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: "A masterful stroke of visual storytelling. The lighting alone deserves an Academy Award. It pulls the viewer into a visceral world of shadow and amber light, never letting go until the final frame."
  },
  {
    name: 'Emily Chen',
    position: 'IndieWire Columnist',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: "Breathtaking practical effects mixed seamlessly with a haunting score. This is cinema at its absolute peak. The director proves that true visual composition isn't just a trend, it's a discipline."
  },
  {
    name: 'Marcus Reed',
    position: 'Festival Jury President',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: "Rajamouli-esque in its grand scale, yet it maintains the intimate tension of a Kubrick psychological thriller. The pacing is deliberate and immensely rewarding."
  },
  {
    name: 'Sarah Jenkins',
    position: 'Cinematography Weekly',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    text: "The use of depth of field and framing is exquisite. Every shot looks like a carefully constructed painting. Truly a visual feast for anyone who appreciates the art of the camera."
  }
];

let idx = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

updateTestimonial();

setInterval(updateTestimonial, 10000);