<svelte:head>
  <title>Test</title>
</svelte:head>

<script lang="ts">
  import CValue from '$lib/components/CValue.svelte';
  import Thing from '$lib/components/Things.svelte';
  import { getRandomNumber } from '../utils';

  let title: string = 'This page is my test!!'
  let htmlString: string = `this string contains some <strong>HTML!!!</strong>`;
  let count: number = 0;
  let user = { loggedIn: false };
  const cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ];
  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ];
  let promise = getRandomNumber();

  $: if (count >= 10) {
    console.log(`count is dangerously high!`);
    count = 9;
  }

  /**
   * methods
   */
  const incrementCount = () => {
    count += 1;
  }

  const toggle = () => {
    user.loggedIn = !user.loggedIn;
  }

  const handleClick = () => {
    things = things.slice(1);
  }

  const getNumber = () => {
    promise = getRandomNumber();
  }
</script>

<h1>{ title.toUpperCase() }</h1>
<p>{ @html htmlString }</p>

<hr />

<button on:click={ incrementCount }>
  Clicked { count } { count === 1 ? 'time' : 'times' }
</button>
<CValue count={ count } />
<div>
  <p>No default value is given↓↓</p>
  <CValue />
</div>

<hr />

{ #if user.loggedIn }
  <button on:click={ toggle }>
    Log out
  </button>
{ :else }
  <button on:click={ toggle }>
    Log in
  </button>
{ /if }

<hr />

{ #if count > 10 }
  <p>{count} is greater than 10</p>
{ :else if 5 > count }
  <p>{count} is less than 5</p>
{ :else }
  <p>{count} is between 5 and 10</p>
{ /if }

<hr />

<h2>The Famous Cats of YouTube</h2>
<ul>
  { #each cats as { id, name }, i }
    <li><a target="_blank" href="https://www.youtube.com/watch?v={ id }">
      { i + 1 } : { name }
    </a></li>
  { /each }
</ul>

<hr />

<button on:click={ handleClick }>
  Remove first thing
</button>

{ #each things as thing (Math.random()) }
  <Thing name={thing.name}/>
{ /each }


<hr />

<button on:click={ getNumber }>
  generate random number
</button>

{ #await promise }
  <p>...waiting</p>
{ :then number }
  <p>The number is { number }</p>
{ :catch error }
  <p style="color: red">{ error.message }</p>
{ /await }

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

  hr {
    border-top: 1px solid #aaa;
    width: 100%;
    margin: 10px auto;
  }
</style>