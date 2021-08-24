<svelte:head>
	<title>Test</title>
</svelte:head>

<script>
  let title = 'This page is my test!!'
</script>

<h1>{ title.toUpperCase() }</h1>

<style>
	h1 {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>