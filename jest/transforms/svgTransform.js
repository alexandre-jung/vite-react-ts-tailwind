/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const camelCase = require('lodash.camelCase');
const htmlParser = require('node-html-parser');
const capitalize = require('lodash.capitalize');

// This is a custom Jest transformer turning file imports into filenames.
// http://facebook.github.io/jest/docs/en/webpack.html
// jsdom seems to not implement SVGElement, so we cannot get the element's attributes.
// Replace node-html-parser with jsdom if this issue is fixed someday.

module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));
    const pascalCaseFilename = camelCase(path.parse(filename).name, {
      pascalCase: true,
    });
    const elementNode = htmlParser.parse(src).firstChild;
    const attributesAsJSON = JSON.stringify(elementNode.attributes);
    const componentName = `${capitalize(
      elementNode.tagName
    )}${pascalCaseFilename}`;

    return {
      code: `
        const React = require('react')
        const ReactDOM = require('react-dom')
        module.exports = {
          __esModule: true,
          default: ${assetFilename},
          ReactComponent: React.forwardRef(function ${componentName}(props, ref) {
            return {
              $$typeof: Symbol.for('react.element'),
              type: "${elementNode.tagName.toLowerCase()}",
              ref: ref,
              key: null,
              props: Object.assign(${attributesAsJSON}, props, {
                children: ${assetFilename},
              }),
            };
          }),
        };
      `,
    };
  },
};
