<template>
    <div>
        <h1>Parent Vue</h1>
        <child />
    </div>
</template>

<script>
import child from './Children.vue'

export default {
    name: "ParentVue",
    components: {
        child
    }
}
</script>