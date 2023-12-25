<template>
	<nav class="navbar">
		<h3>Bank</h3>
		<ul class="navbar-menu">
			<li>
				<router-link to="/">Заявки</router-link>
			</li>
			<li>
				<router-link to="/">Помощь</router-link>
			</li>
			<li>
				<a href="#">Сообщения</a>
			</li>
			<li>
				<a href="#" @click.prevent="logout">Выйти</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()

const logout = () => {

	store.commit('auth/logout')
	router.push('/auth')
}
</script>

<style lang="scss" scoped></style>