<template>
  <form class="card" @submit.prevent="onSubmit">
    <div :class="['form-control', { invalid: eError }]">
      <label for="email">Почта</label>
      <input id="email" type="email" placeholder="Почта" v-model="email" @blur="eBlur">
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div :class="['form-control', { invalid: pError }]">
      <label for="password">Пароль</label>
      <input id="password" type="password" placeholder="Пароль" v-model="password" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>
    </div>
    <button type="submit" class="btn primary" :disabled="isSubmitting || isTooManyAttempts">Отправить</button>
  </form>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { error } from '../utils/error'
import { useLoginForm } from '../use/login-form.js'
const route = useRoute()
const store = useStore()

if (route.query.massege) {
  store.dispatch('setMessage', {
    value: error(route.query.massege),
    type: 'warning'
  })
}

const { onSubmit, isSubmitting, isTooManyAttempts, email, eError, eBlur, password, pError, pBlur } = useLoginForm();

</script>
<style lang="scss" scoped></style>
