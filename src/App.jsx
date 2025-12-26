import "./styles.css";

export default function App() {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <header className="nav">
        <div className="navInner">
          <div className="brand">
            <div className="brandName">Dishes By Annika</div>
            <div className="brandSub">Dish Rentals</div>
          </div>

          <nav className="links">
            <a href="#sets">Full Sets</a>
            <a href="#items">Single Items</a>
            <a href="#reserve">Reserve</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section className="hero">
          <img
            src={`${base}images/hero.png`}
            alt="Dishes By Annika banner"
            loading="eager"
          />
          <div className="heroOverlay">
            <h1>Elevated dish rentals for gatherings & tea</h1>
            <p>Curated sets and individual pieces — simple pickup, easy returns.</p>
            <div className="heroButtons">
              <a className="button primary" href="#reserve">Reserve Now</a>
              <a className="button" href="#sets">Browse Sets</a>
            </div>
          </div>
        </section>

        {/* SETS + ITEMS */}
        <section className="grid" style={{ marginTop: 16 }}>
          <div className="card" id="sets">
            <h2>Full Sets</h2>
            <p>
              Tea parties, showers, brunches, and celebrations — bundles that look
              intentional and photograph beautifully.
            </p>
            <ul className="bullets">
              <li>Tea sets (cups / saucers / plates)</li>
              <li>Dinner sets for gatherings</li>
              <li>Serving pieces & accents</li>
            </ul>
            <a className="button primary" href="#reserve">Reserve a Set</a>
          </div>

          <div className="card" id="items">
            <h2>Single Items</h2>
            <p>
              Mix-and-match plates, cups, serveware, and statement pieces for your theme.
            </p>
            <ul className="bullets">
              <li>Dessert &amp; salad plates</li>
              <li>Teacups &amp; glassware</li>
              <li>Platters, trays, teapots</li>
            </ul>
            <a className="button" href="#reserve">Request Items</a>
          </div>
        </section>

        {/* RESERVE */}
        <section className="card" id="reserve" style={{ marginTop: 16 }}>
          <h2>Reserve</h2>
          <p className="muted">
            Choose pickup/return times, tell us what you want, and we’ll confirm availability.
            Reservation is confirmed after deposit and confirmation email.
          </p>

          <div className="reserveRow">
            <div className="reserveBox">
              <h3>1) Schedule Pickup / Return</h3>
              <p className="muted">Calendly / TidyCal embed goes here.</p>
              <a className="button" href="#reserve">Add Scheduler Link</a>
            </div>

            <div className="reserveBox">
              <h3>2) Pay Deposit</h3>
              <p className="muted">Stripe Payment Link goes here.</p>
              <a className="button primary" href="#reserve">Add Deposit Link</a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="card" id="contact" style={{ marginTop: 16 }}>
          <h2>Contact</h2>
          <p className="muted">
            Questions? Send us a message and we’ll help you build the perfect set.
          </p>
          <div className="contactLine">
            <span>Email:</span> <strong>youremail@domain.com</strong>
            <span className="dot">•</span>
            <span>Location:</span> <strong>Your City</strong>
          </div>
        </section>

        <footer className="footer">
          <small>© {new Date().getFullYear()} Dishes By Annika</small>
        </footer>
      </main>
    </>
  );
}
