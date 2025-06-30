

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter(() => {
    highlightActiveLink();
    initHeaderBehavior();
    initMobileNavToggle();
    document.querySelector(".year").textContent = new Date().getFullYear();
  });
});

// Load Header and Footer
function loadHeaderFooter(callback) {
  document.getElementById("header").innerHTML = `<div class="miniHeader d-none d-sm-block">
  <div class="container">        
<div class="row">
<div class="col-auto topheadLinks">
    <a target="_blank" href="tel:yourNumber"><i class="fa-solid fa-phone" aria-hidden="true"></i>+91 63547 10794</a>
    <a target="_blank" href="mailto:Yor@Email.com"><i class="fa-solid fa-envelope" aria-hidden="true"></i> Yor@Email.com</a>
  </div>
  <div class="col-auto topheadSocial">
    <a target="_blank" href="https://www.facebook.com/"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
    <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram" aria-hidden="true"></i></a>
    <a target="_blank" href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
    </div>
</div>
            </div>
            </div>
        <div id="main-header">
            <nav class="mynavbar bg-light">
              <div class="container header">
                <a class="brandLogo" href="index.html">
                  <img src="image/TaxiLogo.webp" alt="Fast Taxi">
                </a>
                <button class="navToggle">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul class="navMenu ms-auto mb-2 mb-lg-0">
                  <li class="nav-close">
                    <button class="btn-nav-close"><span class="close-btn">+</span></button>
                  </li>
                  <li class="navLi"><a class="navLink" href="index.html">Home</a></li>
                  <li class="navLi"><a href="about.html" class="navLink">About</a></li>
                  <li class="navLi"><a href="#" class="navLink">Services</a></li>
                  <li class="navLi"><a href="#" class="navLink">Taxies</a></li>
                  <li class="navLi"><a href="contactUs.html" class="navLink">Contact</a></li>
                </ul>
    
              </div>
            </nav>
       
        </div>
`; // Keep your current header HTML here
  document.getElementById("footer").innerHTML = ` <div class="container">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-auto col-sm-6 mb-4 mb-md-0 FooterAbout">
              <a class="footer-brand" href="index.html">
                <img loading="lazy" src="image/FooterTaxiLogo.webp" alt="Fast Taxi">
              </a>
              <p>
                We provide reliable and affordable taxi booking services tailored for everyday travel, airport pickups, and city rides. With a focus on safety, punctuality, and customer satisfaction, we’re here to make every journey smooth.
              </p>
             
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
              <h5 class="fourthH">Quick Links</h5>
              <ul>
                <li>
                  <a class="footerLinks" href="index.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Home </a>
                </li>
                <li>
                  <a class="footerLinks" href="about.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>About Us</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>link</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>link</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>link</a>
                </li>
                <li>
                  <a class="footerLinks" href="contactUs.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH ">Explore Link</h5>
              <ul>   
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
              </ul>
            </div>
            <div class="col-md-6 col-lg-auto mb-4 mb-md-0">
              <h5 class="fourthH ">Contact Us</h5>
              <ul class="contact-info">
                <li>
                  <a class="locationLink footerLinks" target="_blank" href="https://maps.app.goo.gl/EMtQmUV8unVQYXWE8">
                    <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                      <pre class="mb-0">
TF-A1-22, Akshar Pavilion Mall,
Near Priya Cinema,Vasna Bhyali
Main Road, Vadodara,391410</pre>
                  </a>
                </li>
                <li>
                  <a href="tel:Number" class="footerLinks">
                    <i class="fa-solid fa-phone"></i>+91 63547 10794</a>
                </li>
                <li>
                  <a class="emailAnchor footerLinks" href="mailto:youremail">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>youremail</a>
                </li>
              </ul>
              <div class="social-icons mt-3">
                <a target="_blank" class="facebook" href="https://www.linkedin.com/">
                  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a class="whatsapp set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=916354710794">
                  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          
            <!-- Contact Info -->
          </div>
        </div>
       
      </div>
      <div class="f-bottom effect">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <div class="inner">
                <div class="copyright text-center"> <span class="year"></span>  All Rights Reserved by Fast Taxi | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
                    <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> `; // Keep your current footer HTML here
  callback?.();
}

// Highlight current page in navbar
function highlightActiveLink() {
  const current = (window.location.pathname.split("/").pop() || "index.html").split("?")[0];
  document.querySelectorAll(".navLink").forEach(link => {
    const href = link.getAttribute("href")?.split("?")[0];
    if (!href || href === "#") return;
    if (href === current) {
      link.classList.add("active");
      link.closest(".dropdownList")?.closest(".navLi")?.querySelector(".navLink")?.classList.add("active");
    }
  });
}

// Sticky Header on Scroll
function initHeaderBehavior() {
  const header = document.getElementById("main-header");
  const belowContent = document.getElementById("headBelowContent");

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const stickyStart = header.offsetTop + header.offsetHeight + 5;
    const resetPoint = belowContent.offsetTop + belowContent.offsetHeight + 4;

    if (scrollTop > stickyStart) {
      header.classList.add("sticky-header", "visible");
      header.classList.remove("headerAnimate");
    } else if (scrollTop < resetPoint) {
      header.classList.remove("sticky-header", "visible");
      header.classList.add("headerAnimate");
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
}

// Mobile Nav Toggle and Submenu
function initMobileNavToggle() {
  const toggleBtn = document.querySelector(".navToggle");
  const navMenu = document.querySelector(".navMenu");
  const closeBtn = document.querySelector(".btn-nav-close");

  toggleBtn?.addEventListener("click", () => navMenu.classList.toggle("active"));
  closeBtn?.addEventListener("click", () => navMenu.classList.remove("active"));

  document.querySelectorAll(".toggleSub").forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      const submenu = toggle.closest(".navLi").querySelector(".dropdownList");

      // Close all others
      document.querySelectorAll(".dropdownList.open").forEach(menu => {
        if (menu !== submenu) menu.classList.remove("open");
      });

      submenu?.classList.toggle("open");
    });
  });
}


// WhatsApp URL Adjuster (Device-based Detection)
(function () {
  const mobileLink = "https://api.whatsapp.com/send?phone=916354710794";
  const desktopLink = "https://web.whatsapp.com/send?phone=916354710794";

  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function updateWhatsAppLink() {
    const isMobile = isMobileDevice();
    const targetLink = isMobile ? mobileLink : desktopLink;

    document.querySelectorAll(".set-url-target").forEach(el => {
      el.setAttribute("href", targetLink);
    });
  }

  window.addEventListener("resize", updateWhatsAppLink);
  window.addEventListener("load", updateWhatsAppLink);
})();


