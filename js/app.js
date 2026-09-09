const App = {
  // Helper for Indian Rupee currency formatting
  formatINR(amount) {
    if (typeof amount !== "number" || isNaN(amount)) return "₹0";
    return `₹${amount.toLocaleString("en-IN")}`;
  },

  products: [
    {
      id: "prod-macbook-pro",
      name: "MacBook Pro 16\"",
      category: "laptops",
      price: 249900,
      originalPrice: 269900,
      badge: "Bestseller",
      rating: 4.9,
      reviewsCount: 1420,
      description: "Apple M3 Pro chip with 12-core CPU and 18-core GPU. 16.2-inch Liquid Retina XDR display with ProMotion 120Hz. All-day battery life with zero security compromises.",
      specs: "M3 Pro · 18 GB RAM · 512 GB SSD · 22-hr Battery",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Processor", value: "Apple M3 Pro (12-core CPU, 18-core GPU)" },
        { label: "Unified Memory", value: "18 GB Unified Memory" },
        { label: "Storage", value: "512 GB Superfast NVMe SSD" },
        { label: "Display", value: "16.2\" Liquid Retina XDR, 3456×2234, 1600 nits peak" },
        { label: "Security Element", value: "Apple Secure Enclave (T2 Crypto Subsystem)" },
        { label: "Battery & Power", value: "Up to 22 hours video playback, 140W USB-C" },
        { label: "Ports", value: "3× Thunderbolt 4, HDMI, SDXC, MagSafe 3" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="10" width="52" height="34" rx="4"/><rect x="12" y="16" width="40" height="22" rx="2"/><path d="M2 44h60l-4 8H6z"/><circle cx="32" cy="30" r="3"/></svg>`
    },
    {
      id: "prod-dell-xps",
      name: "Dell XPS 15",
      category: "laptops",
      price: 179900,
      originalPrice: 194900,
      badge: "Top Rated",
      rating: 4.8,
      reviewsCount: 890,
      description: "Intel Core i9 with NVIDIA GeForce RTX 4070. 3.5K OLED InfinityEdge touchscreen display with CNC aluminum chassis and carbon fiber palm rest.",
      specs: "Intel i9 · 32 GB DDR5 · 1 TB NVMe · RTX 4070",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Processor", value: "13th Gen Intel Core i9-13900H (14-Core, up to 5.4 GHz)" },
        { label: "Graphics", value: "NVIDIA GeForce RTX 4070 8GB GDDR6" },
        { label: "Memory", value: "32 GB DDR5 4800MHz Dual Channel" },
        { label: "Storage", value: "1 TB M.2 PCIe NVMe Gen4 SSD" },
        { label: "Screen", value: "15.6\" 3.5K (3456×2160) OLED Touch Display" },
        { label: "Security", value: "Discrete TPM 2.0 & Windows Hello Fingerprint Reader" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="10" width="52" height="34" rx="4"/><rect x="12" y="16" width="40" height="22" rx="2"/><path d="M2 44h60l-4 8H6z"/><rect x="26" y="47" width="12" height="3" rx="1"/></svg>`
    },
    {
      id: "prod-ipad-pro",
      name: "iPad Pro 13\" M4",
      category: "laptops",
      price: 109900,
      originalPrice: 119900,
      badge: "Pro Choice",
      rating: 4.9,
      reviewsCount: 1150,
      description: "Ultra-thin OLED Tandem Ultra Retina XDR display powered by the groundbreaking Apple M4 chip. Supports Apple Pencil Pro and Magic Keyboard.",
      specs: "M4 Chip · 13\" OLED · 256 GB · Wi-Fi 6E · 10 hr",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Chipset", value: "Apple M4 (9-core CPU, 10-core GPU, 16-core NPU)" },
        { label: "Display", value: "13\" Ultra Retina XDR Tandem OLED, 2752×2064" },
        { label: "Capacity", value: "256 GB NVMe" },
        { label: "Biometric Security", value: "Face ID TrueDepth Camera" },
        { label: "Thickness", value: "5.1 mm Ultra-Slim Aluminum Design" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="6" width="44" height="52" rx="5"/><rect x="14" y="12" width="36" height="36" rx="2"/><circle cx="32" cy="54" r="2"/></svg>`
    },
    {
      id: "prod-iphone-15",
      name: "iPhone 15 Pro Max",
      category: "mobiles",
      price: 119900,
      originalPrice: 134900,
      badge: "New",
      rating: 4.9,
      reviewsCount: 2300,
      description: "Aerospace-grade titanium design with A17 Pro chip. 48 MP main camera system with 5x optical zoom telephoto and customizable Action button.",
      specs: "A17 Pro · 256 GB · 6.7\" OLED · 5G · 29-hr Video",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Build", value: "Grade 5 Titanium frame with Ceramic Shield front" },
        { label: "Processor", value: "A17 Pro chip with 6-core GPU & hardware ray tracing" },
        { label: "Camera", value: "48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto" },
        { label: "Display", value: "6.7\" Super Retina XDR with Always-On & ProMotion" },
        { label: "Security", value: "Secure Enclave with Face ID & FIDO2 Passkey Support" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="4" width="28" height="56" rx="6"/><rect x="22" y="10" width="20" height="36" rx="2"/><circle cx="32" cy="52" r="3"/><rect x="26" y="6" width="12" height="3" rx="1.5"/></svg>`
    },
    {
      id: "prod-samsung-s24",
      name: "Samsung Galaxy S24 Ultra",
      category: "mobiles",
      price: 109900,
      originalPrice: 129999,
      badge: "Popular",
      rating: 4.8,
      reviewsCount: 1740,
      description: "Galaxy AI flagship smartphone with built-in S Pen. 200 MP camera system with 100x Space Zoom, titanium frame, and flat Corning Gorilla Armor screen.",
      specs: "Snapdragon 8 Gen 3 · 12 GB RAM · 512 GB · 5000 mAh",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Processor", value: "Qualcomm Snapdragon 8 Gen 3 for Galaxy" },
        { label: "Camera", value: "200 MP Main + 50 MP 5x Zoom + 12 MP Ultra-Wide" },
        { label: "Stylus", value: "Integrated Bluetooth S Pen with Air Actions" },
        { label: "Display", value: "6.8\" Dynamic AMOLED 2X, 120Hz, 2600 nits" },
        { label: "Security", value: "Samsung Knox Vault with EAL5+ Hardware Protection" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="4" width="28" height="56" rx="6"/><rect x="22" y="10" width="20" height="36" rx="2"/><circle cx="32" cy="52" r="2"/><line x1="44" y1="4" x2="44" y2="12"/></svg>`
    },
    {
      id: "prod-pixel-9",
      name: "Google Pixel 9 Pro",
      category: "mobiles",
      price: 99900,
      originalPrice: 109900,
      badge: "AI Camera",
      rating: 4.8,
      reviewsCount: 920,
      description: "Google Tensor G4 chip with advanced Gemini Nano AI capabilities. Pro triple rear camera system and Titan M2 security coprocessor with 7 years of OS updates.",
      specs: "Tensor G4 · 16 GB RAM · 128 GB · 4700 mAh · 5G",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Processor", value: "Google Tensor G4 with Titan M2 security chip" },
        { label: "AI Hardware", value: "Gemini Nano on-device generative AI engine" },
        { label: "Camera", value: "50 MP Quad PD + 48 MP Ultra-Wide + 48 MP Telephoto" },
        { label: "Display", value: "6.3\" Super Actua OLED, 1-120Hz, 3000 nits peak" },
        { label: "Support", value: "7 years of OS, Security & Pixel Feature Drops" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="4" width="28" height="56" rx="6"/><rect x="22" y="10" width="20" height="36" rx="2"/><circle cx="32" cy="52" r="2"/><rect x="24" y="6" width="8" height="2" rx="1"/><circle cx="36" cy="16" r="4"/></svg>`
    },
    {
      id: "prod-airpods-pro",
      name: "AirPods Pro 2nd Gen",
      category: "accessories",
      price: 24900,
      originalPrice: 26900,
      badge: "Trending",
      rating: 4.9,
      reviewsCount: 3100,
      description: "Pro-level Active Noise Cancellation with Adaptive Audio and Transparency mode. Personalized Spatial Audio with dynamic head tracking and MagSafe charging case.",
      specs: "H2 Chip · ANC · MagSafe Case · 30-hr Total Battery",
      image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Audio Engine", value: "Apple H2 headphone chip + U1 case chip" },
        { label: "Noise Control", value: "2x more Active Noise Cancellation + Adaptive Audio" },
        { label: "Water Resistance", value: "IP54 dust, sweat, and water resistant" },
        { label: "Charging", value: "MagSafe (USB-C) with built-in speaker for Find My" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="24" cy="34" rx="6" ry="10"/><path d="M24 24V12a4 4 0 0 1 8 0v10"/><ellipse cx="40" cy="34" rx="6" ry="10"/><path d="M40 24V12a4 4 0 0 1 8 0v10"/><rect x="18" y="42" width="28" height="14" rx="4"/></svg>`
    },
    {
      id: "prod-smartwatch",
      name: "Apple Watch Series 10",
      category: "accessories",
      price: 39900,
      originalPrice: 46900,
      badge: "Editor's Pick",
      rating: 4.8,
      reviewsCount: 820,
      description: "Thinnest Apple Watch ever with our largest display. Sleep apnea notifications, ECG app, water temperature gauge, and 80% charge in just 30 minutes.",
      specs: "S10 Chip · Always-On OLED · GPS + Cellular · 18 hr",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Processor", value: "S10 SiP with 64-bit dual-core processor" },
        { label: "Display", value: "Wide-angle OLED, up to 2000 nits, Always-On" },
        { label: "Sensors", value: "Electrical heart sensor (ECG), SpO2, depth gauge" },
        { label: "Durability", value: "50m water resistant, crack-resistant front crystal" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="20" y="14" width="24" height="36" rx="6"/><rect x="24" y="20" width="16" height="24" rx="2"/><path d="M22 14v-6h20v6M22 50v6h20v-6"/><circle cx="32" cy="32" r="3"/></svg>`
    },
    {
      id: "prod-usb-hub",
      name: "Anker USB-C Hub 12-in-1",
      category: "accessories",
      price: 7990,
      originalPrice: 9990,
      badge: "Value",
      rating: 4.7,
      reviewsCount: 650,
      description: "12-in-1 USB-C docking station. Dual 4K HDMI, 100W Power Delivery pass-through, SD/microSD card reader, Gigabit Ethernet, and high-speed USB-A ports.",
      specs: "4K HDMI · 100W PD · 3× USB-A · SD/MicroSD · RJ45",
      image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Video Output", value: "Dual 4K@60Hz HDMI ports" },
        { label: "Power Delivery", value: "Supports up to 100W input (85W to host)" },
        { label: "Data Transfer", value: "10 Gbps USB-C & USB 3.2 Gen 2 ports" },
        { label: "Ethernet", value: "10/100/1000 Mbps RJ45 Gigabit port" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="22" width="48" height="20" rx="4"/><path d="M20 22v-8M32 22v-8M44 22v-8"/><rect x="14" y="28" width="8" height="8" rx="1"/><rect x="26" y="28" width="8" height="8" rx="1"/><rect x="38" y="28" width="8" height="8" rx="1"/></svg>`
    },
    {
      id: "prod-tshirt",
      name: "Premium Cotton T-Shirt",
      category: "clothing",
      price: 2499,
      originalPrice: 3499,
      badge: "Essentials",
      rating: 4.6,
      reviewsCount: 540,
      description: "100% organic ring-spun combed cotton with reinforced shoulder seams and ribbed crew neck. Super soft, breathable, and pre-shrunk.",
      specs: "100% Organic Cotton · 180 GSM · Pre-Shrunk · S–3XL",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Material", value: "100% Certified Organic Combed Cotton" },
        { label: "Fabric Weight", value: "180 GSM Single Jersey" },
        { label: "Fit", value: "Modern Regular Fit" },
        { label: "Care Instructions", value: "Machine wash cold, tumble dry low" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 8h24l8 12-8 4v28H20V24l-8-4z"/><path d="M20 8c0 4-4 8-8 8"/><path d="M44 8c0 4 4 8 8 8"/></svg>`
    },
    {
      id: "prod-jeans",
      name: "Slim-Fit Denim Jeans",
      category: "clothing",
      price: 5999,
      originalPrice: 7999,
      badge: "Classic",
      rating: 4.7,
      reviewsCount: 430,
      description: "Premium stretch denim engineered for all-day comfort. Slim straight cut with authentic indigo dye wash and copper hardware rivets.",
      specs: "98% Cotton 2% Elastane · Slim Fit · 5-Pocket · W28–W38",
      image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Fabric Blend", value: "98% Ring-Spun Cotton, 2% Spandex" },
        { label: "Weight", value: "12.5 oz Midweight Denim" },
        { label: "Closure", value: "YKK Heavy Duty Metal Zipper Fly with Shank Button" },
        { label: "Pockets", value: "Classic 5-pocket styling" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8h32l4 28-8 20H32l-4-20H20L12 36z"/><path d="M16 8l4 24M48 8l-4 24"/><line x1="20" y1="12" x2="44" y2="12"/></svg>`
    },
    {
      id: "prod-sneakers",
      name: "Nike Air Max 270",
      category: "clothing",
      price: 12999,
      originalPrice: 14995,
      badge: "Iconic",
      rating: 4.9,
      reviewsCount: 1980,
      description: "Nike's largest heel Air unit creates an ultra-soft ride that feels as impossible as it looks. Breathable engineered mesh upper with dual-density foam sole.",
      specs: "Air Max 270 · Mesh Upper · Foam Midsole · UK 6–12",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Cushioning", value: "270-degree Max Air heel unit" },
        { label: "Upper", value: "Woven & synthetic lightweight fabric" },
        { label: "Sole", value: "Solid rubber outsole with waffle traction pattern" },
        { label: "Fit", value: "Neoprene stretch bootie construction" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 40c0 0 10-16 26-16s30 8 30 8l-6 6H6z"/><path d="M6 40v6h52v-6"/><path d="M20 24c0-4 4-8 12-8"/></svg>`
    },
    {
      id: "prod-washing-machine",
      name: "Samsung Front-Load Washer",
      category: "appliances",
      price: 69990,
      originalPrice: 79990,
      badge: "A+++ Energy",
      rating: 4.8,
      reviewsCount: 710,
      description: "8 kg front-load washer featuring AI EcoBubble wash technology, Hygiene Steam sanitization, and Digital Inverter Motor with 20-year warranty.",
      specs: "8 KG · 1400 RPM · A+++ Energy · WiFi Connected",
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Capacity", value: "8.0 Kilograms Front Load" },
        { label: "Spin Speed", value: "Up to 1400 RPM" },
        { label: "Motor", value: "Digital Inverter Technology (Brushless)" },
        { label: "Smart Connectivity", value: "SmartThings App Control & Diagnostics" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="8" width="48" height="52" rx="4"/><circle cx="32" cy="36" r="14"/><circle cx="32" cy="36" r="9"/><circle cx="32" cy="36" r="3"/><rect x="14" y="14" width="8" height="6" rx="2"/><circle cx="46" cy="17" r="3"/></svg>`
    },
    {
      id: "prod-refrigerator",
      name: "LG Side-by-Side Fridge",
      category: "appliances",
      price: 119990,
      originalPrice: 139990,
      badge: "Smart Home",
      rating: 4.9,
      reviewsCount: 880,
      description: "617L Side-by-Side Smart Refrigerator with InstaView Door-in-Door, Linear Cooling, UVnano water dispenser hygiene, and ThinQ Wi-Fi control.",
      specs: "617 L · No-Frost · InstaView · WiFi · Inverter Linear",
      image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Total Capacity", value: "617 Litres (Freezer: 205L, Fresh: 412L)" },
        { label: "Compressor", value: "Inverter Linear Compressor (10-yr warranty)" },
        { label: "Features", value: "InstaView Glass Panel (Knock twice to see inside)" },
        { label: "Cooling Tech", value: "DoorCooling+ and Multi Air Flow" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="22" height="56" rx="3"/><rect x="34" y="4" width="22" height="56" rx="3"/><line x1="12" y1="30" x2="26" y2="30"/><line x1="38" y1="20" x2="52" y2="20"/><rect x="14" y="12" width="8" height="12" rx="2"/><rect x="38" y="10" width="6" height="4" rx="1"/></svg>`
    },
    {
      id: "prod-air-purifier",
      name: "Dyson Purifier Cool",
      category: "appliances",
      price: 49990,
      originalPrice: 56900,
      badge: "Premium",
      rating: 4.8,
      reviewsCount: 640,
      description: "HEPA H13 sealed air purifier and bladeless cooling fan. Automatically senses and captures 99.95% of microscopic pollutants as small as 0.1 microns.",
      specs: "HEPA H13 · 350° Oscillation · PM2.5 Sensor · App Control",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Filtration", value: "HEPA H13 + Activated Carbon 360-degree filter" },
        { label: "Airflow", value: "Air Multiplier technology (up to 290 litres/sec)" },
        { label: "Monitoring", value: "Integrated real-time LCD screen reporting AQI & PM2.5" },
        { label: "Oscillation", value: "Adjustable 45° to 350° smooth oscillation" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="32" cy="20" rx="18" ry="18"/><ellipse cx="32" cy="20" rx="10" ry="10"/><rect x="28" y="36" width="8" height="20" rx="2"/><rect x="20" y="54" width="24" height="6" rx="2"/></svg>`
    },
    {
      id: "prod-microwave",
      name: "Panasonic Inverter Microwave",
      category: "appliances",
      price: 18990,
      originalPrice: 22990,
      badge: "Inverter",
      rating: 4.7,
      reviewsCount: 480,
      description: "32L Convection Inverter Microwave with Genius Sensor cooking for fast, even heat distribution without overcooked edges. 301 Auto Cook menus.",
      specs: "1000W · 32 L · Inverter Tech · Sensor Cook · 301 Menus",
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80"
      ],
      details: [
        { label: "Capacity", value: "32 Litres Convection & Grill" },
        { label: "Output Power", value: "1000W Inverter Microwave Power" },
        { label: "Sensor", value: "One-Touch Genius Humidity Sensor Cooking" },
        { label: "Cavity", value: "Stainless Steel Easy-Clean Interior" }
      ],
      icon: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="14" width="56" height="36" rx="4"/><rect x="8" y="18" width="36" height="28" rx="2"/><rect x="48" y="20" width="8" height="6" rx="1"/><rect x="48" y="30" width="8" height="6" rx="1"/><rect x="48" y="40" width="8" height="4" rx="1"/><circle cx="26" cy="32" r="8"/></svg>`
    }
  ],

  activeCategory: "all",
  searchQuery: "",
  activeDetailProductId: null,
  activeDetailQuantity: 1,

  init() {
    this.seedInitialSecurityOfficer();
    this.bindGlobalEvents();
    this.bindAuthEvents();
    this.bindMfaEvents();
    this.bindShopEvents();
    this.bindSecurityEvents();

    const session = AuthService.getCurrentSession();
    if (session) {
      this.showView("dashboard");
    } else {
      this.showView("login");
    }

    this.updateGlobalStateDisplay();
  },

  seedInitialSecurityOfficer() {
    const existingUsers = StorageService.getUsers();
    if (existingUsers.length === 0) {
      const sampleSalt = "7c1e5a2d8f9b4c0e3a1d6f8b5c2e9a7d";
      const sampleHash = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918";
      const sampleTotpSecret = "JBSWY3DPEHPK3PXP";

      const officerUser = {
        fullName: "Security Officer",
        email: "officer@ca70a-lab.internal",
        passwordHash: sampleHash,
        salt: sampleSalt,
        createdAt: new Date().toISOString(),
        mfa: {
          type: "totp",
          data: {
            secret: sampleTotpSecret,
            algorithm: "SHA1",
            digits: 6,
            period: 30
          },
          enrolledAt: new Date().toISOString()
        }
      };
      StorageService.saveUser(officerUser);
    }
  },

  showView(viewId) {
    const views = document.querySelectorAll(".app-view");
    views.forEach(v => v.classList.remove("active"));

    const target = document.getElementById(`view-${viewId}`);
    if (target) {
      target.classList.add("active");
    }

    const session = AuthService.getCurrentSession();
    const navAuth = document.getElementById("nav-auth-section");
    const navGuest = document.getElementById("nav-guest-section");
    const navLinks = document.getElementById("nav-app-links");

    if (session) {
      if (navAuth) navAuth.style.display = "flex";
      if (navGuest) navGuest.style.display = "none";
      if (navLinks) navLinks.style.display = "flex";

      const userNameEl = document.getElementById("nav-user-name");
      const userInitialsEl = document.getElementById("nav-user-initials");
      if (userNameEl) userNameEl.textContent = session.fullName;
      if (userInitialsEl) {
        const initials = session.fullName
          .split(" ")
          .map(n => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2);
        userInitialsEl.textContent = initials || "CA";
      }
    } else {
      if (navAuth) navAuth.style.display = "none";
      if (navGuest) navGuest.style.display = "flex";
      if (navLinks) navLinks.style.display = "none";
    }

    if (viewId === "dashboard") {
      this.renderProducts();
      this.updateCartBadge();
    } else if (viewId === "security") {
      this.renderSecurityView();
    } else if (viewId === "product-details") {
      this.renderProductDetails();
      this.updateCartBadge();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    this.updateGlobalStateDisplay();
  },

  openProductDetails(productId) {
    if (!AuthService.isAuthenticated()) {
      this.showToast("Please sign in to view product details.");
      this.showView("login");
      return;
    }
    this.activeDetailProductId = productId;
    this.activeDetailQuantity = 1;
    this.showView("product-details");
  },

  renderProductDetails() {
    const container = document.getElementById("product-details-container");
    if (!container) return;

    const product = this.products.find(p => p.id === this.activeDetailProductId) || this.products[0];
    if (!product) return;

    const discountPercent = product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

    const galleryImages = product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

    container.innerHTML = `
      <div class="details-breadcrumb-bar">
        <button type="button" class="btn-back-to-shop" id="btn-back-to-shop">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Store
        </button>
        <div class="breadcrumb-path">
          Store / <span style="text-transform: capitalize;">${product.category}</span> / <span>${product.name}</span>
        </div>
      </div>

      <div class="product-details-layout">
        <!-- LEFT: IMAGES GALLERY -->
        <div class="details-gallery-column">
          <div class="details-main-img-box">
            <img src="${product.image}" alt="${product.name}" class="details-main-img" id="detail-active-large-img">
            <div class="details-security-seal">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              FIDO2 Protected Hardware
            </div>
          </div>

          ${galleryImages.length > 1 ? `
            <div class="details-thumbnails-row">
              ${galleryImages.map((imgUrl, idx) => `
                <div class="thumbnail-item ${idx === 0 ? 'active' : ''}" data-src="${imgUrl}">
                  <img src="${imgUrl}" alt="Thumbnail ${idx + 1}">
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- RIGHT: PRODUCT INFO -->
        <div class="details-info-column">
          <div class="details-badge-row">
            <span class="details-badge">${product.badge}</span>
            <span class="details-sku">SKU: CA70A-${product.id.toUpperCase()}</span>
          </div>

          <h1 class="details-title">${product.name}</h1>

          <div class="details-rating-row">
            <div class="star-rating-box">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              <strong style="color: var(--ink); margin-left: 6px;">${product.rating || 4.9}</strong>
            </div>
            <span style="color: rgba(0,0,0,0.4);">·</span>
            <span style="color: rgba(0,0,0,0.6);">${(product.reviewsCount || 1200).toLocaleString('en-IN')} verified customer reviews</span>
          </div>

          <div class="details-price-box">
            <div style="display: flex; align-items: baseline; gap: 14px;">
              <span class="price-inr-highlight">${this.formatINR(product.price)}</span>
              ${product.originalPrice ? `
                <span style="font-size: 18px; color: rgba(0,0,0,0.45); text-decoration: line-through;">
                  ${this.formatINR(product.originalPrice)}
                </span>
                <span style="font-family: var(--font-mono); font-size: 13px; font-weight: 600; color: #1ea64a; background: #e8f7ec; padding: 2px 8px; border-radius: var(--rounded-pill);">
                  Save ${discountPercent}%
                </span>
              ` : ''}
            </div>
            <span class="price-tax-text">Inclusive of all GST &amp; free insured pan-India delivery</span>
          </div>

          <p class="details-desc-paragraph">${product.description}</p>

          <div class="details-specs-callout">
            <div class="details-specs-title">Primary Specification</div>
            <div class="details-specs-content">${product.specs}</div>
          </div>

          <div class="details-cta-actions">
            <div class="details-qty-row">
              <span class="details-qty-label">Quantity:</span>
              <div class="qty-stepper">
                <button type="button" class="btn-qty-minus" id="btn-detail-minus">−</button>
                <span class="qty-number" id="detail-qty-number">${this.activeDetailQuantity}</span>
                <button type="button" class="btn-qty-plus" id="btn-detail-plus">+</button>
              </div>
            </div>

            <div class="details-btn-group">
              <button type="button" class="btn-secondary" id="btn-detail-add-cart">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Add to Cart
              </button>
              <button type="button" class="btn-primary" id="btn-detail-buy-now">
                Buy with MFA
              </button>
            </div>
          </div>

          <div class="details-security-notice-card">
            <div class="security-icon-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div>
              <div class="security-notice-title">Cryptographic Order Assurance</div>
              <div class="security-notice-text">
                Every transaction requires cryptographic validation using your enrolled MFA factor (FIDO2 Passkey or RFC 6238 TOTP). Includes 1-Year Official Manufacturer Warranty and 30-day returns.
              </div>
            </div>
          </div>
        </div>
      </div>

      ${product.details && product.details.length > 0 ? `
        <div class="educational-table-card" style="margin-bottom: 64px;">
          <h3 class="edu-title">Full Technical Specifications</h3>
          <p class="edu-sub">Validated enterprise hardware characteristics for ${product.name}.</p>
          <div class="edu-table-wrapper">
            <table class="edu-table">
              <thead>
                <tr>
                  <th style="width: 35%;">Component / Parameter</th>
                  <th>Hardware Specification</th>
                </tr>
              </thead>
              <tbody>
                ${product.details.map(d => `
                  <tr>
                    <td><strong>${d.label}</strong></td>
                    <td>${d.value}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      ` : ''}
    `;

    // Bind back button
    const backBtn = container.querySelector("#btn-back-to-shop");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        this.showView("dashboard");
      });
    }

    // Bind thumbnail clicks
    const thumbnails = container.querySelectorAll(".thumbnail-item");
    const largeImg = container.querySelector("#detail-active-large-img");
    thumbnails.forEach(thumb => {
      thumb.addEventListener("click", () => {
        thumbnails.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        const newSrc = thumb.getAttribute("data-src");
        if (largeImg && newSrc) {
          largeImg.src = newSrc;
        }
      });
    });

    // Bind quantity buttons
    const minusBtn = container.querySelector("#btn-detail-minus");
    const plusBtn = container.querySelector("#btn-detail-plus");
    const qtyDisplay = container.querySelector("#detail-qty-number");

    if (minusBtn && qtyDisplay) {
      minusBtn.addEventListener("click", () => {
        if (this.activeDetailQuantity > 1) {
          this.activeDetailQuantity -= 1;
          qtyDisplay.textContent = this.activeDetailQuantity;
        }
      });
    }

    if (plusBtn && qtyDisplay) {
      plusBtn.addEventListener("click", () => {
        this.activeDetailQuantity += 1;
        qtyDisplay.textContent = this.activeDetailQuantity;
      });
    }

    // Bind Add to Cart
    const addCartBtn = container.querySelector("#btn-detail-add-cart");
    if (addCartBtn) {
      addCartBtn.addEventListener("click", () => {
        this.addToCart(product.id, this.activeDetailQuantity);
      });
    }

    // Bind Buy Now
    const buyNowBtn = container.querySelector("#btn-detail-buy-now");
    if (buyNowBtn) {
      buyNowBtn.addEventListener("click", () => {
        this.addToCart(product.id, this.activeDetailQuantity, false);
        this.openCheckoutModal();
      });
    }
  },

  bindGlobalEvents() {
    document.querySelectorAll("[data-navigate]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        const dest = btn.getAttribute("data-navigate");
        if (dest === "dashboard" || dest === "security") {
          if (!AuthService.isAuthenticated()) {
            this.showToast("Authentication required to access this resource.");
            this.showView("login");
            return;
          }
        }
        this.showView(dest);
      });
    });

    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        AuthService.logoutSession();
        this.showToast("Signed out. Session terminated.");
        this.showView("login");
      });
    }

    const clearCredsBtn = document.getElementById("btn-clear-credentials");
    if (clearCredsBtn) {
      clearCredsBtn.addEventListener("click", () => {
        if (confirm("Clear stored credentials and reset local security configuration?")) {
          StorageService.clearAllData();
          EmailOtpService.stopLiveTicker();
          this.seedInitialSecurityOfficer();
          this.showToast("Local credentials cleared. Baseline established.");
          this.showView("login");
        }
      });
    }

    const heroExploreBtn = document.getElementById("btn-hero-explore");
    if (heroExploreBtn) {
      heroExploreBtn.addEventListener("click", () => {
        const grid = document.getElementById("products-grid");
        if (grid) {
          grid.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    const heroSpotlightItem = document.getElementById("hero-spotlight-item");
    if (heroSpotlightItem) {
      heroSpotlightItem.addEventListener("click", () => {
        this.openProductDetails("prod-macbook-pro");
      });
    }

    const promoShopNowBtn = document.getElementById("btn-promo-shop-now");
    if (promoShopNowBtn) {
      promoShopNowBtn.addEventListener("click", () => {
        const grid = document.getElementById("products-grid");
        if (grid) {
          grid.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  },

  bindAuthEvents() {
    const loginForm = document.getElementById("form-login");
    const loginError = document.getElementById("login-error-message");

    if (loginForm) {
      loginForm.addEventListener("submit", async e => {
        e.preventDefault();
        if (loginError) loginError.style.display = "none";

        const emailInput = document.getElementById("login-email");
        const passwordInput = document.getElementById("login-password");

        try {
          const email = emailInput.value.trim();
          const password = passwordInput.value;

          const authResult = await AuthService.authenticateCredentials(email, password);
          const user = authResult.user;

          if (authResult.mfaRequired && authResult.mfaType) {
            MfaService.setChallengeUser(user);
            this.setupMfaVerificationView(user);
            this.showView("mfa-verify");
          } else {
            AuthService.loginSession(user);
            this.showToast(`Access granted. Authenticated as ${user.fullName}`);
            this.showView("dashboard");
          }
        } catch (err) {
          if (loginError) {
            loginError.textContent = err.message;
            loginError.style.display = "block";
          }
        }
      });
    }

    const passkeyDirectBtn = document.getElementById("btn-login-passkey-direct");
    if (passkeyDirectBtn) {
      passkeyDirectBtn.addEventListener("click", async () => {
        if (loginError) loginError.style.display = "none";
        const emailInput = document.getElementById("login-email");
        const emailVal = emailInput.value.trim();

        let targetUser = null;
        if (emailVal) {
          targetUser = StorageService.getUserByEmail(emailVal);
        } else {
          const users = StorageService.getUsers();
          targetUser = users.find(u => u.mfa && u.mfa.type === "passkey");
        }

        if (!targetUser || !targetUser.mfa || targetUser.mfa.type !== "passkey") {
          if (loginError) {
            loginError.textContent = "No registered Passkey found for this account. Sign in with email and password first, or enroll a passkey.";
            loginError.style.display = "block";
          }
          return;
        }

        try {
          MfaService.setChallengeUser(targetUser);
          const verified = await MfaService.verifyPasskeyLogin();
          if (verified) {
            AuthService.loginSession(targetUser);
            this.showToast(`Passkey assertion verified. Welcome back, ${targetUser.fullName}`);
            this.showView("dashboard");
          }
        } catch (err) {
          if (loginError) {
            loginError.textContent = err.message;
            loginError.style.display = "block";
          }
        }
      });
    }

    const registerForm = document.getElementById("form-register");
    const registerError = document.getElementById("register-error-message");

    if (registerForm) {
      registerForm.addEventListener("submit", async e => {
        e.preventDefault();
        if (registerError) registerError.style.display = "none";

        const nameInput = document.getElementById("register-name");
        const emailInput = document.getElementById("register-email");
        const passInput = document.getElementById("register-password");
        const confirmInput = document.getElementById("register-confirm-password");

        try {
          await AuthService.startRegistration(
            nameInput.value,
            emailInput.value,
            passInput.value,
            confirmInput.value
          );

          MfaService.isReauthenticatingForChange = false;
          this.showView("mfa-select");
        } catch (err) {
          if (registerError) {
            registerError.textContent = err.message;
            registerError.style.display = "block";
          }
        }
      });
    }
  },

  bindMfaEvents() {
    const methodCards = document.querySelectorAll(".mfa-method-card");
    let selectedMethod = "totp";

    methodCards.forEach(card => {
      card.addEventListener("click", () => {
        methodCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        selectedMethod = card.getAttribute("data-method");
      });
    });

    const btnContinueMfaSetup = document.getElementById("btn-continue-mfa-selection");
    if (btnContinueMfaSetup) {
      btnContinueMfaSetup.addEventListener("click", () => {
        MfaService.setEnrollmentMethod(selectedMethod);
        this.startSelectedMfaEnrollment(selectedMethod);
      });
    }

    const formTotpEnroll = document.getElementById("form-totp-enroll");
    const totpEnrollError = document.getElementById("totp-enroll-error");

    if (formTotpEnroll) {
      formTotpEnroll.addEventListener("submit", async e => {
        e.preventDefault();
        if (totpEnrollError) totpEnrollError.style.display = "none";

        const codeInput = document.getElementById("totp-enroll-code");
        const candidateCode = codeInput.value.trim();

        try {
          const mfaData = await MfaService.verifyAndEnrollTotp(candidateCode);

          if (MfaService.isReauthenticatingForChange) {
            const session = AuthService.getCurrentSession();
            StorageService.updateUserMfa(session.email, "totp", mfaData);
            MfaService.isReauthenticatingForChange = false;
            this.showToast("Authentication factor updated to Authenticator App.");
            this.showView("security");
          } else {
            const completedUser = await AuthService.completeRegistrationWithMfa("totp", mfaData);
            this.showToast("Account security established. Please sign in.");
            document.getElementById("login-email").value = completedUser.email;
            document.getElementById("login-password").value = "";
            this.showView("login");
          }
        } catch (err) {
          if (totpEnrollError) {
            totpEnrollError.textContent = err.message;
            totpEnrollError.style.display = "block";
          }
        }
      });
    }

    const btnCopySecret = document.getElementById("btn-copy-totp-secret");
    if (btnCopySecret) {
      btnCopySecret.addEventListener("click", () => {
        const text = document.getElementById("totp-secret-key-display").textContent;
        navigator.clipboard.writeText(text);
        btnCopySecret.textContent = "Copied";
        setTimeout(() => {
          btnCopySecret.textContent = "Copy";
        }, 2000);
      });
    }

    const formEmailOtpEnroll = document.getElementById("form-email-otp-enroll");
    const emailOtpEnrollError = document.getElementById("email-otp-enroll-error");
    const btnResendEmailOtp = document.getElementById("btn-resend-email-otp");

    if (formEmailOtpEnroll) {
      formEmailOtpEnroll.addEventListener("submit", async e => {
        e.preventDefault();
        if (emailOtpEnrollError) emailOtpEnrollError.style.display = "none";

        const codeInput = document.getElementById("email-otp-enroll-code");
        const candidateCode = codeInput.value.trim();

        try {
          const mfaData = MfaService.verifyAndEnrollEmailOtp(candidateCode);
          EmailOtpService.stopLiveTicker();

          if (MfaService.isReauthenticatingForChange) {
            const session = AuthService.getCurrentSession();
            StorageService.updateUserMfa(session.email, "email-otp", mfaData);
            MfaService.isReauthenticatingForChange = false;
            this.showToast("Authentication factor updated to Email OTP.");
            this.showView("security");
          } else {
            const completedUser = await AuthService.completeRegistrationWithMfa("email-otp", mfaData);
            this.showToast("Account registered and email verified. Please sign in.");
            document.getElementById("login-email").value = completedUser.email;
            document.getElementById("login-password").value = "";
            this.showView("login");
          }
        } catch (err) {
          if (emailOtpEnrollError) {
            emailOtpEnrollError.textContent = err.message;
            emailOtpEnrollError.style.display = "block";
          }
        }
      });
    }

    if (btnResendEmailOtp) {
      btnResendEmailOtp.addEventListener("click", () => {
        if (!EmailOtpService.canResend()) {
          this.showToast(`Rate limit active. Please wait ${EmailOtpService.getRemainingCooldownSeconds()}s.`);
          return;
        }

        const pending = StorageService.getPendingRegistration();
        const session = AuthService.getCurrentSession();
        const targetEmail = pending ? pending.email : session ? session.email : "user@ca70a-lab.internal";

        EmailOtpService.generateOtp(targetEmail, 300, 30);
        const simContainer = document.getElementById("email-otp-enroll-simulator");
        EmailOtpService.renderPreviewPanel(simContainer);
        EmailOtpService.startLiveTicker(simContainer, state => {
          this.updateResendButtonState(btnResendEmailOtp, state);
        });
        this.showToast("New passcode dispatched to email gateway.");
      });
    }

    const btnRegisterPasskey = document.getElementById("btn-register-passkey-device");
    const passkeyEnrollError = document.getElementById("passkey-enroll-error");

    if (btnRegisterPasskey) {
      btnRegisterPasskey.addEventListener("click", async () => {
        if (passkeyEnrollError) passkeyEnrollError.style.display = "none";

        const pending = StorageService.getPendingRegistration();
        const session = AuthService.getCurrentSession();
        const targetUser = pending || session;

        if (!targetUser) {
          if (passkeyEnrollError) {
            passkeyEnrollError.textContent = "Registration session timed out. Please initiate registration again.";
            passkeyEnrollError.style.display = "block";
          }
          return;
        }

        try {
          btnRegisterPasskey.disabled = true;
          btnRegisterPasskey.textContent = "Awaiting authenticator response...";

          const passkeyData = await MfaService.registerAndEnrollPasskey(targetUser);

          if (MfaService.isReauthenticatingForChange) {
            StorageService.updateUserMfa(session.email, "passkey", passkeyData);
            MfaService.isReauthenticatingForChange = false;
            this.showToast("Authentication factor updated to Passkey.");
            this.showView("security");
          } else {
            const completedUser = await AuthService.completeRegistrationWithMfa("passkey", passkeyData);
            this.showToast("Passkey registered. Please sign in with your device.");
            document.getElementById("login-email").value = completedUser.email;
            document.getElementById("login-password").value = "";
            this.showView("login");
          }
        } catch (err) {
          if (passkeyEnrollError) {
            passkeyEnrollError.textContent = err.message;
            passkeyEnrollError.style.display = "block";
          }
        } finally {
          btnRegisterPasskey.disabled = false;
          btnRegisterPasskey.textContent = "Register Passkey on This Device";
        }
      });
    }

    const formMfaVerify = document.getElementById("form-mfa-verify");
    const mfaVerifyError = document.getElementById("mfa-verify-error");
    const btnResendVerifyEmailOtp = document.getElementById("btn-resend-verify-email-otp");

    if (formMfaVerify) {
      formMfaVerify.addEventListener("submit", async e => {
        e.preventDefault();
        if (mfaVerifyError) mfaVerifyError.style.display = "none";

        const challengeUser = MfaService.getChallengeUser();
        if (!challengeUser) {
          this.showView("login");
          return;
        }

        const mfaType = challengeUser.mfa ? challengeUser.mfa.type : null;

        try {
          if (mfaType === "totp") {
            const codeInput = document.getElementById("verify-totp-code");
            await MfaService.verifyTotpLogin(codeInput.value);
          } else if (mfaType === "email-otp") {
            const codeInput = document.getElementById("verify-email-otp-code");
            MfaService.verifyEmailOtpLogin(codeInput.value);
            EmailOtpService.stopLiveTicker();
          } else if (mfaType === "passkey") {
            await MfaService.verifyPasskeyLogin();
          }

          AuthService.loginSession(challengeUser);
          MfaService.clearChallengeUser();
          this.showToast(`Identity verified. Welcome, ${challengeUser.fullName}`);
          this.showView("dashboard");
        } catch (err) {
          if (mfaVerifyError) {
            mfaVerifyError.textContent = err.message;
            mfaVerifyError.style.display = "block";
          }
        }
      });
    }

    const btnTriggerPasskeyVerify = document.getElementById("btn-trigger-passkey-verify");
    if (btnTriggerPasskeyVerify) {
      btnTriggerPasskeyVerify.addEventListener("click", async () => {
        if (mfaVerifyError) mfaVerifyError.style.display = "none";
        const challengeUser = MfaService.getChallengeUser();
        if (!challengeUser) return;

        try {
          btnTriggerPasskeyVerify.disabled = true;
          btnTriggerPasskeyVerify.textContent = "Awaiting Passkey...";

          const verified = await MfaService.verifyPasskeyLogin();
          if (verified) {
            AuthService.loginSession(challengeUser);
            MfaService.clearChallengeUser();
            this.showToast(`Passkey verified. Welcome, ${challengeUser.fullName}`);
            this.showView("dashboard");
          }
        } catch (err) {
          if (mfaVerifyError) {
            mfaVerifyError.textContent = err.message;
            mfaVerifyError.style.display = "block";
          }
        } finally {
          btnTriggerPasskeyVerify.disabled = false;
          btnTriggerPasskeyVerify.textContent = "Continue with Passkey";
        }
      });
    }

    if (btnResendVerifyEmailOtp) {
      btnResendVerifyEmailOtp.addEventListener("click", () => {
        if (!EmailOtpService.canResend()) {
          this.showToast(`Rate limit active. Please wait ${EmailOtpService.getRemainingCooldownSeconds()}s.`);
          return;
        }

        const challengeUser = MfaService.getChallengeUser();
        if (challengeUser) {
          EmailOtpService.generateOtp(challengeUser.email, 300, 30);
          const simContainer = document.getElementById("verify-email-simulator-container");
          EmailOtpService.renderPreviewPanel(simContainer);
          EmailOtpService.startLiveTicker(simContainer, state => {
            this.updateResendButtonState(btnResendVerifyEmailOtp, state);
          });
          this.showToast("New passcode dispatched to email gateway.");
        }
      });
    }
  },

  updateResendButtonState(button, state) {
    if (!button) return;
    if (state.canResend) {
      button.disabled = false;
      button.textContent = "Resend Code";
    } else {
      button.disabled = true;
      button.textContent = `Resend in ${state.cooldownSeconds}s`;
    }
  },

  startSelectedMfaEnrollment(method) {
    const pending = StorageService.getPendingRegistration();
    const session = AuthService.getCurrentSession();
    const targetUser = pending || session;

    if (!targetUser) {
      this.showToast("No active user context found. Please initiate sign in.");
      this.showView("register");
      return;
    }

    if (method === "totp") {
      const { secret, uri } = MfaService.initTotpEnrollment(targetUser.email);
      const qrBox = document.getElementById("totp-qr-code-box");
      const secretBox = document.getElementById("totp-secret-key-display");
      const codeInput = document.getElementById("totp-enroll-code");
      const errBox = document.getElementById("totp-enroll-error");

      if (codeInput) codeInput.value = "";
      if (errBox) errBox.style.display = "none";
      if (secretBox) secretBox.textContent = secret;
      TotpService.renderQrCode(qrBox, uri);

      this.showView("totp-setup");
    } else if (method === "email-otp") {
      EmailOtpService.generateOtp(targetUser.email, 300, 30);
      const simContainer = document.getElementById("email-otp-enroll-simulator");
      const codeInput = document.getElementById("email-otp-enroll-code");
      const errBox = document.getElementById("email-otp-enroll-error");
      const resendBtn = document.getElementById("btn-resend-email-otp");

      if (codeInput) codeInput.value = "";
      if (errBox) errBox.style.display = "none";

      EmailOtpService.renderPreviewPanel(simContainer);
      EmailOtpService.startLiveTicker(simContainer, state => {
        this.updateResendButtonState(resendBtn, state);
      });

      const maskedTarget = document.getElementById("email-otp-masked-recipient");
      if (maskedTarget) {
        maskedTarget.textContent = EmailOtpService.maskEmail(targetUser.email);
      }

      this.showView("email-otp-setup");
    } else if (method === "passkey") {
      const status = WebAuthnService.checkStatus();
      const statusBox = document.getElementById("passkey-setup-status-box");
      const btnRegister = document.getElementById("btn-register-passkey-device");
      const errBox = document.getElementById("passkey-enroll-error");

      if (errBox) errBox.style.display = "none";

      if (statusBox) {
        statusBox.innerHTML = `
          <div class="status-indicator-card ${status.ready ? "supported" : "unsupported"}">
            <div class="status-indicator-header">
              <span class="status-indicator-dot"></span>
              <span class="status-indicator-title">${status.ready ? "WebAuthn Supported & Cryptographic Interface Active" : "WebAuthn Environment Advisory"}</span>
            </div>
            <p class="status-indicator-desc">${status.reason}</p>
          </div>
        `;
      }

      if (btnRegister) {
        btnRegister.disabled = !status.ready;
      }

      this.showView("passkey-setup");
    }
  },

  setupMfaVerificationView(user) {
    const mfaType = user.mfa ? user.mfa.type : "totp";
    const methodLabel = document.getElementById("mfa-verify-method-title");
    const containerTotp = document.getElementById("verify-totp-container");
    const containerEmail = document.getElementById("verify-email-container");
    const containerPasskey = document.getElementById("verify-passkey-container");
    const errBox = document.getElementById("mfa-verify-error");
    const verifySubmitBtn = document.getElementById("btn-submit-mfa-verify");

    if (errBox) errBox.style.display = "none";

    containerTotp.style.display = "none";
    containerEmail.style.display = "none";
    containerPasskey.style.display = "none";
    if (verifySubmitBtn) verifySubmitBtn.style.display = "inline-block";

    if (mfaType === "totp") {
      if (methodLabel) methodLabel.textContent = "Authenticator App Verification";
      containerTotp.style.display = "block";
      const codeInput = document.getElementById("verify-totp-code");
      if (codeInput) {
        codeInput.value = "";
        setTimeout(() => codeInput.focus(), 100);
      }
    } else if (mfaType === "email-otp") {
      if (methodLabel) methodLabel.textContent = "Email Passcode Verification";
      containerEmail.style.display = "block";
      const codeInput = document.getElementById("verify-email-otp-code");
      if (codeInput) {
        codeInput.value = "";
        setTimeout(() => codeInput.focus(), 100);
      }

      const maskedTarget = document.getElementById("verify-email-masked-address");
      if (maskedTarget) {
        maskedTarget.textContent = EmailOtpService.maskEmail(user.email);
      }

      EmailOtpService.generateOtp(user.email, 300, 30);
      const simContainer = document.getElementById("verify-email-simulator-container");
      const resendBtn = document.getElementById("btn-resend-verify-email-otp");

      EmailOtpService.renderPreviewPanel(simContainer);
      EmailOtpService.startLiveTicker(simContainer, state => {
        this.updateResendButtonState(resendBtn, state);
      });
    } else if (mfaType === "passkey") {
      if (methodLabel) methodLabel.textContent = "Passkey Biometric / Security Key Verification";
      containerPasskey.style.display = "block";
      if (verifySubmitBtn) verifySubmitBtn.style.display = "none";
    }
  },

  bindShopEvents() {
    const categoryPills = document.querySelectorAll(".category-pill");
    categoryPills.forEach(pill => {
      pill.addEventListener("click", () => {
        categoryPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.activeCategory = pill.getAttribute("data-category");
        this.renderProducts();
      });
    });

    const searchInput = document.getElementById("shop-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", e => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderProducts();
      });
    }

    const btnOpenCart = document.getElementById("btn-open-cart");
    const btnCloseCart = document.getElementById("btn-close-cart");
    const cartOverlay = document.getElementById("cart-drawer-overlay");

    if (btnOpenCart) {
      btnOpenCart.addEventListener("click", () => {
        this.openCartDrawer();
      });
    }

    if (btnCloseCart) {
      btnCloseCart.addEventListener("click", () => {
        this.closeCartDrawer();
      });
    }

    if (cartOverlay) {
      cartOverlay.addEventListener("click", e => {
        if (e.target === cartOverlay) {
          this.closeCartDrawer();
        }
      });
    }

    const btnCheckout = document.getElementById("btn-cart-checkout");
    if (btnCheckout) {
      btnCheckout.addEventListener("click", () => {
        const cart = StorageService.getCart();
        if (cart.length === 0) {
          this.showToast("Your cart is currently empty.");
          return;
        }
        this.openCheckoutModal();
      });
    }
  },

  renderProducts() {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    const filtered = this.products.filter(p => {
      const matchCat = this.activeCategory === "all" || p.category === this.activeCategory;
      const matchSearch =
        !this.searchQuery ||
        p.name.toLowerCase().includes(this.searchQuery) ||
        p.description.toLowerCase().includes(this.searchQuery);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="products-empty-state">
          <p class="empty-title">No products found</p>
          <p class="empty-sub">Adjust your filter parameters or search keywords.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map(
        p => `
      <div class="product-card" data-card-product-id="${p.id}">
        <div class="product-card-top">
          <span class="product-badge">${p.badge}</span>
          <span class="product-price">${this.formatINR(p.price)}</span>
        </div>
        <div class="product-img-frame">
          <img src="${p.image}" alt="${p.name}" class="product-photo" loading="lazy" onerror="this.onerror=null; this.parentElement.innerHTML='${p.icon.replace(/'/g, "\\'")}';">
          <span class="product-hover-overlay">Click for details →</span>
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <p class="product-specs">${p.specs}</p>
        </div>
        <div class="product-actions">
          <button type="button" class="btn-secondary btn-view-details" data-product-id="${p.id}">
            Details
          </button>
          <button type="button" class="btn-primary btn-add-cart" data-product-id="${p.id}">
            Add to Cart
          </button>
        </div>
      </div>
    `
      )
      .join("");

    // Clicking anywhere on product card opens details
    grid.querySelectorAll(".product-card").forEach(card => {
      card.addEventListener("click", e => {
        // If clicked on buttons inside card, don't double trigger
        if (e.target.closest(".btn-add-cart")) return;
        const id = card.getAttribute("data-card-product-id");
        this.openProductDetails(id);
      });
    });

    grid.querySelectorAll(".btn-view-details").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const id = btn.getAttribute("data-product-id");
        this.openProductDetails(id);
      });
    });

    grid.querySelectorAll(".btn-add-cart").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const id = btn.getAttribute("data-product-id");
        this.addToCart(id, 1);
      });
    });
  },

  addToCart(productId, quantity = 1, showConfirmationToast = true) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const cart = StorageService.getCart();
    const existing = cart.find(item => item.id === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        specs: product.specs,
        image: product.image,
        quantity: quantity
      });
    }

    StorageService.saveCart(cart);
    this.updateCartBadge();
    if (showConfirmationToast) {
      this.showToast(`Added ${quantity > 1 ? quantity + '× ' : ''}${product.name} to cart.`);
    }
  },

  updateCartBadge() {
    const badge = document.getElementById("cart-count-badge");
    if (!badge) return;
    const cart = StorageService.getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    badge.textContent = count;
  },

  openCartDrawer() {
    const drawer = document.getElementById("cart-drawer-overlay");
    if (!drawer) return;
    drawer.classList.add("active");
    this.renderCartDrawerItems();
  },

  closeCartDrawer() {
    const drawer = document.getElementById("cart-drawer-overlay");
    if (!drawer) return;
    drawer.classList.remove("active");
  },

  renderCartDrawerItems() {
    const itemsContainer = document.getElementById("cart-items-container");
    const subtotalEl = document.getElementById("cart-subtotal-amount");
    const totalEl = document.getElementById("cart-total-amount");
    if (!itemsContainer) return;

    const cart = StorageService.getCart();

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-message">
          <p class="cart-empty-text">No items in your cart.</p>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = "₹0";
      if (totalEl) totalEl.textContent = "₹0";
      return;
    }

    let subtotal = 0;
    itemsContainer.innerHTML = cart
      .map(item => {
        const lineTotal = item.price * item.quantity;
        subtotal += lineTotal;
        const matchingProd = this.products.find(p => p.id === item.id);
        const itemImage = (matchingProd && matchingProd.image) || item.image || "";

        return `
        <div class="cart-item-row" data-id="${item.id}">
          ${itemImage ? `
            <img src="${itemImage}" alt="${item.name}" class="cart-item-thumbnail">
          ` : ''}
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-spec">${item.specs}</span>
            <span class="cart-item-price">${this.formatINR(item.price)} each</span>
          </div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button type="button" class="btn-qty-minus" data-id="${item.id}">−</button>
              <span class="qty-number">${item.quantity}</span>
              <button type="button" class="btn-qty-plus" data-id="${item.id}">+</button>
            </div>
            <button type="button" class="btn-remove-item" data-id="${item.id}">Remove</button>
          </div>
        </div>
      `;
      })
      .join("");

    if (subtotalEl) subtotalEl.textContent = this.formatINR(subtotal);
    if (totalEl) totalEl.textContent = this.formatINR(subtotal);

    itemsContainer.querySelectorAll(".btn-qty-plus").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        this.updateItemQuantity(id, 1);
      });
    });

    itemsContainer.querySelectorAll(".btn-qty-minus").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        this.updateItemQuantity(id, -1);
      });
    });

    itemsContainer.querySelectorAll(".btn-remove-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        this.removeCartItem(id);
      });
    });
  },

  updateItemQuantity(id, delta) {
    const cart = StorageService.getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeCartItem(id);
      return;
    }

    StorageService.saveCart(cart);
    this.renderCartDrawerItems();
    this.updateCartBadge();
  },

  removeCartItem(id) {
    let cart = StorageService.getCart();
    cart = cart.filter(i => i.id !== id);
    StorageService.saveCart(cart);
    this.renderCartDrawerItems();
    this.updateCartBadge();
  },

  openCheckoutModal() {
    const modal = document.getElementById("modal-checkout");
    if (!modal) return;
    modal.classList.add("active");

    const session = AuthService.getCurrentSession();
    const checkoutUserEmail = document.getElementById("checkout-user-email");
    const checkoutMfaPill = document.getElementById("checkout-mfa-pill");
    const checkoutItemsSummary = document.getElementById("checkout-items-summary");

    if (session) {
      if (checkoutUserEmail) checkoutUserEmail.textContent = session.email;
      if (checkoutMfaPill) {
        checkoutMfaPill.textContent = MfaService.getMethodLabel(session.mfa ? session.mfa.type : "none");
      }
    }

    const cart = StorageService.getCart();
    const count = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    const sum = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    if (checkoutItemsSummary) {
      checkoutItemsSummary.textContent = `${count} items · ${this.formatINR(sum)}`;
    }

    const closeBtn = document.getElementById("btn-close-checkout-modal");
    const confirmBtn = document.getElementById("btn-confirm-order");

    const closeModal = () => {
      modal.classList.remove("active");
    };

    if (closeBtn) closeBtn.onclick = closeModal;
    if (confirmBtn) {
      confirmBtn.onclick = () => {
        StorageService.clearCart();
        this.updateCartBadge();
        this.closeCartDrawer();
        closeModal();
        this.showToast("Order authenticated & placed under CA70A cryptographic protocols.");
      };
    }
  },

  bindSecurityEvents() {
    const btnChangeMfa = document.getElementById("btn-change-mfa");
    const modalReauth = document.getElementById("modal-reauth");
    const formReauth = document.getElementById("form-reauth");
    const reauthError = document.getElementById("reauth-error-message");
    const btnCloseReauth = document.getElementById("btn-close-reauth-modal");

    if (btnChangeMfa) {
      btnChangeMfa.addEventListener("click", () => {
        if (modalReauth) modalReauth.classList.add("active");
        if (reauthError) reauthError.style.display = "none";
        const passInput = document.getElementById("reauth-password-input");
        if (passInput) {
          passInput.value = "";
          setTimeout(() => passInput.focus(), 100);
        }
      });
    }

    if (btnCloseReauth) {
      btnCloseReauth.addEventListener("click", () => {
        if (modalReauth) modalReauth.classList.remove("active");
      });
    }

    if (formReauth) {
      formReauth.addEventListener("submit", async e => {
        e.preventDefault();
        if (reauthError) reauthError.style.display = "none";

        const session = AuthService.getCurrentSession();
        if (!session) return;

        const passInput = document.getElementById("reauth-password-input");
        const password = passInput.value;

        const isValid = await AuthService.verifyPassword(session.email, password);
        if (!isValid) {
          if (reauthError) {
            reauthError.textContent = "Credential verification failed. Please enter your valid password.";
            reauthError.style.display = "block";
          }
          return;
        }

        if (modalReauth) modalReauth.classList.remove("active");
        MfaService.isReauthenticatingForChange = true;
        this.showToast("Re-authentication confirmed. Select new authentication factor.");
        this.showView("mfa-select");
      });
    }
  },

  renderSecurityView() {
    const session = AuthService.getCurrentSession();
    if (!session) return;

    const userEmailEl = document.getElementById("sec-user-email");
    const userNameEl = document.getElementById("sec-user-name");
    const mfaMethodEl = document.getElementById("sec-mfa-method-title");
    const mfaStatusEl = document.getElementById("sec-mfa-status-pill");
    const mfaDateEl = document.getElementById("sec-mfa-enrolled-date");
    const mfaTechDetails = document.getElementById("sec-mfa-tech-details");

    if (userEmailEl) userEmailEl.textContent = session.email;
    if (userNameEl) userNameEl.textContent = session.fullName;

    const mfaType = session.mfa ? session.mfa.type : "none";
    if (mfaMethodEl) mfaMethodEl.textContent = MfaService.getMethodLabel(mfaType);
    if (mfaStatusEl) {
      mfaStatusEl.textContent = "Protected";
    }

    if (mfaDateEl) {
      const dateStr = session.mfa && session.mfa.enrolledAt ? new Date(session.mfa.enrolledAt).toLocaleString() : "Active Session";
      mfaDateEl.textContent = dateStr;
    }

    if (mfaTechDetails) {
      if (mfaType === "totp") {
        const secret = session.mfa && session.mfa.data ? session.mfa.data.secret : "••••••••";
        mfaTechDetails.innerHTML = `
          <div class="tech-spec-grid">
            <div class="tech-spec-item">
              <span class="tech-spec-label">Algorithm</span>
              <span class="tech-spec-val">HMAC-SHA1 (RFC 6238)</span>
            </div>
            <div class="tech-spec-item">
              <span class="tech-spec-label">Time Window</span>
              <span class="tech-spec-val">30 seconds</span>
            </div>
            <div class="tech-spec-item">
              <span class="tech-spec-label">Secret Key (Base32)</span>
              <span class="tech-spec-val monospace">${secret}</span>
            </div>
            <div class="tech-spec-item">
              <span class="tech-spec-label">Authenticator Standard</span>
              <span class="tech-spec-val">Google Authenticator, Microsoft Authenticator, Authy</span>
            </div>
          </div>
        `;
      } else if (mfaType === "email-otp") {
        mfaTechDetails.innerHTML = `
          <div class="tech-spec-grid">
            <div class="tech-spec-item">
              <span class="tech-spec-label">Channel</span>
              <span class="tech-spec-val">CA70A Secure Mail Exchange</span>
            </div>
            <div class="tech-spec-item">
              <span class="tech-spec-label">Passcode Format</span>
              <span class="tech-spec-val">6-digit cryptographically random numeric string</span>
            </div>
            <div class="tech-spec-item">
              <span class="tech-spec-label">Validity Period</span>
              <span class="tech-spec-val">300 seconds (5 minutes)</span>
            </div>
            <div class="tech-spec-item">
              <span class="tech-spec-label">Destination Address</span>
              <span class="tech-spec-val">${session.email}</span>
            </div>
          </div>
        `;
      } else if (mfaType === "passkey") {
        const credId = session.mfa && session.mfa.data ? session.mfa.data.id : "FIDO2-Assertion-Credential";
        mfaTechDetails.innerHTML = `
          <div class="tech-spec-grid">
            <div class="tech-spec-item">
              <span class="tech-spec-label">Standard</span>
              <span class="tech-spec-val">W3C Web Authentication (WebAuthn / FIDO2)</span>
            </div>
            <div class="tech-spec-item">
              <span class="tech-spec-label">Credential ID</span>
              <span class="tech-spec-val monospace">${credId.slice(0, 24)}...</span>
            </div>
            <div class="tech-spec-item">
              <span class="tech-spec-label">Attestation Profile</span>
              <span class="tech-spec-val">Platform / Cross-Platform Authenticator</span>
            </div>
            <div class="tech-spec-item">
              <span class="tech-spec-label">Cryptographic Protection</span>
              <span class="tech-spec-val">Hardware Secure Enclave / Security Key</span>
            </div>
          </div>
        `;
      }
    }
  },

  showToast(message) {
    const toast = document.getElementById("app-toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    setTimeout(() => {
      toast.classList.remove("visible");
    }, 3500);
  },

  updateGlobalStateDisplay() {
    const session = AuthService.getCurrentSession();
    const envStatusPill = document.getElementById("sys-user-pill");
    const envMfaPill = document.getElementById("sys-mfa-pill");

    if (envStatusPill) {
      if (session) {
        envStatusPill.textContent = `Account: ${session.email}`;
      } else {
        envStatusPill.textContent = "Status: Unauthenticated";
      }
    }

    if (envMfaPill) {
      if (session && session.mfa) {
        envMfaPill.textContent = `MFA: ${session.mfa.type.toUpperCase()}`;
      } else {
        envMfaPill.textContent = "MFA: Inactive";
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
