<script>
	import { availableRaces, availableClasses, generateName } from '../lib/nameGenerator.js';
	import { onMount } from 'svelte';

	let race = 'Human';
	let charClass = 'Warrior';
	let generatedName = '';

	const generate = () => {
		generatedName = generateName(race, charClass);
	};

	onMount(() => {
		generate(); // Generate a default name on load
	});
</script>

<div class="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
	<h1 class="text-4xl font-bold mb-8">RPG Name Generator</h1>

	<form class="w-full max-w-md space-y-6">
		<div>
			<label for="race-select" class="block text-lg font-medium mb-2">Select Race</label>
			<select
				id="race-select"
				bind:value={race}
				class="w-full p-2 rounded bg-gray-800 border-gray-700"
			>
				{#each availableRaces as r}
					<option value={r}>{r}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for="class-select" class="block text-lg font-medium mb-2">Select Class</label>
			<select
				id="class-select"
				bind:value={charClass}
				class="w-full p-2 rounded bg-gray-800 border-gray-700"
			>
				{#each availableClasses as c}
					<option value={c}>{c}</option>
				{/each}
			</select>
		</div>

		<button
			type="button"
			class="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold"
			on:click={generate}
		>
			Generate Name
		</button>
	</form>

	{#if generatedName}
		<p class="mt-6 text-2xl font-bold">{generatedName}</p>
	{/if}
</div>
