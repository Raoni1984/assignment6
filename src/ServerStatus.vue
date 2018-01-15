<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li
                        class="list-group-item"
                        v-for="index in 5">
                    Server #{{ index }}
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>{{message}}</p>
        </div>
    </div>
</template>

<script>
    export default {
    data () {
        return {
            message: 'Server Details are currently not updated'
        }
    }
    }
</script>

<style>

</style>
