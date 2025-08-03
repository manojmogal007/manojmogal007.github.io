module.exports = {
  theme: {
    extend: {
      keyframes: {
        'tooltip-pop': {
          '0%': { transform: 'scale(0.5) rotate(-10deg)', opacity: '0' },
          '50%': { transform: 'scale(1.1) rotate(5deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        'tooltip-pop': 'tooltip-pop 0.4s ease-out forwards',
      },
    },
  },
};
