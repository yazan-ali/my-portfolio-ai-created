/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                'plus-jakarta': ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
            },
            colors: {
                background: 'hsl(var(--color-background))',
                foreground: 'hsl(var(--color-foreground))',
                card: 'hsl(var(--color-card))',
                'card-foreground': 'hsl(var(--color-card-foreground))',
                popover: 'hsl(var(--color-popover))',
                'popover-foreground': 'hsl(var(--color-popover-foreground))',
                primary: 'hsl(var(--color-primary))',
                'primary-foreground': 'hsl(var(--color-primary-foreground))',
                secondary: 'hsl(var(--color-secondary))',
                'secondary-foreground': 'hsl(var(--color-secondary-foreground))',
                muted: 'hsl(var(--color-muted))',
                'muted-foreground': 'hsl(var(--color-muted-foreground))',
                accent: 'hsl(var(--color-accent))',
                'accent-foreground': 'hsl(var(--color-accent-foreground))',
                destructive: 'hsl(var(--color-destructive))',
                'destructive-foreground': 'hsl(var(--color-destructive-foreground))',
                border: 'hsl(var(--color-border))',
                input: 'hsl(var(--color-input))',
                ring: 'hsl(var(--color-ring))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out',
            },
        },
    },
    plugins: [],
}
