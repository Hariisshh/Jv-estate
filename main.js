/* ═══════════════════════════════════════════════════════════
   JV ESTATE — Main JavaScript
═══════════════════════════════════════════════════════════ */

// ── NAVBAR SCROLL ────────────────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── HAMBURGER MENU ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ── SCROLL TO TOP ────────────────────────────────────────────
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── TOAST NOTIFICATION ───────────────────────────────────────
function showToast(message, icon = '✓') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>${icon}</span> ${message}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ── SAMPLE PROPERTY DATA ─────────────────────────────────────
const properties = [
  {
    id: 1,
    title: "Green Valley Premium Plot",
    type: "Plot",
    location: "Sarjapur Road, Bangalore",
    area: "2400 sqft",
    facing: "East",
    road: "30ft Road",
    price: "₹42 Lakhs",
    badge: "HOT",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80",
    desc: "A premium east-facing plot in a gated layout with BBMP approval, BDA approved plan, ready for immediate construction. Well-developed infrastructure with tar roads, drainage, and streetlights.",
    tags: ["BBMP Approved", "Gated Layout", "Immediate Construction"]
  },
  {
    id: 2,
    title: "Prestige Commercial Site",
    type: "Site",
    location: "Mysore Road, Bangalore",
    area: "5000 sqft",
    facing: "North-East",
    road: "60ft Main Road",
    price: "₹1.8 Crores",
    badge: "NEW",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    desc: "High-footfall commercial site on Mysore Road with excellent visibility. Suitable for showroom, warehouse, or mixed-use development. Near metro station.",
    tags: ["Corner Site", "Metro Nearby", "High Visibility"]
  },
  {
    id: 3,
    title: "Harmony Residential Layout",
    type: "Plot",
    location: "Anekal, Bangalore",
    area: "1800 sqft",
    facing: "West",
    road: "20ft Road",
    price: "₹18 Lakhs",
    badge: "",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80",
    desc: "Affordable residential plot in a fast-growing area. Surrounded by schools, hospitals, and tech parks. Clear title, bank loan eligible.",
    tags: ["Bank Loan Eligible", "Clear Title", "Growing Area"]
  },
  {
    id: 4,
    title: "Lakeside Luxury Villa Site",
    type: "Site",
    location: "Kanakapura Road, Bangalore",
    area: "8400 sqft",
    facing: "North",
    road: "40ft Road",
    price: "₹3.2 Crores",
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
    desc: "Breathtaking lakeside site with clear water frontage. Ideal for luxury villa or boutique resort. Surrounded by natural greenery and fresh air.",
    tags: ["Lake Frontage", "Luxury Zone", "Resort Potential"]
  },
  {
    id: 5,
    title: "Metro Tower Commercial Building",
    type: "Building",
    location: "Whitefield, Bangalore",
    area: "12,000 sqft",
    facing: "East",
    road: "80ft Main Road",
    price: "₹8.5 Crores",
    badge: "HOT",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    desc: "G+4 commercial building with lift, parking, fire NOC, OC received. Fully tenanted with reputed MNC tenants. Excellent rental yield investment.",
    tags: ["Fully Tenanted", "OC Received", "High Rental Yield"]
  },
  {
    id: 6,
    title: "Sunrise Industrial Plot",
    type: "Plot",
    location: "Peenya Industrial Area, Bangalore",
    area: "10,000 sqft",
    facing: "South-East",
    road: "60ft Road",
    price: "₹2.1 Crores",
    badge: "NEW",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    desc: "KIADB approved industrial plot in established industrial area. All utilities available. Excellent connectivity to NH4 and airport.",
    tags: ["KIADB Approved", "NH4 Connectivity", "Utilities Available"]
  }
];

// ── RENDER PROPERTY CARD ─────────────────────────────────────
function renderCard(prop, featured = false) {
  return `
    <div class="listing-card" data-type="${prop.type.toLowerCase()}">
      <div class="card-img">
        <img src="${prop.image}" alt="${prop.title}" loading="lazy"/>
        ${prop.badge ? `<span class="card-badge ${prop.badgeType || ''}">${prop.badge}</span>` : ''}
        <button class="card-wishlist" onclick="toggleWishlist(this)" title="Save property">♡</button>
      </div>
      <div class="card-body">
        <p class="card-type">${prop.type}</p>
        <h3 class="card-title">${prop.title}</h3>
        <p class="card-location"><i class="fas fa-location-dot"></i> ${prop.location}</p>
        <div class="card-details">
          <div class="card-detail">
            <span>Area</span><span>${prop.area}</span>
          </div>
          <div class="card-detail">
            <span>Facing</span><span>${prop.facing}</span>
          </div>
          <div class="card-detail">
            <span>Road</span><span>${prop.road}</span>
          </div>
        </div>
        <div class="card-footer">
          <div class="card-price">
            ${prop.price}
            <span>Price</span>
          </div>
          <a href="property.html?id=${prop.id}" class="card-cta">View Details</a>
        </div>
      </div>
    </div>
  `;
}

// ── FEATURED GRID (index.html) ───────────────────────────────
const featuredGrid = document.getElementById('featuredGrid');
if (featuredGrid) {
  const featured = properties.slice(0, 3);
  featuredGrid.innerHTML = featured.map(p => renderCard(p, true)).join('');
}

// ── FULL LISTINGS GRID (listings.html) ──────────────────────
const listingsGrid = document.getElementById('listingsGrid');
const filterChips  = document.querySelectorAll('.filter-chip');
const listingCount = document.getElementById('listingCount');

function renderListings(type = 'all') {
  if (!listingsGrid) return;
  const filtered = type === 'all'
    ? properties
    : properties.filter(p => p.type.toLowerCase() === type.toLowerCase());

  if (listingCount) listingCount.textContent = `${filtered.length} Properties Found`;
  listingsGrid.innerHTML = filtered.length
    ? filtered.map(p => renderCard(p)).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--text-light)">
         <i class="fas fa-search" style="font-size:3rem;opacity:0.3;margin-bottom:1rem;display:block;"></i>
         No properties found for this filter.
       </div>`;
}

if (listingsGrid) {
  // Check URL param
  const urlType = new URLSearchParams(window.location.search).get('type') || 'all';
  renderListings(urlType);

  // Set active filter
  filterChips.forEach(chip => {
    if (chip.dataset.filter === urlType) chip.classList.add('active');
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderListings(chip.dataset.filter);
    });
  });
}

// ── WISHLIST TOGGLE ──────────────────────────────────────────
function toggleWishlist(btn) {
  const isSaved = btn.textContent === '♥';
  btn.textContent = isSaved ? '♡' : '♥';
  btn.style.color = isSaved ? '' : '#e74c3c';
  showToast(isSaved ? 'Removed from saved properties.' : 'Property saved! 🏡');
}

// ── PROPERTY DETAIL PAGE ─────────────────────────────────────
const propertyDetail = document.getElementById('propertyDetail');
if (propertyDetail) {
  const id = parseInt(new URLSearchParams(window.location.search).get('id'));
  const prop = properties.find(p => p.id === id) || properties[0];

  document.getElementById('detailTitle').textContent    = prop.title;
  document.getElementById('detailType').textContent     = prop.type;
  document.getElementById('detailLocation').textContent = prop.location;
  document.getElementById('detailArea').textContent     = prop.area;
  document.getElementById('detailFacing').textContent   = prop.facing;
  document.getElementById('detailRoad').textContent     = prop.road;
  document.getElementById('detailPrice').textContent    = prop.price;
  document.getElementById('detailDesc').textContent     = prop.desc;
  document.getElementById('detailImg').src              = prop.image;
  document.title = `${prop.title} — JV Estate`;

  // Breadcrumb
  const crumb = document.getElementById('propBreadcrumb');
  if (crumb) crumb.textContent = prop.title;

  // Tags
  const tagsEl = document.getElementById('detailTags');
  if (tagsEl) tagsEl.innerHTML = prop.tags.map(t =>
    `<span style="background:var(--cream);color:var(--green);padding:0.3rem 0.9rem;border-radius:50px;font-size:0.8rem;font-weight:600;">${t}</span>`
  ).join('');
}

// ── REGISTRATION FORM ────────────────────────────────────────
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.submit-btn');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const data = {
      name:     document.getElementById('regName').value,
      email:    document.getElementById('regEmail').value,
      phone:    document.getElementById('regPhone').value,
      city:     document.getElementById('regCity').value,
      interest: document.getElementById('regInterest').value,
      budget:   document.getElementById('regBudget').value,
      message:  document.getElementById('regMessage').value
    };

    // EmailJS Integration
    // Replace the values below with your EmailJS Service ID, Template ID, and Public Key
    // Sign up free at https://www.emailjs.com
    emailjs.send(
      'YOUR_SERVICE_ID',    // ← Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',   // ← Replace with your EmailJS Template ID
      {
        to_email:    'jvestates.ss@gmail.com',
        from_name:   data.name,
        from_email:  data.email,
        phone:       data.phone,
        city:        data.city,
        interest:    data.interest,
        budget:      data.budget,
        message:     data.message || 'No message provided.',
        reply_to:    data.email
      }
    ).then(() => {
      document.getElementById('successMsg').style.display = 'block';
      registerForm.reset();
      btn.textContent = 'Registration Sent!';
      showToast('Registration successful! We will contact you soon. 🎉');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }).catch(err => {
      console.error('EmailJS error:', err);
      btn.textContent = 'Register Now';
      btn.disabled = false;
      showToast('⚠ Could not send. Please email us directly at jvestates.ss@gmail.com');
    });
  });
}

// ── CONTACT FORM ─────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.submit-btn');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const data = {
      name:    document.getElementById('cName').value,
      email:   document.getElementById('cEmail').value,
      phone:   document.getElementById('cPhone').value,
      subject: document.getElementById('cSubject').value,
      message: document.getElementById('cMessage').value
    };

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email:   'jvestates.ss@gmail.com',
        from_name:  data.name,
        from_email: data.email,
        phone:      data.phone,
        subject:    data.subject,
        message:    data.message,
        reply_to:   data.email
      }
    ).then(() => {
      showToast('Message sent! We\'ll get back to you soon. ✓');
      contactForm.reset();
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }).catch(() => {
      showToast('⚠ Failed to send. Try emailing us at jvestates.ss@gmail.com');
      btn.textContent = 'Send Message';
      btn.disabled = false;
    });
  });
}

// ── SCROLL ANIMATIONS ────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.listing-card, .why-card, .cat-card, .testimonial-card, .team-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ── ACTIVE NAV LINK ──────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
