/* ============================================
   DA LAT CINEMATIC EXPERIENCE — script.js
   ============================================ */

'use strict';

// ===========================
// DATA
// ===========================

const destinations = [
  {
    id: 1,
    name: 'Hồ Xuân Hương',
    tag: 'Hồ Nước • Lãng Mạn',
    emoji: '🏞️',
    bg: 'linear-gradient(135deg, #2a5a7a 0%, #3a7a9a 50%, #1a3a5a 100%)',
    desc: 'Hồ nước nhân tạo nằm giữa lòng thành phố, được bao quanh bởi những hàng thông xanh và vườn hoa rực rỡ. Lý tưởng cho những buổi sáng sớm dạo bộ.',
    weather: '🌤 Mát mẻ quanh năm',
    bestTime: 'Sáng sớm 5–8h',
    cost: '~50.000đ',
    duration: '1–2 giờ',
    nearby: 'Đồi Robin, Vườn hoa thành phố',
  },
  {
    id: 2,
    name: 'Thung Lũng Tình Yêu',
    tag: 'Thung Lũng • Cặp Đôi',
    emoji: '💕',
    bg: 'linear-gradient(135deg, #5a3a6a 0%, #8a5a9a 50%, #3a2a5a 100%)',
    desc: 'Thung lũng lãng mạn với những đồi hoa đầy màu sắc, hồ nước tĩnh lặng và không khí tình yêu bao phủ. Thiên đường cho các cặp đôi.',
    weather: '🌸 Hoa nở quanh năm',
    bestTime: 'Chiều 14–17h',
    cost: '~100.000đ',
    duration: '3–4 giờ',
    nearby: 'Đồi chè Cầu Đất, Vườn dâu',
  },
  {
    id: 3,
    name: 'Đồi Chè Cầu Đất',
    tag: 'Đồi Chè • Thiên Nhiên',
    emoji: '🌿',
    bg: 'linear-gradient(135deg, #2a4a2a 0%, #4a7a3a 50%, #1a3a1a 100%)',
    desc: 'Những đồi chè xanh mướt trải dài như tấm thảm khổng lồ dưới bầu trời xanh thẳm. Không khí trong lành, cảnh vật hùng vĩ tuyệt đẹp.',
    weather: '☁️ Sương mù ban sáng',
    bestTime: 'Sáng 6–9h',
    cost: '~80.000đ',
    duration: '2–3 giờ',
    nearby: 'Trang trại dâu, Nhà máy chè',
  },
  {
    id: 4,
    name: 'LangBiang',
    tag: 'Đỉnh Núi • Phiêu Lưu',
    emoji: '⛰️',
    bg: 'linear-gradient(135deg, #3a3a5a 0%, #5a5a8a 50%, #1a1a3a 100%)',
    desc: 'Đỉnh núi cao 2.167m với truyền thuyết tình yêu bất tử. Từ đỉnh núi, bạn có thể nhìn thấy toàn cảnh Đà Lạt trong biển mây trắng.',
    weather: '⛅ Mây bao phủ thường xuyên',
    bestTime: 'Sáng sớm và chiều tối',
    cost: '~150.000đ',
    duration: '4–5 giờ',
    nearby: 'Làng Cù Lần, Vườn quốc gia',
  },
  {
    id: 5,
    name: 'Ga Đà Lạt',
    tag: 'Lịch Sử • Kiến Trúc',
    emoji: '🚂',
    bg: 'linear-gradient(135deg, #5a4a2a 0%, #8a7a4a 50%, #3a3a1a 100%)',
    desc: 'Nhà ga cổ kính mang kiến trúc Pháp độc đáo, được xây dựng năm 1938. Chuyến tàu leo núi cổ xưa đưa bạn qua những cảnh đẹp hoang sơ.',
    weather: '🌤 Đẹp nhất buổi sáng',
    bestTime: 'Buổi sáng 8–11h',
    cost: '~80.000đ',
    duration: '1–2 giờ',
    nearby: 'Chợ Đà Lạt, Dinh Bảo Đại',
  },
  {
    id: 6,
    name: 'Chợ Đà Lạt',
    tag: 'Ẩm Thực • Địa Phương',
    emoji: '🛒',
    bg: 'linear-gradient(135deg, #6a3a2a 0%, #9a6a4a 50%, #3a2a1a 100%)',
    desc: 'Trái tim ẩm thực của Đà Lạt. Những gian hàng đầy màu sắc bán rau củ, trái cây, hoa tươi và các đặc sản nổi tiếng của vùng cao nguyên.',
    weather: '🌆 Đẹp nhất buổi chiều tối',
    bestTime: 'Chiều tối 17–21h',
    cost: '~200.000đ',
    duration: '2–3 giờ',
    nearby: 'Hồ Xuân Hương, Đường Hoa',
  },
  {
    id: 7,
    name: 'Thiền Viện Trúc Lâm',
    tag: 'Tâm Linh • Bình Yên',
    emoji: '🛕',
    bg: 'linear-gradient(135deg, #3a5a3a 0%, #5a8a5a 50%, #1a3a1a 100%)',
    desc: 'Thiền viện lớn nằm bên hồ Tuyền Lâm xanh biếc. Không gian yên tĩnh, thanh tịnh giữa rừng thông, lý tưởng để tìm bình yên cho tâm hồn.',
    weather: '🌳 Mát mẻ cả ngày',
    bestTime: 'Sáng sớm 7–10h',
    cost: '~30.000đ',
    duration: '2–3 giờ',
    nearby: 'Hồ Tuyền Lâm, Cáp treo',
  },
  {
    id: 8,
    name: 'Fresh Garden Đà Lạt',
    tag: 'Nông Trại • Hái Lượm',
    emoji: '🍓',
    bg: 'linear-gradient(135deg, #6a2a2a 0%, #9a4a4a 50%, #4a1a1a 100%)',
    desc: 'Vườn dâu tây rộng lớn nơi bạn tự tay hái những quả dâu tươi ngon ngọt nhất. Trải nghiệm văn hóa nông trại đặc sắc của Đà Lạt.',
    weather: '☀️ Đẹp nhất trời nắng',
    bestTime: 'Buổi sáng 8–12h',
    cost: '~120.000đ',
    duration: '2–3 giờ',
    nearby: 'Vườn rau Langbiang, Cầu Đất',
  },
];

const foods = [
  {
    name: 'Bánh Căn',
    image: '/images/banhcan.jpg',
    bg: '#f5e8d0',
    desc: 'Bánh căn Đà Lạt là món bánh nhỏ nướng từ bột gạo, giòn nhẹ, thường ăn cùng trứng, xíu mại và nước chấm nóng, rất hợp với khí trời lạnh của Đà Lạt.',
    price: '15.000 – 30.000đ',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Lẩu Gà Lá É',
    emoji: '🍲',
    bg: '#ffe8d0',
    desc: 'Nồi lẩu gà thơm phức với lá é đặc trưng của Đà Lạt. Ấm bụng, ấm lòng trong những buổi chiều se lạnh.',
    price: '80.000 – 150.000đ',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Bánh Tráng Nướng',
    emoji: '🥙',
    bg: '#f5f0e0',
    desc: 'Bánh tráng nướng vàng giòn với trứng, hành lá, khô bò và tương ớt. Pizza phiên bản Việt Nam của Đà Lạt!',
    price: '15.000 – 35.000đ',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Kem Bơ',
    emoji: '🍦',
    bg: '#f0f0d0',
    desc: 'Kem bơ béo ngậy từ bơ Đà Lạt tươi nhất. Vị bơ đặc trưng, ngọt dịu, tan chảy trong từng muỗng kem.',
    price: '20.000 – 40.000đ',
    rating: '⭐⭐⭐⭐',
  },
  {
    name: 'Dâu Tây Đà Lạt',
    emoji: '🍓',
    bg: '#f5e0e0',
    desc: 'Dâu tây Đà Lạt nổi tiếng ngọt, thơm, mọng nước. Ăn tươi, làm sinh tố hay chấm socola đều tuyệt vời.',
    price: '30.000 – 60.000đ/hộp',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Sữa Đậu Nành Nóng',
    emoji: '🥛',
    bg: '#f5f5e0',
    desc: 'Ly sữa đậu nành nóng thơm phức buổi sáng sớm, ăn kèm bánh mì giòn. Khởi đầu hoàn hảo cho ngày Đà Lạt.',
    price: '8.000 – 15.000đ',
    rating: '⭐⭐⭐⭐',
  },
];

const cafes = [
  {
    name: 'The Married Beans',
    vibe: 'Rừng Thông • Cổ Điển',
    emoji: '☕',
    bg: 'linear-gradient(135deg, #3a2a1a 0%, #6a4a2a 100%)',
    desc: 'Không gian cổ điển giữa rừng thông xanh mát. Mỗi góc là một khoảnh khắc đáng để chụp hình và lưu giữ.',
  },
  {
    name: 'Cà Phê Trên Mây',
    vibe: 'Trên Đồi • Toàn Cảnh',
    emoji: '☁️',
    bg: 'linear-gradient(135deg, #1a2a3a 0%, #2a4a6a 100%)',
    desc: 'Ngồi giữa mây trắng bồng bềnh, nhìn xuống toàn cảnh Đà Lạt. Trải nghiệm cà phê độc nhất vô nhị.',
  },
  {
    name: 'Nhà Của Gió',
    vibe: 'Nhà Gỗ • Ấm Cúng',
    emoji: '🏡',
    bg: 'linear-gradient(135deg, #4a3a2a 0%, #7a5a3a 100%)',
    desc: 'Căn nhà gỗ ấm cúng với tiếng nhạc acoustic nhẹ nhàng, ánh đèn vàng ấm và vị cà phê đặc biệt.',
  },
];

const stories = [
  {
    author: 'Minh Thư',
    avatar: '👩',
    trip: '3 ngày tháng 12',
    stars: '⭐⭐⭐⭐⭐',
    quote: 'Đà Lạt đã thay đổi cách tôi nhìn nhận về cái đẹp. Những buổi sáng sương mù, tiếng gió thổi qua rừng thông, ly cà phê ấm tay — tất cả tạo nên một ký ức không thể nào quên.',
    location: '📍 Hồ Xuân Hương, Thung Lũng Tình Yêu',
  },
  {
    author: 'Gia Bảo & Ngọc Anh',
    avatar: '👫',
    trip: '5 ngày tuần trăng mật',
    stars: '⭐⭐⭐⭐⭐',
    quote: 'Chúng tôi đã chọn Đà Lạt cho tuần trăng mật vì nghe nói đây là thành phố lãng mạn nhất Việt Nam. Và thực sự, Đà Lạt đã vượt xa mọi kỳ vọng của chúng tôi.',
    location: '📍 LangBiang, Thiền Viện Trúc Lâm',
  },
  {
    author: 'Hoàng Phúc',
    avatar: '👨‍🦱',
    trip: '2 ngày du lịch một mình',
    stars: '⭐⭐⭐⭐⭐',
    quote: 'Đi một mình đến Đà Lạt là quyết định tốt nhất tôi từng làm. Đây là nơi để suy nghĩ, để cảm nhận, để tìm lại chính mình giữa thiên nhiên tuyệt vời.',
    location: '📍 Đồi Chè Cầu Đất, Ga Đà Lạt',
  },
];

const galleryItems = [
  { emoji: '🌄', bg: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 50%, #c04a20 100%)', h: 200 },
  { emoji: '🌲', bg: 'linear-gradient(135deg, #1a3020 0%, #2d5035 50%, #0d1f10 100%)', h: 280 },
  { emoji: '🌸', bg: 'linear-gradient(135deg, #f0d8e0 0%, #d4a0b8 100%)', h: 180 },
  { emoji: '☁️', bg: 'linear-gradient(135deg, #8ab8d4 0%, #5a8aaa 100%)', h: 240 },
  { emoji: '⛰️', bg: 'linear-gradient(135deg, #3a4a6a 0%, #5a6a8a 100%)', h: 200 },
  { emoji: '🏡', bg: 'linear-gradient(135deg, #5a4a2a 0%, #8a6a4a 100%)', h: 260 },
  { emoji: '🌃', bg: 'linear-gradient(135deg, #0a0f1a 0%, #1a2a3a 100%)', h: 300 },
  { emoji: '🌺', bg: 'linear-gradient(135deg, #c04080 0%, #e06090 100%)', h: 220 },
  { emoji: '☕', bg: 'linear-gradient(135deg, #3a2010 0%, #6a4020 100%)', h: 180 },
  { emoji: '🍓', bg: 'linear-gradient(135deg, #c02020 0%, #e04040 100%)', h: 240 },
  { emoji: '🌿', bg: 'linear-gradient(135deg, #2a4a2a 0%, #4a6a4a 100%)', h: 200 },
  { emoji: '🌠', bg: 'linear-gradient(135deg, #050810 0%, #0a1020 100%)', h: 280 },
];

const placeItems = [
  { name: 'Hồ Xuân Hương', icon: '🏞️', time: '1–2 giờ', slot: 'morning', cost: 50000, difficulty: 1 },
  { name: 'Thung Lũng Tình Yêu', icon: '💕', time: '3–4 giờ', slot: 'afternoon', cost: 100000, difficulty: 1 },
  { name: 'Đồi Chè Cầu Đất', icon: '🌿', time: '2–3 giờ', slot: 'morning', cost: 80000, difficulty: 2 },
  { name: 'LangBiang', icon: '⛰️', time: '4–5 giờ', slot: 'morning', cost: 150000, difficulty: 3 },
  { name: 'Ga Đà Lạt', icon: '🚂', time: '1–2 giờ', slot: 'morning', cost: 80000, difficulty: 1 },
  { name: 'Chợ Đà Lạt', icon: '🛒', time: '2–3 giờ', slot: 'evening', cost: 200000, difficulty: 1 },
  { name: 'Thiền Viện Trúc Lâm', icon: '🛕', time: '2–3 giờ', slot: 'morning', cost: 30000, difficulty: 1 },
  { name: 'Fresh Garden', icon: '🍓', time: '2–3 giờ', slot: 'morning', cost: 120000, difficulty: 1 },
  { name: 'Cà phê trên đồi', icon: '☕', time: '1–2 giờ', slot: 'afternoon', cost: 60000, difficulty: 1 },
  { name: 'Bánh căn đêm', icon: '🫓', time: '1 giờ', slot: 'night', cost: 40000, difficulty: 1 },
];

// ===========================
// INIT
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initParticles();
  initNavScroll();
  initMouseLight();
  initMagneticButtons();
  initDestinations();
  initFoodSection();
  initCafes();
  initPlanner();
  initGallery();
  initStories();
  initCTAStars();
  initSceneStars();
  initScrollAnimations();
  initStatCounters();
  initModal();
  initParallax();
});

// ===========================
// CURSOR
// ===========================

function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursorTrail');
  let mx = 0, my = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    setTimeout(() => {
      trail.style.left = mx + 'px';
      trail.style.top = my + 'px';
    }, 80);
  });

  // Grow cursor on interactive elements
  document.querySelectorAll('a, button, .dest-card, .food-card, .cafe-card, .gallery-item, .story-card, .place-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      trail.style.width = '60px';
      trail.style.height = '60px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      trail.style.width = '36px';
      trail.style.height = '36px';
    });
  });
}

// ===========================
// PARTICLES (Hero floating)
// ===========================

function initParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 20;
    const drift = (Math.random() - 0.5) * 100 + 'px';
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${x}%;
      bottom: -5%;
      animation-duration:${duration}s;
      animation-delay:-${delay}s;
      --drift:${drift};
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    container.appendChild(p);
  }
}

// ===========================
// NAV
// ===========================

function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===========================
// MOUSE LIGHT (Hero)
// ===========================

function initMouseLight() {
  const light = document.getElementById('mouseLight');
  const hero = document.querySelector('.hero');
  if (!hero) return;
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    light.style.left = (e.clientX - rect.left) + 'px';
    light.style.top = (e.clientY - rect.top) + 'px';
  });
}

// ===========================
// MAGNETIC BUTTONS
// ===========================

function initMagneticButtons() {
  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.25;
      const dy = (e.clientY - cy) * 0.25;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
      // Update glow position
      const glow = btn.querySelector('.btn-glow');
      if (glow) {
        const mx = ((e.clientX - rect.left) / rect.width * 100).toFixed(0);
        const my = ((e.clientY - rect.top) / rect.height * 100).toFixed(0);
        btn.style.setProperty('--mx', mx + '%');
        btn.style.setProperty('--my', my + '%');
      }
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
    });
  });
}

// ===========================
// DESTINATIONS
// ===========================

function initDestinations() {
  const grid = document.getElementById('destinationsGrid');
  grid.innerHTML = destinations.map(d => `
    <div class="dest-card reveal" data-id="${d.id}" style="background:${d.bg}">
      <div class="dest-card-bg">${d.emoji}</div>
      <div class="dest-card-overlay"></div>
      <div class="dest-card-content">
        <div class="dest-card-tag">${d.tag}</div>
        <div class="dest-card-name">${d.name}</div>
        <div class="dest-card-desc">${d.desc}</div>
        <div class="dest-card-btn">Khám phá →</div>
      </div>
    </div>
  `).join('');

  // 3D tilt effect
  grid.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = ((e.clientY - cy) / rect.height) * -8;
      const ry = ((e.clientX - cx) / rect.width) * 8;
      card.style.setProperty('--rx', rx + 'deg');
      card.style.setProperty('--ry', ry + 'deg');
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      const dest = destinations.find(d => d.id === id);
      openModal(dest);
    });
  });

  // Re-init cursor listeners
  setTimeout(() => initCursor(), 100);
}

// ===========================
// MODAL
// ===========================

function initModal() {
  const modal = document.getElementById('destModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');

  [backdrop, closeBtn].forEach(el => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(dest) {
  const modal = document.getElementById('destModal');
  const visual = document.getElementById('modalVisual');
  const content = document.getElementById('modalContent');

  visual.style.background = dest.bg;
  visual.innerHTML = dest.emoji;

  content.innerHTML = `
    <div class="section-badge" style="color:var(--gold); border-color:rgba(200,160,85,0.3)">${dest.tag}</div>
    <h2>${dest.name}</h2>
    <p class="modal-desc">${dest.desc}</p>
    <div class="modal-detail-grid">
      <div class="modal-detail-item">
        <div class="modal-detail-label">Thời Tiết</div>
        <div class="modal-detail-val">${dest.weather}</div>
      </div>
      <div class="modal-detail-item">
        <div class="modal-detail-label">Thời Gian Tốt Nhất</div>
        <div class="modal-detail-val">${dest.bestTime}</div>
      </div>
      <div class="modal-detail-item">
        <div class="modal-detail-label">Chi Phí Ước Tính</div>
        <div class="modal-detail-val">${dest.cost}</div>
      </div>
      <div class="modal-detail-item">
        <div class="modal-detail-label">Thời Gian Tham Quan</div>
        <div class="modal-detail-val">${dest.duration}</div>
      </div>
    </div>
    <div class="modal-detail-item" style="margin-bottom:20px">
      <div class="modal-detail-label">Gần Đây</div>
      <div class="modal-detail-val">${dest.nearby}</div>
    </div>
    <button class="modal-save-btn" onclick="addToPlanner('${dest.name}')">
      ✨ Thêm vào hành trình
    </button>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('destModal').classList.remove('open');
  document.body.style.overflow = '';
}

window.addToPlanner = function(name) {
  closeModal();
  setTimeout(() => {
    document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
  }, 400);
};

// ===========================
// FOOD SECTION
// ===========================

function initFoodSection() {
  const track = document.getElementById('foodTrack');
  track.innerHTML = foods.map(f => `
    <div class="food-card">
      <div class="food-visual" style="background:${f.bg}">
        ${
          f.image
            ? `<img src="${f.image}" alt="${f.name}" class="food-image">`
            : `<span>${f.emoji}</span>`
        }
  <div class="food-warm-overlay"></div>
</div>
      <div class="food-info">
        <div class="food-name">${f.name}</div>
        <div class="food-desc">${f.desc}</div>
        <div class="food-meta">
          <span class="food-price">${f.price}</span>
          <span class="food-rating">${f.rating}</span>
        </div>
      </div>
    </div>
  `).join('');

  let offset = 0;
  const cardW = 324; // card width + gap

  document.getElementById('foodNext').addEventListener('click', () => {
    const maxOffset = (foods.length - 3) * cardW;
    offset = Math.min(offset + cardW, maxOffset);
    track.style.transform = `translateX(-${offset}px)`;
  });

  document.getElementById('foodPrev').addEventListener('click', () => {
    offset = Math.max(offset - cardW, 0);
    track.style.transform = `translateX(-${offset}px)`;
  });
}

// ===========================
// CAFES
// ===========================

function initCafes() {
  const grid = document.getElementById('cafeGrid');
  grid.innerHTML = cafes.map(c => `
    <div class="cafe-card reveal">
      <div class="cafe-visual" style="background:${c.bg}">
        <span>${c.emoji}</span>
        <div class="cafe-steam">
          ${[...Array(5)].map((_, i) => `
            <div class="steam-particle" style="left:${40+i*8}%; animation-delay:${i*0.5}s"></div>
          `).join('')}
        </div>
      </div>
      <div class="cafe-info">
        <div class="cafe-name">${c.name}</div>
        <div class="cafe-vibe">${c.vibe}</div>
        <div class="cafe-desc">${c.desc}</div>
      </div>
    </div>
  `).join('');
}

// ===========================
// TRIP PLANNER
// ===========================

let tripItems = { morning: [], afternoon: [], evening: [], night: [] };
let totalBudget = 0;
let totalHours = 0;
let currentMood = 'romantic';

function initPlanner() {
  // Mood buttons
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMood = btn.dataset.mood;
      updatePlaceList();
    });
  });

  // Generate places
  updatePlaceList();

  // Generate button
  document.getElementById('generateBtn').addEventListener('click', autoGenerate);
}

function updatePlaceList() {
  const list = document.getElementById('placeList');
  const moodMap = {
    romantic: ['Thung Lũng Tình Yêu', 'Hồ Xuân Hương', 'Cà phê trên đồi'],
    adventure: ['LangBiang', 'Đồi Chè Cầu Đất', 'Fresh Garden'],
    chill: ['Thiền Viện Trúc Lâm', 'Hồ Xuân Hương', 'Cà phê trên đồi'],
    food: ['Chợ Đà Lạt', 'Bánh căn đêm', 'Fresh Garden'],
    photo: ['Đồi Chè Cầu Đất', 'LangBiang', 'Ga Đà Lạt'],
    family: ['Thung Lũng Tình Yêu', 'Fresh Garden', 'Chợ Đà Lạt'],
  };
  const preferred = moodMap[currentMood] || [];
  const sorted = [...placeItems].sort((a, b) => {
    const ai = preferred.indexOf(a.name);
    const bi = preferred.indexOf(b.name);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  list.innerHTML = sorted.map(p => `
    <div class="place-item" draggable="true" data-name="${p.name}" data-icon="${p.icon}" data-slot="${p.slot}" data-cost="${p.cost}">
      <span class="place-item-icon">${p.icon}</span>
      <div class="place-item-info">
        <div class="place-item-name">${p.name}</div>
        <div class="place-item-time">⏱ ${p.time}</div>
      </div>
    </div>
  `).join('');

  // Drag events
  list.querySelectorAll('.place-item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', JSON.stringify({
        name: item.dataset.name,
        icon: item.dataset.icon,
        slot: item.dataset.slot,
        cost: parseInt(item.dataset.cost),
      }));
      item.style.opacity = '0.5';
    });
    item.addEventListener('dragend', () => {
      item.style.opacity = '1';
    });
  });

  // Drop zones
  document.querySelectorAll('.time-slot').forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
    });
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      try {
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        addItemToSlot(zone.dataset.slot, data);
      } catch {}
    });
  });
}

function addItemToSlot(slotName, data) {
  const slotEl = document.getElementById(slotName + 'Slot');
  const emptyEl = slotEl.closest('.time-slot').querySelector('.slot-empty');

  // Prevent duplicates
  if (tripItems[slotName].find(i => i.name === data.name)) return;

  tripItems[slotName].push(data);
  totalBudget += data.cost;
  totalHours += 2;

  const card = document.createElement('div');
  card.className = 'slot-card';
  card.innerHTML = `
    <span>${data.icon}</span>
    <span>${data.name}</span>
    <button class="slot-card-remove" title="Xóa">×</button>
  `;
  card.querySelector('.slot-card-remove').addEventListener('click', () => {
    tripItems[slotName] = tripItems[slotName].filter(i => i.name !== data.name);
    totalBudget -= data.cost;
    totalHours -= 2;
    slotEl.removeChild(card);
    updatePlannerMeta();
    updateEmptyStates();
  });
  slotEl.appendChild(card);
  if (emptyEl) emptyEl.style.display = 'none';
  updatePlannerMeta();
}

function updatePlannerMeta() {
  document.getElementById('tripBudget').textContent = `💰 Ước tính: ${totalBudget.toLocaleString('vi-VN')}đ`;
  document.getElementById('tripDuration').textContent = `⏱️ Thời gian: ${totalHours} giờ`;
}

function updateEmptyStates() {
  ['morning', 'afternoon', 'evening', 'night'].forEach(slot => {
    const slotEl = document.getElementById(slot + 'Slot');
    const emptyEl = slotEl.closest('.time-slot').querySelector('.slot-empty');
    if (emptyEl) emptyEl.style.display = tripItems[slot].length === 0 ? 'block' : 'none';
  });
}

function autoGenerate() {
  // Clear
  Object.keys(tripItems).forEach(k => tripItems[k] = []);
  totalBudget = 0; totalHours = 0;
  ['morning', 'afternoon', 'evening', 'night'].forEach(slot => {
    document.getElementById(slot + 'Slot').innerHTML = '';
  });

  const moodSuggestions = {
    romantic: ['Hồ Xuân Hương', 'Thung Lũng Tình Yêu', 'Cà phê trên đồi', 'Chợ Đà Lạt'],
    adventure: ['LangBiang', 'Đồi Chè Cầu Đất', 'Fresh Garden', 'Bánh căn đêm'],
    chill: ['Thiền Viện Trúc Lâm', 'Hồ Xuân Hương', 'Cà phê trên đồi', 'Bánh căn đêm'],
    food: ['Fresh Garden', 'Cà phê trên đồi', 'Chợ Đà Lạt', 'Bánh căn đêm'],
    photo: ['Đồi Chè Cầu Đất', 'LangBiang', 'Ga Đà Lạt', 'Hồ Xuân Hương'],
    family: ['Thung Lũng Tình Yêu', 'Fresh Garden', 'Hồ Xuân Hương', 'Chợ Đà Lạt'],
  };

  const suggestions = moodSuggestions[currentMood] || moodSuggestions.romantic;
  const slots = ['morning', 'afternoon', 'evening', 'night'];

  suggestions.forEach((name, i) => {
    const item = placeItems.find(p => p.name === name);
    if (item) {
      setTimeout(() => addItemToSlot(slots[i], item), i * 200);
    }
  });
}

// ===========================
// GALLERY
// ===========================

function initGallery() {
  const gallery = document.getElementById('masonryGallery');
  gallery.innerHTML = galleryItems.map((item, i) => `
    <div class="gallery-item reveal" style="animation-delay:${i*0.05}s">
      <div class="gallery-visual" style="background:${item.bg}; height:${item.h}px;">
        <span>${item.emoji}</span>
        <div class="gallery-overlay">
          <div class="gallery-expand">⊕</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===========================
// STORIES
// ===========================

function initStories() {
  const stack = document.getElementById('storiesStack');
  stack.innerHTML = stories.map((s, i) => `
    <div class="story-card reveal" style="transition-delay:${i*0.15}s">
      <div class="story-avatar">${s.avatar}</div>
      <div>
        <div class="story-meta">
          <div>
            <div class="story-author">${s.author}</div>
            <div class="story-trip">${s.trip}</div>
          </div>
          <div class="story-stars">${s.stars}</div>
        </div>
        <p class="story-quote">"${s.quote}"</p>
        <div class="story-location">${s.location}</div>
      </div>
    </div>
  `).join('');
}

// ===========================
// STARS
// ===========================

function createStars(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star-dot';
    const size = Math.random() * 2 + 1;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      animation-delay:${Math.random()*3}s;
      animation-duration:${Math.random()*2+2}s;
    `;
    container.appendChild(s);
  }
}

function initSceneStars() { createStars('sceneStars', 40); }
function initCTAStars() { createStars('ctaStars', 100); }

// ===========================
// SCROLL ANIMATIONS
// ===========================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

// ===========================
// STAT COUNTERS
// ===========================

function initStatCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number').forEach(el => {
          const target = parseInt(el.dataset.target);
          animateCounter(el, 0, target, 2000);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const statsEl = document.querySelector('.discover-stats');
  if (statsEl) observer.observe(statsEl);
}

function animateCounter(el, start, end, duration) {
  const startTime = performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.round(start + (end - start) * easeOut(progress));
    el.textContent = value.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ===========================
// PARALLAX
// ===========================

function initParallax() {
  const layers = [
    { el: document.querySelector('.hero-mountains'), factor: 0.15 },
    { el: document.querySelector('.hero-pines'), factor: 0.3 },
    { el: document.querySelector('.hero-mist'), factor: 0.2 },
  ];

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    layers.forEach(({ el, factor }) => {
      if (el) el.style.transform = `translateY(${scrollY * factor}px)`;
    });
  });
}

// ===========================
// GSAP ENHANCED ANIMATIONS (if loaded)
// ===========================

window.addEventListener('load', () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Destinations stagger
    gsap.from('.dest-card', {
      scrollTrigger: {
        trigger: '.destinations-grid',
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });

    // Discover section
    gsap.from('.discover-left', {
      scrollTrigger: {
        trigger: '.discover',
        start: 'top 70%',
      },
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from('.discover-right', {
      scrollTrigger: {
        trigger: '.discover',
        start: 'top 70%',
      },
      x: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

    // Time moments
    gsap.from('.time-moment', {
      scrollTrigger: {
        trigger: '.time-story',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    });

    // CTA title
    gsap.from('.cta-title', {
      scrollTrigger: {
        trigger: '.final-cta',
        start: 'top 70%',
      },
      y: 60,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });

    // Floating hero layers
    gsap.to('.hero-mist', {
      y: -30,
      duration: 8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }
});

// ===========================
// SMOOTH SECTION LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Nav CTA
document.querySelector('.nav-cta').addEventListener('click', () => {
  document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
});

// Hero CTAs
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.textContent.includes('Kế Hoạch') || btn.textContent.includes('kế hoạch')
      ? '#planner' : '#destinations';
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});

console.log('🌿 Đà Lạt Cinematic Experience loaded successfully');