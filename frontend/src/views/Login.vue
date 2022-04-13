<template>
    <form @submit.prevent="handleSubmit">
        <h1>{{ title }}</h1>
        <input  v-model="email" type="email" required label="Enter Email"/>
        <input v-model="password" type="password" required label="Password"/>        
        <button class="button">Log in</button>
    </form>
</template>
<script>
export default {
    date(){
        return{
            title:'Login Form',
            email:'',
            password:'',
            emailLabel: 'Email',
            passwordLabel: 'Password'
        }
    },
    methods: {
        handleSubmit(){
            this.$store.dispatch("logIn", {
                email:this.email,
                password:this.password
            }).then(()=>{
                this.$router.push("/")
            })
        }
    },
}
</script>
