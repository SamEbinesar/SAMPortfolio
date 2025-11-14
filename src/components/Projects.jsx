import './Projects.css'

const Projects = () => {
  const openKSVEG = () => {
    window.open('https://samebinesar.github.io/KSVEGETABLES.com/', '_blank')
  }

  const openTaskBuddy = () => {
    window.open('https://samebinesar.github.io/Taskbuddy/', '_blank')
  }

  const openWeather = () => {
    window.open('/weather.html', '_blank', 'width=350,height=500,top=100,left=100,menubar=no,toolbar=no,location=no,status=no,resizable=no')
  }

  const openCalculator = () => {
    window.open('/calcu.html', '_blank', 'width=350,height=500,top=100,left=100,menubar=no,toolbar=no,location=no,status=no,resizable=no')
  }

  const projects = [
    {
      title: 'KS Vegetables (E-commerce Website)',
      description: 'A Full Stack Project designed for KS Vegetables shop to order Vegetables online. I have used technologies HTML, CSS, JavaScript for frontend and Firebase for backend.',
      action: openKSVEG,
      buttonText: 'Open KSVEGETABLES.com'
    },
    {
      title: 'Taskbuddy- Smart TaskManager App',
      description: 'TaskBuddy is a simple yet powerful task management web application built using React.js (Vite). It helps users efficiently organize their daily activities by categorizing and prioritizing tasks, ensuring better productivity and focus.',
      action: openTaskBuddy,
      buttonText: 'Show TaskBuddy'
    },
    {
      title: 'Weather Information App',
      description: 'A simple weather application built using HTML, CSS, and JavaScript that provides real-time weather updates. This task is given by medify',
      action: openWeather,
      buttonText: 'Open App'
    }
  ]

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h2 className="project-title">{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={project.action}>{project.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

