<svelte:head>
  <title>Bindings</title>
</svelte:head>

<script lang="ts">
  import marked from 'marked';

  let name = 'world';
  let a = 1;
  let b = 2;
  let yes = false;
  let value = `Some words are *italic*, some are **bold**`;
</script>

<input bind:value={ name }>
<h1>Hello { name }!</h1>

<hr />

<label>
  <input type=number bind:value={ a } min=0 max=10>
  <input type=range bind:value={ a } min=0 max=10>
</label>

<label>
  <input type=number bind:value={ b } min=0 max=10>
  <input type=range bind:value={ b } min=0 max=10>
</label>

<p>{a} + {b} = {a + b}</p>

<hr />

<label>
  <input type=checkbox bind:checked={ yes }>
  Yes! Send me regular email spam
</label>

{ #if yes }
  <p>Thank you. We will bombard your inbox and sell your personal details.</p>
{ :else }
  <p>You must opt in to continue. If you're not paying, you're the product.</p>
{ /if }

<button disabled={ !yes }>
  Subscribe
</button>

<hr />

{ @html marked(value) }

<textarea bind:value></textarea>
<style>
  textarea {
    width: 100%;
    height: 200px;
  }
</style>