<template>
    <div class="container">
        <div class="row">
            <app-header></app-header>
        </div>
        <hr>
        <div class="row">
            <app-server-status></app-server-status>
        </div>
        <hr>
        <div class="row">
            <app-footer></app-footer>    
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import ServerStatus from './ServerStatus.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            'app-header' : Header,
            'app-server-status' : ServerStatus,
            'app-footer' : Footer
        }
    }
</script>

<style>

</style>
