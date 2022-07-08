# 💻 | Projeto: Flex Box - Desafio DIO.

### Projeto integrador feito para por em prática as aulas: </br>Posicionando elementos com Flexbox em CSS.

Seja bem vindo ao meu projeto chamado VIC TURISMO, feito totalmente para meus estudos e aperfeiçoamento como profissional. ❤️

- Colocando em prática conceitos obtidos durante a aula.

- Utilizando: HTML, CSS.

- Tomei a liberdade de adicionar incrementos ao projeto utilizando JavaScript. 
    </br> Ex: Criação do Botão <b>Scrool To Top</b>:
## HTML
```html
<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <div class="scrollup">
     </div>
</body>
```
## CSS
```css
.scrollup {
    position: fixed;
    height: 45px;
    width: 42px;
    background:#000;
    right: 30px;
    bottom: 10px;
    text-align: center;
    line-height: 45px;
    color:#FF0000;
    font-size: 30px;
    border-radius: 50px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.4s ease;
}
.scrollup.show {
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
}
```
## JAVASCRIPT
```js
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.scrollup').addClass("show")
        }else{
            $('.scrollup').removeClass("show")
        }
    })
});

$('.scrollup').click(function(){
    $('html').animate({scrollTop: 0});
});
```
### 📸 | Screenshots: 

![preview1 img](/images/preview.png)

## 👩‍💻 Meus Links:

- Github: [Victor Hugo.](https://github.com/torugo99)
- LinkedIn: [Victor Hugo.](https://www.linkedin.com/in/victor-hugo99/)
- Meu Site: [Victor99dev.](http://victor99dev.site/)

### 😀 | Créditos e Agradecimentos:

- Obrigado a DIO a essa oportunidade de UP na minha carreira! ❤️
