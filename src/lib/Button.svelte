<!-- 
    1.背景色+白色文字
    2.边框按钮+白色背景+黑色文字
    3 block
    4 禁用
    5 icon
    6 点击波纹

    1. 加载中
 -->
<div class="button" on:click>
    <slot />    
</div>
<script>
</script>
<style lang="stylus">
    .button
        border 1px solid
        border-radius 3px
        height 34px
        padding 0 14px
        font-size 14px
        line-height @height
        box-sizing border-box
        background-color #18a058
        color white
        user-select none


</style>