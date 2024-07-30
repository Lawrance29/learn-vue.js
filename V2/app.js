const app = new Vue ({
    el:'#app',
    data:{
        tampilkan: true,
        pesan1: 'Selamat datang!',
        pesan2: 'Selamat tinggal!',
        gambar: 'image.jpg',
        link:'https://www.google.com',
        warna: 'hijau',
        stylingLink : 'text-decoration: none; color: chocolate; width: 50%;',
        tooltip:'paragraph 1',
        username:'',
        password:'',
        birth:'',
        city:'', 
        gender:'',
        color:[],
        visibility:'',
        number: 5,
        num:'',
        num2:'',
        result:'',
    },
    // computed melakukan update value otomatis, sedangkan method tidak
    computed: {
        sum () {
            return this.number + 5
        },

        // multiply(){
        //     return this.result = parseInt(this.num) * parseInt(this.num2)
        // }
    },
    methods: {
        multiply(){
            return this.result = parseInt(this.num) * parseInt(this.num2)
        }
    },
})