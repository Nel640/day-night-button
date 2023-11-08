let body = document.querySelector('.body');
let glisse = document.querySelector('.glisse');
let glissebtn = document.querySelector('.glissebtn');
let card = document.querySelector('.para');

let btnclick = function ()
{
    //paragraphe
    card.classList.toggle('cardsun')
    card.classList.toggle('cardnight')
    //body
    body.classList.toggle('bodynight');
    body.classList.toggle('bodysun');
    
    //button
    glissebtn.classList.toggle('glissebtnsun');
    glissebtn.classList.toggle('glissebtnnight');
    
    //glisse day night
    glisse.classList.toggle('glissesun');
    glisse.classList.toggle('glissenight');
    if(glisse.classList.contains('glissenight'))
    {
        glisse.classList.add('animnight');
        glisse.classList.remove('animsun');
        body.classList.add('night');
        body.classList.remove('sun');
        glissebtn.classList.add('animbtnsun');
        glissebtn.classList.remove('animbtnnight');
    }
    else
    {
        glisse.classList.add('animsun');
        glisse.classList.remove('animnight');
        body.classList.add('sun');
        body.classList.remove('night');
        glissebtn.classList.add('animbtnnight');
        glissebtn.classList.remove('animbtnsun');
    }
    // paragraphe
}

glisse.addEventListener('click', btnclick)