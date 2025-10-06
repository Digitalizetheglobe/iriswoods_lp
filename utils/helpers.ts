export const scrollToSection = (id: string) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};