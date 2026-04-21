# Recurra — Agent Context

## Quick Start

```bash
# Install dependencies (repo uses bun)
bun install

# Start development server
bun start          # or: npx expo start
bun android        # Expo start --android
bun ios            # Expo start --ios
bun web            # Expo start --web
```

## Architecture

- **Framework**: Expo SDK 54 + React Native 0.81 + React 19
- **Router**: [Expo Router](https://docs.expo.dev/router/introduction/) (file-based)
- **Styling**: NativeWind v5 (preview) — Tailwind CSS for React Native
- **Package Manager**: Bun (lockfile: `bun.lock`)

## Path Aliases

- `@/*` maps to project **root** (`./`), not `./src`
- Configured in: `tsconfig.json`, `babel.config.js`, `metro.config.js`

## Key Conventions

### File-Based Routing
Routes live in `app/` using Expo Router conventions:
- `app/(tabs)/` — Tab navigation group (Home, Subscriptions, Insights, Settings)
- `app/(auth)/` — Auth flows (sign-in, sign-up)
- `app/_layout.tsx` — Root layout (renders Stack navigator)
- `app/onboarding.tsx` — Onboarding screen
- Dynamic routes: `app/subscriptions/[id].tsx`

### Styling (NativeWind v5)

- Global styles: `global.css` — contains `@theme` definitions and `@layer components`
- CSS imports in root layout: `import '@/global.css'`
- Uses Tailwind v4 syntax (`@import "tailwindcss/theme.css"`)
- Custom theme colors defined in `global.css`:
  - `--color-background: #fff9e3`
  - `--color-foreground: #081126`
  - `--color-accent: #ea7a53`
  - `--color-card: #fff8e7`
  - etc.

### Icons

- Centralized in `constants/icons.ts`
- Uses `@/` alias imports: `import { icons } from '@/constants/icons'`
- Icon assets live in `assets/icons/`

## Toolchain Quirks

### Required Version Pin
```json
"overrides": {
  "lightningcss": "1.30.1"
}
```
Do not upgrade LightningCSS — NativeWind v5 requires this exact version.

### TypeScript Includes
`tsconfig.json` includes auto-generated types:
```json
"include": [
  "**/*.ts",
  "**/*.tsx",
  ".expo/types/**/*.ts",
  "expo-env.d.ts",
  "nativewind-env.d.ts"
]
```

### Experiments Enabled (app.json)
- `typedRoutes: true` — Auto-generated route types
- `reactCompiler: true` — React Compiler enabled
- `newArchEnabled: true` — New Architecture enabled

## Development Commands

| Command | Description |
|---------|-------------|
| `bun start` | Start Expo dev server |
| `bun android` | Start + open Android |
| `bun ios` | Start + open iOS simulator |
| `bun web` | Start + open web |
| `bun lint` | Run ESLint (expo lint) |

## VS Code Settings

Auto-fix on save enabled:
- `source.fixAll`
- `source.organizeImports`
- `source.sortMembers`

## Linting

ESLint configured with `eslint-config-expo/flat` in `eslint.config.js`.
Ignores: `dist/*`
