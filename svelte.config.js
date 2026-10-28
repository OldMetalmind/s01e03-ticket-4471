import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import path from 'node:path';
export default {
 extensions: ['.svelte', '.svx'],
 preprocess: [vitePreprocess(), mdsvex({extensions:['.svx'], layout:{runbook:path.resolve('src/lib/layouts/runbook.svelte')}})],
 kit: {
  adapter: adapter({pages:'rendered',assets:'rendered'}),
  alias: {'#lib':path.resolve('src/lib')}
 }
};
