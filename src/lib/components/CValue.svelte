<script>
	export let count;
  $: doubled = count * 2;
</script>

<p>{ count } doubled is { doubled }</p>
