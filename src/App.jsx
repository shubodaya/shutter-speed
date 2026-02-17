import logo from "./assets/logo.svg";
import camImage from "./assets/cam.avif";
import sessionImage from "./assets/session.webp";
import lightsImage from "./assets/lights.webp";

const services = [
  {
    title: "Photography Sessions",
    description:
      "Editorial, portraits, lifestyle, and high-fashion shoots crafted for story-driven visuals.",
  },
  {
    title: "Modeling & Direction",
    description:
      "Creative direction and on-set styling to bring bold concepts to life.",
  },
  {
    title: "Videography",
    description:
      "Cinematic highlights, reels, behind-the-scenes, and brand storytelling.",
  },
  {
    title: "Movie Making",
    description:
      "Short films, documentaries, and narrative visuals with a polished finish.",
  },
  {
    title: "Editing & Retouching",
    description:
      "Color grading, skin retouching, and mood-driven edits for standout visuals.",
  },
];

const gallery = [
  {
    title: "Golden Hour Portraits",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Editorial Motion",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "City Night Stories",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Studio Dramatic",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Every frame felt intentional. The final edits were cinematic and unforgettable.",
    name: "Ava Blake",
    role: "Creative Director",
  },
  {
    quote:
      "The team captured the energy of our brand in a way no one else has before.",
    name: "Luca Moreno",
    role: "Lifestyle Brand Founder",
  },
  {
    quote:
      "From concept to delivery, the experience was seamless and the visuals were stunning.",
    name: "Nia Roberts",
    role: "Model",
  },
];

const stats = [
  { value: "120+", label: "Campaigns Shot" },
  { value: "14", label: "Short Films Directed" },
  { value: "8", label: "Years Creating" },
  { value: "320k", label: "Audience Reached" },
];

const highlights = [
  "Cinematic Portraits",
  "Fashion Editorials",
  "Music Videos",
  "Brand Films",
  "Short Documentaries",
  "Studio Lighting",
];

const sessionFeatures = [
  {
    title: "Creative Pre-Production",
    description:
      "Mood boards, concept refinement, styling references, and shot planning.",
  },
  {
    title: "Production Day Coverage",
    description:
      "Multi-angle capture with directed poses, lighting control, and pacing.",
  },
  {
    title: "Post-Production Finish",
    description:
      "Color grading, retouching, and delivery formats for web and print.",
  },
];

const sessionPackages = [
  {
    title: "Photo Session",
    detail: "2-hour shoot, 2 looks, 25 edited images.",
  },
  {
    title: "Photo + Video Session",
    detail: "4-hour shoot, 3 looks, 40 edited images, 60-sec reel.",
  },
  {
    title: "Brand Story Session",
    detail: "Full-day production, creative direction, and social cutdowns.",
  },
];

const process = [
  {
    title: "Discover",
    description: "We align on the story, mood boards, and the visual direction.",
  },
  {
    title: "Produce",
    description: "On-set creative direction, styling, and capture with precision.",
  },
  {
    title: "Deliver",
    description: "Retouched, graded, and sequenced edits tailored for your launch.",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="hero" style={{ "--hero-bg": `url(${camImage})` }}>
        <nav className="nav">
          <div className="logo"><img src={logo} alt="ShutterSpeed logo" className="logo-mark" />ShutterSpeed</div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#gallery">Work</a>
            <a href="#sessions">Sessions</a>
            <a href="#stories">Stories</a>
            <a href="#contact">Book a Session</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-tag">Photography • Film • Creative Direction</p>
            <h1>
              Capture moments that
              <span> move people</span>
            </h1>
            <p className="hero-subtitle">
              I craft immersive photography, modeling direction, videography,
              movie making, and cinematic edits that tell unforgettable stories.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#contact">Hire Me</a>
              <a className="ghost" href="#gallery">View Portfolio</a>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3>{stat.value}</h3>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-socials">
              <span>Follow</span>
              <a href="https://www.instagram.com/shutter.__.speed/?igsh=dm45enBnbTYyZ2Fp&utm_source=qr#">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zm4.75-3.25a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75z"
                  />
                </svg>
                Instagram
              </a>
              <a href="https://vimeo.com">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M22.6 7.2c-.2 4.7-3.5 11.2-10 14.5-1.4.7-2.6.6-3.6-.1-1-.6-1.4-1.7-1.6-3L5.9 12c-.2-1.1-.5-1.5-1.1-1.5-.4 0-1 .3-1.6.6L2.4 10c1.5-1.4 3-2.2 4.1-2.3 1.3-.1 2 .6 2.4 2.2l1.3 5.9c.2 1 .6 1.6 1.2 1.6.4 0 1.1-.6 1.9-1.9.9-1.4 1.4-2.5 1.5-3.3.1-1.4-.4-2-1.5-2-.5 0-1.1.1-1.6.4 1.1-3.4 3.1-5.1 6.1-5 2.1.1 3.1 1.5 3 4.2z"
                  />
                </svg>
                Vimeo
              </a>
              <a href="https://youtube.com">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.6 12 3.6 12 3.6s-7.7 0-9.4.5A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.7.5 9.4.5 9.4.5s7.7 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"
                  />
                </svg>
                YouTube
              </a>
            </div>
          </div>

          <div className="hero-visuals">
            <div className="floating-card primary-card">
              <p>Now Booking</p>
              <h4>Summer Editorials</h4>
              <span>Limited slots</span>
            </div>
            <div className="floating-card secondary-card">
              <p>Featured</p>
              <h4>City Lights Film</h4>
              <span>Behind the scenes</span>
            </div>
            <div className="glow-orb orb-one" />
            <div className="glow-orb orb-two" />
            <div className="glow-orb orb-three" />
          </div>
        </div>
      </header>

      <section id="services" className="section services">
        <div className="section-heading">
          <p className="eyebrow">What I Do</p>
          <h2>Services crafted for bold, modern storytelling.</h2>
          <p>
            From intimate portraits to full-scale productions, every project is
            tailored to your vision.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
            {highlights.map((item) => (
              <span key={`${item}-dup`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>A showcase of motion, light, and mood.</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure key={item.title} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <figcaption>
                <h4>{item.title}</h4>
                <span>View story</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="sessions"
        className="section sessions"
        style={{ "--session-bg": `url(${sessionImage})` }}
      >
        <div className="section-heading">
          <p className="eyebrow">Photo + Videography Sessions</p>
          <h2>Sessions built for creators, brands, and editorial stories.</h2>
          <p>
            Each session blends stills and motion capture with an intentional
            narrative, from prep to final delivery.
          </p>
        </div>
        <div className="session-grid">
          <div className="session-details">
            <h3>What is included</h3>
            <div className="session-feature-list">
              {sessionFeatures.map((feature) => (
                <article key={feature.title} className="session-feature">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="session-cards">
            {sessionPackages.map((item) => (
              <article key={item.title} className="session-card">
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
                <span>Custom add-ons available</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="section stories">
        <div className="section-heading">
          <p className="eyebrow">Client Stories</p>
          <h2>People I have created with.</h2>
          <a
            className="story-instagram"
            href="https://www.instagram.com/shutter.__.speed/?igsh=dm45enBnbTYyZ2Fp&utm_source=qr#"
          >
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zm4.75-3.25a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75z"
              />
            </svg>
            More stories on Instagram
          </a>
        </div>
        <div className="story-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="story-card">
              <p>“{item.quote}”</p>
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process">
        <div className="section-heading">
          <p className="eyebrow">My Process</p>
          <h2>Thoughtful production from concept to delivery.</h2>
        </div>
        <div className="process-grid">
          {process.map((step, index) => (
            <article key={step.title} className="process-card">
              <span className="step-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="contact-wrap" style={{ "--contact-bg": `url(${lightsImage})` }}>
        <section id="contact" className="section contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Let’s Collaborate</p>
            <h2>Ready for a session that feels cinematic?</h2>
            <p>
              Share your vision and I will craft a concept, production plan, and
              deliverables that elevate your story.
            </p>
          </div>
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="6949e0cb-d280-4f91-94aa-f80685b608a9"
            />
            <input type="text" name="fullname" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email address" required />
            <div className="contact-options">
              <p>What would you like to book?</p>
              <label className="option-card">
                <input
                  type="radio"
                  name="inquiry_type"
                  value="photo_video_project"
                  required
                />
                <span>Hire me for a photography or video project</span>
              </label>
              <label className="option-card">
                <input
                  type="radio"
                  name="inquiry_type"
                  value="teaching_session"
                  required
                />
                <span>Book a teaching session</span>
              </label>
            </div>
            <input type="text" name="project" placeholder="Project type or lesson focus" />
            <textarea
              name="message"
              placeholder="Tell me about your concept"
              rows="4"
            />
            <button type="submit">Send Inquiry</button>
          </form>
        </div>
        </section>

      <footer className="footer">
        <div>
          <div className="footer-brand">
            <img src={logo} alt="ShutterSpeed logo" className="logo-mark" />
            <h3>ShutterSpeed</h3>
          </div>
          <p>Photography, videography, and cinematic production worldwide.</p>
        </div>
        <div className="footer-nav">
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#gallery">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-socials">
            <a
              className="footer-social"
              href="https://www.instagram.com/shutter.__.speed/?igsh=dm45enBnbTYyZ2Fp&utm_source=qr#"
              aria-label="ShutterSpeed on Instagram"
            >
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zm4.75-3.25a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75z"
                />
              </svg>
            </a>
            <a className="footer-social" href="https://vimeo.com" aria-label="ShutterSpeed on Vimeo">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M22.6 7.2c-.2 4.7-3.5 11.2-10 14.5-1.4.7-2.6.6-3.6-.1-1-.6-1.4-1.7-1.6-3L5.9 12c-.2-1.1-.5-1.5-1.1-1.5-.4 0-1 .3-1.6.6L2.4 10c1.5-1.4 3-2.2 4.1-2.3 1.3-.1 2 .6 2.4 2.2l1.3 5.9c.2 1 .6 1.6 1.2 1.6.4 0 1.1-.6 1.9-1.9.9-1.4 1.4-2.5 1.5-3.3.1-1.4-.4-2-1.5-2-.5 0-1.1.1-1.6.4 1.1-3.4 3.1-5.1 6.1-5 2.1.1 3.1 1.5 3 4.2z"
                />
              </svg>
            </a>
            <a className="footer-social" href="https://youtube.com" aria-label="ShutterSpeed on YouTube">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.6 12 3.6 12 3.6s-7.7 0-9.4.5A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.7.5 9.4.5 9.4.5s7.7 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"
                />
              </svg>
            </a>
          </div>
        </div>
        </footer>
      </div>
    </div>
  );
}

