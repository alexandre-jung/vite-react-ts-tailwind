/// <reference types="cypress" />

// Solution found on https://medium.com/@gghalistan/adding-custom-commands-to-cypress-typescript-28d23f90c2fd

interface RetryOptions {
  // FIXME the log options can also be a custom function,
  // for more information read https://github.com/bahmutov/cypress-recurse#log
  log: boolean;
  limit: number; // max number of iterations
  timeout: number; // time limit in ms
  delay: number; // delay before next iteration, ms
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example
     * ```
     * cy.compareSnapshot(
     *   'default',  // snapshot name
     *   0,          // threshold (%)
     *   {
     *     log: true,
     *     limit: 1,   // max number of retries
     *     timeout: 30000,   // time limit in ms
     *     delay: 300,  // delay before next iteration, ms
     *   }
     * );
     * ```
     */
    compareSnapshot(
      name?: string,
      threshold?: number,
      retryOptions?: RetryOptions
    ): void;
  }
}
