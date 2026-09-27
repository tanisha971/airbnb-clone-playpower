import { useEffect, useState } from "react";
import {
  Bath,
  Bell,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Coffee,
  Copy,
  DoorOpen,
  Flame,
  Heart,
  House,
  LockKeyhole,
  MapPin,
  Minus,
  Plus,
  Share,
  Snowflake,
  Star,
  Tv,
  Wifi,
  X,
} from "lucide-react";
import Navbar from "./components/Navbar/Navbar";

const gallery = [
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85", alt: "Living room with jacuzzi suite" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85", alt: "Warmly lit sitting room" },
  { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=85", alt: "Jacuzzi bathtub" },
  { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85", alt: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85", alt: "Exterior of the building" },
];

const amenities = [
  [Wifi, "WiFi"], [Tv, "TV"], [Coffee, "Kitchen"], [LockKeyhole, "Lockbox"],
  [House, "Dedicated workspace"], [Snowflake, "Air conditioning"], [Bath, "Pool"], [Flame, "Fire extinguisher"],
  [DoorOpen, "Patio or balcony"], [Bell, "Exterior security cameras on property"],
];

const reviews = [
  ["Amit", "The place is beautiful and the location is perfect. Very clean and spacious.", "A"],
  ["Ayesha", "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown.", "A"],
  ["Sankisha", "The host was really great and helpful. Highly recommended.", "S"],
  ["Vadunt", "The place was amazing and had everything we needed for a relaxing break.", "V"],
];

function App() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (lightboxIndex === null) return;
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % gallery.length);
      if (event.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="site-shell">
      <Navbar />
      <main className="listing-page">
        <div className="listing-heading">
          <div>
            <p className="eyebrow">Entire serviced apartment</p>
            <h1>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>
            <p className="subheading"><Star size={15} fill="currentColor" /> 4.95 · 19 reviews <span>·</span> Candolim, Goa, India</p>
          </div>
          <div className="heading-actions"><button><Share size={16} /> Share</button><button><Heart size={16} /> Save</button></div>
        </div>

        <section id="photos" className="photo-grid" aria-label="Property photos">
          {gallery.map((photo, index) => <button className={`photo photo-${index + 1}`} key={photo.src} onClick={() => setLightboxIndex(index)}><img src={photo.src} alt={photo.alt} /></button>)}
          <button className="show-all" onClick={() => setLightboxIndex(0)}><Copy size={15} /> Show all photos</button>
        </section>

        <div className="content-layout">
          <div className="main-column">
            <section className="intro section-rule">
              <div><h2>Entire serviced apartment in Candolim, India</h2><p>3 guests <span>·</span> 1 bedroom <span>·</span> 1 bed <span>·</span> 1 bathroom</p></div>
              <div className="host-avatar">M</div>
            </section>
            <section className="rating-strip section-rule"><div><strong>Guest favourite</strong><span>One of the most loved homes on Airbnb, according to guests</span></div><div><strong>4.95</strong><span>★★★★★</span></div><div><strong>19</strong><span>Reviews</span></div></section>
            <section className="highlights section-rule"><Highlight icon={<House />} title="Hosted by Mirashya Homes" text="2 years hosting" /><Highlight icon={<Bell />} title="Outdoor entertainment" text="The pool and architecture are great for summer trips." /><Highlight icon={<LockKeyhole />} title="Designed for staying cool" text="Beat the heat with the A/C and ceiling fan." /><Highlight icon={<DoorOpen />} title="Self check-in" text="You can check in with the building staff." /></section>
            <section className="notice section-rule"><div className="notice-icon">★</div><p><strong>Plan your Relaxing Holiday at Ameer D Goa by Mirashya Homes</strong> ✦ Stay in this cosy 1BHK in the heart of Candolim, featuring a private jacuzzi + for the perfect unwind. Enjoy high-end amenities and a short walk to the beach, restaurants, and nightlife.</p><button>Show more</button></section>
            <section className="section-rule sleep-section"><h2>Where you&apos;ll sleep</h2><div className="sleep-grid"><SleepRoom image={gallery[3].src} title="Bedroom" detail="1 double bed" /><SleepRoom image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85" title="Living room" detail="1 sofa" /></div></section>
            <section id="amenities" className="section-rule"><h2>What this place offers</h2><div className="amenities-grid">{amenities.map(([Icon, label]) => <div key={label}><Icon size={17} /><span>{label}</span></div>)}</div><button className="outline-button">Show all 50 amenities</button></section>
            <section className="section-rule dates"><h2>5 nights in Candolim</h2><p className="muted">19 Oct 2026 - 24 Oct 2026</p><div className="calendar-row"><Calendar month="October 2026" /><Calendar month="November 2026" /></div></section>
            <section id="reviews" className="reviews section-rule"><div className="review-score"><div className="score-mark">❧ 4.95 ❧</div><strong>Guest favourite</strong><p>This home is a guest favourite based on ratings, reviews and reliability.</p><a href="#reviews">Show all 19 reviews</a></div><div className="review-metrics">{[["Overall rating", "5.0"], ["Cleanliness", "5.0"], ["Accuracy", "5.0"], ["Check-in", "5.0"], ["Communication", "5.0"], ["Location", "4.8"]].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong><div className="metric-line"><i style={{ width: `${value * 20}%` }} /></div></div>)}</div><div className="review-list">{reviews.map(([name, text, initial]) => <article key={name}><div className="reviewer"><span>{initial}</span><strong>{name}</strong><small>2 months ago</small></div><div><div className="stars">★★★★★</div><p>{text}</p><button>Show more</button></div></article>)}</div></section>
            <section id="location" className="location section-rule"><h2>Where you&apos;ll be</h2><p className="muted">Candolim, Goa, India</p><div className="map"><MapPin size={24} fill="#222" /><div className="map-controls"><button><Plus size={15} /></button><button><Minus size={15} /></button></div></div><small>Exact location will be provided after booking</small><h3>Neighbourhood highlights</h3><p>Located in the heart of Candolim, Ameer D Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p><a href="#location">Show more</a></section>
          </div>
          <aside className="booking-card"><div className="booking-top"><strong>₹28,499</strong> for 5 nights <span>★ 4.95 · 19 reviews</span></div><div className="booking-field"><CalendarDays size={17} /><div><b>Check-in</b><span>10/18/2026</span></div><div><b>Checkout</b><span>10/23/2026</span></div></div><div className="booking-field guests"><CircleUserRound size={17} /><div><b>Guests</b><span>2 guests</span></div><ChevronRight size={15} /></div><button className="reserve-button" onClick={() => setReserved(true)}>{reserved ? "Reserved" : "Reserve"}</button><p className="booking-note">You won&apos;t be charged yet</p></aside>
        </div>
        <section className="host-section section-rule"><h2>Meet your host</h2><div className="host-card"><div className="big-host"><div className="host-avatar large">M</div><h3>Mirashya</h3><span>Homes</span></div><div><div className="host-stats"><b>1,463<br /><small>Reviews</small></b><b>4.68 ★<br /><small>Rating</small></b><b>2<br /><small>Years hosting</small></b></div><p><b>Mirashya</b> is a Superhost. Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p></div><button className="outline-button">Message host</button></div></section>
        <section className="footer-links section-rule"><div><b>Cancellation policy</b><p>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p></div><div><b>House rules</b><p>Check-in after 2:00 pm<br />Checkout before 10:00 am</p></div><div><b>Safety & property</b><p>Carbon monoxide alarm not reported<br />Smoke alarm not reported</p></div></section>
      </main>
      {lightboxIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo tour"><button className="close-lightbox" onClick={() => setLightboxIndex(null)}><X /></button><button className="lightbox-arrow left" onClick={() => setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length)}><ChevronLeft /></button><img src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].alt} /><button className="lightbox-arrow right" onClick={() => setLightboxIndex((lightboxIndex + 1) % gallery.length)}><ChevronRight /></button><span className="lightbox-count">{lightboxIndex + 1} / {gallery.length}</span></div>}
    </div>
  );
}

function Highlight({ icon, title, text }) { return <div className="highlight"><span>{icon}</span><div><strong>{title}</strong><p>{text}</p></div></div>; }
function SleepRoom({ image, title, detail }) { return <div><img src={image} alt={title} /><strong>{title}</strong><span>{detail}</span></div>; }
function Calendar({ month }) { return <div className="calendar"><strong>{month}</strong><div className="weekdays">S M T W T F S</div><div className="days">{Array.from({ length: 35 }, (_, index) => <span className={index === 18 || index === 23 ? "selected" : ""} key={index}>{index < 3 ? "" : (index - 2)}</span>)}</div></div>; }

export default App;