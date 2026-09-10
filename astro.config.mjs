// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// TODO: trocar pelo domínio real assim que estiver definido.
// Necessário para o sitemap, canonical e Open Graph funcionarem corretamente.
const SITE_URL = 'https://www.navelinknet.com.br';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [icon(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
