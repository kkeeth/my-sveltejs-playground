<svelte:head>
  <title>Events</title>
</svelte:head>

<script lang="ts">
  import Inner from '$lib/components/Inner.svelte';

  let m = { x: 0, y: 0 };

  const handleMousemove = (event: MouseEvent) => {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  const handleClick = () => {
    alert('no more alerts')
  }

  const handleMessage = (event) => {
    alert(event.detail.text);
  }
</script>

<div class="mouse-range" on:mousemove={ handleMousemove }>
  The mouse position is {m.x} x {m.y}
</div>

<hr />

<button on:click|once={ handleClick }>
  Click me
</button>

<hr />

<Inner on:my-message={handleMessage}/>

<style>
  .mouse-range {
    width: 400px;
    height: 400px;
    border: 1px solid;
  }
</style>