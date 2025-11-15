import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Vercel']
    }
  ]

  return (
    <section id="skills">
      <h2>Skills</h2>
      <p className="skills-subtitle">Technologies and tools I worked with</p>
      <div className="skills-container">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="skill-item"
                  style={{ animationDelay: `${(catIndex * 0.2) + (skillIndex * 0.1)}s` }}
                >
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
