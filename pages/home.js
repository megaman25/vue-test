import {db} from '../utils.js';
console.log(db);

const Home = {
	template:
	`	<section class="flex flex-dir-column flex-1">
		<h1>Everyday Toolbox</h1>
		<h2 class="tagline">Small tools. Big solutions.</h2>
		<p class="tagline">A growing collection of free online tools designed to make everyday tasks easier, faster, and smarter.</p>
		<input placeholder="What would you like to accomplish?" style="border:1px solid #000;">
		<p class="tagline">Whether you're solving a problem, planning your next project, making a decision, or just looking for a better way to get something done, you'll find useful tools to help along the way.</p>
		<h2>**Find a tool. Get things done. Make life a little easier.**</h2>
		<button>[Explore All Tools]</button>
	</section>

	<section>
		<div>
			<h2>What can we help you with?</h2>
			<p>From quick calculations and creative ideas to planning, productivity, and everyday problem-solving, discover tools designed to make life a little simpler.</p>
		</div>

		<div>
			<h2>Money & Finance</h2>
			<p>Make sense of the numbers. Calculate budgets, savings, expenses, and more.</p>
		</div>

		<div>
			<h2>Business & Work</h2>
			<p>Explore ideas, crunch numbers, and find smarter ways to work.</p>
		</div>

		<div>
			<h2>Productivity & Planning</h2>
			<p>Organize your thoughts, prioritize tasks, and make better use of your time.</p>
		</div>

		<div>
			<h2>Everyday Utilities</h2>
			<p>Quick answers and handy tools for life's everyday questions.</p>
		</div>

		<div>
			<h2>Ideas & Creativity</h2>
			<p>Get inspired, generate ideas, and turn thoughts into possibilities.</p>
			<button>[Browse All Categories]</button>
		</div>
	<section>

	</section>
		<h2>Simple tools. Useful results.</h2>
		<p>No complicated software. No steep learning curves. Just straightforward tools that help you get things done.</p>
		<ul>
			<li><b>Easy to use:</b> Simple interfaces without unnecessary complexity.</li>
			<li><b>Free to explore:</b> Useful tools available without a subscription.</li>
			<li><b>Always growing:</b> New tools and features added regularly.</li>
		</ul>
	<section>

	</section>
		<h2>Something missing?</h2>
		  <p>We're always looking for new ways to make everyday tasks easier.</p>
		  <p>Have an idea for a tool you'd like to see? Tell us what you need. Your suggestion could inspire something we build next.</p>
		  <button>[Suggest a Tool]</button>
	<section>

	</section>
		<h2>Stay in the loop</h2>
		  <p>Discover new tools, useful resources, and fresh ideas as the Everyday Toolbox grows.</p>
		  <p>[Get Updates]</p>
	</div>`,
	data(){},
	meta:{
		title:"Connects Calendar to Time Tracker"
	}
};

export default Home;
