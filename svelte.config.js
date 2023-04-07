import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess({
        style:{
            css:false
        }
    }),
    requireConfigFile: false,
    onwarn: (warning, handler) => {
    // 禁用无障碍提示
        if (warning.message.startsWith('A11y:')) return
        handler(warning)
    }
}
