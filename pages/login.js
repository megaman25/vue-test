const Login = {
	template: `
		<div>
			<div style="width:100%; float:left;">
				<h1 style="font-size:100px;">Login</h1>
			</div>
			<h2>Login</h2>
			<div class="form-group">
				<label>Email</label>
				<input v-model="email" type="email">
			</div>
			<div class="form-group">
				<label>Password</label>
				<input v-model="password" type="password">
			</div>
			<button class="primary" @click="login" :disabled="loading">
				{{ loading ? 'Logging in...' : 'Login' }}
			</button>
			<div v-if="error" class="error">{{ error }}</div>
		</div>`,
	emits: ['user-updated'],
	meta:{
		title:"Itinerary - Login Page"
	},
	data() {
		return {
			email: '',
			password: '',
			loading: false,
			error: '',
			API_BASE: 'http://192.168.1.96:4001/api'
		};
	},
	methods: {
		async login() {
			this.error = '';
			this.loading = true;
			try {
				const res = await fetch(this.API_BASE + '/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email: this.email, password: this.password })
				});
				const data = await res.json();
				if (!res.ok) throw new Error(data.message || 'Login failed');
				localStorage.setItem('token', data.token);
				localStorage.setItem('DATA_SAVED', data.user);
				this.$emit('user-updated', data.user); console.log(data.user);
				this.$router.push('/account');
			} catch (e) {
				this.error = e.message;
			} finally {
				this.loading = false;
			}
		}
	},
};

export default Login;