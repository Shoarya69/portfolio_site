import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Sitemap', href: '#' },
  ];

  return (
    <footer className="bg-accent/10 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              Shoarya Bansal
            </h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer passionate about building modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-4">Built With</h4>
            <p className="text-sm text-muted-foreground">
              React, Tailwind CSS, Motion & Shadcn UI
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Shoarya Bansal. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Shoarya Bansal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
