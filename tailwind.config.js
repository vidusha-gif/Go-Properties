/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Luxury Palette: Deep Navy, Midnight Blue, Black, Clean White, Soft White, Muted Pink, Soft Blush, Cool Gray
        navy: {
          DEFAULT: '#101B33',
          deep: '#0B1324',
          midnight: '#172640',
          light: '#1F3152',
          subtle: '#263B60'
        },
        pink: {
          DEFAULT: '#E8BFCB',
          muted: '#E8BFCB',
          soft: '#F7EDF1',
          hover: '#DFABBB',
          dark: '#C996A5'
        },
        cool: {
          50: '#F8F9FB',
          100: '#F0F2F6',
          150: '#E9ECF2',
          200: '#E2E6EE',
          300: '#C7CDD8',
          400: '#8992A3',
          500: '#647087',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#111111'
        },
        // Compatibility mapping for existing luxury classes without beige/gold/brown
        luxury: {
          bg: '#F8F9FB',
          card: '#FFFFFF',
          dark: '#111111',
          charcoal: '#101B33',
          surface: '#FFFFFF',
          border: '#E2E6EE',
          gold: {
            DEFAULT: '#101B33',
            light: '#F7EDF1',
            hover: '#172640',
            dark: '#0B1324',
          },
          bronze: '#8992A3',
          stone: {
            100: '#F8F9FB',
            200: '#F0F2F6',
            300: '#E2E6EE',
            400: '#8992A3',
            500: '#647087',
            800: '#172640',
            900: '#101B33'
          }
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(16, 27, 51, 0.04)',
        'minimal': '0 4px 20px -2px rgba(16, 27, 51, 0.06)',
        'float': '0 12px 35px -4px rgba(16, 27, 51, 0.08)',
        'luxury': '0 10px 30px -5px rgba(16, 27, 51, 0.06)',
        'luxury-hover': '0 16px 35px -8px rgba(16, 27, 51, 0.12)',
        'luxury-gold': '0 8px 25px -4px rgba(16, 27, 51, 0.15)',
      }
    },
  },
  plugins: [],
}
