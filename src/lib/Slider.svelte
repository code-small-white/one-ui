<script lang="ts">
    import {onMount} from 'svelte'

    export let min = 0
    export let max = 1
    export let modelValue = min

    let trackDom: HTMLDivElement
    let btnDom: HTMLDivElement
    let progress = 0
    let xRange: { x: number; width: number }
    let rate = 1

    onMount(() => {
        const btnWidth = btnDom.getBoundingClientRect().width
        const {x, width} = trackDom.getBoundingClientRect()
        xRange = {x, width: width - btnWidth}
        // 绑定值和 min max做转换
        const valRange = max - min
        rate = valRange / xRange.width

        updateValue((modelValue - min) / rate + x)
    })

    const onClick = (e: MouseEvent) => {
        updateValue(e.offsetX + xRange.x)
    }
    const onTouchmove = (e: TouchEvent) => {
        const {clientX} = e.touches[0]
        updateValue(clientX)
    }
    let canMove = false
    let xOffset = 0
    const onMousedown = (e: MouseEvent) => {
        xOffset = e.clientX - (e.target as HTMLDivElement).getBoundingClientRect().left
        canMove = true
        document.addEventListener('mouseup', onMouseup)
        document.addEventListener('mousemove', onMousemove)
    }
    const onMousemove = (e: MouseEvent) => {
        if (!canMove) return
        updateValue(e.clientX - xOffset)
    }
    const onMouseup = () => {
        canMove = false
        document.removeEventListener('mouseup', onMouseup)
        document.removeEventListener('mousemove', onMousemove)
    }

    const updateValue = (offsetX: number) => {
        const {x, width} = xRange
        offsetX = offsetX - x
        const val = offsetX < 0 ? 0 : offsetX > width ? width : offsetX
        progress = val
        modelValue = val * rate + min
    }
</script>

<div class="root">
    <div class="track" bind:this={trackDom}
         on:click={onClick} style:--progress="{progress}px"></div>
    <div class="btn" bind:this={btnDom} style:transform="translateX({progress}px)" on:touchmove={onTouchmove}
         on:mousedown={onMousedown} style:color="#535bf2"></div>
</div>
<style lang="stylus">
  :root
    --van-primary-color red

  .root
    position relative
    padding 1.3vw 0

    .track
      height 1.6vw
      background-color #e3e7ea
      border-radius 0.8vw
      position relative
      overflow hidden

      &::after
        position absolute
        content ''
        width 100%
        height 100%
        transform-origin left
        top 0
        left -100%
        transform translateX(var(--progress))
        background-color var(--van-primary-color)

    .btn
      width 4.27vw
      height 4.27vw
      border 0.27vw solid #e3e7ea
      border-radius 50%
      background-color white
      position absolute
      top 0
      box-sizing border-box
</style>