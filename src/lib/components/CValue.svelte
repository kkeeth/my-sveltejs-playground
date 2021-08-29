<script>
	export let count = 100;
  $: doubled = count * 2;
</script>

<p>{ count } doubled is { doubled }</p>
