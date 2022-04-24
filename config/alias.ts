import path from 'path';

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.resolve(rootDir, 'src');

export default {
  '@': srcDir,
  '@assets': path.resolve(srcDir, 'assets'),
  '@scss': path.resolve(srcDir, 'assets/scss'),
  '@components': path.resolve(srcDir, 'components'),
  '@routes': path.resolve(srcDir, 'routes'),
  'mocks': path.resolve(srcDir, 'mocks'),
};
