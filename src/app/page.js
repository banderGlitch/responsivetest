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
    </Layout>
  );
}
