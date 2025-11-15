import './Home.css'

const Home = () => {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/SamRESUME.pdf'
    link.download = 'Sam_Ebinesar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-left">
          <div className="greeting">Hello I'm</div>
          <h1 className="name">
            <span className="name-first">Sam Ebinesar S</span>
          </h1>
          <div className="title">Full Stack Developer</div>
          <p className="description">
          I am Sam Ebinesar, graduated in BE IT, Full Stack Developer. This is where I showcase my work, projects, and skills.
          </p>
          <div className="home-buttons">
            <button className="btn-primary" onClick={downloadResume}>
              Download Resume
            </button>
            <button className="btn-secondary" onClick={scrollToContact}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="home-right">
          <div className="profile-image-wrapper">
            <img src="/MyImage2.png" alt="Sam Ebinesar S" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

