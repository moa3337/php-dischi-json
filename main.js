const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: "",
            albums: [
            ],
            cdDetails: [],
            showCdDetails: [],
        };
    },
    methods: {
        fetchCd() {
            axios
                .get("http://localhost/Boolean_backend/es46/php-dischi-json/API/get-list.php")
                .then((reponse) => {
                    this.albums = reponse.data;
                });
        },

        showCdDetails() { },
        hideCdDetails() { },
    },

    created() {
        this.fetchCd();
    },
}).mount('#app');