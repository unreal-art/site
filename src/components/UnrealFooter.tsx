import { Hexagon, Github, Twitter } from "lucide-react"

function UnrealFooter() {
  return (
    <section className="section section-home-work-intro" data-theme-section="dark">
      <div className="container" style={{ 
        paddingTop: '4rem', 
        paddingBottom: '4rem',
        color: 'white'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: 'white'
            }}>
              <Hexagon size={40} color="white" />
              <span style={{ 
                fontSize: '1.75rem', 
                fontWeight: 'bold',
                color: 'white'
              }}>Unreal</span>
            </div>
            <div style={{
              display: 'flex',
              gap: '1.5rem'
            }}>
              <a
                href="https://x.com/ideomind"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '2px solid white',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'transparent'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com/unreal-art"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '2px solid white',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'transparent'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div style={{ 
            height: '1px', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)' 
          }}></div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem'
              }}>
                <a href="/products" style={{ 
                  color: 'white', 
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >Products</a>
                <a href="/about" style={{ 
                  color: 'white', 
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >About</a>
                <a href="/blog" style={{ 
                  color: 'white', 
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >Blog</a>
                <a href="/contact" style={{ 
                  color: 'white', 
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >Contact</a>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '1rem'
              }}>
                <a href="/privacy" style={{ 
                  color: 'white', 
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >Privacy</a>
                <a href="/terms" style={{ 
                  color: 'white', 
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >Terms</a>
              </div>
            </div>
            
            <div style={{
              color: 'white',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              justifySelf: 'start'
            }}>
              <div>© 2025 unreal-art</div>
              <div style={{ marginTop: '0.5rem' }}>All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { UnrealFooter }