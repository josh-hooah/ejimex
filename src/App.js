import { useMemo, useState } from 'react';
import './App.css';

const categories = [
  {
    id: 'phones',
    title: 'Phones',
    subtitle: 'Smartphones & accessories',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'laptops',
    title: 'Laptops',
    subtitle: 'Portable performance',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'consoles',
    title: 'Gaming consoles',
    subtitle: 'Play anytime',
    image:
      'https://www.shutterstock.com/image-photo/cropped-image-young-men-playing-260nw-2760721019.jpg',
  },
  {
    id: 'audio',
    title: 'Headphones & audio',
    subtitle: 'Immersive sound devices',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'smartwatches',
    title: 'Smartwatches',
    subtitle: 'Wearable smart devices',
    image:
      'https://images.unsplash.com/photo-1517213849290-bbbfffdc78e4?auto=format&fit=crop&w=900&q=80',
  },
];

const products = [
  {
    id: 'phone-1',
    categoryId: 'phones',
    name: 'Galaxy S24 Ultra',
    price: '₦650,000',
    image:
      'https://images.unsplash.com/photo-1525186402429-9b32ec26b77a?auto=format&fit=crop&w=900&q=80',
    description: 'Top-tier phone with premium camera and battery life.',
  },
  {
    id: 'phone-2',
    categoryId: 'phones',
    name: 'iPhone 15',
    price: '₦720,000',
    image:
      'https://images.unsplash.com/photo-1523475496153-3d6cc984c5d1?auto=format&fit=crop&w=900&q=80',
    description: 'Sleek design and powerful iOS experience.',
  },
  {
    id: 'laptop-1',
    categoryId: 'laptops',
    name: 'MacBook Air',
    price: '₦980,000',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    description: 'Lightweight notebook ideal for work and travel.',
  },
  {
    id: 'laptop-2',
    categoryId: 'laptops',
    name: 'Dell XPS 13',
    price: '₦820,000',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    description: 'Portable performance with a stunning display.',
  },
  {
    id: 'console-1',
    categoryId: 'consoles',
    name: 'PlayStation 5',
    price: '₦430,000',
    image:
      'https://images.unsplash.com/photo-1606813907690-12f42ae6fe21?auto=format&fit=crop&w=900&q=80',
    description: 'Next-gen gaming console with immersive graphics.',
  },
  {
    id: 'console-2',
    categoryId: 'consoles',
    name: 'Nintendo Switch',
    price: '₦250,000',
    image:
      'https://images.unsplash.com/photo-1519001157449-3fca9fecdbf9?auto=format&fit=crop&w=900&q=80',
    description: 'Play at home or on the go with flexible controls.',
  },
  {
    id: 'audio-1',
    categoryId: 'audio',
    name: 'Sony WH-1000XM5',
    price: '₦185,000',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    description: 'Premium noise-cancelling headphones for crisp audio.',
  },
  {
    id: 'audio-2',
    categoryId: 'audio',
    name: 'Bose QuietComfort',
    price: '₦175,000',
    image:
      'https://images.unsplash.com/photo-1511296254783-1c689e1c0d28?auto=format&fit=crop&w=900&q=80',
    description: 'Comfortable audio with rich, balanced sound.',
  },
  {
    id: 'watch-1',
    categoryId: 'smartwatches',
    name: 'Apple Watch SE',
    price: '₦245,000',
    image:
      'https://images.unsplash.com/photo-1517213849290-bbbfffdc78e4?auto=format&fit=crop&w=900&q=80',
    description: 'Smartwatch for fitness, messaging, and daily life.',
  },
  {
    id: 'watch-2',
    categoryId: 'smartwatches',
    name: 'Samsung Galaxy Watch',
    price: '₦215,000',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de0d7c3?auto=format&fit=crop&w=900&q=80',
    description: 'Durable wearable with health tracking and apps.',
  },
];

const whatsappPhone = '2349075890689';

function App() {
  const [page, setPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('phones');
  const [customerName, setCustomerName] = useState('');

  const category = useMemo(
    () => categories.find((item) => item.id === selectedCategory) || categories[0],
    [selectedCategory]
  );

  const filteredProducts = useMemo(
    () => products.filter((item) => item.categoryId === selectedCategory),
    [selectedCategory]
  );

  const buildWhatsappLink = (product) => {
    const message = `Hello Ejimex Tech,%0a%0aI would like to shop this gadget:%0aName: ${product.name}%0aPrice: ${product.price}%0aImage: ${product.image}%0aCustomer: ${customerName || '________________'}%0a%0aPlease contact me with details.`;
    return `https://wa.me/${whatsappPhone}?text=${message}`;
  };

  const renderHome = () => {
    return (
      <>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Electronics trading & repair</span>
            <h1>Buy, swap, repair and restore every gadget.</h1>
            <p>
              Premium phones, laptops, headphones and accessories with fast hardware
              and software services. Smooth, secure, and built for modern tech needs.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => setPage('shop')}>
                Shop gadgets
              </button>
              <a className="btn btn-secondary" href="#repairs">
                Request repair
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-1">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
                alt="Smartphone"
              />
              <div>
                <strong>Phones</strong>
                <p>New, used, and trade-in deals.</p>
              </div>
            </div>
            <div className="hero-card hero-card-2">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Laptop"
              />
              <div>
                <strong>Laptops</strong>
                <p>Performance machines for every budget.</p>
              </div>
            </div>
            <div className="hero-card hero-card-3">
              <img
                src="https://www.shutterstock.com/image-vector/set-3d-technology-electronic-items-260nw-2655624437.jpg"
                alt="Headphones"
              />
              <div>
                <strong>Accessories</strong>
                <p>Headphones, chargers and smart devices.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section section-grid fade-up">
          <div className="section-head">
            <span>What we offer</span>
            <h2>Complete device care and digital trade</h2>
          </div>
          <div className="cards-grid">
            <article className="service-card">
              <h3>Buy & Swap Gadgets</h3>
              <p>
                Explore phones, laptops, tablets and audio gear. Swap old devices for
                the latest technology with transparent pricing.
              </p>
            </article>
            <article className="service-card">
              <h3>Hardware Repairs</h3>
              <p>
                Screen replacements, battery swaps, motherboard fixes, port repairs, and
                full diagnostics across all brands.
              </p>
            </article>
            <article className="service-card">
              <h3>Software Support</h3>
              <p>
                OS refresh, virus removal, data recovery, performance tune-ups, and app
                optimization for every gadget.
              </p>
            </article>
            <article className="service-card">
              <h3>Fast Delivery</h3>
              <p>
                Local pickup and delivery plus secure packaging on traded and repaired
                devices.
              </p>
            </article>
          </div>
        </section>

        <section id="products" className="section product-section fade-up">
          <div className="section-head">
            <span>Featured categories</span>
            <h2>Shop by category or swap your old device</h2>
          </div>
          <div className="product-grid">
            {categories.slice(0, 3).map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="repairs" className="section repairs-section fade-up">
          <div className="section-head">
            <span>Repair solutions</span>
            <h2>Hardware and software services that restore your tech</h2>
          </div>
          <div className="repair-grid">
            <div className="repair-card">
              <h3>Screen & battery</h3>
              <p>Fast replacements with genuine parts and quality assurance.</p>
            </div>
            <div className="repair-card">
              <h3>Performance tuning</h3>
              <p>Speed up your device with software cleanup and OS optimization.</p>
            </div>
            <div className="repair-card">
              <h3>Diagnostics</h3>
              <p>Comprehensive inspections to find the root cause and keep you running.</p>
            </div>
            <div className="repair-card">
              <h3>Data recovery</h3>
              <p>Recover photos, documents and backups from broken or failing devices.</p>
            </div>
          </div>
        </section>

        <section className="section contact-section fade-up" id="contact">
          <div className="contact-panel">
            <h2>Start your repair or swap today</h2>
            <p>
              Reach out for a quote, schedule a free device assessment, or ask about our
              available inventory.
            </p>
            <div className="contact-details">
              <div>
                <strong>Email</strong>
                <p>support@ejimex.tech</p>
              </div>
              <div>
                <strong>Phone</strong>
                <p>+234 800 123 4567</p>
              </div>
            </div>
            <a className="btn btn-primary" href="mailto:support@ejimex.tech">
              Contact us
            </a>
          </div>
        </section>
      </>
    );
  };

  const renderShop = () => {
    return (
      <section className="section shop-page fade-up">
        <div className="shop-header">
          <div>
            <span className="eyebrow">Shop all gadgets</span>
            <h2>Place your Order.</h2>
            <p>
              Enter your name once, browse categories, and click “Shop this” to
              send your selection directly to our WhatsApp contact.
            </p>
          </div>
          <button className="btn btn-secondary" onClick={() => setPage('home')}>
            Back to home
          </button>
        </div>

        <div className="shop-controls">
          <label className="name-input">
            <span>Your name</span>
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
        </div>

        <div className="category-list">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`category-pill ${item.id === selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="shop-intro">
          <div className="category-image">
            <img src={category.image} alt={category.title} />
          </div>
          <div className="category-copy">
            <span className="eyebrow">{category.title}</span>
            <h3>{category.subtitle}</h3>
            <p>Browse our recommended models. Each item is ready to order directly through WhatsApp.</p>
          </div>
        </div>

        <div className="items-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="item-card">
              <img src={product.image} alt={product.name} />
              <div className="item-copy">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="item-footer">
                  <span className="price">{product.price}</span>
                  <a
                    className="btn btn-primary shop-action"
                    href={buildWhatsappLink(product)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Shop this
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="App">
      <div className="page-shell">
        <nav className="nav-bar">
          <div className="brand">Ejimex Tech</div>
          <div className="nav-links">
            <button className="nav-link" onClick={() => setPage('home')}>
              Home
            </button>
            <button className="nav-link" onClick={() => setPage('shop')}>
              Shop
            </button>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {page === 'home' ? renderHome() : renderShop()}

        {page === 'home' && (
          <footer className="footer">
            <p>© 2026 Ejimex Tech. All rights reserved.</p>
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;
