
import type { Config } from "tailwindcss";
import { createGlobPatternsForDependencies } from '@nx/vue/tailwind'

export default {
  content: ['./src/**/*.vue', ...createGlobPatternsForDependencies(__dirname),],
 
} satisfies Config;