const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let index = 0;
    const interval = 3000; 

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % totalSlides;
      slides[index].classList.add("active");
    }, interval);
// --------------------mobile menue----------
// const menuToggle = document.querySelector('.burger');
// const mobileMenu = document.getElementById('menu');

// menuToggle.addEventListener("click", () => {
//   mobileMenu.classList.toggle('-translate-x-full');
//   mobileMenu.classList.toggle('-translate-x-0');
// });


    // -------NEW ARIVAL-------R-014---

    // ------Start ratiing-----
    
  
       const head=document.querySelectorAll("#R014 i");
       const rate = 5;
       head.forEach((star, index)=>{
        star.style.color = index < rate ? "yellow" : "gray";
       });
    // ---------Change color---------
    function changeImage(color) {
      const img = document.getElementById('R-014-img');
      img.src = `R-014-${color}.webp`;
    }
    window.onload = () => changeImage('gold');

    // --------------------buy product changle color r-014----------
    function buycolor(color){
      const img=document.getElementById('buy');
      const colortext=document.getElementById('colorname');
      img.src =`R-014-${color}.webp`;
      colortext.textContent = `Color: ${color}`;
      window.onload = () => buycolor('Black');

    }

     // -------NEW ARIVAL-------R-013---

    // ------Start ratiing-----
    const R013watch = document.querySelectorAll("#R013 i");
    const R013rate = 5;
    
    R013watch.forEach((star, index) => {
      star.style.color = index < R013rate ? "yellow" : "gray";
    });
// -----------------------------------R013luxe-------------------------
const R013 = document.querySelectorAll("#R013luxe i");
 const Rluxe = 5 ;
  R013.forEach((star,index) =>{
    star.style.color= index < Rluxe ? "Yellow" : "gray";
  });
  
    
// ---------------R-7015------------------------
const earbuds = document.querySelectorAll("#R-7015 i");
    const rating = 5; 

    earbuds.forEach((star, index) => {
      star.style.color = index < rating ? "yellow" : "gray";
    });

    // ------------------------mist7055--------------------
    const mistR7055 = document.querySelectorAll("#Mist7055 i");
    const mistrating = 5; 

    mistR7055.forEach((star, index) => {
      star.style.color = index < mistrating ? "yellow" : "gray";
    });

    // ---------------------customer rating--------------------
    const customerrate = document.querySelectorAll("#customer i");
    const customerrating = 5; 

    customerrate.forEach((star, index) => {
      star.style.color = index < customerrating ? "yellow" : "gray";
    });
    

    // --------------------------link page------------------------
   
  // -------------------------------Add to cart product-------------------con


  
  const openCartBtn = document.getElementById("open-cart");

  
  const closeCartBtn = document.getElementById("cart-close");

  const cart = document.querySelector(".cart");

  // Show cart on click
  openCartBtn.addEventListener("click", () => {
    cart.classList.remove("translate-x-full");
    cart.classList.add("translate-x-0");
  });
  //  -----close cart----
  closeCartBtn.addEventListener("click",()=>{
    cart.classList.add("translate-x-full");
    cart.classList.remove("translate-x-0");
  });

  // -----quantity selection--------
  const qtyEl = document.querySelector(".quantity");
const addBtn = document.querySelector(".add");
const lessBtn = document.querySelector(".less");

const productTotalEl = document.querySelector(".product-total");
const estimatedTotalEl = document.querySelector(".estimated-total");

const priceText = document.querySelector(".cart-price").innerText;
// Extract 3856 from "RS:3856"
const unitPrice = parseInt(priceText.replace("RS:", "").trim());

function updateTotals(qty) {
  const total = qty * unitPrice;
  productTotalEl.innerText = "RS:" + total;
  estimatedTotalEl.innerText = "RS:" + total;
}

addBtn.addEventListener("click", () => {
  let qty = parseInt(qtyEl.innerText);
  qty++;
  qtyEl.innerText = qty;
  updateTotals(qty);
});

lessBtn.addEventListener("click", () => {
  let qty = parseInt(qtyEl.innerText);
  if (qty > 1) {
    qty--;
    qtyEl.innerText = qty;
    
  }
  updateTotals(qty);
});


  // -------------------------nnnnnnn---------------
 
  

  