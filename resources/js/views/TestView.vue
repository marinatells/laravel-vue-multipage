<template>
    <div class="home">
        <h1>Это тестовая страница</h1>
        <Test></Test>
    </div>
</template>

<script>
import Test from "../components/Test.vue";

export default {
    name: "TestView",
    components: {
        Test,
    },
};
</script>
