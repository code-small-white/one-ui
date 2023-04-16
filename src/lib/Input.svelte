<!-- Input.svelte -->
<input type="text" class="input" bind:value on:input={handleInput} />

<script>
    export let value

    function handleInput(event) {
        value = event.target.value
    }

</script>


<style lang="stylus">

.input
    color red
    border-radius 3px
    outline none
    border 1px solid rgb(224, 224, 230)
    line-height 1.5
    font-size 14px
    height 34px 
    padding 0 12px
    
</style>