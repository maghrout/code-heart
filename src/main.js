import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		data: {
			name: 'Moujib Aghrout',
			image: 'https://ca.slack-edge.com/T0315G9HQ-U1QH8PKEV-263a9101ec63-512'
		}
	}
});

export default app;