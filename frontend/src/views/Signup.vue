<template>
    <form @submit.prevent="handleSubmit">
        <h1>{{ title }}</h1>
        <input  v-model="email" type="email" required label="Enter Email"/>
        <input v-model="password" type="password" required label="Password"/>
        <input v-model="username" type="text" required  />       
        <button type="submit" class="button">Log in</button>
    </form>
</template>
<script>
export default {
    data(){
        return{
            title:'Login Form',
            email:'',
            password:'',
            username:'',
        }
    },
    methods: {
        handleSubmit(){
            //on accède au store, et dispatch appelle une action du store
            this.$store.dispatch("signUp", {
                email:this.email,
                password:this.password,
                username:this.username
            }).then(()=>{
                this.$router.push("/login")
            })
        }
    },
}
</script>
