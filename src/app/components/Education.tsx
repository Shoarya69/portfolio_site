import { motion } from 'motion/react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-l-4 border-l-blue-600 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-600/10">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    Bachelor of Computer Applications (BCA)
                  </CardTitle>
                  <p className="text-muted-foreground">G. D. Memorial Collage</p>
                  <Badge className="mt-2" variant="secondary">
                    2025 - Present
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Academic Progress */}
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Academic Progress
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Completed 2nd Semester with 8.0 CGPA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>3rd Semester currently in progress</span>
                  </li>
                </ul>
              </div>

              {/* Relevant Coursework */}
              <div>
                <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Data Structures', 'Database Management Systems', 'Programming in C/C++', 'Python', 'Java'].map(
                    (course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span className="text-sm">{course}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
