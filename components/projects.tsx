export function Projects() {
  const projects = [
    {
      title: "Real-Time Object Detection System",
      description:
        "Built a high-performance object detection system using YOLO and custom CNNs. Achieved 95% accuracy on test datasets with real-time inference capabilities.",
      tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      year: "2024",
    },
    {
      title: "AI-Powered Web Application",
      description:
        "Full-stack web application integrating machine learning models with React and Node.js backend. Implemented automated image processing pipeline and API optimization.",
      tags: ["Next.js", "TypeScript", "Python", "PostgreSQL"],
      year: "2024",
    },
    {
      title: "Computer Vision Pipeline",
      description:
        "Developed an end-to-end computer vision pipeline for image recognition and classification. Utilized advanced preprocessing techniques and model optimization for deployment.",
      tags: ["PyTorch", "FastAPI", "Docker", "AWS"],
      year: "2023",
    },
    {
      title: "Face Recognition & Verification System",
      description:
        "Created a secure face recognition system with liveness detection. Built with modern CV techniques and integrated into production environment.",
      tags: ["OpenCV", "Deep Learning", "Biometrics", "Security"],
      year: "2023",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Implemented payment integration and advanced product recommendation system.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2023",
    },
    {
      title: "Video Analytics Dashboard",
      description:
        "Real-time video analysis dashboard for monitoring and insights. Features live object tracking, crowd analysis, and automated alerts.",
      tags: ["Vue.js", "WebSocket", "Python", "Redis"],
      year: "2022",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects showcasing my expertise in computer vision, full-stack development, and innovative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-secondary/50 border border-primary/20 rounded-lg p-8 hover:border-primary/40 hover:bg-secondary/70 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-primary flex-1">
                  {project.title}
                </h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {project.year}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
