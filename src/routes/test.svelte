<svelte:head>
  <title>Test</title>
</svelte:head>

<script lang="ts">
  import CValue from '$lib/components/CValue.svelte';

  let title: string = 'This page is my test!!'
  let htmlString: string = `this string contains some <strong>HTML!!!</strong>`;

  let count: number = 0;

  $: if (count >= 10) {
    console.log(`count is dangerously high!`);
    count = 9;
  }

  const incrementCount = () => {
    count += 1;
  }
</script>

<h1>{ title.toUpperCase() }</h1>
<p>{ @html htmlString }</p>

<hr />

<button on:click={ incrementCount }>
  Clicked { count } { count === 1 ? 'time' : 'times' }
</button>
<CValue count={ count } />

<style>
  h1 {
    color: purple;
    font-family: Josefin Sans, 'Comic Sans MS', cursive;
    font-size: 2rem;
  }

  button {
    max-width: 200px;
    border-radius: 8px;
  }
  button:hover {
    cursor: pointer;
    background: skyblue;
  }
</style>