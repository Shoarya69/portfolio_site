import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

const SEO = ({
  title = 'Shoarya Bansal - Full Stack Developer Portfolio',
  description = 'Professional portfolio of Shoarya Bansal, a full-stack developer specializing in React, FastAPI, and modern web technologies. Building secure, scalable and efficient web applications.',
  keywords = ['Full Stack Developer', 'React Developer', 'Python Developer', 'Web Developer', 'Portfolio', 'FastAPI', 'MySQL', 'MongoDB', 'Neo4j'],
}: SEOProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, useProperty = false) => {
      const attribute = useProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords.join(', '));
    setMetaTag('author', 'Shoarya Bansal');

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://shoarya.dev', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);

    // Additional meta tags
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('theme-color', '#2563eb');
  }, [title, description, keywords]);

  return null;
};

export default SEO;
