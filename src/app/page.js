import Layout from "./components/Layout/Layout";
import "./styles/mainPage.scss";
export default function Home() {

  const features = [
    {
      title: 'Easy to Use',
      description: 'Simple and intuitive interface for the best user experience',
      icon: '🚀'
    },
    {
      title: 'Responsive Design',
      description: 'Looks great on any device, from mobile to desktop',
      icon: '📱'
    },
    {
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency',
      icon: '⚡'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      image: "👩",
      text: "This platform has transformed how we handle our daily operations. The responsive design makes it perfect for our team."
    },
    {
      name: "Mike Chen",
      role: "Developer",
      image: "👨",
      text: "As a developer, I appreciate the clean code and responsive features. It's a pleasure to work with."
    },
    {
      name: "Emma Davis",
      role: "Designer",
      image: "👩",
      text: "The attention to detail in the responsive design is impressive. It looks great on every device."
    }
  ]



  return (
    <Layout>
      <section className="hero">
        <div className="hero__content">
          <h1>Welcome to our website</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <button>Read More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="features__title">Our Features</h2>
        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card__icon">{feature.icon}</div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="testimonials__title">What Our Users Say</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-card__image">{testimonial.image}</div>
              <p className="testimonial-card__text">{testimonial.text}</p>
              <div className="testimonial-card__author">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Stats Section */}
      <section className="stats">
        <div className="stats__grid">
          <div className="stat-card">
            <div className="stat-card__number">10K+</div>
            <div className="stat-card__label">Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__number">99.9%</div>
            <div className="stat-card__label">Uptime</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__number">24/7</div>
            <div className="stat-card__label">Support</div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <div className="faq__list">
          <div className="faq__item">
            <div className="faq__question">What is this platform?</div>
            <div className="faq__answer">It's a responsive web app for modern users.</div>
          </div>
          <div className="faq__item">
            <div className="faq__question">How do I sign up?</div>
            <div className="faq__answer">Click the "Get Started" button and fill out the form.</div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="team">
        <h2 className="team__title">Meet the Team</h2>
        <div className="team__grid">
          <div className="team-card">
            <div className="team-card__avatar">👩‍💻</div>
            <div className="team-card__name">Alice</div>
            <div className="team-card__role">Frontend Developer</div>
          </div>
          <div className="team-card">
            <div className="team-card__avatar">👨‍💻</div>
            <div className="team-card__name">Bob</div>
            <div className="team-card__role">Backend Developer</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2 className="cta__title">Ready to get started?</h2>
        <p className="cta__subtitle">Join us and experience the difference!</p>
        <button className="cta__button">Sign Up Now</button>
      </section>
      {/* Footer Section */}
      <section className="pricing">
        <h2 className="pricing__title">Choose Your Plan</h2>
        <div className="pricing__grid">
          <div className="pricing-card">
            <div className="pricing-card__plan">Basic</div>
            <div className="pricing-card__price">$9/mo</div>
            <ul className="pricing-card__features">
              <li>Feature 1</li>
              <li>Feature 2</li>
            </ul>
            <button className="pricing-card__button">Select</button>
          </div>
          <div className="pricing-card">
            <div className="pricing-card__plan">Pro</div>
            <div className="pricing-card__price">$29/mo</div>
            <ul className="pricing-card__features">
              <li>All Basic features</li>
              <li>Premium support</li>
            </ul>
            <button className="pricing-card__button">Select</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
