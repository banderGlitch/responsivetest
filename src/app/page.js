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

    </Layout>
  );
}
