// Fake product catalogue. Everything here is made up.
const CATEGORIES = [
  { id: "laptops", name: "Laptops", icon: "laptop" },
  { id: "phones", name: "Phones", icon: "phone" },
  { id: "tablets", name: "Tablets", icon: "tablet" },
  { id: "audio", name: "Audio", icon: "headphones" },
  { id: "tv", name: "TV & Monitors", icon: "tv" },
  { id: "gaming", name: "Gaming", icon: "gamepad" },
  { id: "wearables", name: "Wearables", icon: "watch" },
  { id: "accessories", name: "Accessories", icon: "keyboard" },
];

// [id, category, name, brand, price, oldPrice|null, rating, reviews, stock, hue, icon, short description, specs]
const RAW = [
  ["l1", "laptops", "NovaBook Pro 14", "Nova", 42990, 47990, 4.8, 312, 14, 220, "laptop", "Lightweight 14\" laptop with an all-day battery and a crisp 2.8K OLED display.", { CPU: "Nova N3 Pro, 12 cores", RAM: "16 GB", Storage: "1 TB SSD", Display: "14\" OLED 2880×1800, 120 Hz", Battery: "Up to 20 h", Weight: "1.35 kg" }],
  ["l2", "laptops", "Zentra Air 13", "Zentra", 24990, null, 4.5, 198, 32, 200, "laptop", "Thin and silent everyday laptop with fanless design.", { CPU: "Zentra Z7 8-core", RAM: "8 GB", Storage: "512 GB SSD", Display: "13.3\" IPS 2560×1600", Battery: "Up to 15 h", Weight: "1.15 kg" }],
  ["l3", "laptops", "Raptor X17 Gaming", "Raptor", 58990, 64990, 4.7, 241, 6, 0, "laptop", "Desktop-class gaming power with a 240 Hz display and RGB keyboard.", { CPU: "16-core 5.4 GHz", GPU: "RTX-class 12 GB", RAM: "32 GB", Storage: "2 TB SSD", Display: "17.3\" QHD 240 Hz", Weight: "2.9 kg" }],
  ["l4", "laptops", "Lumen Flip 15", "Lumen", 19990, 22490, 4.2, 87, 21, 160, "laptop", "Convertible 2-in-1 with touchscreen and stylus support.", { CPU: "Lumen L5 6-core", RAM: "16 GB", Storage: "512 GB SSD", Display: "15.6\" FHD touch", Battery: "Up to 11 h", Weight: "1.8 kg" }],
  ["l5", "laptops", "Orbit Studio 16", "Orbit", 71990, null, 4.9, 56, 3, 270, "laptop", "Creator workstation with a colour-accurate mini-LED screen.", { CPU: "Orbit O9 Max", RAM: "64 GB", Storage: "2 TB SSD", Display: "16\" mini-LED 3456×2234", Battery: "Up to 18 h", Weight: "2.1 kg" }],

  ["p1", "phones", "Nova Phone 15", "Nova", 27990, null, 4.7, 1204, 48, 210, "phone", "Flagship phone with a triple 50 MP camera system.", { Display: "6.3\" OLED 120 Hz", Chip: "Nova A18", Storage: "256 GB", Camera: "50 + 50 + 12 MP", Battery: "4500 mAh", "5G": "Yes" }],
  ["p2", "phones", "Zentra S24 Ultra", "Zentra", 31990, 34990, 4.8, 876, 19, 30, "phone", "Huge display, built-in pen and 200 MP zoom camera.", { Display: "6.8\" AMOLED 120 Hz", Chip: "Octa-core 3.3 GHz", Storage: "512 GB", Camera: "200 MP, 10× zoom", Battery: "5000 mAh", "5G": "Yes" }],
  ["p3", "phones", "Pixelo 9a", "Pixelo", 11990, 13490, 4.5, 643, 60, 140, "phone", "Great camera and clean software at a midrange price.", { Display: "6.1\" OLED 90 Hz", Chip: "Pixelo T4", Storage: "128 GB", Camera: "64 MP", Battery: "4400 mAh", "5G": "Yes" }],
  ["p4", "phones", "Kiwi Note 13", "Kiwi", 6490, null, 4.1, 2210, 120, 100, "phone", "Budget phone with a big battery and fast charging.", { Display: "6.6\" LCD 90 Hz", Chip: "Octa-core 2.4 GHz", Storage: "128 GB", Camera: "50 MP", Battery: "6000 mAh", "5G": "No" }],
  ["p5", "phones", "Fold Z5", "Zentra", 44990, 49990, 4.4, 154, 0, 300, "phone", "Foldable phone that opens into a 7.6\" tablet.", { Display: "7.6\" foldable + 6.2\" cover", Chip: "Octa-core 3.3 GHz", Storage: "512 GB", Camera: "50 MP", Battery: "4400 mAh", "5G": "Yes" }],

  ["t1", "tablets", "NovaPad Air 11", "Nova", 17990, null, 4.7, 432, 25, 190, "tablet", "Powerful, light tablet for work and creativity.", { Display: "11\" Liquid LCD", Chip: "Nova N2", Storage: "128 GB", Pen: "Supported", Weight: "460 g" }],
  ["t2", "tablets", "Zentra Tab S9", "Zentra", 21490, 23990, 4.6, 221, 11, 250, "tablet", "AMOLED tablet with included stylus and water resistance.", { Display: "11\" AMOLED 120 Hz", Chip: "Octa-core", Storage: "256 GB", Pen: "Included", Weight: "498 g" }],
  ["t3", "tablets", "Kiwi Pad 6", "Kiwi", 7490, 8490, 4.3, 512, 40, 90, "tablet", "Affordable tablet for movies, reading and browsing.", { Display: "11\" LCD 144 Hz", Chip: "Octa-core", Storage: "128 GB", Pen: "Optional", Weight: "490 g" }],

  ["a1", "audio", "Sonix WH-1000", "Sonix", 8990, 10490, 4.8, 1834, 70, 230, "headphones", "Industry-leading noise cancelling over-ear headphones.", { Type: "Over-ear, wireless", ANC: "Yes, adaptive", Battery: "30 h", Bluetooth: "5.3", Weight: "250 g" }],
  ["a2", "audio", "Nova Buds Pro 2", "Nova", 6290, null, 4.7, 2950, 90, 210, "earbuds", "True wireless earbuds with spatial audio.", { Type: "In-ear, true wireless", ANC: "Yes", Battery: "6 h (30 h with case)", Bluetooth: "5.3", "Water resistance": "IPX4" }],
  ["a3", "audio", "Boomer Go 4", "Boomer", 2790, 3290, 4.6, 1120, 140, 15, "speaker", "Rugged portable speaker that floats.", { Type: "Portable speaker", Power: "20 W", Battery: "15 h", "Water resistance": "IP67", Weight: "540 g" }],
  ["a4", "audio", "Kiwi Buds 5", "Kiwi", 990, null, 4.2, 4021, 300, 120, "earbuds", "Cheap and cheerful wireless earbuds.", { Type: "In-ear, true wireless", ANC: "No", Battery: "7 h (28 h with case)", Bluetooth: "5.3", "Water resistance": "IPX4" }],
  ["a5", "audio", "Sonix HT-S500 Soundbar", "Sonix", 11990, 14990, 4.5, 301, 9, 260, "speaker", "Dolby Atmos soundbar with wireless subwoofer.", { Channels: "5.1", Power: "500 W", Connectivity: "HDMI eARC, BT, Wi-Fi", Subwoofer: "Wireless" }],

  ["v1", "tv", "Lumen OLED 55\" C4", "Lumen", 32990, 39990, 4.9, 512, 8, 280, "tv", "Perfect blacks, 144 Hz and Dolby Vision for movies and gaming.", { Size: "55\"", Panel: "OLED 4K", "Refresh rate": "144 Hz", HDR: "Dolby Vision, HDR10", "Smart TV": "Yes" }],
  ["v2", "tv", "Zentra QLED 65\" Q70", "Zentra", 24990, null, 4.6, 340, 15, 200, "tv", "Big, bright quantum-dot TV for the living room.", { Size: "65\"", Panel: "QLED 4K", "Refresh rate": "120 Hz", HDR: "HDR10+", "Smart TV": "Yes" }],
  ["v3", "tv", "Orbit 27\" 4K Monitor", "Orbit", 8990, 10990, 4.7, 760, 33, 180, "monitor", "Sharp USB-C monitor with 65 W charging.", { Size: "27\"", Resolution: "3840×2160", Panel: "IPS", "Refresh rate": "60 Hz", Ports: "USB-C 65 W, HDMI, DP" }],
  ["v4", "tv", "Raptor 32\" 165 Hz Curved", "Raptor", 7490, null, 4.5, 444, 18, 350, "monitor", "Immersive curved gaming monitor.", { Size: "32\" curved 1500R", Resolution: "2560×1440", Panel: "VA", "Refresh rate": "165 Hz", Ports: "HDMI ×2, DP" }],

  ["g1", "gaming", "PlayBox 5 Slim", "PlayBox", 12990, 13990, 4.9, 3210, 22, 230, "console", "Next-gen console with ultra-fast SSD.", { Storage: "1 TB SSD", Resolution: "Up to 4K 120 Hz", Drive: "Blu-ray", Controller: "Included" }],
  ["g2", "gaming", "Switcheroo OLED", "Kiwi", 8490, null, 4.8, 2100, 30, 0, "console", "Hybrid console you can play at home or on the go.", { Display: "7\" OLED", Storage: "64 GB", Battery: "4.5–9 h", Controller: "Detachable" }],
  ["g3", "gaming", "Raptor Pro Controller", "Raptor", 1890, 2190, 4.4, 980, 85, 350, "gamepad", "Pro controller with back paddles and hall-effect sticks.", { Connection: "Wireless 2.4 GHz / BT", Battery: "40 h", Compatibility: "PC, console, mobile" }],
  ["g4", "gaming", "Raptor Viper Mouse", "Raptor", 1290, null, 4.6, 1500, 110, 120, "mouse", "Ultralight 58 g wireless gaming mouse.", { Sensor: "26 000 DPI", Weight: "58 g", Battery: "90 h", Connection: "Wireless 2.4 GHz" }],

  ["w1", "wearables", "Nova Watch 10", "Nova", 10990, null, 4.7, 1340, 45, 330, "watch", "Smartwatch with health tracking and always-on display.", { Display: "1.9\" OLED", GPS: "Yes", "Water resistance": "50 m", Battery: "18 h", Sensors: "ECG, SpO2, heart rate" }],
  ["w2", "wearables", "Zentra Galaxy Watch 7", "Zentra", 7990, 8990, 4.5, 610, 27, 190, "watch", "Round smartwatch with sleep coaching.", { Display: "1.5\" AMOLED", GPS: "Yes", "Water resistance": "50 m", Battery: "40 h", Sensors: "BIA, heart rate" }],
  ["w3", "wearables", "Kiwi Band 9", "Kiwi", 1190, null, 4.4, 5200, 200, 60, "watch", "Fitness band with 2-week battery life.", { Display: "1.6\" AMOLED", GPS: "Connected", "Water resistance": "50 m", Battery: "14 days", Sensors: "Heart rate, SpO2" }],

  ["c1", "accessories", "Raptor TKL Mechanical Keyboard", "Raptor", 2490, 2990, 4.6, 720, 55, 280, "keyboard", "Hot-swappable mechanical keyboard with RGB.", { Layout: "Tenkeyless", Switches: "Linear, hot-swap", Connection: "USB-C / 2.4 GHz", Backlight: "RGB" }],
  ["c2", "accessories", "Volt 65 W GaN Charger", "Volt", 890, null, 4.8, 3300, 400, 45, "charger", "Tiny 3-port charger for laptop, phone and tablet.", { Power: "65 W", Ports: "2× USB-C, 1× USB-A", Tech: "GaN" }],
  ["c3", "accessories", "Volt PowerBank 20 000", "Volt", 1190, 1390, 4.5, 2100, 160, 160, "battery", "High-capacity power bank with fast charging.", { Capacity: "20 000 mAh", Output: "30 W PD", Ports: "USB-C, USB-A", Weight: "350 g" }],
  ["c4", "accessories", "Orbit 4K Webcam", "Orbit", 2990, null, 4.3, 410, 0, 210, "camera", "4K webcam with auto-framing and dual mics.", { Resolution: "4K 30 fps", "Field of view": "90°", Mics: "Dual stereo", Mount: "Clip + tripod" }],
  ["c5", "accessories", "Lumen Wireless Mouse", "Lumen", 590, 790, 4.4, 1800, 250, 200, "mouse", "Quiet, ergonomic everyday mouse.", { Sensor: "4000 DPI", Battery: "24 months (AA)", Connection: "Bluetooth / USB", Buttons: "6" }],
];

const PRODUCTS = RAW.map(([id, category, name, brand, price, oldPrice, rating, reviews, stock, hue, icon, desc, specs]) => ({
  id, category, name, brand, price, oldPrice, rating, reviews, stock, hue, icon, desc, specs,
}));

const PROMO_CODES = { TECH10: 0.1, WELCOME: 0.05, FAKE50: 0.5 };
