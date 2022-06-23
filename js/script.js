var root = new Vue({
    el: '#root',
    data: {
        title: 'Hello World!',
        myClass: 'yellow_color',
        red_color: false,
        imageSrc: 'https://unsplash.it/300/300?image=',
        message: {
            title_message: "scrivi nell'input sopra per cambiare titolo"
        }
    },
    methods: {
        changeColor() {
            if(!this.red_color) {
                this.myClass = 'red_color';
                this.red_color = true;
            } else {
                this.myClass = 'yellow_color';
                this.red_color = false;
            }
        }
    }
})
