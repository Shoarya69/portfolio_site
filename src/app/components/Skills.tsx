import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C++', 'SQL', 'Java'],
      colors: ['#3776AB', '#00599C', '#F29111', '#007396'],
    },
    {
      title: 'Backend',
      skills: ['Flask', 'FastAPI', 'REST', 'GraphQL'],
      colors: ['#000000', '#009688', '#FF6C37', '#E10098'],
    },
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      colors: ['#E34F26', '#1572B6', '#F7DF1E', '#61DAFB'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Neo4j'],
      colors: ['#4479A1', '#47A248', '#008CC1'],
    },
    {
      title: 'CS Fundamentals',
      skills: ['DSA', 'OOP', 'Concurrency', 'DBMS'],
      colors: ['#4B8BBE', '#FF6F00', '#00C7B7', '#003B57'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Linux', 'Docker'],
      colors: ['#F05032', '#FCC624', '#2496ED'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge
                        key={skillIdx}
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium"
                        style={{
                          borderLeft: `3px solid ${category.colors[skillIdx]}`,
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
