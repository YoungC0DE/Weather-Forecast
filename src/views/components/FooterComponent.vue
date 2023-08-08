<template>
    <footer>
        <p class="m-0"> {{ dev_by_field }} <a :href="github_url">{{ dev_name }}</a></p>
        <span>{{ github_name }}</span>
    </footer>
</template>

<script>
import { DEVELOPER } from '@/core/helpers/constants.js';

export default {
    name: 'FooterComponent',
    data() {
        return {
            github_name: DEVELOPER.GITHUB_NAME,
            github_url: DEVELOPER.GITHUB_URL,
            dev_name: DEVELOPER.NAME,
            dev_by_field: 'Developed by',
        }
    },
}
</script>