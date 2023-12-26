
import { computed, watch } from 'vue'
import { useField, useForm } from "vee-validate";
import * as yup from 'yup';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export function useLoginForm() {
    const store = useStore()
    const router = useRouter()
    const PSW_MINI = 6
    const { handleSubmit, isSubmitting, submitCount } = useForm();
    const { value: email, errorMessage: eError, validate: eBlur } = useField('email', yup.string().trim().email('введите правильный емейл').required('обязательное поле'))
    const { value: password, errorMessage: pError, validate: pBlur } = useField('password', yup.string().trim().min(PSW_MINI, `минимум ${PSW_MINI} символов`).required('обязательное поле'))
    const isTooManyAttempts = computed(() => submitCount.value >= 3);
    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 2000)
        }
    });
    const onSubmit = handleSubmit(async values => {
        try {
            await store.dispatch('auth/login', values);
            router.push('/')
        } catch (e) {
            console.log(e)
         }
    });
    return {
        onSubmit,
        isSubmitting,
        isTooManyAttempts,
        email,
        eError,
        eBlur,
        password,
        pError,
        pBlur
    };
}