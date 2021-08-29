<svelte:head>
  <title>Bindings</title>
</svelte:head>

<script lang="ts">
  let name = 'world';
</script>

<input bind:value={ name }>
<h1>Hello { name }!</h1>

<hr />


<style>
</style>