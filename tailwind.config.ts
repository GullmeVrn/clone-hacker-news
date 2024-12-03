import type { Config } from 'tailwindcss'
import * as defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
    content: ['./inertia/**/*.vue', './resources/**/*.edge'],
    theme: {
        colors: {
            dimmed: 'hsl(0, 0%, 51%)',
            elevated: 'hsl(60, 28%, 95%)',
            accented: 'hsl(24,100%,50%)',
        },
        extend: {
            fontFamily: {
                sans: ['"Verdana", "Geneva", sans-serif', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '3xs': [
                    '0.6rem',
                    {
                        lineHeight: '0.75rem',
                    },
                ],
                '2xs': [
                    '0.6875rem',
                    {
                        lineHeight: '0.75rem',
                    },
                ],
            },
        },
    },
    plugins: [],
} satisfies Config
