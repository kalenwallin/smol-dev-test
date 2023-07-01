const config = {
  kit: {
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $components: '/src/components',
          $lib: '/src/lib',
        },
      },
    },
  },
};

export default config;