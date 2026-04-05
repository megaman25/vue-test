const Pricing = {
	template: `
		<div>
			<div style="width:100%; float:left;">
				<h1 style="font-size:100px;">Pricing</h1>
			</div>
			<h2>Pricing</h2>
			<div class="cards flex">
				<div
					v-for="plan in plans"
					:key="plan.id"
					class="card"
					:class="{ selected: selectedPlan === plan.id }"
				>
					<h3>{{ plan.name }}</h3>
					<p v-if="plan.price === 0"><strong>Free</strong></p>
					<p v-else><strong>\${{ plan.price }} / month</strong></p>
					<p>{{ plan.description }}</p>
					<button class="primary" @click="selectPlan(plan.id)">
						{{ selectedPlan === plan.id ? 'Selected' : 'Select' }}
					</button>
				</div>
			</div>
			<div style="margin-top:1rem;">
				<button class="primary" :disabled="!selectedPlan" @click="proceed">
					Proceed to checkout
				</button>
			</div>
		</div>`,
	data() {
		return {
			selectedPlan: null,
			plans: [
				{ id: 'free', name: 'Free', price: 0, description: 'Basic access with limited features.' },
				{ id: 'basic', name: 'Basic', price: 9.99, description: 'Standard plan billed monthly.' },
				{ id: 'pro', name: 'Pro', price: 25, description: 'Advanced plan for power users.' },
			]
		};
	},
	meta:{
		title:"Seasons Page from SINGLE FILE COMPONENT"
	},
	methods: {
		selectPlan(planId) {
			this.selectedPlan = planId;
		},
		proceed() {
			if (!this.selectedPlan) return;
			this.$router.push({ name: 'checkout', query: { plan: this.selectedPlan } });
		}
	}
};

export default Pricing;