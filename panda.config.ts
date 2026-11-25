import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  preflight: true,
  strictTokens: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          orange: {
            DEFAULT: { value: '#f4511c' },
          },
          amber: {
            DEFAULT: { value: '#ffab40' },
          },
          indigo: {
            DEFAULT: { value: '#3f51b5' },
          },
          bg: {
            aside: { value: '#e8eaf6' }
          }
        },
        spacing: {
          inset: {
            md: {
              value: '0.75rem',
            },
          },
        },
        borders: {
          border: {
            default: {
              value: '1.3px solid {colors.app.primary}',
            },
          },
        },  
      },
      semanticTokens: {
        colors: {
          app: {
            primary: { value: '{colors.orange}' },
            secondary: { value: '{colors.indigo}' },
            accent: { value: '{colors.amber}' },
          },
        },
      },
    },
  },
  outdir: 'styled-system',
})
