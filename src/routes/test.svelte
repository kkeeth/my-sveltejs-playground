<svelte:head>
	<title>Test</title>
</svelte:head>

<script lang="ts">
  let title: string = 'This page is my test!!'
	let htmlString: string = `this string contains some <strong>HTML!!!</strong>`;

	let count: number = 0;
	$: doubled = count * 2;

	const incrementCount = () => {
		count += 1;
	}
</script>

<h1>{ title.toUpperCase() }</h1>
<p>{ @html htmlString }</p>

<hr />

<button on:click={incrementCount}>
	Clicked { count } { count === 1 ? 'time' : 'times' }
</button>
<p>{ count } doubled is { doubled }</p>

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