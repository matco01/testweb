// ---------- Icons ----------
const ICONS = {
  laptop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
  tablet: '<rect x="4" y="2" width="16" height="20" rx="2.5"/><path d="M11 18h2"/>',
  headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3zM3 19a2 2 0 0 0 2 2h1v-7H3z"/>',
  earbuds: '<path d="M7 4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1V4z"/><path d="M8 12v8"/><path d="M17 4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1V4z"/><path d="M16 12v8"/>',
  speaker: '<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><circle cx="12" cy="6" r="1"/>',
  tv: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  console: '<rect x="2" y="7" width="20" height="10" rx="5"/><path d="M6 12h4M8 10v4"/><circle cx="16" cy="11" r=".8"/><circle cx="18" cy="13" r=".8"/>',
  gamepad: '<path d="M6 11h4M8 9v4"/><path d="M15 12h.01M18 10h.01"/><path d="M17.3 5H6.7a4 4 0 0 0-4 3.6l-.7 6.3A3 3 0 0 0 5 18c1 0 2-.5 2.6-1.4L9 15h6l1.4 1.6A3.3 3.3 0 0 0 19 18a3 3 0 0 0 3-3.1l-.7-6.3A4 4 0 0 0 17.3 5z"/>',
  mouse: '<rect x="6" y="2" width="12" height="20" rx="6"/><path d="M12 6v4"/>',
  watch: '<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1 1"/><path d="m16.1 7.1-.7-3.5A2 2 0 0 0 13.4 2h-2.8a2 2 0 0 0-2 1.6l-.7 3.5M7.9 16.9l.7 3.5a2 2 0 0 0 2 1.6h2.8a2 2 0 0 0 2-1.6l.7-3.5"/>',
  keyboard: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M18 13h.01M10 13h4M7 16h10"/>',
  charger: '<path d="M8 2v5M16 2v5"/><rect x="5" y="7" width="14" height="8" rx="2"/><path d="M12 15v3a3 3 0 0 0 3 3h1"/><path d="m11 9-1.5 2.5h3L11 14"/>',
  battery: '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2"/><path d="m11 9-2 3h4l-2 3"/>',
  camera: '<circle cx="12" cy="10" r="7"/><circle cx="12" cy="10" r="3"/><path d="M8 21h8M12 17v4"/>',
  truck: '<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
  store: '<path d="M3 9 4.5 4h15L21 9"/><path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/><path d="M5 13v8h14v-8"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  cartPlus: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/><path d="M15 8v6M12 11h6"/>',
  trash: '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  filter: '<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};
const icon = (name) => `<svg viewBox="0 0 24 24">${ICONS[name] || ICONS.box}</svg>`;

// ---------- Helpers ----------
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $("#app");
const fmt = (n) => Math.round(n).toLocaleString("cs-CZ").replace(/ /g, " ") + " Kč";
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const catById = (id) => CATEGORIES.find((c) => c.id === id);
const discount = (p) => (p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0);

const FREE_SHIP = 1500;
const SHIPPING = [
  { id: "pickup", name: "Voltix pickup point", desc: "Ready tomorrow at 1 200+ locations", price: 0, icon: "store" },
  { id: "courier", name: "Home delivery", desc: "Courier, delivered in 1–2 days", price: 99, icon: "truck" },
  { id: "express", name: "Express today", desc: "Order by 2 pm, delivered tonight", price: 199, icon: "truck" },
];
const PAYMENT = [
  { id: "card", name: "Card online", desc: "Visa, Mastercard (fake – any number works)", price: 0 },
  { id: "transfer", name: "Bank transfer", desc: "Pay after placing the order", price: 0 },
  { id: "cod", name: "Cash on delivery", desc: "Pay when you pick it up", price: 39 },
];

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem("voltix_" + key)) ?? fallback; } catch { return fallback; }
}
function save(key, val) {
  try { localStorage.setItem("voltix_" + key, JSON.stringify(val)); } catch {}
}

const state = {
  cart: load("cart", []), // [{id, qty}]
  wish: load("wish", []),
  promo: load("promo", null),
  orders: load("orders", []),
  checkout: { shipping: "pickup", payment: "card" },
};

function thumb(p, extraClass = "", hueShift = 0) {
  const h = (p.hue + hueShift) % 360;
  return `<div class="thumb ${extraClass}" style="background:linear-gradient(145deg,hsl(${h} 80% 96%),hsl(${h} 70% 86%));color:hsl(${h} 55% 32%)">${icon(p.icon)}</div>`;
}
function stars(r) {
  const full = Math.round(r);
  return `<span class="stars">${"★".repeat(full)}${"☆".repeat(5 - full)}</span>`;
}
function stockLabel(p) {
  if (p.stock === 0) return `<span class="stock out">Out of stock</span>`;
  if (p.stock < 10) return `<span class="stock low">Only ${p.stock} left</span>`;
  return `<span class="stock in">In stock ${p.stock > 50 ? "50+" : p.stock} pcs</span>`;
}

// ---------- Cart logic ----------
function cartQty(id) { return state.cart.find((l) => l.id === id)?.qty || 0; }

function addToCart(id, qty = 1) {
  const p = byId(id);
  if (!p || p.stock === 0) return;
  const line = state.cart.find((l) => l.id === id);
  const current = line ? line.qty : 0;
  const next = Math.min(p.stock, current + qty);
  if (next === current) { toast(`Only ${p.stock} pcs available`); return; }
  if (line) line.qty = next; else state.cart.push({ id, qty: next });
  persistCart();
  bump("#cartBadge");
  toast(`Added <b>${esc(p.name)}</b> to cart <a href="#/cart">View cart</a>`, true);
}
function setQty(id, qty) {
  const p = byId(id);
  const line = state.cart.find((l) => l.id === id);
  if (!line) return;
  qty = Math.max(0, Math.min(p.stock, qty | 0));
  if (qty === 0) state.cart = state.cart.filter((l) => l.id !== id);
  else line.qty = qty;
  persistCart();
}
function removeFromCart(id) {
  state.cart = state.cart.filter((l) => l.id !== id);
  persistCart();
}
function persistCart() {
  save("cart", state.cart);
  updateHeader();
  renderDrawer();
  if (["cart", "checkout"].includes(currentRoute)) route();
}

function totals() {
  const shipping = SHIPPING.find((s) => s.id === state.checkout.shipping);
  const payment = PAYMENT.find((p) => p.id === state.checkout.payment);
  const items = state.cart.reduce((n, l) => n + l.qty, 0);
  const subtotal = state.cart.reduce((sum, l) => sum + byId(l.id).price * l.qty, 0);
  const savings = state.cart.reduce((sum, l) => { const p = byId(l.id); return sum + (p.oldPrice ? (p.oldPrice - p.price) * l.qty : 0); }, 0);
  const promoRate = state.promo ? PROMO_CODES[state.promo] || 0 : 0;
  const promoOff = Math.round(subtotal * promoRate);
  const freeShip = subtotal >= FREE_SHIP;
  const shipCost = freeShip && shipping.id !== "express" ? 0 : shipping.price;
  const payCost = payment.price;
  const total = subtotal - promoOff + shipCost + payCost;
  return { items, subtotal, savings, promoOff, shipCost, payCost, total, freeShip };
}

function toggleWish(id) {
  const on = state.wish.includes(id);
  state.wish = on ? state.wish.filter((w) => w !== id) : [...state.wish, id];
  save("wish", state.wish);
  updateHeader();
  $$(`[data-wish="${id}"]`).forEach((b) => b.classList.toggle("on", !on));
  toast(on ? "Removed from wishlist" : `Saved to wishlist <a href="#/wishlist">View</a>`, !on);
  if (currentRoute === "wishlist") route();
}

// ---------- Header, drawer, toasts ----------
function updateHeader() {
  const t = totals();
  const badge = $("#cartBadge");
  badge.hidden = t.items === 0;
  badge.textContent = t.items;
  $("#cartTotalLabel").textContent = t.items ? fmt(t.subtotal) : "Cart";
  const wb = $("#wishBadge");
  wb.hidden = state.wish.length === 0;
  wb.textContent = state.wish.length;
}
function bump(sel) {
  const el = $(sel);
  el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
}

function openDrawer() { renderDrawer(); $("#drawer").classList.add("open"); $("#overlay").classList.add("open"); }
function closeDrawer() { $("#drawer").classList.remove("open"); $("#overlay").classList.remove("open"); }

function freeShipBar(subtotal) {
  const left = FREE_SHIP - subtotal;
  const pct = Math.min(100, (subtotal / FREE_SHIP) * 100);
  return `<div class="free-ship">${left > 0 ? `Add <b>${fmt(left)}</b> more for free delivery` : `🎉 You've got <b>free delivery</b>`}
    <div class="progress"><div style="width:${pct}%"></div></div></div>`;
}

function lineHTML(l, compact = false) {
  const p = byId(l.id);
  return `<div class="line">
    <a href="#/p/${p.id}">${thumb(p)}</a>
    <div class="line-info">
      <a class="name" href="#/p/${p.id}">${esc(p.name)}</a>
      <span class="unit">${fmt(p.price)} / pc${compact ? "" : " · " + stockLabel(p)}</span>
      <div class="line-row">
        <div class="qty sm">
          <button data-dec="${p.id}" aria-label="Decrease">−</button>
          <input value="${l.qty}" data-qty="${p.id}" inputmode="numeric" aria-label="Quantity" />
          <button data-inc="${p.id}" aria-label="Increase">+</button>
        </div>
        <span class="line-price">${fmt(p.price * l.qty)}</span>
        <button class="remove" data-remove="${p.id}" title="Remove">${icon("trash")}</button>
      </div>
    </div>
  </div>`;
}

function renderDrawer() {
  const t = totals();
  if (!state.cart.length) {
    $("#drawerBody").innerHTML = `<div class="empty-state" style="box-shadow:none">${icon("cart")}<h3>Your cart is empty</h3><p>Find something you'll love.</p><button class="btn btn-primary" data-close>Start shopping</button></div>`;
    $("#drawerFoot").innerHTML = "";
    return;
  }
  $("#drawerBody").innerHTML = state.cart.map((l) => lineHTML(l, true)).join("");
  $("#drawerFoot").innerHTML = `
    ${freeShipBar(t.subtotal)}
    <div class="sum-row total"><span>Subtotal</span><span>${fmt(t.subtotal)}</span></div>
    <a href="#/checkout" class="btn btn-green btn-block btn-lg" data-close>Checkout ${icon("arrow")}</a>
    <a href="#/cart" class="btn btn-ghost btn-block" data-close>View cart</a>`;
}

function toast(html, ok = false) {
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = (ok ? icon("check") : "") + `<span>${html}</span>`;
  $("#toasts").appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 260); }, 2800);
}

// ---------- Components ----------
function card(p) {
  const d = discount(p);
  return `<article class="card">
    ${d ? `<span class="flag">−${d}%</span>` : ""}
    <button class="wish-btn ${state.wish.includes(p.id) ? "on" : ""}" data-wish="${p.id}" aria-label="Wishlist">${icon("heart")}</button>
    <a href="#/p/${p.id}">${thumb(p)}</a>
    <div class="card-body">
      <span class="brand">${esc(p.brand)}</span>
      <a href="#/p/${p.id}" class="name">${esc(p.name)}</a>
      <div class="rating">${stars(p.rating)} ${p.rating} (${p.reviews})</div>
      <p class="desc">${esc(p.desc)}</p>
      ${stockLabel(p)}
      <div class="card-foot">
        <div>${p.oldPrice ? `<span class="price-old">${fmt(p.oldPrice)}</span>` : ""}<span class="price">${fmt(p.price)}</span></div>
        <button class="btn btn-primary add-btn" data-add="${p.id}" ${p.stock === 0 ? "disabled" : ""} title="Add to cart">${icon("cartPlus")}</button>
      </div>
    </div>
  </article>`;
}
const grid = (list) => `<div class="grid">${list.map(card).join("")}</div>`;

// ---------- Pages ----------
function pageHome() {
  const deals = PRODUCTS.filter((p) => p.oldPrice && p.stock > 0).sort((a, b) => discount(b) - discount(a)).slice(0, 8);
  const best = [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, 8);
  const top = [...PRODUCTS].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews).slice(0, 4);
  app.innerHTML = `
    <section class="hero">
      <div class="hero-main">
        <span class="tag">Autumn Tech Week · up to −50%</span>
        <h1>The tech you want, delivered tomorrow.</h1>
        <p>Laptops, phones, audio and more from brands that definitely exist. Free delivery over ${fmt(FREE_SHIP)}.</p>
        <a href="#/deals" class="btn btn-lg">Shop the deals ${icon("arrow")}</a>
        <div class="hero-art">${icon("laptop")}</div>
      </div>
      <div class="hero-side">
        <a href="#/c/gaming" class="promo promo-1"><div><h3>Level up your setup</h3><p>Consoles, controllers & gear</p></div><span class="link">Shop gaming →</span><svg class="bg" viewBox="0 0 24 24">${ICONS.gamepad}</svg></a>
        <a href="#/c/audio" class="promo promo-2"><div><h3>Silence the world</h3><p>Noise-cancelling headphones from 990 Kč</p></div><span class="link">Shop audio →</span><svg class="bg" viewBox="0 0 24 24">${ICONS.headphones}</svg></a>
      </div>
    </section>
    <div class="features">
      <div class="feature">${icon("truck")}<div><b>Next-day delivery</b><span class="muted">Order by midnight</span></div></div>
      <div class="feature">${icon("store")}<div><b>1 200+ pickup points</b><span class="muted">Always free</span></div></div>
      <div class="feature">${icon("refresh")}<div><b>30-day returns</b><span class="muted">No questions asked</span></div></div>
      <div class="feature">${icon("shield")}<div><b>2-year warranty</b><span class="muted">On everything</span></div></div>
    </div>
    <section class="section">
      <div class="section-head"><h2>Shop by category</h2></div>
      <div class="cat-tiles">${CATEGORIES.map((c) => `<a href="#/c/${c.id}" class="cat-tile"><div class="ic">${icon(c.icon)}</div>${c.name}</a>`).join("")}</div>
    </section>
    <section class="section">
      <div class="section-head"><h2>🔥 Hot deals</h2><a href="#/deals">See all deals →</a></div>
      ${grid(deals)}
    </section>
    <section class="section">
      <div class="section-head"><h2>Top rated</h2></div>
      ${grid(top)}
    </section>
    <section class="section">
      <div class="section-head"><h2>Bestsellers</h2></div>
      ${grid(best)}
    </section>`;
}

// Listing with filters (used by category, search and deals)
const listState = { sort: "popular", brands: [], min: "", max: "", inStock: false };

function pageListing({ title, crumbs, base }) {
  const brands = [...new Set(base.map((p) => p.brand))].sort();
  listState.brands = listState.brands.filter((b) => brands.includes(b));

  const render = () => {
    let list = base.filter((p) =>
      (!listState.brands.length || listState.brands.includes(p.brand)) &&
      (!listState.min || p.price >= +listState.min) &&
      (!listState.max || p.price <= +listState.max) &&
      (!listState.inStock || p.stock > 0));
    const sorters = {
      popular: (a, b) => b.reviews - a.reviews,
      cheap: (a, b) => a.price - b.price,
      expensive: (a, b) => b.price - a.price,
      rating: (a, b) => b.rating - a.rating,
      discount: (a, b) => discount(b) - discount(a),
    };
    list.sort(sorters[listState.sort]);
    $("#results").innerHTML = list.length ? grid(list) :
      `<div class="empty-state">${icon("search")}<h3>No products match</h3><p>Try removing some filters.</p><button class="btn btn-primary" id="resetFilters">Reset filters</button></div>`;
    $("#count").textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
    $$(".sort-tabs button").forEach((b) => b.classList.toggle("active", b.dataset.sort === listState.sort));
  };

  app.innerHTML = `
    <div class="crumbs">${crumbs}</div>
    <h1 class="page-title">${title}</h1>
    <p class="muted" id="count" style="margin:0 0 20px"></p>
    <div class="listing">
      <aside class="filters" id="filters">
        <h4>Price (Kč)</h4>
        <div class="range-row">
          <input type="number" id="fMin" placeholder="From" value="${listState.min}" min="0" />
          <input type="number" id="fMax" placeholder="To" value="${listState.max}" min="0" />
        </div>
        <h4>Brand</h4>
        ${brands.map((b) => `<label class="check"><input type="checkbox" value="${esc(b)}" ${listState.brands.includes(b) ? "checked" : ""} data-brand />${esc(b)}<span class="count">${base.filter((p) => p.brand === b).length}</span></label>`).join("")}
        <h4>Availability</h4>
        <label class="check"><input type="checkbox" id="fStock" ${listState.inStock ? "checked" : ""} />In stock only</label>
      </aside>
      <div>
        <div class="toolbar">
          <div class="sort-tabs">
            <button data-sort="popular">Most popular</button>
            <button data-sort="cheap">Cheapest</button>
            <button data-sort="expensive">Most expensive</button>
            <button data-sort="rating">Best rated</button>
            <button data-sort="discount">Biggest discount</button>
          </div>
          <button class="btn btn-ghost btn-sm filter-toggle" id="filterToggle">${icon("filter")} Filters</button>
        </div>
        <div id="results"></div>
      </div>
    </div>`;

  $$(".sort-tabs button").forEach((b) => b.onclick = () => { listState.sort = b.dataset.sort; render(); });
  $$("[data-brand]").forEach((c) => c.onchange = () => { listState.brands = $$("[data-brand]:checked").map((x) => x.value); render(); });
  $("#fMin").oninput = (e) => { listState.min = e.target.value; render(); };
  $("#fMax").oninput = (e) => { listState.max = e.target.value; render(); };
  $("#fStock").onchange = (e) => { listState.inStock = e.target.checked; render(); };
  $("#filterToggle").onclick = () => $("#filters").classList.toggle("open");
  $("#results").addEventListener("click", (e) => {
    if (e.target.closest("#resetFilters")) {
      Object.assign(listState, { brands: [], min: "", max: "", inStock: false });
      pageListing({ title, crumbs, base });
    }
  });
  render();
}

function pageCategory(id) {
  const c = catById(id);
  if (!c) return pageNotFound();
  pageListing({ title: c.name, crumbs: `<a href="#/">Home</a> / <span>${c.name}</span>`, base: PRODUCTS.filter((p) => p.category === id) });
}
function pageDeals() {
  pageListing({ title: "🔥 Deals", crumbs: `<a href="#/">Home</a> / <span>Deals</span>`, base: PRODUCTS.filter((p) => p.oldPrice) });
}
function searchProducts(q) {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  return PRODUCTS.filter((p) => {
    const hay = `${p.name} ${p.brand} ${catById(p.category).name} ${p.desc}`.toLowerCase();
    return terms.every((t) => hay.includes(t));
  });
}
function pageSearch(q) {
  $("#searchInput").value = q;
  pageListing({ title: `Results for “${esc(q)}”`, crumbs: `<a href="#/">Home</a> / <span>Search</span>`, base: searchProducts(q) });
}

function pageProduct(id) {
  const p = byId(id);
  if (!p) return pageNotFound();
  const c = catById(p.category);
  const d = discount(p);
  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);
  const shifts = [0, 40, 180, 300];
  let qty = 1;

  app.innerHTML = `
    <div class="crumbs"><a href="#/">Home</a> / <a href="#/c/${c.id}">${c.name}</a> / <span>${esc(p.name)}</span></div>
    <div class="pdp">
      <div>
        <div id="mainImg">${thumb(p, "big")}</div>
        <div class="gallery-row">${shifts.map((s, i) => `<div data-shift="${s}" class="${i === 0 ? "sel" : ""}">${thumb(p, i === 0 ? "sel" : "", s)}</div>`).join("")}</div>
      </div>
      <div>
        <span class="brand muted" style="font-weight:600;text-transform:uppercase;font-size:13px;letter-spacing:.5px">${esc(p.brand)}</span>
        <h1>${esc(p.name)}</h1>
        <div class="rating">${stars(p.rating)} <b style="color:var(--text)">${p.rating}</b> · ${p.reviews} reviews · Code: VX-${p.id.toUpperCase()}${(p.price % 997)}</div>
        <p class="lead">${esc(p.desc)}</p>
        <div class="buy-box">
          ${p.oldPrice ? `<span class="price-old">${fmt(p.oldPrice)}</span>` : ""}
          <span class="price">${fmt(p.price)}</span>${d ? `<span class="save">Save ${fmt(p.oldPrice - p.price)} (−${d}%)</span>` : ""}
          <div class="muted" style="font-size:13px">${fmt(p.price / 1.21)} excl. VAT</div>
          <div style="margin-top:10px">${stockLabel(p)}${p.stock ? ` · <span class="muted" style="font-size:13px">Pick up tomorrow or delivered in 1–2 days</span>` : ""}</div>
          <div class="buy-row">
            <div class="qty">
              <button id="qDec" aria-label="Decrease">−</button>
              <input id="qVal" value="1" inputmode="numeric" aria-label="Quantity" />
              <button id="qInc" aria-label="Increase">+</button>
            </div>
            <button class="btn btn-primary btn-lg" id="buyBtn" ${p.stock === 0 ? "disabled" : ""}>${icon("cartPlus")} ${p.stock === 0 ? "Out of stock" : "Add to cart"}</button>
            <button class="btn btn-ghost wish-btn-inline ${state.wish.includes(p.id) ? "on" : ""}" data-wish="${p.id}" title="Wishlist" style="padding:0 14px">${icon("heart")}</button>
          </div>
          <ul class="perks">
            <li>${icon("check")} Free delivery over ${fmt(FREE_SHIP)}</li>
            <li>${icon("check")} 30-day hassle-free returns</li>
            <li>${icon("check")} 2-year warranty included</li>
          </ul>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="section-head"><h2>Specifications</h2></div>
      <div class="panel"><table class="specs">${Object.entries(p.specs).map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join("")}<tr><td>Brand</td><td>${esc(p.brand)}</td></tr><tr><td>Warranty</td><td>24 months</td></tr></table></div>
    </section>
    ${related.length ? `<section class="section"><div class="section-head"><h2>You might also like</h2><a href="#/c/${c.id}">More ${c.name.toLowerCase()} →</a></div>${grid(related)}</section>` : ""}`;

  const setQ = (v) => { qty = Math.max(1, Math.min(p.stock || 1, v | 0 || 1)); $("#qVal").value = qty; };
  $("#qDec").onclick = () => setQ(qty - 1);
  $("#qInc").onclick = () => setQ(qty + 1);
  $("#qVal").onchange = (e) => setQ(e.target.value);
  $("#buyBtn").onclick = () => { addToCart(p.id, qty); openDrawer(); };
  $$(".gallery-row > div").forEach((el) => el.onclick = () => {
    $$(".gallery-row .thumb").forEach((t) => t.classList.remove("sel"));
    el.querySelector(".thumb").classList.add("sel");
    $("#mainImg").innerHTML = thumb(p, "big", +el.dataset.shift);
  });
}

function summaryHTML(t, { showPromo = true, cta = "" } = {}) {
  return `<div class="panel summary">
    <h3 style="margin-bottom:6px">Order summary</h3>
    <div class="sum-row"><span>Items (${t.items})</span><span>${fmt(t.subtotal)}</span></div>
    ${t.savings ? `<div class="sum-row"><span>You save on sale prices</span><span class="disc">−${fmt(t.savings)}</span></div>` : ""}
    ${t.promoOff ? `<div class="sum-row"><span>Promo ${state.promo}</span><span class="disc">−${fmt(t.promoOff)}</span></div>` : ""}
    <div class="sum-row"><span>Delivery</span><span>${t.shipCost ? fmt(t.shipCost) : "Free"}</span></div>
    ${t.payCost ? `<div class="sum-row"><span>Cash on delivery fee</span><span>${fmt(t.payCost)}</span></div>` : ""}
    <div class="sum-row total"><span>Total</span><span>${fmt(t.total)}</span></div>
    <div class="muted" style="font-size:12px;text-align:right">incl. VAT</div>
    ${showPromo ? (state.promo
      ? `<div class="applied"><span>✓ ${state.promo} applied (−${Math.round(PROMO_CODES[state.promo] * 100)}%)</span><button id="removePromo">Remove</button></div>`
      : `<form class="promo-form" id="promoForm"><input id="promoInput" placeholder="Promo code (try TECH10)" /><button class="btn btn-ghost btn-sm">Apply</button></form>`) : ""}
    ${cta}
  </div>`;
}
function bindPromo() {
  const f = $("#promoForm");
  if (f) f.onsubmit = (e) => {
    e.preventDefault();
    const code = $("#promoInput").value.trim().toUpperCase();
    if (PROMO_CODES[code]) { state.promo = code; save("promo", code); toast(`Promo code <b>${code}</b> applied`, true); route(); updateHeader(); }
    else { toast("That promo code doesn't exist"); $("#promoInput").select(); }
  };
  const r = $("#removePromo");
  if (r) r.onclick = () => { state.promo = null; save("promo", null); route(); };
}

function pageCart() {
  if (!state.cart.length) {
    app.innerHTML = `<h1 class="page-title" style="margin-bottom:20px">Cart</h1><div class="empty-state">${icon("cart")}<h3>Your cart is empty</h3><p>Looks like you haven't added anything yet.</p><a href="#/" class="btn btn-primary">Start shopping</a></div>`;
    return;
  }
  const t = totals();
  app.innerHTML = `
    <div class="steps"><div class="step cur"><span class="n">1</span>Cart</div><div class="step"><span class="n">2</span>Delivery & payment</div><div class="step"><span class="n">3</span>Done</div></div>
    <div class="two-col">
      <div class="panel">
        <div class="section-head" style="margin-bottom:4px"><h2>Cart (${t.items})</h2><button class="btn btn-ghost btn-sm" id="clearCart">${icon("trash")} Empty cart</button></div>
        ${state.cart.map((l) => lineHTML(l)).join("")}
        <div style="margin-top:14px">${freeShipBar(t.subtotal)}</div>
      </div>
      ${summaryHTML(t, { cta: `<a href="#/checkout" class="btn btn-green btn-lg btn-block">Continue to checkout ${icon("arrow")}</a><a href="#/" class="btn btn-ghost btn-block">Continue shopping</a>` })}
    </div>`;
  $("#clearCart").onclick = () => { if (confirm("Remove all items from your cart?")) { state.cart = []; persistCart(); } };
  bindPromo();
}

function pageCheckout() {
  if (!state.cart.length) { location.hash = "#/cart"; return; }
  const t = totals();
  const draft = load("draft", {});
  const field = (id, label, opts = {}) => `<div class="field ${opts.full ? "full" : ""}" data-field="${id}">
      <label for="${id}">${label}</label>
      <input id="${id}" name="${id}" type="${opts.type || "text"}" placeholder="${opts.ph || ""}" value="${esc(draft[id] || "")}" ${opts.attrs || ""} />
      <div class="msg">${opts.msg || "Please fill this in"}</div></div>`;
  const option = (group, o, sel, priceText) => `<label class="option ${sel ? "sel" : ""}">
      <input type="radio" name="${group}" value="${o.id}" ${sel ? "checked" : ""} />
      <div class="o-main"><b>${o.name}</b><span>${o.desc}</span></div>
      <span class="o-price">${priceText}</span></label>`;

  app.innerHTML = `
    <div class="steps"><div class="step done"><span class="n">✓</span><a href="#/cart">Cart</a></div><div class="step cur"><span class="n">2</span>Delivery & payment</div><div class="step"><span class="n">3</span>Done</div></div>
    <form class="two-col" id="checkoutForm" novalidate>
      <div>
        <div class="panel form-section">
          <h3>${icon("truck")} Delivery</h3>
          <div class="options">${SHIPPING.map((s) => {
            const free = t.freeShip && s.id !== "express";
            return option("shipping", s, state.checkout.shipping === s.id, s.price === 0 || free ? `<span style="color:var(--green)">Free</span>` : fmt(s.price));
          }).join("")}</div>
        </div>
        <div class="panel form-section">
          <h3>${icon("lock")} Payment</h3>
          <div class="options">${PAYMENT.map((p) => option("payment", p, state.checkout.payment === p.id, p.price ? "+" + fmt(p.price) : `<span style="color:var(--green)">Free</span>`)).join("")}</div>
          <div class="form-grid card-fields" id="cardFields" ${state.checkout.payment === "card" ? "" : "hidden"}>
            ${field("cardNumber", "Card number", { full: true, ph: "4242 4242 4242 4242", attrs: 'inputmode="numeric" maxlength="19" autocomplete="off"', msg: "Enter 16 digits (any fake number)" })}
            ${field("cardExp", "Expiry", { ph: "MM/YY", attrs: 'maxlength="5" autocomplete="off"', msg: "Use MM/YY" })}
            ${field("cardCvc", "CVC", { ph: "123", attrs: 'inputmode="numeric" maxlength="4" autocomplete="off"', msg: "3–4 digits" })}
          </div>
        </div>
        <div class="panel form-section">
          <h3>${icon("box")} Your details</h3>
          <div class="form-grid">
            ${field("name", "Full name", { ph: "Jan Novák" })}
            ${field("email", "E-mail", { type: "email", ph: "jan@example.com", msg: "Enter a valid e-mail" })}
            ${field("phone", "Phone", { type: "tel", ph: "+420 777 123 456", msg: "Enter a valid phone number" })}
            ${field("zip", "Postal code", { ph: "110 00", msg: "Enter a postal code" })}
            ${field("street", "Street and number", { full: true, ph: "Václavské náměstí 1" })}
            ${field("city", "City", { full: true, ph: "Praha" })}
          </div>
        </div>
        <div class="panel">
          <div class="section-head" style="margin-bottom:0"><h3>Items</h3><a href="#/cart">Edit cart</a></div>
          ${state.cart.map((l) => { const p = byId(l.id); return `<div class="line">${thumb(p)}<div class="line-info"><span class="name">${esc(p.name)}</span><span class="unit">${l.qty} × ${fmt(p.price)}</span></div><span class="line-price">${fmt(p.price * l.qty)}</span></div>`; }).join("")}
        </div>
      </div>
      ${summaryHTML(t, { cta: `<button type="submit" class="btn btn-green btn-lg btn-block">${icon("lock")} Place order · ${fmt(t.total)}</button><p class="muted" style="font-size:12px;margin:0;text-align:center">This is a demo. No real payment will be made.</p>` })}
    </form>`;

  $$('input[name="shipping"]').forEach((r) => r.onchange = () => { state.checkout.shipping = r.value; pageCheckout(); });
  $$('input[name="payment"]').forEach((r) => r.onchange = () => { state.checkout.payment = r.value; pageCheckout(); });
  bindPromo();

  const form = $("#checkoutForm");
  // Save draft so re-renders (changing delivery etc.) keep what was typed
  form.addEventListener("input", (e) => {
    if (!e.target.name || ["shipping", "payment"].includes(e.target.name)) return;
    if (e.target.id === "cardNumber") e.target.value = e.target.value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    if (e.target.id === "cardExp") e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4).replace(/^(\d{2})(\d)/, "$1/$2");
    if (e.target.id === "cardCvc") e.target.value = e.target.value.replace(/\D/g, "");
    e.target.closest(".field")?.classList.remove("err");
    const d = load("draft", {});
    if (!e.target.id.startsWith("card")) { d[e.target.id] = e.target.value; save("draft", d); }
  });

  form.onsubmit = (e) => {
    e.preventDefault();
    const v = (id) => ($("#" + id)?.value || "").trim();
    const rules = {
      name: v("name").length >= 3,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email")),
      phone: v("phone").replace(/\D/g, "").length >= 9,
      zip: v("zip").replace(/\s/g, "").length >= 3,
      street: v("street").length >= 3,
      city: v("city").length >= 2,
    };
    if (state.checkout.payment === "card") {
      rules.cardNumber = v("cardNumber").replace(/\s/g, "").length === 16;
      rules.cardExp = /^(0[1-9]|1[0-2])\/\d{2}$/.test(v("cardExp"));
      rules.cardCvc = /^\d{3,4}$/.test(v("cardCvc"));
    }
    let first = null;
    for (const [id, ok] of Object.entries(rules)) {
      const f = $(`[data-field="${id}"]`);
      f.classList.toggle("err", !ok);
      if (!ok && !first) first = f;
    }
    if (first) { first.scrollIntoView({ behavior: "smooth", block: "center" }); first.querySelector("input").focus({ preventScroll: true }); toast("Please check the highlighted fields"); return; }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = "Processing payment…";
    setTimeout(() => placeOrder({ name: v("name"), email: v("email"), city: v("city"), street: v("street") }), 1100);
  };
}

function placeOrder(customer) {
  const t = totals();
  const order = {
    id: "VX" + Date.now().toString().slice(-8),
    date: new Date().toISOString(),
    items: state.cart.map((l) => ({ id: l.id, qty: l.qty, price: byId(l.id).price })),
    total: t.total,
    shipping: SHIPPING.find((s) => s.id === state.checkout.shipping).name,
    payment: PAYMENT.find((p) => p.id === state.checkout.payment).name,
    customer,
  };
  state.orders.unshift(order);
  save("orders", state.orders);
  state.cart = []; state.promo = null;
  save("cart", []); save("promo", null);
  updateHeader(); renderDrawer();
  location.hash = "#/success/" + order.id;
}

function pageSuccess(id) {
  const o = state.orders.find((x) => x.id === id);
  if (!o) return pageNotFound();
  app.innerHTML = `<div class="success">
    <div class="check-ic">${icon("check")}</div>
    <h1>Thank you, ${esc(o.customer.name.split(" ")[0])}!</h1>
    <p class="muted">Your order was placed. A (fake) confirmation is on its way to <b>${esc(o.customer.email)}</b>.</p>
    <div class="order-no">Order #${o.id}</div>
    <div class="panel" style="box-shadow:none;border:1px solid var(--line);text-align:left">
      ${o.items.map((i) => { const p = byId(i.id); return `<div class="line">${thumb(p)}<div class="line-info"><span class="name">${esc(p.name)}</span><span class="unit">${i.qty} × ${fmt(i.price)}</span></div><span class="line-price">${fmt(i.qty * i.price)}</span></div>`; }).join("")}
      <div class="sum-row" style="margin-top:8px"><span>Delivery</span><span>${o.shipping}</span></div>
      <div class="sum-row"><span>Payment</span><span>${o.payment}</span></div>
      <div class="sum-row total"><span>Total paid</span><span>${fmt(o.total)}</span></div>
    </div>
    <div style="display:flex;gap:10px;justify-content:center;margin-top:24px;flex-wrap:wrap">
      <a href="#/orders" class="btn btn-ghost">View my orders</a>
      <a href="#/" class="btn btn-primary">Continue shopping</a>
    </div>
  </div>`;
}

function pageOrders() {
  if (!state.orders.length) {
    app.innerHTML = `<h1 class="page-title" style="margin-bottom:20px">My orders</h1><div class="empty-state">${icon("box")}<h3>No orders yet</h3><p>When you place an order, it'll show up here.</p><a href="#/" class="btn btn-primary">Start shopping</a></div>`;
    return;
  }
  app.innerHTML = `<h1 class="page-title" style="margin-bottom:20px">My orders</h1>` + state.orders.map((o) => {
    const hours = (Date.now() - new Date(o.date)) / 36e5;
    const status = hours > 24 ? ["Delivered", "delivered"] : hours > 0.05 ? ["Shipped", ""] : ["Processing", ""];
    return `<div class="panel order">
      <div class="order-head">
        <div><b>Order #${o.id}</b><div class="muted" style="font-size:13px">${new Date(o.date).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })} · ${o.shipping}</div></div>
        <span class="status ${status[1]}">${status[0]}</span>
        <b>${fmt(o.total)}</b>
      </div>
      <div class="order-items">${o.items.map((i) => `<a href="#/p/${i.id}" title="${esc(byId(i.id).name)} ×${i.qty}">${thumb(byId(i.id))}</a>`).join("")}</div>
      <div style="margin-top:12px"><button class="btn btn-ghost btn-sm" data-reorder="${o.id}">${icon("refresh")} Buy again</button></div>
    </div>`;
  }).join("");
  $$("[data-reorder]").forEach((b) => b.onclick = () => {
    const o = state.orders.find((x) => x.id === b.dataset.reorder);
    o.items.forEach((i) => { if (byId(i.id).stock) addToCart(i.id, i.qty); });
    openDrawer();
  });
}

function pageWishlist() {
  const list = state.wish.map(byId).filter(Boolean);
  app.innerHTML = `<h1 class="page-title" style="margin-bottom:20px">Wishlist</h1>` + (list.length ? grid(list) :
    `<div class="empty-state">${icon("heart")}<h3>Your wishlist is empty</h3><p>Tap the heart on any product to save it for later.</p><a href="#/" class="btn btn-primary">Browse products</a></div>`);
}

function pageNotFound() {
  app.innerHTML = `<div class="empty-state">${icon("search")}<h3>Page not found</h3><p>This page doesn't exist (much like our products).</p><a href="#/" class="btn btn-primary">Go home</a></div>`;
}

// ---------- Router ----------
let currentRoute = "";
function route() {
  const hash = location.hash.slice(2) || "";
  const [path, query] = hash.split("?");
  const parts = path.split("/");
  const prev = currentRoute + location.hash;
  currentRoute = parts[0] || "home";

  if (currentRoute !== "search") $("#searchInput").value = "";
  if (!["c", "search", "deals"].includes(currentRoute)) Object.assign(listState, { brands: [], min: "", max: "", inStock: false });

  switch (currentRoute) {
    case "home": pageHome(); break;
    case "c": pageCategory(parts[1]); break;
    case "deals": pageDeals(); break;
    case "search": pageSearch(new URLSearchParams(query).get("q") || ""); break;
    case "p": pageProduct(parts[1]); break;
    case "cart": pageCart(); break;
    case "checkout": pageCheckout(); break;
    case "success": pageSuccess(parts[1]); break;
    case "orders": pageOrders(); break;
    case "wishlist": pageWishlist(); break;
    default: pageNotFound();
  }
  $$("#catnavInner a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === location.hash));
  return prev;
}
window.addEventListener("hashchange", () => {
  route();
  window.scrollTo({ top: 0, behavior: "instant" });
  closeDrawer();
  $("#suggest").classList.remove("open");
});

// ---------- Global events ----------
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) { e.preventDefault(); addToCart(add.dataset.add); return; }
  const wish = e.target.closest("[data-wish]");
  if (wish) { e.preventDefault(); toggleWish(wish.dataset.wish); return; }
  const inc = e.target.closest("[data-inc]");
  if (inc) { setQty(inc.dataset.inc, cartQty(inc.dataset.inc) + 1); return; }
  const dec = e.target.closest("[data-dec]");
  if (dec) { setQty(dec.dataset.dec, cartQty(dec.dataset.dec) - 1); return; }
  const rm = e.target.closest("[data-remove]");
  if (rm) { const p = byId(rm.dataset.remove); removeFromCart(p.id); toast(`Removed ${esc(p.name)}`); return; }
  if (e.target.closest("[data-close]")) closeDrawer();
  if (!e.target.closest("#searchForm")) $("#suggest").classList.remove("open");
});
document.addEventListener("change", (e) => {
  if (e.target.matches("[data-qty]")) setQty(e.target.dataset.qty, parseInt(e.target.value, 10) || 0);
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });
$("#cartBtn").onclick = openDrawer;
$("#overlay").onclick = closeDrawer;
$("#drawerClose").onclick = closeDrawer;
$("#menuBtn").onclick = () => $("#catnav").scrollIntoView();

// Search with live suggestions
const searchInput = $("#searchInput");
const suggest = $("#suggest");
let activeIdx = -1;
searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim();
  activeIdx = -1;
  if (q.length < 2) { suggest.classList.remove("open"); return; }
  const res = searchProducts(q).slice(0, 6);
  suggest.innerHTML = res.length
    ? res.map((p) => `<a href="#/p/${p.id}">${thumb(p)}<span class="s-name">${esc(p.name)}</span><span class="s-price">${fmt(p.price)}</span></a>`).join("")
    : `<div class="empty">No products found for “${esc(q)}”</div>`;
  suggest.classList.add("open");
});
searchInput.addEventListener("keydown", (e) => {
  const links = $$("a", suggest);
  if (!links.length || !suggest.classList.contains("open")) return;
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    activeIdx = (activeIdx + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
    links.forEach((l, i) => l.classList.toggle("active", i === activeIdx));
  } else if (e.key === "Enter" && activeIdx >= 0) {
    e.preventDefault();
    location.hash = links[activeIdx].getAttribute("href");
  }
});
$("#searchForm").onsubmit = (e) => {
  e.preventDefault();
  const q = searchInput.value.trim();
  if (q) location.hash = "#/search?q=" + encodeURIComponent(q);
  suggest.classList.remove("open");
  searchInput.blur();
};

// ---------- Init ----------
$("#catnavInner").innerHTML = `<a href="#/deals">${icon("store")}Deals</a>` + CATEGORIES.map((c) => `<a href="#/c/${c.id}">${icon(c.icon)}${c.name}</a>`).join("");
$("#footerCats").innerHTML = CATEGORIES.map((c) => `<a href="#/c/${c.id}">${c.name}</a>`).join("");
updateHeader();
renderDrawer();
route();
