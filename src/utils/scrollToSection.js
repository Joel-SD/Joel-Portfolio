export const getHeaderHeight = () => {
  const header = document.querySelector('header');
  return header ? Math.round(header.getBoundingClientRect().height) : 0;
};

export const scrollToSection = (sectionId) => {
  if (sectionId === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(sectionId);
  if (!element) return;

  const top = window.scrollY + element.getBoundingClientRect().top - getHeaderHeight();
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
};
