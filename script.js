class SlideStories{
    constructor(id){
        this.slide=document.querySelector('[data-slide="slide"]');
        this.active=0;//slide ativo 
        this.init();
    }
    //para ativar o slide e thumb
    activeSlide(index){
        this.active = index;
        this.items.forEach((item) => item.classList.remove("active"))//remover imagem
        this.items[index].classList.add("active");//add imagem
        
        this.thumbItems.forEach((item) => item.classList.remove("active"))//remover thumb
        this.thumbItems[index].classList.add("active");//add thumb
        this.autoSlide();//automatico troca
    }

    //Botão anterior
    prev(){
        if(this.active > 0){
        this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
    }

    //Botão próximo
    next(){
        if(this.active < this.items.length -1){
        this.activeSlide(this.active + 1);
        } else{
            this.activeSlide(0);
        }
    }

    //navegação dos botões
    addNavigation(){
        const prevBtn = this.slide.querySelector(".slide-prev");
        prevBtn.addEventListener("click", this.prev);

        const nextBtn = this.slide.querySelector(".slide-next");
        nextBtn.addEventListener("click", this.next);
    }

    //add os tracinhos para imagens
    addThumbItems(){
        this.items.forEach(()=>this.thumb.innerHTML  += "<span></span>");
        this.thumbItems =Array.from(this.thumb.children);

    }

    //automatizar a troca de slide
    autoSlide(){
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.next, 5000);
    }

    //Iniciar configurações gerais
    init(){
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.items = this.slide.querySelectorAll(".slide-items > *");//seleciona todos os slides
        this.thumb = this.slide.querySelector(".slide-thumb");
        this.addThumbItems();
        this.activeSlide(0);
        this.addNavigation();
    }
}

new SlideStories("slide");