const config = {
	kit: {
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: '/src/components',
					$lib: '/src/lib',
					$routes: '/src/routes',
					$static: '/static'
				}
			}
		}
	}
};

export default config;