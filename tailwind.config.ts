import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				glass: {
					DEFAULT: 'hsl(var(--glass-bg))',
					border: 'hsl(var(--glass-border))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
					'25%': { transform: 'translateY(-15px) rotate(90deg) scale(1.05)' },
					'50%': { transform: 'translateY(-25px) rotate(180deg) scale(0.95)' },
					'75%': { transform: 'translateY(-10px) rotate(270deg) scale(1.1)' }
				},
				'blob': {
					'0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
					'25%': { transform: 'translate(40px, -60px) scale(1.2) rotate(90deg)' },
					'50%': { transform: 'translate(-30px, -20px) scale(0.8) rotate(180deg)' },
					'75%': { transform: 'translate(-50px, 30px) scale(1.1) rotate(270deg)' },
					'100%': { transform: 'translate(0px, 0px) scale(1) rotate(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
					'50%': { opacity: '0.9', transform: 'scale(1.1)' }
				},
				'electric': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1) rotate(0deg)' },
					'33%': { opacity: '0.7', transform: 'scale(1.3) rotate(120deg)' },
					'66%': { opacity: '0.5', transform: 'scale(0.8) rotate(240deg)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%) rotate(45deg)' },
					'100%': { transform: 'translateX(200%) rotate(45deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'blob': 'blob 12s infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'electric': 'electric 5s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite'
			},
			backdropBlur: {
				'xs': '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
