<template>
	<div v-if="message" :class="['alert', message.type]">
		<p class="alert-title" v-if="title">{{ title }}</p>
		<p>{{ message.value }}</p>
		<span class="alert-close" @click="close">&times;</span>
	</div>
</template>

<script setup> 
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const message = computed(()=> store.state.message)
const TITLE_MAP = {
	primary: 'Успешно!',
	danger: 'Ошибка!',
	warning: 'Внимание!'
}
const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)
const close = () => store.commit('clearMessage')










// const store = useStore()
// const TITLE_MAP = {
// 	primary: 'Успешно!',
// 	danger: 'Ошибка!',
// 	warning: 'Внимание!'
// }
// const message = computed(() => store.state.message)
// const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)
// const close = () => store.commit('clearMessage')
// console.log('store.state.message', store.state)
// console.log('message', message)
</script>

<style lang="scss" scoped></style>