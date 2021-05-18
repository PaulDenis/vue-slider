var app = new Vue(
    {
        el:"#root",
        data: {
            images: [
                {
                    image: "img/colosseo.webp",
                    name: "Colosseo"
                },
                {
                    image: "img/Chichén_Itzá.jpg",
                    name: "Chichén Itzá"
                },
                {
                    image: "img/muraglia_cinese.jpg",
                    name: "Grande muraglia Cinese"
                },
                {
                    image: "img/taj_mahal.jpeg",
                    name: "Taj mahal"
                },
                {
                    image: "img/monasterio-petra.webp",
                    name: "Monasterio Petra"
                },
                {
                    image: "img/Machu_Picchu.jpg",
                    name: "Machu Picchu"
                },
                {
                    image: "img/Cristo_redentore.jpg",
                    name: "Cristo Redentor"
                },
                {
                    image: "img/Mimi.jpg",
                    name: "Meraviglia bonus"
                }
            ],
            imageIndex: 0,
        },
        methods: {
            prevImg: function() {

                this.imageIndex = this.imageIndex - 1;
                
                if (this.imageIndex < 0) {
                    this.imageIndex = this.images.length;
                }
            },
            goForward: function() {
                this.imageIndex++;
                if(this.imageIndex == this.images.length) {
                    this.imageIndex = 0;
                }
            },
            goDirectly: function(index) {
                this.imageIndex = index;
            }
        },
        mounted () {
            clock = setInterval(() => {
                this.goForward();
            }, 3000);
        },
        beforeUpdate () {
            clearInterval(clock);
        },
        updated () {
            clock = setInterval(() => {
                this.goForward();
            }, 3000);
        }
    }
)