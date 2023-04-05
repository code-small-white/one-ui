<!-- Welcome to eslint-plugin-svelte -->
<script>
    let a = 1
    let b = 2
    let c = 2
    const user = {
        firstname: 'Ada',
        lastname: 'Lovelace'
    }
    let current = 'foo'
    const color = 'red'
    const active = true
</script>

<input
    type="number"
    bind:value={a} />
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
