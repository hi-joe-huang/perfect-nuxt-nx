import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

const preset = nxE2EPreset(__filename, {
  cypressDir: 'src',
  bundler: 'vite',
  webServerCommands: { default: 'pnpm exec nx serve backstage' },
  ciWebServerCommand: 'nx run backstage:serve-static',
  webServerConfig: {
    timeout: 50000,
  },
})

export default defineConfig({
  e2e: {
    ...preset,
    viewportWidth: 1200,
    viewportHeight: 720,
    supportFile: 'src/support/e2e.ts',
    baseUrl: 'http://localhost:4200',
    specPattern: '**/*.feature',
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await preset.setupNodeEvents(on, config)
      await addCucumberPreprocessorPlugin(on, config)

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      )

      // Make sure to return the config object as it might have been modified by the plugin.
      return config
    },
  },
})
