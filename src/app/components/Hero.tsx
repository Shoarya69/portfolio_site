
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import ParticleBackground from "./ParticleBackground";
import photo from "../../assets/Photo.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shoarya", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shoarya-bansal-6972a7273",
      label: "LinkedIn",
    },
    { icon: ExternalLink, href: "https://shoarya.dpdns.org/", label: "Portfolio" },
    { icon: Mail, href: "mailto:shoorayabansal@gmail.com", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen w-screen flex items-center justify-center relative overflow-hidden py-16"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-500/10" />
      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <div>
              <p className="text-lg text-muted-foreground mb-2">
                Hello, I'm
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Shoarya Bansal
              </h1>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Full-Stack Developer
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Building secure, scalable and efficient web applications with
              modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-all hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 p-1">

                <div className="w-full h-full rounded-full bg-background p-2">

                  <img
                    src={photo}
                    alt="Shoarya Bansal"
                    className="w-full h-full rounded-full object-cover"
                  />

                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

