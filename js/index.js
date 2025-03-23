//Custom JavaScript Code

// Redirect to tracking page function
function redirectToTrackingPage() {
  const trackingNumber = document.getElementById("track-parcel-input").value.trim();
  
  window.location.href = `track-parcel.html?tracking=${trackingNumber}`;
}

/**
 * parcel tracking function
 */
// Load JSON data 
async function fetchData() {
  try {
  const response = await fetch('./data/parcel-data.json');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
  } catch (error) {
    console.error('Error fetching parcel data:', error);
    return null;
  }
}
// Function to find and display parcel details
async function searchParcel() {
  const trackingNumber = document.getElementById('inputTrackingNumber').value;
  const data = await fetchData();
  const parcel = data[trackingNumber];
  
  if (!parcel) {
    document.getElementById('trackingInfo').classList.add('d-none')
    document.getElementById('errorMessage').classList.remove('d-none')
    document.getElementById('errorMessage').innerHTML = '<span style="color: white;">Tracking number not found!</span>';
    document.getElementById('inputTrackingNumber').value = ''
  } else {
    document.getElementById('errorMessage').classList.add('d-none')
    document.getElementById('trackingInfo').classList.remove('d-none')
      document.getElementById('trackingNumber').innerHTML = trackingNumber
      document.getElementById('collectionAddress').innerHTML = parcel.collection_address
      document.getElementById('collectionPhone').innerHTML = parcel.collection_phone
      document.getElementById('deliveryAddress').innerHTML = parcel.delivery_address
      document.getElementById('deliveryPhone').innerHTML = parcel.delivery_phone
      document.getElementById('parcelLocation').innerHTML = parcel.parcel_location
      document.getElementById('inputTrackingNumber').value = ''
  }
}


// JS of SwiperJs
const swiper = new Swiper('.testimonial-container', {
    // Optional parameters
    loop: true,
    freeMode: true,
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: {
    delay: 5000,
  },
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1200:{
            slidesPerView: 4
        }
    },
  
  });



  // JS of lenisJs

  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// AOS Animation JS
AOS.init();

