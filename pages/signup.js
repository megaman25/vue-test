const Signup = {
	template: `
		<div>
			<div style="width:100%; float:left;">
				<h1 style="font-size:100px;">Sign Up</h1>
			</div>
			<h2>Sign Up (Free plan)</h2>
			<div class="form-group">
				<label>Name</label>
				<input v-model="name" type="text">
			</div>
			<div class="form-group">
				<label>Email</label>
				<input v-model="email" type="email">
			</div>
			<div class="form-group">
				<label>Password</label>
				<input v-model="password" type="password">
			</div>
			<button class="primary" @click="signup" :disabled="loading">
				{{ loading ? 'Signing up...' : 'Sign Up' }}
			</button>
			<div v-if="error" class="error">{{ error }}</div>
		</div>`,

	data() {
		return {
			name: '',
			email: '',
			password: '',
			error: '',
			loading: false,
			API_BASE: 'http://192.168.1.96:4001/api'
		};
	},
	meta:{
		title:"Itinerary - Signup"
	},
	methods: {
		async signup() {
			this.error = '';
			this.loading = true;
			try {
				const res = await fetch(this.API_BASE + '/checkout', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name: this.name,
						email: this.email,
						password: this.password,
						phone: '',
						address: {},
						plan: 'free'
					})
				});
				const data = await res.json();
				if (!res.ok) throw new Error(data.message || 'Signup failed');
				if (data.token) {
					localStorage.setItem('token', data.token);
					this.$emit('user-updated', data.user);
					this.$router.push('/account');
				}
			} catch (e) {
				this.error = e.message;
			} finally {
				this.loading = false;
			}
		}
	},
};
export default Signup;