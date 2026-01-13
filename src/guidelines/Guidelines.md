{
  "designSystem": {
    "name": "WE'VE - Warm & Connected Design System",
    "description": "A social app design focused on warmth, connection, and deeper conversations",
    "theme": {
      "concept": "Warm, inviting, and human-centered with subtle animations and tactile interactions",
      "personality": ["warm", "connected", "gentle", "approachable", "trustworthy"]
    },
    "typography": {
      "primaryFont": "Inter",
      "googleFontsUrl": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap",
      "secondaryFont": "Merriweather (for reading/content)",
      "fallbacks": {
        "sans": "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        "serif": "Georgia, serif"
      }
    },
    "colorPalette": {
      "brand": {
        "primary": "hsl(25, 75%, 65%)",
        "primaryHex": "#F4A261",
        "primarySoft": "hsl(11, 79%, 62%)",
        "primarySoftHex": "#E76F51"
      },
      "secondary": {
        "main": "hsl(172, 42%, 40%)",
        "mainHex": "#2A9D8F",
        "light": "hsl(165, 50%, 95%)"
      },
      "neutrals": {
        "dark": "hsl(200, 40%, 25%)",
        "darkHex": "#264653",
        "medium": "hsl(215, 10%, 45%)",
        "light": "hsl(210, 20%, 97%)"
      },
      "semantic": {
        "success": "hsl(142, 69%, 58%)",
        "successHex": "#52B788",
        "warning": "hsl(45, 95%, 47%)",
        "warningHex": "#F3B700",
        "destructive": "hsl(0, 70%, 55%)",
        "destructiveHex": "#D64545"
      },
      "backgrounds": {
        "light": "hsl(20, 30%, 98%)",
        "dark": "hsl(200, 30%, 8%)",
        "card": "hsl(0, 0%, 100%)",
        "cardDark": "hsl(200, 25%, 12%)"
      }
    },
    "gradients": {
      "warm": "linear-gradient(135deg, hsl(25, 75%, 65%), hsl(11, 79%, 62%))",
      "soft": "linear-gradient(180deg, hsl(20, 30%, 98%), hsl(210, 20%, 97%))",
      "connection": "linear-gradient(135deg, hsl(172, 42%, 40%), hsl(25, 75%, 65%))"
    },
    "shadows": {
      "soft": "0 2px 8px hsla(200, 40%, 25%, 0.08)",
      "warm": "0 4px 12px hsla(25, 75%, 65%, 0.3)",
      "conversation": "0 1px 3px hsla(200, 40%, 25%, 0.12)"
    },
    "borderRadius": {
      "default": "0.75rem",
      "large": "1rem",
      "extraLarge": "1.5rem"
    },
    "animations": {
      "timing": {
        "smooth": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "gentle": "all 0.2s ease"
      },
      "custom": {
        "slideDown": "slideDown 0.35s ease-out",
        "fadeInUp": "fadeInUp 0.25s ease-out",
        "warmPulse": "warmPulse 2s ease-in-out infinite"
      }
    },
    "components": {
      "buttons": {
        "philosophy": "Tactile interactions with subtle hover animations",
        "variants": {
          "default": "Primary coral with warm shadow lift on hover",
          "warm": "Warm gradient background with lift animation",
          "connection": "Connection gradient with lift animation",
          "gentle": "Soft card-like appearance with subtle shadow",
          "outline": "Transparent with coral border that fills on hover",
          "touch": "Mobile-optimized 44px minimum touch target"
        },
        "interactions": {
          "hover": "Lift up slightly (-translate-y-0.5) with warm shadow",
          "active": "Return to original position (translate-y-0)"
        }
      },
      "surfaces": {
        "cards": "Clean white/dark cards with soft shadows",
        "dialogs": "Overlay with backdrop blur",
        "inputs": "Subtle borders with focus ring in primary color"
      }
    },
    "layout": {
      "spacing": "Standard Tailwind spacing scale",
      "safeAreas": "Respects mobile safe areas (env(safe-area-inset-*))",
      "maxWidth": "Mobile-first with responsive breakpoints"
    },
    "accessibility": {
      "focusRings": "2px primary color ring with offset",
      "minTouchTargets": "44px minimum for mobile interactions",
      "fontSmoothing": "Antialiased for crisp text rendering"
    },
    "scrollbars": {
      "width": "6px",
      "track": "Muted background",
      "thumb": "Primary color at 30% opacity",
      "thumbHover": "Primary color at 50% opacity"
    }
  },
  "implementationNotes": {
    "framework": "React + Tailwind CSS",
    "shadowcnComponents": "Uses shadcn/ui base components with custom styling",
    "mobileFirst": "Designed with mobile experience as priority",
    "darkMode": "Maintains warmth in dark mode with adjusted colors",
    "brandAlignment": "Colors and interactions reinforce themes of connection and warmth"
  }
}
