<!-- Welcome to eslint-plugin-svelte -->
<script lang="ts">
    import Button from './lib/Button.svelte'
    import Slider from './lib/Slider.svelte'
    import { tweened } from 'svelte/motion'
    import { cubicOut } from 'svelte/easing'
    import Input from './lib/Input.svelte'
    import Table from './lib/Table.svelte'

    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    })

  
    const a = 1
    let b = 2
    let c = 2
    const user = {
        firstname: 'Ada',
        lastname: 'Lovelace'
    }
    let current = 'foo'
    const color = 'red'
    const active = true
    const onclick = e => console.log({ e })
    let fillings = 'Rice'
    const columns = [
        {
            title: 'No',
            key: 'no',
            fixed:'left' as const
        },
        {
            title: 'Title',
            key: 'title',
            width:10
        },
        {
            title: 'Length',
            key: 'length'
        },
        {
            title: 'Action',
            key: 'actions',
            Com:Input,
            width:10,
            fixed:'right' as const,
            getProps:(val, row) => ({ value:row.title })
        }
    ]
    const tableData = [
        { no: 3, title: 'Wonderwall', length: '4:18' },
        { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
        { no: 12, title: 'Champagne Supernova', length: '7:27' },
        { no: 3, title: 'Wonderwall', length: '4:18' },
        { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
        { no: 12, title: 'Champagne Supernova', length: '7:27' },
        { no: 3, title: 'Wonderwall', length: '4:18' },
        { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
        { no: 12, title: 'Champagne Supernova', length: '7:27' }
    ]
    let yes = true
</script>
<input type=checkbox bind:checked={yes} />
<Input bind:value={fillings} />
{#if yes}
    <Table columns={columns} data={tableData} />
{:else}
    <Button on:click={onclick}>边框按钮{fillings}</Button>
{/if}
<progress value={$progress} />
<div>{$progress.toFixed(3)}</div>
<button on:click="{() => progress.set(0)}">
    0%
</button>

<button on:click="{() => progress.set(0.25)}">
    25%
</button>

<button on:click="{() => progress.set(0.5)}">
    50%
</button>

<button on:click="{() => progress.set(0.75)}">
    75%
</button>

<button on:click="{() => progress.set(1)}">
    100%
</button>

<input
    type="number"
    bind:value={b} />
<input
    type="number"
    bind:value={c} />
<p>{a} + {b} + {c} = {a + b + c}</p>

<input bind:value={user.firstname} />
<input bind:value={user.lastname} />

<h1>Hello {user.firstname}!</h1>

{#if a}
    <div>foo</div>
{:else if b}
    <div>bar</div>
{/if}

<button
    type=button
    class:selected={current === 'foo'} class:active
    on:click="{() => current = 'foo'}"
>foo</button>

<div style:color>...</div>

<Slider />
<style>
  
</style>