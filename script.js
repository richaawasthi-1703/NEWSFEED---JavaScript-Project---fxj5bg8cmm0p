// https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news

const news = [{"category":"business","author":"Ankush Verma","content":"BBC admits it underreported ₹40 crore of income in its tax returns in India: Reports.","url":"https://inshorts.com/en/news/bbc-admits-it-underreported-%E2%82%B940-crore-of-income-in-its-tax-returns-in-india-reports-1686035451564"},
{"category":"sports","author":"Anmol Sharma","content":"I have not said that Ashwin wont play, Rohit Sharma on WTC final","url":"https://inshorts.com/en/news/sunil-kumar-creates-history-bags-indias-1st-ever-gold-in-decathlon-at-asian-u20-cships-1686067833229"},
{"category":"world","author":"Swati Dubey","content":"885 evacuated, emergency declared as dam blown up in south Ukraine","url":"https://inshorts.com/en/news/885-evacuated-emergency-declared-as-dam-blown-up-in-south-ukraine-1686069623625"},
{"category":"politics","author":"Shreyasi Bansal","content":"We were told not to talk about it: Bajrang on late-night meeting with Amit Shah","url":"https://inshorts.com/en/news/we-were-told-not-to-talk-about-it-bajrang-on-latenight-meeting-with-amit-shah-1686055701998"},
{"category":"hatke","author":"Anmol Sharma","content":"13,990 sq ft pizza named as world's largest by Guinness World Records, pic goes viral","url":"https://inshorts.com/en/news/13990-sq-ft-pizza-named-as-worlds-largest-by-guinness-world-records-pic-goes-viral-1674299905696"},
{"category":"science","author":"Pragya Swastik","content":"Why are there no pics of Tim Cook wearing Vision Pro: Top Apple reporter","url":"https://inshorts.com/en/news/why-are-there-no-pics-of-tim-cook-wearing-vision-pro-top-apple-reporter-1686060938190"}], saveNews = [];

class News {
    constructor(category, author, content, url){
        this.category = category;
        this.author = author;
        this.content = content;
        this.url = url;
    }

    addToSaved(){
        saveNews.push(this)
    }

    removeFromSaved(){
        
    }
}

// const fetchData = async () => {
//     const res = await fetch("https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news")
//     const data = await res.json();
//     console.log(data);
//     news.push(...data);
    
//     news.forEach(headline => createNewsCards(headline));
// }
const fetchData = ()=>{
    news.forEach(headline => createNewsCards(headline));
}
const createNewsCards = (headline) => {
const div = document.createElement('div');
div.classList.add('card');

const content = document.createElement('h3');
content.innerText = headline.content;

const category = document.createElement('h2');
console.log(headline. category)
category.innerText = `Category : ${headline. category}`;

const author = document.createElement('h4');
author.innerText = `Author : ${headline.author}`;

const btn = document.createElement('button');
btn.className = 'btn';
btn.addEventListener('click', () => {
    window.open(headline.url, "_blank");
})
btn.innerText = 'Read More';
btn.style.display = 'block';

const saveButton = document.createElement('button');
saveButton.className = 'btn';
saveButton.innerText = 'Save';
saveButton.style.display = 'block';
saveButton.addEventListener('click', ()=>{
    toggleSavedNews(headline,saveButton);
})

div.append(category, content, author, btn, saveButton);

const cardGrid = document.getElementById('card-grid');
cardGrid.appendChild(div);
}

// let mobilemenu = document.querySelector(".mobile")
// let menuBtn = document.querySelector(".menuBtn")
// let menuBtnDisplay = true;

// menuBtn.addEventListener("click",()=>{
//     mobilemenu.classList.toggle("hidden")
// })

fetchData();

const toggleSavedNews = (headline ,saveButton)=>{
const newsHead = new News(headline);
saveButton.innerText = saveButton.innerText === "Save"? 'Saved': 'Save';
newsHead.addToSaved();

if(saveButton.innerText === 'Save'){
    saveButton.innerText = 'Saved';
    newsHead.addToSaved();
}else{
    saveButton.innerText = 'Save';
    newsHead.removeFromSaved();
}
}

const rerenderCardGrid =(updatedNewsList)=>{
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';

    updatedNewsList.forEach(headline => createNewsCards(headline));
}

const searchNews= (target) => {

    const filteredNews = news.filter(headline => headline.content.toLowerCase().includes(target.value.toLowerCase()));

    rerenderCardGrid(filteredNews);
   
}
const sort=(elem)=>{
    const sortedNews = news.filter(headline => headline.category.includes(elem) );
    rerenderCardGrid(sortedNews);
}

const sortNews = (elem) =>{
    switch (elem.value){
        case 'business':
            sort(elem.value);
            break;
        case 'world':
            sort(elem.value);
            break;
        case 'politics':
            sort(elem.value);
            break;
        case 'science':
            sort(elem.value);
            break;
        case 'hatke':
            sort(elem.value);
            break;
        case 'sports':
            sort(elem.value);
            break;
    }
}

