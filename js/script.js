var app = new Vue({
    el: '#root',
    data: {
        emailArrey: []
    },

    methods: {   
    },

    mounted(){
        for(let i=1; i <= 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.emailArrey.push(response.data.response) 
            console.log(this.emailArrey)
            
        });
        }
    },
    }); 
