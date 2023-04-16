<!-- 
    可以按照比重分配列宽,默认根据title的文字长度分配
 -->
 <svelte:window on:resize={initFixedColTable} />
<div class="table-c">
    {#each tableShowFlag as isTableShow, tIdx }
        {#if isTableShow}
            <div class="table table{tIdx}" bind:this={tableDom[tIdx]}>
                <div class="row header" style:min-width="{columnsMinWidth}" bind:this={tHeaderDom[tIdx]}>
                    {#each tableColumns[tIdx] as { title, key } (key)}
                        <span class="cell" class:hidden={tIdx === 1 && !groupColumnShowFlag[tIdx][key]} style:width={columnsWidth[key]}>{title}</span>
                    {/each}
                </div>
                <div class="tbody" style:min-width="{columnsMinWidth}" bind:this={tBodyDom[tIdx]}>
                    {#each data as row}
                        <div class="row">
                            {#each tableColumns[tIdx] as { key, Com, getProps = () => undefined } (key)}
                                <span class="cell" class:hidden={tIdx === 1 && !groupColumnShowFlag[tIdx][key]} style:width={columnsWidth[key]}>
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
        {/if}
    {/each}

</div>

<script lang="ts">
    import { onMount } from 'svelte'

    type Column={title:string,
        key:string,
        fixed?:'left'|'right'
        width?:number, Com?:any
        getProps?:(val:any, row:Record<string, any>)=>Record<string, any>
    }

    export let columns:Column[]
    export let data:Record<string, any>[]

    const tableDom:HTMLDivElement[] = []
    const tBodyDom:HTMLDivElement[] = []
    const tHeaderDom:HTMLDivElement[] = []

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
            tableDom[0].scrollLeft = tableDom[0].scrollWidth - tableDom[0].clientWidth
            const { x: startX } = tHeaderDom[1].getBoundingClientRect()
            const { x } = tHeaderDom[1].children[columnGroups[0].length].getBoundingClientRect()
            tableDom[0].style.transform = `translateX(${x - startX}px)`
        }
        if (tableShowFlag[2]){
            const { x:startX } = tableDom[2].getBoundingClientRect()

            const { x:endX } = tHeaderDom[2].children[columnGroups[2].length].getBoundingClientRect()
            const translateX = endX - startX 
            tableDom[2].style.transform = `translateX(${-translateX}px)`
        }
    }

    onMount(() => {
        initFixedColTable()
        // 把x轴滚动同步到title
        // 把y轴滚动图同步到固定列
        const _tBodyDom = tBodyDom.filter((_, idx) => tableShowFlag[idx])
        if (_tBodyDom.length){
            const onScroll = (e:Event) => {
                const { scrollTop } = e.target as HTMLDivElement
                _tBodyDom.forEach(dom => dom.scrollTop = scrollTop)
            }
            _tBodyDom.forEach(ele => ele.addEventListener('scroll', onScroll, { passive:true }))
        }
    })
</script>

<style lang="stylus">    
.table-c
    position relative
    height 300px
    overflow hidden
    // overflow auto
    // padding-left {paddingLeft}
.table
    white-space nowrap
    position absolute
    top 0
    left 0
    width 100%
    height 100%

    display flex
    flex-direction column
    overflow hidden
.scroll-view
    position absolute
    bottom 0
    width 100%
    overflow-y auto 
    z-index 3
    
.table0
    left -100%
.table1
    overflow-x auto
.table2
    left 100%
    
.table0
.table2
    background-color white
    z-index 1
    .header
    .tbody
        &::-webkit-scrollbar
            width 0
            height 0
.header
    overflow auto
    &::-webkit-scrollbar
        width 0
        height 0
.tbody
    flex 1
    overflow-y auto

.row
    border-bottom 1px solid rgb(224, 224, 230)
.cell
    display inline-block
    line-height 1.6
    padding 12px 
    box-sizing border-box
    overflow hidden
.hidden
    // visibility hidden
    // opacity 0
</style>