<template>
	<div class="hello">
		<h1>SPACES SAVER</h1>
		<button class="new-space-button" @click="newSpace">
			Generate Space From Current State
		</button>
		<div>
			<div>Spaces</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	methods: {
		newSpace() {
			console.log("new");
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-space-button {
	width: 300px;
	height: 50px;
	background-color: rgb(165, 158, 158);
	font-size: 15px;
	font-weight: bold;
	border: 1px solid rgb(121, 116, 116);
	margin-bottom: 20px;
}

.new-space-button:hover {
	background-color: rgb(93, 90, 90);
}
</style>
