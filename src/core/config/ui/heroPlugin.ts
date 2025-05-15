export const heroPlugin = () => {
  return function({ addUtilities }: { addUtilities: any }) {
    const newUtilities = {
      '.hero-gradient-text': {
        background: 'linear-gradient(90deg, hsl(var(--color-primary)), hsl(var(--color-accent-dark)))',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  };
};