import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedCourses from "@/components/FeaturedCourses";

export default function CoursesPage() {
  return (
    <main>
      <Navbar />
      <div style={{ height: '300px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', paddingTop: '80px' }}>
        <h1 style={{ color: 'white' }}>Our Programs</h1>
      </div>
      
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: 'var(--text-muted)' }}>Found 50+ programs across various disciplines</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="text" placeholder="Search courses..." style={{ padding: '0.8rem 1.5rem', borderRadius: '4px', border: '1px solid #ddd', minWidth: '300px' }} />
              <select style={{ padding: '0.8rem 1.5rem', borderRadius: '4px', border: '1px solid #ddd' }}>
                <option>All Categories</option>
                <option>Business</option>
                <option>Technology</option>
                <option>Education</option>
              </select>
            </div>
          </div>
          
          <FeaturedCourses />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
