<template>
  <br><br>
      <form @submit.prevent="submitForm" class="container">
        <div class="form-group">
            <label for="nota1">Nota 1:</label>
            <input type="number" id="nota1" v-model.number="nota1" min="10" max="70" class="form-control" required>
        </div>
        <div class="form-group" >
            <label for="nota2">Nota 2:</label>
            <input type="number" id="nota2" v-model.number="nota2" min="10" max="70" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="nota3">Nota 3:</label>
            <input type="number" id="nota3" v-model.number="nota3" min="10" max="70" class="form-control" required>
        </div>
        <div>
            <label for="asistencia">Asistencia (%):</label>
            <input type="number" id="asistencia" v-model.number="asistencia" min="0" max="100" class="form-control" required>
        </div>
        <button type="submit" class="btn-primary">Enviar</button>
        <div>     
            <p class="textoResultado" v-if="promedio !== ''">El promedio es: {{ promedio.toFixed(2) }}</p>
            <p class="textoResultado" v-if="resultado !== ''">Tu estado es: {{ resultado }}</p>
        </div>
      </form>
</template>

<script>
    export default {
        data() {
            return {
                nota1: null,
                nota2: null,
                nota3: null,
                asistencia: null,
                promedio: '',
                resultado: ''
            };
        },
        methods: {
            submitForm(){
                this.calcularResultado();
            },
            calcularResultado() {
                if (this.nota1 !== null && this.nota2 !== null && this.nota3 !== null) {
                    this.promedio = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
                    this.resultado = (this.promedio >= 40 && this.asistencia >= 80) ? '¡Aprobado!' : 'Reprobado';
                } else {
                    this.promedio = '';
                    this.resultado = 'Por favor ingresa todas las notas y la asistencia.';
                }
            }
        }
    };
</script>