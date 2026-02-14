import { motion } from 'motion/react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Real-Time Chat Application',
      subtitle: 'WhatsApp Clone',
      description: 'Full-stack real-time messaging application with instant bidirectional communication',
      image: 'https://images.unsplash.com/photo-1657256031844-ba7ada043ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwbWVzc2FnaW5nJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzcxMDc5Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      techStack: ['FastAPI', 'React', 'WebSockets', 'MongoDB', 'MySQL', 'JWT', 'Redis'],
      features: [
        'Real-time messaging with WebSockets',
        'JWT authentication with email OTP',
        'Hybrid database architecture (MySQL + MongoDB)',
        'Redis caching for performance',
        'Friend search with SQL queries',
        'Mutual friend connection logic',
      ],
      highlights: ['Secure authentication system', 'Optimized database queries', 'Real-time updates'],
      links: {
        live: 'https://chat.shoarya.dev',
        github: 'https://github.com/shoarya/chat-app',
        demo: 'https://demo.shoarya.dev',
      },
    },
    {
      id: 2,
      title: 'Payment Gateway Integration',
      subtitle: 'Cashfree Integration Module',
      description: 'Secure payment processing module with Cashfree Developer APIs',
      image: 'https://images.unsplash.com/photo-1648161235864-00702f154f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwY3JlZGl0JTIwY2FyZHxlbnwxfHx8fDE3NzEwMjAxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      techStack: ['FastAPI', 'React', 'Cashfree API'],
      features: [
        'Order creation endpoint',
        'Secure checkout page redirection',
        'Payment success callback handling',
        'Transaction status verification',
        'Dynamic confirmation display',
      ],
      highlights: ['End-to-end payment flow', 'Secure transaction handling', 'Real-time status updates'],
      links: {
        live: 'https://payments.shoarya.dev',
        github: 'https://github.com/shoarya/payment-gateway',
        demo: 'https://demo.shoarya.dev',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.subtitle}</p>
                  </div>
                </div>

                <CardHeader>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <Badge key={idx} className="bg-gradient-to-r from-blue-600 to-purple-600">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {/* <Button size="sm" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
