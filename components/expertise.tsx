export function Expertise() {
  const skills = {
    "Computer Vision": [
      "Image Processing",
      "Object Detection",
      "Face Recognition",
      "Video Analysis",
      "Deep Learning",
      "OpenCV & TensorFlow",
    ],
    "Full Stack Development": [
      "Next.js & React",
      "Node.js & Express",
      "TypeScript",
      "Database Design",
      "RESTful APIs",
      "Cloud Deployment",
    ],
    "Software Engineering": [
      "System Design",
      "Algorithm Development",
      "Software Architecture",
      "Testing & Debugging",
      "Git & Version Control",
      "Performance Optimization",
    ],
  };

  return (
    <section id="expertise" className="py-20 md:py-32 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Expertise & Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive skillset spanning computer vision, full-stack development, and software engineering. Experienced in building production-ready systems that combine AI and web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-secondary/50 border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
