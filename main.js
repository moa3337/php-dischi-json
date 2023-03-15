const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: "",
            albums: [],
            albumDetails: [],
            showDetails: false,
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

        showAlbumDetails(album) {
            this.showDetails = true;
            this.albumDetails = album;
        },
        hidenAlbumDetails() { },
    },

    created() {
        this.fetchCd();
    },
}).mount('#app');