import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		data: [
			{
				name: 'Alex Clapperton',
				image: 'https://ca.slack-edge.com/T0315G9HQ-U7P15BX4G-9b36386dc3d7-512',
				buttonText: 'More about Alex',
				back: 'Alex lorem ipsum'
			}
		]
	}
});

export default app;