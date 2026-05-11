import "./styles.css";

const FORM_ENDPOINT = "https://formspree.io/f/xnjwlnpg";
const CONTACT_EMAIL = "info@dishesbyannika.com";

const serviceAreas = ["Coeur d’Alene", "Hayden", "Post Falls", "Rathdrum"];

const fullSets = [
  {
    name: "Amber & Gold Tea Set",
    image: "images/tea-set-amber-gold.png",
    serves: "Ideal for 6-10 guests",
    includes: "Teacups, saucers, dessert plates, and teapot",
    price: "Quote-based · often from $45",
    bestFor: "Warm showers, brunches, and cozy tea gatherings",
  },
  {
    name: "Blush Rose Tea Set",
    image: "images/tea-set-blush-roses.png",
    serves: "Ideal for 8-12 guests",
    includes: "Teacups, saucers, dessert plates, and serving tray",
    price: "Quote-based · often from $55",
    bestFor: "Bridal showers, baby showers, and feminine tablescapes",
  },
  {
    name: "Ivory Classic Tea Service",
    image: "images/tea-set-ivory-classic.png",
    serves: "Ideal for 6-12 guests",
    includes: "Teacups, saucers, salad plates, sugar bowl, and creamer",
    price: "Quote-based · often from $50",
    bestFor: "Classic gatherings, brunches, and intimate celebrations",
  },
  {
    name: "Garden Party Tea Set",
    image: "images/tea-set-garden-party.png",
    serves: "Ideal for 10-16 guests",
    includes: "Teacups, saucers, dessert plates, and tiered stand",
    price: "Quote-based · often from $65",
    bestFor: "Garden parties, spring showers, and outdoor celebrations",
  },
  {
    name: "Midnight Elegance Set",
    image: "images/tea-set-midnight-elegance.png",
    serves: "Ideal for 8-14 guests",
    includes: "Teacups, saucers, dessert plates, and statement teapot",
    price: "Quote-based · often from $70",
    bestFor: "Evening gatherings, moody tables, and dramatic styling",
  },
  {
    name: "Blue Willow Tea Set",
    image: "images/tea-set-blue-willow.png",
    serves: "Ideal for 6-10 guests",
    includes: "Teacups, saucers, plates, and teapot",
    price: "Quote-based · often from $48",
    bestFor: "Traditional tea service and timeless blue-and-white styling",
  },
  {
    name: "Vintage Lace Tea Set",
    image: "images/tea-set-vintage-lace.png",
    serves: "Ideal for 8-12 guests",
    includes: "Teacups, saucers, dessert plates, sugar bowl, and creamer",
    price: "Quote-based · often from $58",
    bestFor: "Vintage-inspired showers, luncheons, and tea parties",
  },
  {
    name: "Candlelight Champagne Set",
    image: "images/tea-set-candlelight-champagne.png",
    serves: "Ideal for 10-18 guests",
    includes: "Tea service with optional glassware and accent pieces",
    price: "Quote-based · often from $75",
    bestFor: "Elegant celebrations, evening events, and romantic tables",
  },
];

const occasionCards = [
  {
    title: "Tea parties",
    text: "Layered cups, saucers, dessert plates, teapots, trays, and delicate serving pieces.",
  },
  {
    title: "Bridal showers",
    text: "Soft floral sets, champagne accents, and polished place settings for a celebratory table.",
  },
  {
    title: "Baby showers",
    text: "Light, charming dishware that feels sweet without becoming overly themed.",
  },
  {
    title: "Brunches",
    text: "Salad plates, teacups, serving pieces, and mixed settings for a relaxed morning event.",
  },
  {
    title: "Garden parties",
    text: "Color, florals, and tiered stands that suit outdoor tables and afternoon gatherings.",
  },
  {
    title: "Accent pieces",
    text: "Individual trays, teapots, cups, plates, and serving details to finish an existing table.",
  },
];

const priceHighlights = [
  {
    label: "Curated tea sets",
    value: "Often $45-$75+",
    text: "Best for small showers, tea parties, brunches, and intimate gatherings.",
  },
  {
    label: "Individual pieces",
    value: "Quoted by item",
    text: "Helpful when you need extra teacups, dessert plates, trays, or serving accents.",
  },
  {
    label: "Delivery",
    value: "Quoted by location",
    text: "Available for select Coeur d’Alene, Hayden, Post Falls, and Rathdrum orders.",
  },
];

const rentalDetails = [
  {
    title: "Rental window",
    text: "Standard rental windows are 2–5 days depending on pickup, event date, and return timing.",
  },
  {
    title: "Pickup and delivery",
    text: "Pickup is by appointment in Coeur d’Alene. Delivery is available for select orders in Coeur d’Alene, Hayden, Post Falls, and Rathdrum.",
  },
  {
    title: "Deposit",
    text: "A 20% deposit is required to confirm a reservation after availability and quote details are approved.",
  },
  {
    title: "Cancellations",
    text: "Cancellations made more than 15 days before the event are eligible for a full refund of the deposit. Cancellations made 7–15 days before the event are eligible for a 50% refund. Cancellations made less than 7 days before the event are non-refundable.",
  },
  {
    title: "Damage or missing pieces",
    text: "Missing, broken, or damaged items may be charged per piece at replacement value.",
  },
];

const faqs = [
  {
    question: "Do you deliver?",
    answer:
      "Yes. Delivery is available for select orders in Coeur d’Alene, Hayden, Post Falls, and Rathdrum. Delivery availability and fees are confirmed with your quote.",
  },
  {
    question: "Where is pickup?",
    answer: "Pickup is by appointment in Coeur d’Alene.",
  },
  {
    question: "How long can I keep the rentals?",
    answer:
      "Most rental windows are 2–5 days depending on your event date, pickup time, and return timing.",
  },
  {
    question: "How do I reserve a date?",
    answer:
      "Submit a rental request with your event date, guest count, and desired pieces. Your reservation is confirmed after availability is approved and the 20% deposit is paid.",
  },
  {
    question: "Do I need to wash everything before returning it?",
    answer:
      "Please remove food and liquids before returning items. Final care instructions will be included with your confirmed rental details.",
  },
  {
    question: "What happens if something breaks?",
    answer:
      "Missing, broken, or damaged items may be charged per piece at replacement value.",
  },
  {
    question: "Can I rent individual pieces?",
    answer:
      "Yes. Individual pieces may be available depending on inventory, event needs, and order size.",
  },
];

const trustSignals = [
  {
    title: "Inspected before every rental",
    text: "Pieces are checked before pickup so your table feels clean, complete, and event-ready.",
  },
  {
    title: "Practical return instructions",
    text: "You will receive simple care and return details with your confirmed reservation.",
  },
  {
    title: "Thoughtful substitutions",
    text: "If a fragile vintage piece becomes unavailable, we will confirm a fitting alternative before your event.",
  },
];

const testimonials = [
  {
    quote:
      "The table looked collected and special without us having to buy a single extra plate.",
    name: "Shower host",
  },
  {
    quote:
      "Pickup was simple, the pieces were beautiful, and the set made our tea feel like an occasion.",
    name: "Tea party rental",
  },
];

function App() {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Dishes by Annika home">
          <span className="brandName">Dishes by Annika</span>
          <span className="brandSub">Dish & Tea Set Rentals</span>
        </a>

        <nav className="links" aria-label="Main navigation">
          <a href="#sets">Sets</a>
          <a href="#occasions">Occasions</a>
          <a href="#how">How it works</a>
          <a href="#details">Details</a>
          <a href="#about">About</a>
          <a href="#reserve">Reserve</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero heroWithLogo">
          <div className="heroLogoWrap">
            <picture>
              <source srcSet={`${base}images/dishes-by-annika-logo.webp`} type="image/webp" />
              <img
                src={`${base}images/dishes-by-annika-logo.png`}
                alt="Dishes by Annika Dish Rentals logo"
                loading="eager"
              />
            </picture>
          </div>

          <div className="heroContent">
            <p className="eyebrow">Coeur d’Alene area dish rentals</p>
            <h1>Elegant dish rentals for tea parties, showers, dinners, and special gatherings</h1>
            <p className="heroText">
              Curated dishware, tea sets, serving pieces, and table accents for hosts who want
              a finished table without buying and storing every detail. Pickup is by appointment
              in Coeur d’Alene, with select delivery available across nearby North Idaho.
            </p>

            <div className="heroButtons">
              <a className="button primary" href="#reserve">Reserve Now</a>
              <a className="button secondary" href="#sets">Browse Sets</a>
              <a className="inlineLink" href="#how">How it works</a>
            </div>

            <div className="trustBar" aria-label="Rental highlights">
              <span>Pickup in Coeur d’Alene</span>
              <span>Delivery available</span>
              <span>2–5 day rental windows</span>
              <span>20% deposit to reserve</span>
            </div>
          </div>
        </section>

        <section className="section introGrid" aria-label="Service overview">
          <div className="panel introPanel">
            <p className="eyebrow">What we rent</p>
            <h2>Curated tableware with a finished, photo-ready look</h2>
            <p>
              Choose a full tea set, build a mixed table, or request individual plates, cups,
              serving pieces, trays, teapots, and accents. Every request is quoted based on
              event date, guest count, selected pieces, rental window, and delivery needs.
            </p>
          </div>

          <div className="panel servicePanel">
            <p className="eyebrow">Service area</p>
            <h2>Serving North Idaho gatherings</h2>
            <div className="areaList">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
            <p>
              Pickup is by appointment in Coeur d’Alene. Delivery is available for select
              orders and quoted individually.
            </p>
          </div>
        </section>

        <section className="section" id="sets">
          <div className="sectionHeader">
            <p className="eyebrow">Featured rental sets</p>
            <h2>Browse popular tea and gathering bundles</h2>
            <p>
              These starting ranges help with planning. Final pricing is confirmed by quote
              after availability, guest count, delivery needs, and selected pieces are reviewed.
            </p>
          </div>

          <div className="catalogGrid">
            {fullSets.map((set) => (
              <article className="catalogCard" key={set.name}>
                <img
                  className="catalogImg"
                  src={`${base}${set.image}`}
                  alt={`${set.name} rental set`}
                  loading="lazy"
                />
                <div className="catalogBody">
                  <div className="catalogTop">
                    <h3>{set.name}</h3>
                    <span className="pill">{set.price}</span>
                  </div>
                  <p className="serves">{set.serves}</p>
                  <p className="includes">{set.includes}</p>
                  <p className="bestFor">{set.bestFor}</p>
                  <a className="button cardButton" href="#reserve">
                    Request This Set
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section eventSection" id="occasions">
          <div className="sectionHeader">
            <p className="eyebrow">Browse by occasion</p>
            <h2>Start with the kind of gathering you are hosting</h2>
            <p>
              Not sure which set fits? Choose the event style first and we can recommend a
              cohesive mix of plates, cups, serving pieces, and accents.
            </p>
          </div>

          <div className="eventGrid">
            {occasionCards.map((occasion) => (
              <article className="eventCard" key={occasion.title}>
                <h3>{occasion.title}</h3>
                <p>{occasion.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section howSection" id="how">
          <div className="sectionHeader">
            <p className="eyebrow">Simple process</p>
            <h2>How rentals work</h2>
          </div>

          <div className="stepsGrid">
            <div className="stepCard">
              <span>1</span>
              <h3>Choose your look</h3>
              <p>Browse curated tea sets, dishware, serving pieces, and table accents.</p>
            </div>
            <div className="stepCard">
              <span>2</span>
              <h3>Request your date</h3>
              <p>Send your event date, guest count, preferred pieces, and pickup or delivery needs.</p>
            </div>
            <div className="stepCard">
              <span>3</span>
              <h3>Confirm your quote</h3>
              <p>We’ll confirm availability, final pricing, and your 20% deposit.</p>
            </div>
            <div className="stepCard">
              <span>4</span>
              <h3>Celebrate and return</h3>
              <p>Enjoy your event, then return the pieces during your scheduled return window.</p>
            </div>
          </div>
        </section>

        <section className="section trustSection">
          <div className="sectionHeader">
            <p className="eyebrow">Reassurance</p>
            <h2>Beautiful pieces, clear rental expectations</h2>
            <p>
              Dishware rentals should feel delightful, not mysterious. These details are here
              so you know what to expect before you inquire.
            </p>
          </div>

          <div className="trustGrid">
            {trustSignals.map((item) => (
              <article className="trustCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="testimonialGrid" aria-label="Customer notes">
            {testimonials.map((testimonial) => (
              <figure className="testimonialCard" key={testimonial.quote}>
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption>{testimonial.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section detailsGrid" id="details">
          <div className="panel pricingPanel">
            <p className="eyebrow">Pricing</p>
            <h2>Simple quote-based pricing</h2>
            <p>
              Most curated rentals start around <strong>$45–$75</strong> depending on the
              selected pieces, guest count, rental window, and delivery needs. Larger orders,
              custom mixes, and delivery are quoted individually.
            </p>
            <p>
              A <strong>20% deposit</strong> is required to confirm your reservation after the
              quote is approved.
            </p>
            <div className="priceGrid" aria-label="Pricing examples">
              {priceHighlights.map((price) => (
                <div className="priceItem" key={price.label}>
                  <span>{price.label}</span>
                  <strong>{price.value}</strong>
                  <p>{price.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel detailList">
            <p className="eyebrow">Rental details</p>
            <h2>Clear expectations before you book</h2>
            {rentalDetails.map((detail) => (
              <div className="detailItem" key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section aboutSection" id="about">
          <div className="aboutCopy">
            <p className="eyebrow">About Annika</p>
            <h2>A collected table, without the collecting</h2>
            <p>
              Dishes by Annika was created for hosts who love the charm of a layered table but
              do not want to spend months hunting for matching pieces. The collection leans
              romantic, classic, and a little nostalgic, with sets that can be kept cohesive or
              mixed for a more personal look.
            </p>
            <p>
              The goal is simple: make it easier to host something beautiful, whether it is an
              afternoon tea, a shower, a brunch, or a small celebration with people you love.
            </p>
          </div>

          <div className="aboutPhoto">
            <img
              src={`${base}images/hero.png`}
              alt="Styled dish rental table by Dishes by Annika"
              loading="lazy"
            />
          </div>
        </section>

        <section className="section reserveSection" id="reserve">
          <div className="reserveIntro">
            <p className="eyebrow">Request availability</p>
            <h2>Tell us about your event</h2>
            <p>
              Submit your event details and we’ll follow up with availability, quote details,
              deposit instructions, and next steps. Your date is not confirmed until availability
              is approved and the 20% deposit is completed.
            </p>
          </div>

          <form className="rentalForm" action={FORM_ENDPOINT} method="POST">
            <input type="hidden" name="_subject" value="New Dishes by Annika rental request" />
            <input type="text" name="_gotcha" className="hiddenField" tabIndex="-1" autoComplete="off" />

            <div className="formGrid">
              <label>
                Name <span>*</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>

              <label>
                Email <span>*</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>

              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" />
              </label>

              <label>
                Event date <span>*</span>
                <input name="event_date" type="date" required />
              </label>

              <label>
                Event type
                <select name="event_type" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Tea party</option>
                  <option>Bridal shower</option>
                  <option>Baby shower</option>
                  <option>Brunch</option>
                  <option>Garden party</option>
                  <option>Small celebration</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Guest count
                <input name="guest_count" type="number" min="1" placeholder="Example: 12" />
              </label>

              <label>
                Pickup or delivery
                <select name="pickup_or_delivery" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Pickup in Coeur d’Alene</option>
                  <option>Delivery quote requested</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label>
                Event city
                <select name="event_city" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Coeur d’Alene</option>
                  <option>Hayden</option>
                  <option>Post Falls</option>
                  <option>Rathdrum</option>
                  <option>Other nearby area</option>
                </select>
              </label>
            </div>

            <label>
              Interested set or items
              <input
                name="interested_items"
                type="text"
                placeholder="Example: Blush Rose Tea Set, dessert plates, teacups"
              />
            </label>

            <label>
              Rental window or timing notes
              <input
                name="rental_window"
                type="text"
                placeholder="Example: pickup Friday, return Monday"
              />
            </label>

            <label>
              Message <span>*</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your event, style, colors, guest count, delivery needs, or anything else that would help us quote the rental."
                required
              />
            </label>

            <button className="button primary submitButton" type="submit">
              Request Availability
            </button>

            <p className="formFinePrint">
              By submitting this form, you are requesting availability and a quote. A reservation
              is not confirmed until approved and the 20% deposit is completed.
            </p>
          </form>
        </section>

        <section className="section faqSection">
          <div className="sectionHeader">
            <p className="eyebrow">Questions</p>
            <h2>Rental FAQ</h2>
          </div>

          <div className="faqGrid">
            {faqs.map((faq) => (
              <details className="faqItem" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section contactSection" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Questions before booking?</h2>
            <p>
              Send your event date, guest count, and the kind of table you are imagining.
              We’ll help you choose the right pieces.
            </p>
          </div>

          <div className="contactCard">
            <span>Email</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span>Service area</span>
            <p>Coeur d’Alene, Hayden, Post Falls, and Rathdrum</p>
            <span>Pickup</span>
            <p>By appointment in Coeur d’Alene</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <small>
          © {new Date().getFullYear()} Dishes by Annika · Dish and tea set rentals in the
          Coeur d’Alene area
        </small>
      </footer>

      <a className="mobileCta" href="#reserve">Reserve Now</a>
    </>
  );
}

export default App;
