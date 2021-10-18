module.exports = {
  purge: ["./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        width: {
          default: '90%',
        }
      },
      width: {
        'card-1/2': 'calc(50% - 20px)',
      },
      minHeight: {
        'text': 'calc(1rem * 1.625 *  5)',
      },
      maxHeight: {
        'diary': 'calc(1rem * 1.625 * 5)',
      },
      fontFamily: {
        'body': ['Inconsolata', 'monospace'],
        'title': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'card': '8px 8px 0 #F59E0B'
      }
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {
    container: [],
    extend: {},
  },
  plugins: [],
}
