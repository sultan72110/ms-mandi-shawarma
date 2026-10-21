import React from 'react';
import { useEffect, useState } from 'react';
import { Menu as MenuIcon, X, Search, ShoppingCart, Utensils, BookOpen, ChefHat, Leaf, UsersRound, MapPin, Star, ArrowRight, Clock3, Flame, Phone, Instagram } from 'lucide-react';

const storyLinkStyle = {display:'flex',flexDirection:'column',gap:'10px',padding:'18px',border:'1px solid rgba(233,158,59,.2)',borderRadius:'9px',background:'rgba(255,255,255,.025)',transition:'border-color .2s',color:'#f1e2d1'};
const storyPillStyle = {display:'inline-flex',alignItems:'center',padding:'9px 12px',border:'1px solid rgba(233,158,59,.3)',borderRadius:'999px',color:'#efb15b',fontSize:'11px'};

const dishes = [
  { name: 'Chicken Mandi (Roast)', desc: 'Classic roasted chicken with fragrant mandi rice', price: '₹249 / ₹449', tag: 'POPULAR', image: 'photo-1626082927389-6cd097cdc6ec', category: 'Mandi' },
  { name: 'Spl. Chicken Mandi (Faham)', desc: 'Smoky faham-style chicken and aromatic rice', price: '₹279 / ₹489', tag: 'HOUSE FAVOURITE', image: 'photo-1631452180519-c014fe946bc7', category: 'Mandi' },
  { name: 'KFC Mandi', desc: 'Crispy chicken with traditional mandi rice', price: '₹289 / ₹529', tag: 'CRUNCHY', image: 'photo-1626645738196-c2a7c87a8f58', category: 'Mandi' },
  { name: 'Chicken 65 Mandi', desc: 'Spicy Chicken 65 served over seasoned rice', price: '₹289 / ₹529', tag: 'SPICY', image: 'photo-1603894584373-5ac82b2ae398', category: 'Mandi' },
  { name: 'Chicken Mandi Family Pack', desc: 'A generous platter made for sharing', price: '₹289 / ₹529*', tag: 'FAMILY FEAST', image: 'photo-1473093295043-cdd812d0e601', category: 'Mandi' },
  { name: 'Faham Mandi Family Pack', desc: 'Family-sized smoky chicken mandi feast', price: '₹830*', tag: 'SHAREABLE', image: 'photo-1562967914-608f82629710', category: 'Mandi' },
  { name: 'Spl. Lebanese Grill Chicken Mandi', desc: 'Lebanese-style grilled chicken with fragrant rice', price: '₹889*', tag: 'SPECIAL', image: 'photo-1601050690597-df0568f70950', category: 'Mandi' },
  { name: 'Mutton Mandi Roast', desc: 'Tender roasted mutton with fragrant mandi rice', price: '₹289 / ₹579', tag: 'POPULAR', image: 'photo-1565299624946-b28f40a0ae38', category: 'Mandi' },
  { name: 'Mutton Juicy Mandi', desc: 'Juicy, tender mutton with traditional spices', price: '₹299 / ₹549', tag: 'JUICY', image: 'photo-1603360946369-dc9bb6258143', category: 'Mandi' },
  { name: 'Spl. Haneed Mutton Mandi', desc: 'Slow-cooked haneed-style mutton mandi', price: '₹339 / ₹649*', tag: 'CHEF SPECIAL', image: 'photo-1514516345957-556ca7d90a29', category: 'Mandi' },
  { name: 'Spl. Mutton Muraq Mandi (3 pcs)', desc: 'A rich mutton speciality served with mandi rice', price: '₹649*', tag: 'SPECIAL', image: 'photo-1578985545062-69928b1d9587', category: 'Mandi' },
  { name: 'Mutton Family Pack Juicy (4 pcs)', desc: 'Four juicy mutton pieces for the whole table', price: '₹749*', tag: 'FAMILY FEAST', image: 'photo-1555939594-58d7cb561ad1', category: 'Mandi' },
  { name: 'Mutton Family Pack Roasted (4 pcs)', desc: 'A celebratory roasted mutton platter', price: '₹1,199*', tag: 'SHAREABLE', image: 'photo-1544025162-d76694265947', category: 'Mandi' },
  { name: 'Fish Mandi', desc: 'Seasoned fish with aromatic mandi rice', price: '₹309 / ₹519', tag: 'SEAFOOD', image: 'photo-1529006557810-274b9b2fc783', category: 'Seafood' },
  { name: 'Basa Fish Mandi', desc: 'Basa fish with a flavourful spice blend', price: '₹389 / ₹729', tag: 'SEAFOOD PICK', image: 'photo-1568901346375-23c9450c58cd', category: 'Seafood' },
  { name: 'Prawns Mandi', desc: 'Juicy prawns served with fragrant mandi rice', price: '₹429*', tag: 'SEAFOOD', image: 'photo-1573080496219-bb080dd4f877', category: 'Seafood' },
  { name: 'Extra Basa Fish', desc: 'An extra portion of basa fish', price: '₹249*', tag: 'ADD-ON', image: 'photo-1519708227418-c8fd9a32b7a2', category: 'Seafood' },
  { name: 'Spl. Garlic Grill Fish Mandi', desc: 'Grilled fish finished with garlic flavour', price: '₹449*', tag: 'SPECIAL', image: 'photo-1510130387422-82bed34b37e9', category: 'Seafood' },
  { name: 'Spl. Extra Garlic Grill Fish', desc: 'Extra-special garlic grilled fish', price: '₹749*', tag: 'SPECIAL', image: 'photo-1565680018434-b513d5e5fd47', category: 'Seafood' },
  { name: 'Extra Mandi Rice', desc: 'An extra serving of fragrant mandi rice', price: '₹29*', tag: 'ADD-ON', image: 'photo-1516684732162-798a0062be99', category: 'Add-ons' },
  { name: 'Extra Chicken Roast Piece', desc: 'Add another roasted chicken piece', price: '₹119*', tag: 'ADD-ON', image: 'photo-1598103442097-8b74394b95c6', category: 'Add-ons' },
  { name: 'Extra Faham Piece', desc: 'Extra smoky faham chicken piece', price: '₹125*', tag: 'ADD-ON', image: 'photo-1532550907401-a500c9a57435', category: 'Add-ons' },
  { name: 'Hot & Spicy Dip', desc: 'A punchy dip for your mandi platter', price: '₹35*', tag: 'ADD-ON', image: 'photo-1547592180-85f173990554', category: 'Add-ons' },
  { name: 'Extra Mayonnaise', desc: 'Creamy mayo on the side', price: '₹25*', tag: 'ADD-ON', image: 'photo-1540189549336-e6e99c3679fe', category: 'Add-ons' },
  { name: 'Garlic Sauce', desc: 'Creamy garlic sauce', price: '₹40*', tag: 'ADD-ON', image: 'photo-1565299507177-b0ac66763828', category: 'Add-ons' },
  { name: 'Shawarma & Wraps', desc: 'Ask the team about available shawarma and wrap options', price: 'Ask in-store', tag: 'SHAWARMA', image: 'photo-1559847844-5315695dadae', category: 'Shawarma & Wraps' },
  { name: 'Broasted Chicken', desc: 'Crispy broasted chicken; availability and price on request', price: 'Ask in-store', tag: 'CRISPY', image: 'photo-1558030006-450675393462', category: 'Shawarma & Wraps' },
  { name: 'Malai Paya', desc: 'Ask the restaurant about today’s availability', price: 'Ask in-store', tag: 'HOUSE SPECIAL', image: 'photo-1546833999-b9f581a1996d', category: 'Gravies & Breads' },
  { name: 'Chicken Mandi', desc: 'Traditional chicken mandi with fragrant rice', price: '₹350*', tag: 'BESTSELLER', image: 'photo-1515003197210-e0cd7184f8b5', category: 'Mandi' },
  { name: 'Al Faham Chicken Mandi', desc: 'Smoky Arabian grilled chicken with mandi rice', price: '₹369*', tag: 'POPULAR', image: 'photo-1546069901-ba9599a7e63c', category: 'Mandi' },
  { name: 'BBQ Chicken Mandi', desc: 'Barbecue-style chicken over seasoned rice', price: '₹369*', tag: 'BBQ', image: 'photo-1498837167922-ddd27525d352', category: 'Mandi' },
  { name: 'Chicken Mandi Family Pack', desc: 'A sharing pack for family and friends', price: '₹1,100*', tag: 'FAMILY PACK', image: 'photo-1550547660-d9450f859349', category: 'Mandi' },
  { name: 'Mutton Juicy Mandi', desc: 'Juicy mutton served with fragrant mandi rice', price: '₹399*', tag: 'POPULAR', image: 'photo-1551782450-a2132b4ba21d', category: 'Mandi' },
  { name: 'Mutton Mandi Roast', desc: 'Roasted mutton with traditional mandi spices', price: '₹409*', tag: 'ROASTED', image: 'photo-1561758033-d89a9ad46330', category: 'Mandi' },
  { name: 'Mutton Mandi Family Pack', desc: 'A generous mutton platter for sharing', price: '₹1,499*', tag: 'FAMILY PACK', image: 'photo-1553979459-d2229ba7433a', category: 'Mandi' },
  { name: 'Special Rumali Kabab Shawarma', desc: 'Charcoal-style kabab shawarma, listed without salad', price: '₹149*', tag: 'BESTSELLER', image: 'photo-1576107232684-1279f390859f', category: 'Shawarma & Wraps' },
  { name: 'Veg Grill Shawarma', desc: 'Grilled vegetarian shawarma in special roti', price: '₹120*', tag: 'VEG', image: 'photo-1563379091339-03246963d96c', category: 'Shawarma & Wraps' },
  { name: 'Chicken 65 Grill Wrap', desc: 'Spicy chicken 65 wrapped for an easy bite', price: '₹169*', tag: 'SPICY', image: 'photo-1512621776951-a57141f2eefd', category: 'Shawarma & Wraps' },
  { name: 'Chicken Zinger Wrap', desc: 'Crispy chicken in a flavour-packed wrap', price: '₹155*', tag: 'BESTSELLER', image: 'photo-1490645935967-10de6ba17061', category: 'Shawarma & Wraps' },
  { name: 'Fish Mandi', desc: 'Fish with seasoned mandi rice', price: '₹400*', tag: 'SEAFOOD', image: 'photo-1504674900247-0877df9cc836', category: 'Seafood' },
  { name: 'Basa Fish', desc: 'Basa fish prepared with restaurant spices', price: '₹299*', tag: 'SEAFOOD', image: 'photo-1543353071-873f17a7a088', category: 'Seafood' },
  { name: 'Prawns', desc: 'Prawns prepared with a bold spice blend', price: '₹369*', tag: 'SEAFOOD', image: 'photo-1476224203421-9ac39bcb3327', category: 'Seafood' },
  { name: 'Chicken 65 Dry', desc: 'Crispy, spicy chicken starter', price: '₹199*', tag: 'BESTSELLER', image: 'photo-1505576399274-565b52d4ac71', category: 'Starters' },
  { name: 'Chicken Manchuria', desc: 'Indo-Chinese chicken starter', price: '₹338*', tag: '', image: 'photo-1506084868230-bb9d95c24759', category: 'Starters' },
  { name: 'Chilli Chicken', desc: 'Chicken tossed with chilli and spices', price: '₹349*', tag: 'SPICY', image: 'photo-1540420773420-3366772f4999', category: 'Starters' },
  { name: 'Special Lebanese Grill Chicken', desc: 'Grilled chicken with Lebanese-inspired seasoning', price: '₹244*', tag: 'SPECIAL', image: 'photo-1505253716362-afmnop', category: 'Starters' },
  { name: 'Broasted Chicken', desc: 'Crispy broasted chicken', price: '₹189*', tag: 'CRISPY', image: 'photo-1626645738196-c2a7c87a8f58', category: 'Broasted Chicken' },
  { name: 'Broasted Chicken · 5 Pieces', desc: 'Five pieces of crispy chicken', price: '₹389*', tag: 'SHAREABLE', image: 'photo-1626645738196-c2a7c87a8f58', category: 'Broasted Chicken' },
  { name: 'Broasted Chicken · 8 Pieces', desc: 'Eight pieces for a bigger gathering', price: '₹620*', tag: 'FAMILY PICK', image: 'photo-1626645738196-c2a7c87a8f58', category: 'Broasted Chicken' },
  { name: 'Chicken Twister', desc: 'Crispy, juicy boneless chicken', price: '₹149*', tag: '', image: 'photo-1626082927389-6cd097cdc6ec', category: 'Broasted Chicken' },
  { name: 'Chicken Cheese Balls · 5 Pieces', desc: 'Chicken bites with a cheesy coating', price: '₹139*', tag: 'SNACK', image: 'photo-1562967914-608f82629710', category: 'Starters' },
  { name: 'French Fries · Large', desc: 'Classic salted fries', price: '₹139*', tag: '', image: 'photo-1573080496219-bb080dd4f877', category: 'Starters' },
  { name: 'Masala Fries · Peri Peri', desc: 'Fries tossed in peri-peri seasoning', price: '₹179*', tag: 'SPICY', image: 'photo-1573080496219-bb080dd4f877', category: 'Starters' },
  { name: 'Chicken Zinger Burger', desc: 'Crispy chicken burger', price: 'Check Zomato', tag: '', image: 'photo-1568901346375-23c9450c58cd', category: 'Burgers & Pizza' },
  { name: 'Chicken Tandoori Pizza', desc: 'Pizza with tandoori chicken toppings', price: 'Check Zomato', tag: '', image: 'photo-1565299624946-b28f40a0ae38', category: 'Burgers & Pizza' },
  { name: 'Paneer Butter Masala', desc: 'Paneer in a rich, creamy tomato gravy', price: '₹230*', tag: 'VEG', image: 'photo-1631452180519-c014fe946bc7', category: 'Gravies & Breads' },
  { name: 'Butter Chicken', desc: 'Chicken in a rich butter gravy', price: '₹319*', tag: 'POPULAR', image: 'photo-1603894584373-5ac82b2ae398', category: 'Gravies & Breads' },
  { name: 'Kadai Chicken', desc: 'Chicken cooked with aromatic kadai spices', price: '₹338*', tag: '', image: 'photo-1603894584373-5ac82b2ae398', category: 'Gravies & Breads' },
  { name: 'Asli Ghee Paratha', desc: 'Paratha finished with ghee', price: '₹30*', tag: '', image: 'photo-1601050690597-df0568f70950', category: 'Gravies & Breads' },
  { name: 'Rumali Roti', desc: 'Thin, soft rumali roti', price: '₹15*', tag: '', image: 'photo-1601050690597-df0568f70950', category: 'Gravies & Breads' },
  { name: 'Cream Cheese Kunafa', desc: 'Sweet kunafa with cream cheese', price: '₹260*', tag: 'DESSERT', image: 'photo-1578985545062-69928b1d9587', category: 'Desserts & Drinks' },
  { name: 'Chocolate Cream Cheese Kunafa', desc: 'Kunafa with chocolate and cream cheese', price: '₹350*', tag: 'DESSERT', image: 'photo-1578985545062-69928b1d9587', category: 'Desserts & Drinks' },
];
const categories = ['All', 'Mandi', 'Shawarma & Wraps', 'Seafood', 'Starters', 'Broasted Chicken', 'Burgers & Pizza', 'Gravies & Breads', 'Desserts & Drinks', 'Add-ons'];

// Dish-specific image URLs researched from food/menu image results.
// These are illustrative photos of matching dishes, not guaranteed photos from this branch.
const FOOD_PHOTOS = {
  chickenMandi: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_900%2Ch_900%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/2/aeef76a5-e22b-4a22-a1b7-7e8bae3abfa7_f5da3294-e3a7-4044-b8bf-78498c6b64cd.jpg',
  chickenMandiZomato: 'https://b.zmtcdn.com/data/dish_photos/ca4/067773d8c5c29e97e34f23fdf3a4aca4.jpeg',
  muttonMandi: 'https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/731501/product/235001577/7bad8e51-92de-4fd3-ad0d-078d08309143.jpg',
  fishMandi: 'https://foodics-console-production.s3.eu-west-1.amazonaws.com/images/822581_1701600389_9ac278ac-8544-49d7-8279-c224ddc72e36.jfif',
  prawnsMandi: 'https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/775749/product/2260509495/7819ef47-babe-48e2-9b64-a05426e2c8c7.jpg',
  shawarma: 'https://zdarfoods.com/img/delivery.webp',
  broasted: 'https://images.deliveryhero.io/image/global-menu-service/TB_AE/vendor/24493/product/528160648/8bb24e33-8efa-4ad4-87d6-f6c6312a5070.jpg',
  burger: 'https://sa-halalexpress.com/cdn/shop/files/zinger-burger-w-fries.png?v=1765865178&width=1200',
  pizza: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85',
  kunafa: 'https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/kunafa_with_cheese.jpg',
  rice: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85',
  gravy: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85',
  paratha: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85',
  starter: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=85',
};

const photoForDish = (dish) => {
  const name = dish.name.toLowerCase();
  const category = dish.category.toLowerCase();
  if (name.includes('kunafa')) return FOOD_PHOTOS.kunafa;
  if (name.includes('shawarma') || name.includes('wrap') || name.includes('rumali kabab')) return FOOD_PHOTOS.shawarma;
  if (name.includes('burger')) return FOOD_PHOTOS.burger;
  if (name.includes('pizza')) return FOOD_PHOTOS.pizza;
  if (name.includes('prawns')) return FOOD_PHOTOS.prawnsMandi;
  if (name.includes('fish') || name.includes('basa')) return FOOD_PHOTOS.fishMandi;
  if (name.includes('mutton') || name.includes('haneed') || name.includes('muraq')) return FOOD_PHOTOS.muttonMandi;
  if (name.includes('broasted') || name.includes('twister') || name.includes('kfc')) return FOOD_PHOTOS.broasted;
  if (name.includes('fries')) return FOOD_PHOTOS.fries;
  if (name.includes('rice')) return FOOD_PHOTOS.rice;
  if (name.includes('paratha') || name.includes('roti') || name.includes('bread')) return FOOD_PHOTOS.paratha;
  if (name.includes('gravy') || name.includes('masala') || name.includes('curry') || name.includes('paya')) return FOOD_PHOTOS.gravy;
  if (name.includes('65') || name.includes('manchuria') || name.includes('chilli chicken') || name.includes('cheese balls')) return FOOD_PHOTOS.starter;
  if (category.includes('seafood')) return FOOD_PHOTOS.fishMandi;
  if (category.includes('broasted')) return FOOD_PHOTOS.broasted;
  if (category.includes('starter')) return FOOD_PHOTOS.starter;
  if (category.includes('gravy')) return FOOD_PHOTOS.gravy;
  return name.includes('chicken') ? FOOD_PHOTOS.chickenMandi : FOOD_PHOTOS.chickenMandiZomato;
};

const FOOD_PHOTO_FALLBACKS = [
  FOOD_PHOTOS.chickenMandi,
  FOOD_PHOTOS.chickenMandiZomato,
  FOOD_PHOTOS.muttonMandi,
  FOOD_PHOTOS.broasted,
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    return ({ '/menu': 'menu', '/story': 'story', '/gallery': 'gallery', '/visit': 'visit' })[path] || 'home';
  });

  useEffect(() => {
    const syncPage = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      setCurrentPage(({ '/menu': 'menu', '/story': 'story', '/gallery': 'gallery', '/visit': 'visit' })[path] || 'home');
    };
    window.addEventListener('popstate', syncPage);
    return () => window.removeEventListener('popstate', syncPage);
  }, []);

  const navigateTo = (page) => {
    const paths = { home: '/', menu: '/menu', story: '/story', gallery: '/gallery', visit: '/visit' };
    const path = paths[page] || '/';
    if (window.location.pathname !== path) window.history.pushState({}, '', path);
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageLink = (page) => (event) => {
    event.preventDefault();
    navigateTo(page);
  };
  const [cartCount, setCartCount] = useState(0);
  const [notice, setNotice] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const visibleDishes = dishes.filter(d => (activeCategory === 'All' || d.category === activeCategory) && `${d.name} ${d.desc}`.toLowerCase().includes(query.toLowerCase()));

  const addToCart = (dish) => {
    setCartCount((count) => count + 1);
    setNotice(`${dish} added to your basket`);
    window.setTimeout(() => setNotice(''), 2400);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="/" onClick={pageLink('home')} aria-label="M.S Mandi & Shawarma home">
          <span className="brand-mark"><img src="/logo.svg" alt="M.S emblem" /></span><span className="brand-name">M.S Mandi <i>&amp;</i> Shawarma</span><span className="brand-subtitle">ARABIAN · LEBANESE · TURKISH</span>
        </a>
        <button className="mobile-menu icon-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <MenuIcon />}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a className={currentPage === 'home' ? 'active' : ''} href="/" onClick={pageLink('home')}>Home</a>
          <a className={currentPage === 'menu' ? 'active' : ''} href="/menu" onClick={pageLink('menu')}>Menu</a>
          <a className={currentPage === 'story' ? 'active' : ''} href="/story" onClick={pageLink('story')}>Our Story</a>
          <a className={currentPage === 'gallery' ? 'active' : ''} href="/gallery" onClick={pageLink('gallery')}>Gallery</a>
          <a className={currentPage === 'visit' ? 'active' : ''} href="/visit" onClick={pageLink('visit')}>Visit Us</a>
        </nav>
        <div className="nav-actions"><button className="icon-button search-button" aria-label="Search menu" onClick={() => navigateTo('menu')}><Search size={19} /></button><button className="icon-button cart-button" aria-label={`Shopping cart with ${cartCount} items`} onClick={() => setNotice(cartCount ? `You have ${cartCount} item${cartCount === 1 ? '' : 's'} in your basket` : 'Your basket is waiting for something delicious')}><ShoppingCart size={19} />{cartCount > 0 && <span className="cart-count">{cartCount}</span>}</button><a className="button button-primary nav-order" href="https://www.zomato.com/hyderabad/ms-mandi-shawarma-charminar/order" target="_blank" rel="noreferrer">Order on Zomato <ArrowRight size={16} /></a></div>
      </header>

      <main>
        {currentPage === 'home' && (<>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="A beautifully presented Arabian mandi platter" />
          <div className="hero-vignette" />
          <div className="hero-content">
            <p className="eyebrow"><span /> GROUP OF MISKEEN <span /></p>
            <h1>M.S Mandi & Shawarma.<br /><em>Made to be shared.</em></h1>
            <p className="hero-copy">Mandi, shawarma and a table full of good things. Explore Arabian, Lebanese and Turkish favourites, made for sharing with your favourite people.</p>
            <div className="hero-buttons"><a className="button button-primary" href="/menu" onClick={pageLink('menu')}><Utensils size={17} /> Explore Our Menu <ArrowRight size={16} /></a><a className="button button-outline" href="/story" onClick={pageLink('story')}><BookOpen size={17} /> Our Story</a></div>
            <div className="hero-rating"><div className="avatar-stack"><span>MH</span><span>✦</span><span>♥</span></div><div><div className="stars">★★★★☆ <b>4.1 dining · 4.0 delivery</b></div><small>Zomato listing · ratings can change</small></div></div>
          </div>
          <div className="hero-stamp"><span>AUTHENTIC</span><strong>100%</strong><span>ARABIAN FLAVOUR</span><div>✦</div></div>
          <a href="/menu" onClick={pageLink('menu')} className="scroll-cue"><span /> SCROLL TO DISCOVER</a>
        </section>

        <section className="features" aria-label="Why choose Mandi & Shawarma">
          <div className="feature"><ChefHat /><div><strong>Authentic Recipes</strong><span>Tradition in every bite</span></div></div><div className="feature"><Leaf /><div><strong>Fresh Ingredients</strong><span>Quality you can taste</span></div></div><div className="feature"><UsersRound /><div><strong>Made for Sharing</strong><span>Feasts for every occasion</span></div></div><div className="feature"><Flame /><div><strong>Slow-Cooked Goodness</strong><span>Flavour worth the wait</span></div></div>
        </section>

        </>)}

        {currentPage === 'menu' && (<>
        <section className="menu-section section-wrap" id="menu">
          <div className="section-heading"><div><p className="eyebrow">A FEAST FOR THE SENSES</p><h2>Our <em>Menu</em></h2><p className="section-copy">Mandi, shawarma, wraps, seafood, starters, broasted chicken, burgers, pizza, gravies and desserts.</p></div><a className="text-link" href="/menu" onClick={pageLink('menu')}>Explore full menu <ArrowRight size={16} /></a></div>
          <div className="category-tabs">{categories.map(category => <button key={category} className={activeCategory === category ? 'category-tab selected' : 'category-tab'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><div className="menu-toolbar"><span>Prices in INR · Half / Full where shown</span><button className="text-link" onClick={() => setSearchOpen(v => !v)}><Search size={15}/> Search menu</button></div>{searchOpen && <input className="menu-search-input" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search mandi, fish, rice, sauce..." aria-label="Search menu" />}<div className="dish-grid">{visibleDishes.map((dish, index) => <article className="dish-card" key={dish.name}><div className="dish-photo"><img src={photoForDish(dish)} alt={dish.name} loading="lazy" onError={(event) => { const img = event.currentTarget; if (img.dataset.fallback) { img.onerror = null; img.style.visibility = "hidden"; return; } img.dataset.fallback = "1"; img.src = FOOD_PHOTO_FALLBACKS[(index + 1) % FOOD_PHOTO_FALLBACKS.length]; }}/><span className="dish-tag">{dish.tag}</span><button className="add-button" onClick={() => addToCart(dish.name)} aria-label={`Add ${dish.name} to basket`}>+</button></div><div className="dish-info"><div><h3>{dish.name}</h3><p>{dish.desc}</p></div><strong className="price">{dish.price}</strong></div><div className="dish-bottom"><span><Star size={13} fill="currentColor" /> Menu favourite</span><button onClick={() => addToCart(dish.name)}>Add to order <ArrowRight size={14} /></button></div></article>)}</div>{visibleDishes.length === 0 && <p className="empty-menu">No dishes found. Try another search.</p>}
          <div className="menu-note"><span className="note-icon"><Utensils size={18} /></span><p><strong>Big appetite? Bring your people.</strong><br />Explore family packs and extras for a table full of flavour.</p><a href="https://www.zomato.com/hyderabad/ms-mandi-shawarma-charminar/order" target="_blank" rel="noreferrer">Order on Zomato <ArrowRight size={15} /></a></div>
        <p className="menu-disclaimer">*Menu prices are indicative and may change. This website is not connected to Zomato; use the official listing for current availability, customisations and live prices.</p>
        </section>

        </>)}

        {currentPage === 'story' && (<>
        <section className="story-section" id="story"><div className="story-photo"><img src="/gallery/restaurant-interior-1.png" alt="M.S Mandi & Shawarma dining area with traditional floor seating" loading="lazy"/><div className="photo-caption"><span>HOSPITALITY IS OUR TRADITION</span><strong>Gather. Feast. Repeat.</strong></div></div><div className="story-copy"><p className="eyebrow">MORE THAN JUST A MEAL</p><h2>A little taste of<br /><em>Arabian tradition.</em></h2><p>M.S Mandi &amp; Shawarma is a restaurant in Charminar, Hyderabad, serving Arabian, Lebanese and Turkish-inspired food. From mandi platters to shawarma and wraps, the idea is simple: bring people together over generous, flavourful food.</p><p>Part of the Group of Miskeen, the restaurant is located around the Purani Haveli, Dabeerpura and Zehra Nagar Colony area. Explore the menu or check the official listing for current dishes, prices and ordering availability.</p><a className="button button-outline" href="https://www.zomato.com/hyderabad/ms-mandi-shawarma-charminar" target="_blank" rel="noreferrer">View restaurant on Zomato <ArrowRight size={16} /></a><div className="story-stats"><div><strong>Charminar</strong><span>Hyderabad, Telangana</span></div><div><strong>Group of Miskeen</strong><span>Restaurant identity</span></div></div></div></section>

        <section className="section-wrap story-discovery" aria-labelledby="story-discovery-title" style={{paddingTop: '0', maxWidth: '1320px'}}>
          <div className="section-heading"><div><p className="eyebrow">EXPLORE OUR NEIGHBOURHOOD</p><h2 id="story-discovery-title">Around <em>Charminar.</em></h2><p className="section-copy">Explore nearby Hyderabad areas, restaurant guides and the official M.S Mandi &amp; Shawarma listing.</p></div></div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))',gap:'12px'}}>
            <a href="https://www.zomato.com/hyderabad/charminar-restaurants" target="_blank" rel="noreferrer" style={storyLinkStyle}><strong>Charminar restaurants</strong><span>Browse restaurants around Charminar <ArrowRight size={14}/></span></a>
            <a href="https://www.zomato.com/hyderabad/ghansi-bazaar-restaurants" target="_blank" rel="noreferrer" style={storyLinkStyle}><strong>Ghansi Bazaar</strong><span>Explore nearby dining <ArrowRight size={14}/></span></a>
            <a href="https://www.zomato.com/hyderabad/begum-bazaar-restaurants" target="_blank" rel="noreferrer" style={storyLinkStyle}><strong>Begum Bazaar</strong><span>Restaurants in the area <ArrowRight size={14}/></span></a>
            <a href="https://www.zomato.com/hyderabad/rein-bazar-restaurants" target="_blank" rel="noreferrer" style={storyLinkStyle}><strong>Rein Bazar</strong><span>Explore nearby options <ArrowRight size={14}/></span></a>
            <a href="https://www.zomato.com/hyderabad/nampally-restaurants" target="_blank" rel="noreferrer" style={storyLinkStyle}><strong>Nampally</strong><span>Restaurants around Nampally <ArrowRight size={14}/></span></a>
            <a href="https://www.zomato.com/hyderabad/casual-dining" target="_blank" rel="noreferrer" style={storyLinkStyle}><strong>Casual dining in Hyderabad</strong><span>Discover casual dining spots <ArrowRight size={14}/></span></a>
          </div>
          <div style={{marginTop:'34px',padding:'22px',border:'1px solid rgba(233,158,59,.22)',borderRadius:'10px',background:'linear-gradient(110deg,#24170e,#130e0a)'}}>
            <p className="eyebrow" style={{marginBottom:'10px'}}>FREQUENT SEARCHES</p><p style={{color:'#b7a99b',fontSize:'13px',lineHeight:1.8,margin:'0 0 15px'}}>Looking for the menu, location or ordering page? These links take you to the official restaurant listing and related searches.</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
              <a href="https://www.zomato.com/hyderabad/ms-mandi-shawarma-charminar" target="_blank" rel="noreferrer" style={storyPillStyle}>M.S Mandi &amp; Shawarma</a>
              <a href="https://www.zomato.com/hyderabad/ms-mandi-shawarma-charminar/menu" target="_blank" rel="noreferrer" style={storyPillStyle}>Menu</a>
              <a href="https://www.zomato.com/hyderabad/ms-mandi-shawarma-charminar/order" target="_blank" rel="noreferrer" style={storyPillStyle}>Order food online</a>
              <a href="https://www.zomato.com/hyderabad/order-food-online" target="_blank" rel="noreferrer" style={storyPillStyle}>Order food in Hyderabad</a>
              <a href="https://www.zomato.com/hyderabad/hyderabad-city-restaurants/casual-dining" target="_blank" rel="noreferrer" style={storyPillStyle}>Casual dining in Hyderabad City</a>
              <a href="https://www.zomato.com/hyderabad/charminar-restaurants/casual-dining" target="_blank" rel="noreferrer" style={storyPillStyle}>Casual dining in Charminar</a>
            </div>
          </div>
          <p style={{fontSize:'10px',color:'#85766a',lineHeight:1.7,marginTop:'16px'}}>Restaurant details and external discovery links are provided for convenience. Zomato is a third-party platform; menus, availability and prices may change.</p>
        </section>

        </>)}

        {currentPage === 'gallery' && (<>
        <section className="gallery-section section-wrap" id="gallery"><div className="section-heading"><div><p className="eyebrow">A CLOSER LOOK</p><h2>Come hungry. <em>Leave happy.</em></h2></div><a className="text-link" href="/visit" onClick={pageLink('visit')}>Come see us <ArrowRight size={16} /></a></div><div className="gallery-grid restaurant-gallery">
          <figure><img src="/gallery/restaurant-interior-1.png" alt="M.S Mandi & Shawarma dining area with patterned floor seating" loading="lazy"/><figcaption>Our traditional seating</figcaption></figure>
          <figure><img src="/gallery/restaurant-interior-2.png" alt="Interior view of the restaurant seating and decorated pillars" loading="lazy"/><figcaption>A welcoming space</figcaption></figure>
          <figure><img src="/gallery/restaurant-interior-3.png" alt="Restaurant interior with floor seating and wall display" loading="lazy"/><figcaption>Made for gathering</figcaption></figure>
          <figure><img src="/gallery/restaurant-interior-4.png" alt="Low tables and patterned carpets in the dining area" loading="lazy"/><figcaption>Comfortable floor </figcaption></figure>
         
        </div></section>

        </>)}

        {currentPage === 'visit' && (<>
        <section className="visit-section" id="visit"><div className="visit-inner"><div><p className="eyebrow">YOUR TABLE IS WAITING</p><h2>Make room for<br /><em>something memorable.</em></h2><p><MapPin size={15} style={{display:"inline",verticalAlign:"middle",marginRight:6,color:"#e9a13a"}}/>Zehra Nagar Colony, Purani Haveli, Dabeerpura, Charminar, Hyderabad 500024</p><p><Clock3 size={15} style={{display:"inline",verticalAlign:"middle",marginRight:6,color:"#e9a13a"}}/>Zomato lists the outlet as open 24 hours; please confirm before visiting.</p></div><div className="visit-actions"><a className="button button-primary" href="https://www.zomato.com/hyderabad/ms-mandi-shawarma-charminar/order" target="_blank" rel="noreferrer"><Utensils size={17} /> Order on Zomato <ArrowRight size={16} /></a><a className="button button-outline" href="tel:+919014195272"><Phone size={16} /> Call +91 90141 95272</a></div></div></section>
        </>)}
      </main>

      <footer className="footer"><a className="brand footer-brand" href="/" onClick={pageLink('home')}><span className="brand-mark"><img src="/logo.svg" alt="M.S emblem" /></span><span className="brand-name">M.S Mandi <i>&amp;</i> Shawarma</span><span className="brand-subtitle">ARABIAN · LEBANESE · TURKISH</span></a><p>Arabian, Lebanese & Turkish food.</p><div className="footer-links"><a href="/menu" onClick={pageLink('menu')}>Menu</a><a href="/story" onClick={pageLink('story')}>Our Story</a><a href="/visit" onClick={pageLink('visit')}>Contact</a><a href="https://www.zomato.com/hyderabad/ms-mandi-shawarma-charminar" target="_blank" rel="noreferrer">Zomato</a><a href="tel:+919014195272">Call us</a><a href="/gallery" onClick={pageLink('gallery')}><Instagram size={16} /> Gallery</a></div><span className="copyright">© {new Date().getFullYear()} M.S Mandi & Shawarma · Group of Miskeen</span></footer>
      {notice && <div className="toast" role="status">{notice}<button onClick={() => setNotice('')} aria-label="Dismiss notification"><X size={15} /></button></div>}
    </div>
  );
}

export default App;
