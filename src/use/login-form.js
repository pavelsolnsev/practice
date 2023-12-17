
import { computed, watch } from 'vue'
import { useField, useForm } from "vee-validate";
import * as yup from 'yup';

export function useLoginForm() {
    const { handleSubmit, isSubmitting, submitCount } = useForm();
    const { value: email, errorMessage: eError, validate: eBlur } = useField('email', yup.string().trim().email('введите правильный емейл').required('обязательное поле'))
    const { value: password, errorMessage: pError, validate: pBlur } = useField('password', yup.string().trim().min(6, 'минимум 6 символов').required('обязательное поле'))
    const onSubmit = handleSubmit((values) => { console.log(values) });
    const isTooManyAttempts = computed(() => submitCount.value >= 3);
    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 2000)
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