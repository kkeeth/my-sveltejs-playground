<svelte:head>
  <title>Events</title>
</svelte:head>

<script lang="ts">
  let m = { x: 0, y: 0 };

 const handleMousemove = (event: MouseEvent) => {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<div class="mouse-range" on:mousemove={ handleMousemove }>
  The mouse position is {m.x} x {m.y}
</div>

<style>
  .mouse-range {
    width: 400px;
    height: 400px;
    border: 1px solid;
  }
</style>