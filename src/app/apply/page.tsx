import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ApplyPage() {
  return (
    <main>
      <Navbar />
      <div style={{ padding: '150px 0 80px', background: 'var(--bg-gray)' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Application Form</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>Begin your journey with Kensley Graduate School today.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Personal Information</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label>First Name</label>
                    <input type="text" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label>Last Name</label>
                    <input type="text" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>Program Choice</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label>Select Program</label>
                  <select style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <option>Select a course...</option>
                    <option>Postgraduate Diploma in Strategic Management</option>
                    <option>Postgraduate Diploma in Data Science</option>
                    <option>OTHM Level 7 Diploma in AI</option>
                  </select>
                </div>
              </div>
              
              <button className="btn btn-primary" type="button" style={{ width: '100%', padding: '1rem' }}>Submit Application</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
