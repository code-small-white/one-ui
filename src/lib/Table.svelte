<!-- 
    可以按照比重分配列宽,默认根据title的文字长度分配
    固定头,横向滚动不会错位
    滚定列,y轴滚动不会错位
    x 固定列没有滚到头有影音
    x 显示滚动条
 -->
 <svelte:window on:resize={initFixedColTable} />
<div class="table-c">
    <div class="theader-c">
        {#if tableShowFlag[0]}
            <div class="row fixed-part part0" style:min-width="{columnsMinWidth}" bind:this={tHeaderDom[0]}>
                {#each tableColumns[0] as { title, key } (key)}
                    <span class="cell"  style:width={columnsWidth[key]}>{title}</span>
                {/each}
            </div>
        {/if}
            <div class="scroll-x" bind:this={scrollxContainerDom[0]}>
                <div class="row part1" style:min-width="{columnsMinWidth}"  bind:this={tHeaderDom[1]}>
                    {#each tableColumns[1] as { title, key } (key)}
                        <span class="cell" class:hidden={ !groupColumnShowFlag[1][key]} style:width={columnsWidth[key]}>{title}</span>
                    {/each}
                </div>
            </div>
        {#if tableShowFlag[1]}
            <div class="row fixed-part part2" style:min-width="{columnsMinWidth}" bind:this={tHeaderDom[2]}>
                {#each tableColumns[2] as { title, key } (key)}
                    <span class="cell" style:width={columnsWidth[key]}>{title}</span>
                {/each}
            </div>
        {/if}
    </div>
    <div class="tbody-c scroll-y">
    {#if tableShowFlag[0]}
        <div class="tbody fixed-part part0" style:min-width="{columnsMinWidth}" bind:this={tBodyDom[0]}>
            {#each data as row}
                <div class="row">
                    {#each tableColumns[0] as { key, Com, getProps = () => undefined } (key)}
                        <span class="cell" style:width={columnsWidth[key]}>
                            {#if Com}
                                <svelte:component this={Com} {...getProps(row[key], row)} />
                            {:else}
                                {row[key]}
                            {/if}
                        </span>
                    {/each}
                </div>
            {/each}
        </div>
    {/if}

    <div class="scroll-x" bind:this={scrollxContainerDom[1]}>
        <div class="tbody part1" style:min-width="{columnsMinWidth}">
            {#each data as row}
                <div class="row">
                    {#each tableColumns[1] as { key, Com, getProps = () => undefined } (key)}
                        <span class="cell" class:hidden={ !groupColumnShowFlag[1][key]} style:width={columnsWidth[key]}>
                            {#if Com}
                                <svelte:component this={Com} {...getProps(row[key], row)} />
                            {:else}
                                {row[key]}
                            {/if}
                        </span>
                    {/each}
                </div>
            {/each}
        </div>
    </div>

    {#if tableShowFlag[2]}
    <div class="tbody fixed-part part2" style:min-width="{columnsMinWidth}" bind:this={tBodyDom[2]}>
        {#each data as row}
            <div class="row">
                {#each tableColumns[2] as { key, Com, getProps = () => undefined } (key)}
                    <span class="cell" style:width={columnsWidth[key]}>
                        {#if Com}
                            <svelte:component this={Com} {...getProps(row[key], row)} />
                        {:else}
                            {row[key]}
                        {/if}
                    </span>
                {/each}
            </div>
        {/each}
    </div>
    {/if}
    </div>

<!-- {#key maxScrollLeft}
<Slider class="slider x-slider" max={maxScrollLeft} bind:value={scrollLeft}/>
{/key} -->

</div>

<script lang="ts">
    import { onMount } from 'svelte'
    import Slider from './Slider.svelte';

    type Column={title:string,
        key:string,
        fixed?:'left'|'right'
        width?:number, Com?:any
        getProps?:(val:any, row:Record<string, any>)=>Record<string, any>
    }

    export let columns:Column[]
    export let data:Record<string, any>[]

    const scrollxContainerDom:HTMLDivElement[] = []
    const tBodyDom:HTMLDivElement[] = []
    const tHeaderDom:HTMLDivElement[] = []

    let scrollLeft=0
    let maxScrollLeft=0
    $: {
        // tableDom[1]&&tableDom[1].scrollLeft!==scrollLeft&&(tableDom[1].scrollLeft=scrollLeft)
    }

    const getColumnsWidth = (columns:Column[]) => {
        const proportions = columns.map(it => it.width || it.title.length)
        const sum = proportions.reduce((sum, proportion) => sum += proportion, 0)
        const proportionsStr = proportions.map(it => it / sum * 100 + '%')
        return [
            columns.reduce((res, { key }, idx) => (res[key] = proportionsStr[idx], res), {}),
            sum * 2 + 'em'] as const
    }
    const columnGroups = (() => {
        const keyIdx = { left:'0', undefined:1, right:2 }
        const groups:[Column[], Column[], Column[]] = [[], [], []]
        columns.forEach(it => groups[keyIdx[it.fixed]].push(it))
        return groups
    })()
    const tableShowFlag = columnGroups.map(it => it.length)
    const groupColumnShowFlag = columnGroups.map(it => it.reduce((res, { key }) => (res[key] = 1, res), {}))
    const middleTableColumns = columnGroups.flat()
    const leftTableColumns = [...columnGroups[1], ...columnGroups[2], ...columnGroups[0]]
    const rightTableColumns = [...columnGroups[2], ...columnGroups[1], ...columnGroups[0]]
    const tableColumns = [leftTableColumns, middleTableColumns, rightTableColumns]
    const [columnsWidth, columnsMinWidth] = getColumnsWidth(middleTableColumns)

    const initFixedColTable = () => {
        if (tableShowFlag[0]){
            // 把固定在左边的table的滚动条滚动到最右边
            const { x: startX } = tHeaderDom[1].getBoundingClientRect()
            const { x } = tHeaderDom[1].children[columnGroups[0].length].getBoundingClientRect()
            tBodyDom[0].style.left = `${x - startX}px`
            tHeaderDom[0].style.left = `${x - startX}px`
        }
        if (tableShowFlag[2]){
            const { x:startX } = tBodyDom[2].getBoundingClientRect()

            const { x:endX } = tHeaderDom[2].children[columnGroups[2].length].getBoundingClientRect()
            const translateX = endX - startX 
            tBodyDom[2].style.right = `${translateX}px`
            tHeaderDom[2].style.right = `${translateX}px`
        }
    }

    onMount(() => {
        initFixedColTable()
        // 把x轴滚动同步到title
        if(scrollxContainerDom[0]&&scrollxContainerDom[1]){
            const {clientWidth,scrollWidth}=scrollxContainerDom[1]
            maxScrollLeft=scrollWidth - clientWidth
          
            scrollxContainerDom.forEach(dom=>{
                dom.addEventListener('scroll',(e)=>{
                    const {scrollLeft}=e.target as HTMLDivElement
                    scrollxContainerDom[0].scrollLeft=scrollxContainerDom[1].scrollLeft=scrollLeft
                })
            })
        }
    })
</script>

<style lang="stylus">    
.table-c
    position relative
    height 300px
    overflow hidden
    :global(.slider)
        z-index 3
        padding 0
        position absolute
        bottom 0
        width 100%
        :global(.btn)
            width 69.75446428571429%
            border-radius 4px
            height 6px
            background-color rgba(0, 0, 0, 0.25)
            border none
        :global(.track)
            opacity 0
            height 6px
    // .table
    white-space nowrap
    user-select none
    display flex
    flex-direction column
    overflow hidden
    
.part0
    transform translateX(-100%)
.part2
    transform translateX(100%)

    
.fixed-part
    background-color white
    z-index 1
    position absolute
    top 0
    width 100%
    color red
.scroll-x
    width 100%
    position relative
    overflow-x auto
    &::-webkit-scrollbar
        width 0
        height 0
.theader-c
    position relative
.tbody-c
    overflow hidden auto
    position relative

.row
    border-bottom 1px solid rgb(224, 224, 230)
.cell
    display inline-block
    line-height 1.6
    padding 12px 
    box-sizing border-box
    overflow hidden

</style>