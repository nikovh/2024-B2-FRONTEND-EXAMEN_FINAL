<template>
    <br><br>
    <form @submit.prevent="submitForm" class="container">
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="form.name" @input="validateName" class="form-control"/>
            <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
        </div>
        <div class="form-group">
            <label for="email">Correo:</label>
            <input type="email" id="email" v-model="form.email" @input="validateEmail" class="form-control"/>
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
        </div>
        <div class="form-group">
            <label for="password1">Contraseña:</label>
            <input type="password" id="password1" v-model="form.password1" @input="validatePassword" class="form-control"/>
            <p v-if="errors.password1" class="error-message">{{ errors.password1 }}</p>
        </div>


        <div class="form-group">
            <label for="password2">Repetir contraseña:</label>
            <input type="password" id="password2" v-model="form.password2" @input="validateRepeatPassword" class="form-control"/>
            <p v-if="errors.password2" class="error-message">{{ errors.password2 }}</p>
        </div>


        
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                },
                errors: {
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }
            };
        },
        methods: {
            validateName() {
                if (!this.form.name) {
                    this.errors.name = 'El campo nombre es requerido';
                } else if (/\d/.test(this.form.name)) {
                    this.errors.name = 'El nombre no debe contener números';
                } else {
                    this.errors.name = '';
                }
            },
            validateEmail() {
                if (!this.form.email) {
                    this.errors.email = 'El campo correo es requerido';
                } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
                    this.errors.email = 'El correo es inválido';
                } else {
                    this.errors.email = '';
                }
            },
            validatePassword() {
                if (!this.form.password1) {
                    this.errors.password1 = 'El campo contraseña es requerido';
                } else if (this.form.password1.length < 5) {
                    this.errors.password1 = 'La contraseña debe tener al menos 5 caracteres';
                } else {
                    this.errors.password1 = '';
                }
            },
            validateRepeatPassword() {
                if (!this.form.password2) {
                    this.errors.password2 = 'El campo repetir contraseña es requerido';
                } else if (this.form.password2 !== this.form.password1) {
                    this.errors.password2 = 'Las contraseñas no coinciden';
                } else {
                    this.errors.password2 = '';
                }
            },

            submitForm() {
                this.validateName();
                this.validateEmail();
                this.validatePassword();
                this.validateRepeatPassword()


                if (!Object.values(this.errors).some(error => error !== '')) {
                    // Aquí puedes realizar la lógica para enviar el formulario
                    alert('Formulario enviado correctamente');
                } else {
                    alert('Por favor, corrige los errores antes de enviar el formulario');
                }
            }
        }
    };
</script>
