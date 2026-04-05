const Account = { 
	template: 
`<div class="content">
	<div class="mn flex">

		<div class="left-panel">
			<div class="pddg flex flex-dir-column height-100">

				<div class="row flex flex-center-vt" style="/*height:90px; border-bottom:2px solid #272727; margin-bottom: 60px; width: 100%; margin-left: -25px; padding: 0 25px; gap:12px;*/ height:70px; border-bottom:2px solid #272727; margin-bottom: 45px; width: 100%; margin-left: -20px; padding: 0 20px; gap:9.6px;">
					<div class="circle-btn" style=""><img src="img/ui/logo.png"></div>
					<div class="flex flex-dir-column flex-1">
						<span style="font-size:2.0rem; color:#f0f0f0; font-weight:500; font-family:'Poppins';">NFL Studio</span>
						<span style="font-size:1.6rem; font-weight:600;">Pro Team</span>
					</div>
					<img src="img/ui/icon-arrow-down.png">
				</div>

				<div class="row">
					<div class="title flex flex-center-vt">Projects<button><img src="img/ui/icon-arrow-up.png"></button></div>
					<ul class="list">
						
						<li class="flex flex-center-vt" @click="activeTab = item.tag" v-for="(item,idx) in leftMenu" :key=idx>
							<div class="image"><img src="img/ui/icon-hash.png"></div>
							<div class="caption flex-1">{{ item.title }}</div>
						</li>
						
					</ul>
				</div>

				<div class="row">
					<div class="title flex flex-center-vt">Settings<button><img src="img/ui/icon-arrow-up.png"></button></div>
					<ul class="list">
						
						<li class="flex flex-center-vt">
							<div class="image">
								<img src="img/ui/icon-planner.png">
							</div>
							<div class="caption"><a href="settings">Settings</a></div>
						</li>
						
					</ul>
				</div>
			</div><!-- end of pddg -->
		</div><!-- end of left-panel -->

		<div class="main-panel flex-1">
			<div class="pddg">

				<div id="main-panel-target" class="mn"><div class="flex" style="padding:25px;">

					<div class="column flex-dir-column" style="width:716px;" v-if="activeTab === 'account'">

						<div class="box">
							<h1 class="txt-lrg-4 margin-bottom-25 color-white-d3d5d7 bold-500">General</h1>
						</div>

						<div style="width:100%; float:left;">
							<h1 style="font-size:100px;">Account</h1>
						</div>

						<div class="box">
							<h3>Profile</h3>
							<div class="margin-bottom-20">
								<p><strong>Name:</strong> {{ me.name }}</p>
								<p><strong>Email:</strong> {{ me.email }}</p>
								<p><strong>ID:</strong> {{ me.id || 'get ID' }}</p>
								<p><strong>Plan:</strong> <span style="color:#f00;">{{ me.plan }}</span></p>
								<p><strong>Phone:</strong> {{ me.phone || '-' }}</p>
								<p><strong>Plan:</strong> {{ planLabel }}</p>
							</div>
							<div class="margin-bottom-20">
								<p><strong>Address 1:</strong> {{ me.address?.line1 }}</p>
								<p><strong>Address 2:</strong> {{ me.address?.line2 }}</p>
								<p><strong>City:</strong> {{ me.address?.city }}</p>
								<p><strong>Postal Code:</strong> {{ me.address?.postalCode }}</p>
								<p><strong>Country:</strong> {{ me.address?.country }}</p>
							</div>
						</div>

						<div class="box margin-bottom-35" style="/*background:#f003;*/ height:285px;">
							<div class="title flex margin-bottom-30">
								<div class="left flex-1">
									<h2 class="txt-sml-2 color-white-d3d5d7 bold-300">Organization profile</h2>
								</div>
								<div class="right txt-sml-2 flex flex-center-vt gap-10">
									<div class="flex flex-center-vt"><img src="img/ui/settings/icon-copy.png"></div>
									<span style="color:#57585c;">Copy Organization ID</span>
								</div>
							</div>
							<div class="body">
								<div class="flex gap-25 flex-center-vt margin-bottom-25">
									<div><img src="img/ui/settings/icon-halal-lab.png"></div>
									<div>
										<h2 class="title txt-sml-2 color-white-d3d5d7 margin-bottom-5 bold-300">Organization Logo</h2>
										<div>Use a photo or image rather than text and upload an image that is 132px square or round</div>
									</div>
								</div>

								<div>
									<div class="margin-bottom-15">
										<h2 class="title txt-sml-2 color-white-d3d5d7 bold-300">Display name</h2>
										<div class="txt-sml-2">How your organization name will appear to members</div>
									</div>
									<div class="width-100" style="border:1px solid #333438; border-radius:6px; height:40px;">
										<input style="" type="" name="" placeholder="Halal Lab">
									</div>
								</div>
							</div><!-- end of body -->
						</div>

						<div class="box margin-bottom-50" style="/*height:255px;*/">
							<div class="title margin-bottom-20">
								<h2 class="bold-500 color-white-d3d5d7 txt-sml-2 flex flex-center-vt gap-10">Al features<img src="img/ui/settings/icon-ai-features.png"></h2>
							</div>
							<div class="body">
								<ul>
								
									<li class="flex margin-bottom-20 gap-25" style="line-height:1.35em;">
										<div style="width:40px; height:40px;">
											<img style="width:100%" src="img/ui/settings/icon-ai-enable-semantic-search.png">
										</div>
										<div class="flex flex-dir-column flex-1 txt-sml-1">
											<div class="txt-sml-1 color-white-d3d5d7">Enable AI semantic search</div> 
											<div class="txt-sml-1">Nexus's AI-powered search lets your team members ask questions about your content in a natural language. <a href="#">Try it!</a> You can also enable Nexus AI for published content in the space customization panel. <a href="#">Learn more</a></div>
										</div>
										<div class="flex" style="width:64px; justify-content:end;">
											<div><img src="img/ui/settings/icon-switch.png"></div>
										</div>

									</li>
									<li class="flex margin-bottom-20 gap-25" style="line-height:1.35em;">
										<div style="width:40px; height:40px;">
											<img style="width:100%" src="img/ui/settings/icon-ai-enable-insight.png">
										</div>
										<div class="flex flex-dir-column flex-1 txt-sml-1">
											<div class="txt-sml-1 color-white-d3d5d7">Enable AI insight</div> 
											<div class="txt-sml-1">Get useful insights into your content, including contradicting information with a space.</div>
										</div>
										<div class="flex" style="width:64px; justify-content:end;">
											<div><img src="img/ui/settings/icon-switch.png"></div>
										</div>

									</li>
								</ul>
							</div><!-- end of body -->
						</div>
						
						<div class="box">
							<div class="title margin-bottom-20"><h2 class="bold-500 color-white-d3d5d7 txt-sml-2">Publishing</h2></div>
							<div class="body">
								<ul>
								
									<li class="flex margin-bottom-30 gap-25" style="line-height:1.35em;">
										<div style="width:40px; height:40px;">
											<img src="img/ui/settings/icon-subdomain.png">
										</div>
										<div class="flex flex-dir-column flex-1">
											<div class="txt-sml-1 color-white-d3d5d7">Subdomain</div> 
											<div class="txt-sml-1">Your organization is configured to use "halal-lab-organization.ous.io". All published content will be accessible under this domain.</div>
										</div>
										<div style="width:128px;">
											<button class="rectangle-circle-btn" style="background:#23272c; border-radius:6px; height:33px; padding:0 1.0em;">Edit Subdomain</button>
										</div>

									</li>
									<li class="flex margin-bottom-30 gap-25" style="line-height:1.35em;">
										<div style="width:40px; height:40px;">
											<img src="img/ui/settings/icon-custom-domain.png">
										</div>
										<div class="flex flex-dir-column flex-1">
											<div class="txt-sml-1 color-white-d3d5d7">Custom domain</div> 
											<div class="txt-sml-1">You currently haven't set up any custom domains.</div>
										</div>
										<div style="width:128px;">
											<button class="rectangle-circle-btn" style="background:#23272c; border-radius:6px; height:33px; padding:0 1.0em;">Connect domain</button>
										</div>

									</li>
									<li class="flex margin-bottom-30 gap-25" style="line-height:1.35em;">
										<div style="width:40px; height:40px;">
											<img src="img/ui/settings/icon-default-content.png">
										</div>
										<div class="flex flex-dir-column flex-1">
											<div class="txt-sml-1 color-white-d3d5d7">Default content</div> 
											<div class="txt-sml-1">user visiting your organization's public domain will be shown the first public content.</div>
										</div>
										<div style="width:128px;">
											<button class="rectangle-circle-btn" style="background:#23272c; border-radius:6px; height:33px; padding:0 1.0em;">Change Default</button>
										</div>

									</li>
								</ul>
							</div><!-- end of body -->
						</div>

					</div>

					<div class="column flex-dir-column" style="width:716px;" v-if="activeTab === 'appearance'">

						<div style="width:100%; float:left;">
							<h1 style="font-size:100px;">Appearance</h1>
						</div>

					</div>

					<div class="column flex-dir-column" style="width:716px;" v-if="activeTab === 'settings'">

						<div style="width:100%; float:left;">
							<h1 style="font-size:100px;">Settings</h1>
						</div>

					</div>
				</div>

			</div><!-- end of pddg -->
		</div><!-- end of main-panel -->

	</div><!-- end of ctrl -->
</div>`,
	props: ['user'],
	meta:{
		title:"Account"
	},
	data(){
		return {
			activeTab: 'account',
			leftMenu: [
				{title:"Account", tag:"account"},
				{title:"Appearance", tag:"appearance"},
				{title:"Settings", tag:"settings"},
			],
			API_BASE: 'http://192.168.1.96:4001/api',

			me: null,
			transactions: [],
			loading: true,
			error: '',
		}
	},
	async mounted() {
		console.log('USER DATA', this.user);
		if (!localStorage.getItem('token')) {
			this.$router.push('/login');
			return;
		}
		try {
			const [meRes, txRes] = await Promise.all([
				fetch(this.API_BASE + '/me', { headers: authHeaders() }),
				fetch(this.API_BASE + '/transactions', { headers: authHeaders() })
			]);
			const meData = await meRes.json();
			const txData = await txRes.json(); console.log(meData, txData);
			if (!meRes.ok) throw new Error(meData.message || 'Could not load account');
			if (!txRes.ok) throw new Error(txData.message || 'Could not load transactions');

			if (!meData || !txData){window.location.href = '/login';};

			this.me = meData; console.log('ME DATA: ',meData);
			this.transactions = txData;
		} catch (e) {
			this.error = e.message;
		} finally {
			this.loading = false;
		}
	},
	computed: {
		planLabel() {
			if (!this.me || !this.me.plan) console.log(this.me); return 'None';
			if (this.me.plan === 'free') console.log(this.me); return 'Free';
			if (this.me.plan === 'basic') console.log(this.me); return 'Basic ($9.99 / month)';
			if (this.me.plan === 'pro') console.log(this.me); return 'Pro ($25 / month)';
			return this.me.plan;
		}
	},
};


export default Account;






						
/*
2026/02/07, @2:47:15 PM (Saturday) - Implimented tab navigation for side navigation menu. Works first time used.

						<li class="flex flex-center-vt" @click="activeTab = 'product_design'">
							<div class="image"><img src="img/ui/icon-hash.png"></div>
							<div class="caption flex-1">Product Design</div>
							<div class="flex" style="gap:10px;">
								<div class="circle-btn btn-30x30 flex flex-center" style="background:#6948fc;">@</div><div class="circle-btn btn-30x30 flex flex-center">19</div>
							</div>
						</li>
						
						<li class="flex flex-center-vt" @click="activeTab = 'marketing'">
							<div class="image"><img src="img/ui/icon-hash.png"></div>
							<div class="caption flex-1">Marketing</div>
							<div class="flex" style="gap:10px;">
								<div class="circle-btn btn-30x30 flex flex-center">8</div>
							</div>
						</li>
						
						<li class="flex flex-center-vt" @click="activeTab = 'development'">
							<div class="image"><img src="img/ui/icon-hash.png"></div>
							<div class="caption flex-1">Development</div>
							<div class="flex" style="gap:10px;">
								<div class="circle-btn btn-30x30 flex flex-center">38</div>
							</div>
						</li>
*/