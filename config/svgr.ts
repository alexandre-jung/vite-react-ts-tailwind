import svgr from 'vite-plugin-svgr';

// vite-plugin-svgr: https://www.npmjs.com/package/vite-plugin-svgr
// svgr options: https://react-svgr.com/docs/options/

export default () => svgr({
  svgrOptions: {
    icon: true,
    svgProps: {
      fill: 'currentColor',
    },
  },
});
