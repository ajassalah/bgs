import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LifeAtKensleyPage() {
  const activities = [
    { title: "Student Communities", desc: "Join diverse student groups and clubs." },
    { title: "Campus Events", desc: "Regular webinars, workshops and seminars." },
    { title: "Global Network", desc: "Connect with alumni around the world." },
    { title: "Career Support", desc: "Professional guidance for your future path." }
  ];

  return (
    <main>
      <Navbar />
      <div style={{ height: '300px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', paddingTop: '80px' }}>
        <h1 style={{ color: 'white' }}>Life at Kensley</h1>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="text-center mb-2">
            <h2>Experience More Than Just Lectures</h2>
            <p className="description">At Kensley, we believe in a holistic educational experience.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {activities.map((item, idx) => (
              <div key={idx} style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--bg-gray)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                  ⭐
                </div>
                <h3>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '5rem' }}>
            <h2 className="text-center mb-2">Student Testimonials</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px', background: '#fdfdfd' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"The PGD program in Data Science at Kensley was life-changing. The faculty is world-class and the support is amazing."</p>
                <div style={{ fontWeight: '700' }}>Malith Perera</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Data Scientist at TechCorp</div>
              </div>
              <div style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '8px', background: '#fdfdfd' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"Highly recommend Kensley for anyone looking to upskill in Management. Flexible learning and great networking opportunities."</p>
                <div style={{ fontWeight: '700' }}>Sarah de Silva</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>HR Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
