import { createGlobPatternsForDependencies } from '@nx/vue/tailwind'
import type { Config } from 'tailwindcss'

// 看起來這樣引入是 OK 的，尚無更好解法
// GitHub 參考：https://github.com/search?q=tailwind-workspace-preset&type=code&p=1
// NX 官方教學：https://blog.nrwl.io/setup-next-js-to-use-tailwind-with-nx-849b7e21d8d0
// eslint-disable-next-line @nx/enforce-module-boundaries

export default {
  content: ['./src/**/*.{js, ts, jsx, tsx}', ...createGlobPatternsForDependencies(__dirname)],
} satisfies Config
