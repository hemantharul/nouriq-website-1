/* ==========================================================================
   NOURIQ — script.js
   ========================================================================== */
(function(){
  "use strict";

  /* ---------------- PRODUCT DATA (matched 1:1 to uploaded images) ---------------- */
  const PRODUCTS = [
    { id:"activated_fibre", name:"Activated Fibre", category:"Digestive Health",
      img:"assets/images/products/activated_fibre.png",
      benefits:["Supports digestive health","Helps you feel full longer","Supports weight management","Supports healthy blood sugar levels"],
      ingredients:"Oat Fiber, Pea Fiber, Citrus Fiber, Soluble &amp; Insoluble Fiber Blend" },
    { id:"active_fiber_complex", name:"Active Fiber Complex", category:"Digestive Health",
      img:"assets/images/products/active_fiber_complex.png",
      benefits:["Supports digestive health","Helps you feel full longer","Supports gut health","Increases daily fiber intake"],
      ingredients:"Citrus Fiber, Soy Fiber, Cellulose Powder, Maltodextrin, Inulin" },
    { id:"aloe_plus", name:"Aloe Plus", category:"Digestive Health",
      img:"assets/images/products/aloe_plus.png",
      benefits:["Soothes the stomach","Improves nutrient absorption","Supports intestinal &amp; gut health","May relieve occasional indigestion"],
      ingredients:"Aloe Vera" },
    { id:"aloe_concentrate", name:"Aloe Concentrate", category:"Digestive Health",
      img:"assets/images/products/aloe_concentrate.png",
      benefits:["Supports healthy digestion","Improves nutrient absorption","Supports gut health","Low-calorie refreshing drink"],
      ingredients:"Purified Aloe Vera Concentrate, Citric Acid, Sodium Citrate, Chamomile Extract" },
    { id:"triphala", name:"Triphala", category:"Digestive Health",
      img:"assets/images/products/triphala.png",
      benefits:["Supports digestion &amp; gut wellness","Promotes regular bowel movements","Natural detoxification","Rich in antioxidants"],
      ingredients:"Amla, Haritaki, Bibhitaki" },
    { id:"simply_probiotic", name:"Simply Probiotic", category:"Digestive Health",
      img:"assets/images/products/simply_probiotic.png",
      benefits:["Supports healthy digestion","Maintains good gut bacteria balance","Reduces bloating &amp; discomfort","Clinically studied probiotic strains"],
      ingredients:"Bacillus Coagulans Probiotic Culture" },
    { id:"calcium", name:"Calcium", category:"Bone Health",
      img:"assets/images/products/calcium.png",
      benefits:["Maintains strong &amp; healthy bones","Supports healthy teeth","Improves calcium absorption (Vit D)","Supports bone density"],
      ingredients:"Calcium, Vitamin D, Magnesium, Zinc, Copper, Manganese" },
    { id:"joint_support", name:"Joint Support", category:"Bone Health",
      img:"assets/images/products/joint_support.png",
      benefits:["Maintains healthy joint function","Supports comfort &amp; flexibility","Supports cartilage &amp; connective tissue","May reduce daily stiffness"],
      ingredients:"Glucosamine, Scutellaria Root Extract, Manganese &amp; Copper" },
    { id:"sleep_enhance", name:"Sleep Enhance", category:"Sleep &amp; Calm",
      img:"assets/images/products/sleep_enhance.png",
      benefits:["Improves sleep quality","Supports calm &amp; relaxation","Helps you wake up refreshed","Caffeine free &amp; vegan"],
      ingredients:"Saffron Extract (Affron®), Vitamin B6, Riboflavin (B2)" },
    { id:"afresh", name:"Afresh Energy Drink Mix", category:"Energy &amp; Refreshment",
      img:"assets/images/products/afresh.png",
      benefits:["Feel energized &amp; alert","Just 4 calories","Enjoy hot or cold","Refreshing at any time of day"],
      ingredients:"Orange Pekoe Extract, Green Tea Extract, Natural Caffeine Powder",
      flavours:["Lemon","Ginger","Tulsi","Peach","Elachi","Cinnamon","Kashmiri Kawa"] },
    { id:"immune_health", name:"Immune Health", category:"Immune Health",
      img:"assets/images/products/immune_health.png",
      benefits:["Supports natural immune function","Helps manage common cold symptoms","Rich in antioxidant ingredients","Ayurvedic-inspired formulation"],
      ingredients:"Tulsi (Holy Basil), Kalmegh, Katuki Herbs" },
    { id:"womans_choice", name:"Woman's Choice", category:"Women's Health",
      img:"assets/images/products/womans_choice.png",
      benefits:["Supports hormonal balance","Comfort during monthly fluctuations","Supports general wellbeing","Plant-derived ingredients"],
      ingredients:"Soy Isoflavones, Chasteberry Extract, Dicalcium Phosphate" },
    { id:"ocular_defense", name:"Ocular Defense", category:"Eye Health",
      img:"assets/images/products/ocular_defense.png",
      benefits:["Supports healthy eyesight &amp; vision","Helps maintain macular health","Protects from blue light exposure","Rich in eye-supportive antioxidants"],
      ingredients:"Lutein, Zeaxanthin, Vitamin A/C/E, Bilberry &amp; Grape Seed Extract" },
    { id:"h24_hydrate", name:"H24 Hydrate", category:"Sports Nutrition",
      img:"assets/images/products/h24_hydrate.png",
      benefits:["Maintains proper hydration","Replenishes electrolytes lost in sweat","Supports endurance during workouts","Low-calorie hydration support"],
      ingredients:"Electrolytes (Ca, Na, Mg, K, P), Vitamins B1 B2 B5 B12 &amp; C" },
    { id:"rebuild", name:"Rebuild Strength", category:"Sports Nutrition",
      img:"assets/images/products/rebuild.png",
      benefits:["Rebuilds tired muscles after workouts","~24-25g protein per serving","BCAAs &amp; L-Glutamine for recovery","Reduces post-workout soreness"],
      ingredients:"Whey Protein, Casein Protein, BCAAs, L-Glutamine, Iron" },
    { id:"liftoff", name:"Liftoff", category:"Sports Nutrition",
      img:"assets/images/products/liftoff.png",
      benefits:["Increases energy &amp; alertness","Supports mental focus","Low-calorie energy alternative","Convenient for travel &amp; workouts"],
      ingredients:"Caffeine, Taurine, Guarana Extract, Vitamin C, B-Vitamins" },
    { id:"skin_booster", name:"Skin Booster", category:"Skin Care",
      img:"assets/images/products/skin_booster.png",
      benefits:["Improves skin elasticity","Supports glowing skin","Reduces fine lines &amp; wrinkles","Supports collagen formation"],
      ingredients:"Hydrolyzed Collagen Peptides, Vitamin C/E/A, Biotin, Zinc" },
    { id:"cleanser", name:"Facial Cleanser", category:"Skin Care",
      img:"assets/images/products/cleanser.png",
      benefits:["Removes dirt, oil &amp; impurities","Gentle exfoliation with jojoba beads","Leaves skin fresh &amp; smooth","Suitable for daily skincare routine"],
      ingredients:"Vitamin B3/C/E, Aloe Vera, Orange &amp; Grapefruit Extracts" },
    { id:"tonner", name:"Facial Toner", category:"Skin Care",
      img:"assets/images/products/tonner.png",
      benefits:["Removes leftover dirt &amp; oil","Refreshes tired-looking skin","Preps skin for serum &amp; moisturizer","Suitable for all skin types"],
      ingredients:"Aloe Vera, Potassium Alum, Mandarin Citrus Extracts" },
    { id:"moisturizer", name:"Moisturizer", category:"Skin Care",
      img:"assets/images/products/moisturizer.png",
      benefits:["Deep hydration &amp; moisture","Improves skin glow &amp; radiance","Lightweight, fast-absorbing formula","Softer skin in 7 days (clinically tested)"],
      ingredients:"Macadamia Seed Oil, Aloe Vera, Olive Fruit Oil, Vitamin B3/C/E" },
    { id:"serum", name:"Facial Serum", category:"Skin Care",
      img:"assets/images/products/serum.png",
      benefits:["Reduces fine lines &amp; wrinkles","Improves elasticity &amp; firmness","Brightens &amp; evens skin tone","Deep hydration for daily glow"],
      ingredients:"Peptides, Aloe Vera, Chestnut Seed Extract, Vitamin B3/C/E" },
    { id:"cell_u_loss", name:"Cell-U-Loss", category:"Weight Management",
      img:"assets/images/products/cell_u_loss.png",
      benefits:["Supports healthy fluid balance","Supports weight management","Helps reduce bloating","Provides electrolyte minerals"],
      ingredients:"Corn Silk Extract, Dandelion, Asparagus Root, Parsley" },
    { id:"multivitamin", name:"Multivitamin", category:"Daily Wellness",
      img:"assets/images/products/multivitamin.png",
      benefits:["Supports daily nutrition","Helps maintain energy levels","Supports immune &amp; bone health","Convenient daily supplement"],
      ingredients:"Vitamin A/C/D/E, B-Complex, Calcium, Magnesium, Zinc, Iron" },
    { id:"herbal_control", name:"Herbal Control", category:"Weight Management",
      img:"assets/images/products/herbal_control.png",
      benefits:["Supports metabolism","Provides an energy boost","Improves alertness &amp; focus","Antioxidants from green, black &amp; oolong tea"],
      ingredients:"Green Tea, Black Tea &amp; Oolong Tea Extracts, Ginger Extract, Caffeine" },
    { id:"herbalifeline", name:"Herbalifeline", category:"Heart Health",
      img:"assets/images/products/herbalifeline.png",
      benefits:["Omega-3 fatty acids (EPA &amp; DHA)","Supports a healthy cardiovascular system","Maintains healthy triglyceride levels"],
      ingredients:"Highly Purified Marine Lipids (Fish Oil)" },
    { id:"beta_heart", name:"Beta Heart", category:"Heart Health",
      img:"assets/images/products/beta_heart.png",
      benefits:["Contains 3g Oat Beta-Glucan per serving","Helps maintain healthy cholesterol levels","No added sugar or artificial sweeteners","Convenient single-serve sachet"],
      ingredients:"Oat Beta-Glucan Powder" },
    { id:"niteworks", name:"Niteworks", category:"Heart Health",
      img:"assets/images/products/niteworks.png",
      benefits:["L-Arginine supports nitric oxide production","Supports cardiovascular &amp; circulatory health","Contains Vitamin C, E &amp; Folic Acid"],
      ingredients:"L-Arginine, Vitamin C, Vitamin E, Folic Acid" },
    { id:"male_factor", name:"Male Factor+", category:"Men's Health",
      img:"assets/images/products/male_factor.png",
      benefits:["Supports male sexual health &amp; wellbeing","Supports libido &amp; vitality","Supports healthy blood circulation","Designed for adult men 25+"],
      ingredients:"Fenugreek Seed Extract, Pine Bark Extract, L-Citrulline" },
    { id:"brain_health", name:"Brain Health", category:"Brain Health",
      img:"assets/images/products/brain_health.png",
      benefits:["Supports memory recall &amp; learning","Improves focus &amp; concentration","Supports mental alertness","Ayurvedic Brahmi extract"],
      ingredients:"Brahmi (Bacopa Monnieri) Extract" },
    { id:"protein", name:"Personalized Protein Powder", category:"Protein &amp; Fitness",
      img:"assets/images/products/protein.png",
      benefits:["Supports weight management","Helps build &amp; maintain muscle","Provides all 9 essential amino acids","Convenient meal replacement"],
      ingredients:"Soy Protein Isolate, Whey Protein Concentrate" },
  ];

  const WA_NUMBER = "919789067957";
  function waLink(productName){
    const msg = encodeURIComponent(`Hello Nouriq, I'd like to know more about ${productName}.`);
    return `https://wa.me/${WA_NUMBER}?text=${msg}`;
  }

  /* ---------------- RENDER PRODUCTS + FILTERS ---------------- */
  function renderProducts(){
    const grid = document.getElementById("product-grid");
    const filterBar = document.getElementById("filter-bar");
    if(!grid || !filterBar) return;

    const categories = ["All", ...Array.from(new Set(PRODUCTS.map(p=>p.category)))];
    filterBar.innerHTML = categories.map((c,i)=>
      `<button class="filter-pill${i===0?" active":""}" data-cat="${c}">${c}</button>`
    ).join("");

    function draw(cat){
      grid.innerHTML = PRODUCTS.filter(p => cat==="All" || p.category===cat).map(p => `
        <div class="product-card" data-cat="${p.category}">
          <div class="pc-media">
            <span class="pc-tag">${p.category}</span>
            <img src="${p.img}" alt="${p.name}" loading="lazy">
          </div>
          <div class="pc-body">
            <h3>${p.name}</h3>
            <ul class="pc-benefits">
              ${p.benefits.map(b=>`<li>${b}</li>`).join("")}
            </ul>
            ${p.flavours ? `<div class="pc-flavours">${p.flavours.map(f=>`<span>${f}</span>`).join("")}</div>` : ""}
            <p class="pc-ingredients"><b>Ingredients:</b> ${p.ingredients}</p>
            <div class="pc-footer">
              <a class="btn btn-primary" data-ripple href="${waLink(p.name)}" target="_blank" rel="noopener">Enquire</a>
            </div>
          </div>
        </div>
      `).join("");
      requestAnimationFrame(()=>{
        document.querySelectorAll(".product-card").forEach((el,i)=>{
          setTimeout(()=>el.classList.add("reveal"), i*40);
        });
      });
    }
    draw("All");

    filterBar.addEventListener("click", e=>{
      const btn = e.target.closest(".filter-pill");
      if(!btn) return;
      filterBar.querySelectorAll(".filter-pill").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      draw(btn.dataset.cat);
    });
  }

  /* ---------------- WHY CHOOSE NOURIQ ---------------- */
  const WHY = [
    { t:"Premium Nutrition", d:"Formulated for real, daily results.", icon:"M12 2 L14 8 L20 9 L15.5 13 L17 20 L12 16.5 L7 20 L8.5 13 L4 9 L10 8 Z" },
    { t:"Weight Management", d:"Sustainable plans, not fad diets.", icon:"M12 3v18M5 8h14M6 16h12" },
    { t:"Healthy Lifestyle", d:"Habits that fit your real life.", icon:"M12 21c-4-3-8-6.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-4 8-8 11z" },
    { t:"Expert Wellness Coach", d:"Guided support at every step.", icon:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c1-4 4-6 8-6s7 2 8 6" },
    { t:"Scientific Nutrition", d:"Evidence-based product design.", icon:"M9 3h6M10 3v6l-6 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-9V3" },
    { t:"Quality Products", d:"Genuine, trusted formulations.", icon:"M5 13l4 4L19 7" },
    { t:"Trusted Guidance", d:"Honest advice, no gimmicks.", icon:"M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" },
    { t:"Customer Satisfaction", d:"Real people, real transformations.", icon:"M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21z" },
  ];
  function renderWhy(){
    const el = document.getElementById("why-grid");
    if(!el) return;
    el.innerHTML = WHY.map(w=>`
      <div class="why-card">
        <div class="why-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06231A" stroke-width="1.8"><path d="${w.icon}"/></svg></div>
        <h4>${w.t}</h4>
        <p>${w.d}</p>
      </div>
    `).join("");
  }

  /* ---------------- PROCESS TIMELINE ---------------- */
  const STEPS = [
    { t:"Consultation", d:"A friendly conversation about your goals, routine and health history." },
    { t:"Health Assessment", d:"We understand your current lifestyle, habits and nutritional gaps." },
    { t:"Nutrition Plan", d:"A personalized plan built around your body and your goals." },
    { t:"Daily Support", d:"Ongoing coaching, check-ins and adjustments as you progress." },
    { t:"Healthy Lifestyle", d:"Sustainable habits that last well beyond the program." },
  ];
  function renderTimeline(){
    const el = document.getElementById("timeline");
    if(!el) return;
    el.innerHTML = STEPS.map((s,i)=>`
      <div class="tl-step">
        <div class="tl-num">${String(i+1).padStart(2,"0")}</div>
        <div class="tl-content"><h4>${s.t}</h4><p>${s.d}</p></div>
      </div>
    `).join("");
  }

  /* ---------------- TESTIMONIALS ---------------- */
  const TESTIMONIALS = [
    { n:"Amazing nutrition guidance.", who:"Priya S.", role:"Client since 2025" },
    { n:"Excellent coaching.", who:"Arun K.", role:"Client since 2024" },
    { n:"Highly recommended.", who:"Meena R.", role:"Client since 2025" },
    { n:"Very professional service.", who:"Vignesh T.", role:"Client since 2026" },
    { n:"Great support.", who:"Divya M.", role:"Client since 2025" },
    { n:"Excellent experience.", who:"Karthik V.", role:"Client since 2024" },
  ];
  function renderTestimonials(){
    const el = document.getElementById("test-grid");
    if(!el) return;
    el.innerHTML = TESTIMONIALS.map(t=>`
      <div class="test-card">
        <div class="stars">★★★★★</div>
        <p>"${t.n}"</p>
        <div class="test-who">
          <div class="test-avatar">${t.who.charAt(0)}</div>
          <div><b>${t.who}</b><span>${t.role}</span></div>
        </div>
      </div>
    `).join("");
  }

  /* ---------------- INTRO VIDEO ---------------- */
  function initIntro(){
    const screen = document.getElementById("intro-screen");
    const video = document.getElementById("intro-video");
    const skipBtn = document.getElementById("skip-intro");
    if(!screen || !video) return;

    function endIntro(){
      screen.classList.add("fade-out");
      document.body.classList.remove("locked");
      setTimeout(()=> screen.remove(), 1000);
    }

    video.addEventListener("ended", endIntro);
    skipBtn.addEventListener("click", endIntro);

    // Fallback in case autoplay is blocked or video fails to load
    video.addEventListener("error", endIntro);
    setTimeout(()=>{
      if(video.paused) endIntro();
    }, 800);
  }

  /* ---------------- NAVBAR + MOBILE MENU ---------------- */
  function initNav(){
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", ()=>{
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    });

    const burger = document.getElementById("burger");
    const menu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("menu-overlay");
    function closeMenu(){ menu.classList.remove("open"); overlay.classList.remove("open"); }
    burger.addEventListener("click", ()=>{
      menu.classList.toggle("open");
      overlay.classList.toggle("open");
    });
    overlay.addEventListener("click", closeMenu);
    menu.querySelectorAll("a").forEach(a=>a.addEventListener("click", closeMenu));
  }

  /* ---------------- SMOOTH SCROLL ---------------- */
  function initSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(link=>{
      link.addEventListener("click", e=>{
        const id = link.getAttribute("href");
        if(id.length < 2) return;
        const target = document.querySelector(id);
        if(target){
          e.preventDefault();
          const y = target.getBoundingClientRect().top + window.scrollY - 84;
          window.scrollTo({ top:y, behavior:"smooth" });
        }
      });
    });
  }

  /* ---------------- ANIMATED COUNTERS ---------------- */
  function initCounters(){
    const counters = document.querySelectorAll(".counter");
    if(!counters.length) return;
    const seen = new WeakSet();
    const io = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting && !seen.has(entry.target)){
          seen.add(entry.target);
          const el = entry.target;
          const target = parseInt(el.dataset.target,10);
          const dur = 1400;
          const start = performance.now();
          function tick(now){
            const p = Math.min((now-start)/dur, 1);
            const eased = 1 - Math.pow(1-p, 3);
            el.textContent = Math.floor(eased*target);
            if(p < 1) requestAnimationFrame(tick);
            else el.textContent = target;
          }
          requestAnimationFrame(tick);
        }
      });
    }, { threshold:0.4 });
    counters.forEach(c=>io.observe(c));
  }

  /* ---------------- SCROLL REVEAL ---------------- */
  function initReveal(){
    const io = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("reveal");
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.15 });
    document.querySelectorAll(".why-card, .test-card, .tl-step, .product-card").forEach(el=>io.observe(el));
  }

  /* ---------------- RIPPLE BUTTONS ---------------- */
  function initRipple(){
    document.addEventListener("click", e=>{
      const btn = e.target.closest("[data-ripple], .btn");
      if(!btn) return;
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size+"px";
      ripple.style.left = (e.clientX - rect.left - size/2)+"px";
      ripple.style.top = (e.clientY - rect.top - size/2)+"px";
      btn.appendChild(ripple);
      setTimeout(()=>ripple.remove(), 650);
    });
  }

  /* ---------------- INIT ---------------- */
  document.addEventListener("DOMContentLoaded", ()=>{
    initIntro();
    initNav();
    initSmoothScroll();
    renderProducts();
    renderWhy();
    renderTimeline();
    renderTestimonials();
    initCounters();
    initReveal();
    initRipple();
    // Re-run reveal observation after dynamic content renders
    setTimeout(initReveal, 200);
  });
})();
