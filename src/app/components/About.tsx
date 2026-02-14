import { motion } from 'motion/react';
import { Briefcase, Code, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const stats = [
    {
      icon: Briefcase,
      label: 'Projects Completed',
      value: '3+',
    },
    {
      icon: Code,
      label: 'Technologies',
      value: '7+',
    },
    {
      icon: Clock,
      label: 'Experience',
      value: 'Fresher',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Profile Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Web developer with practical experience in designing and developing full-stack 
                  applications using React, Flask/FastAPI, MySQL and Neo4j. Skilled in authentication 
                  systems, database relationships, API design, and real-time features using WebSockets. 
                  Focused on building secure, scalable and efficient applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20 mb-4">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-3xl font-bold mb-2">{stat.value}</h4>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
