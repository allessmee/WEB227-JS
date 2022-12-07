class Header{
    constructor(img, p){
        this.src = img;
        this.p = p;
    }
    
  render(id){
    let out = `
        <img src="${this.src}" alt ="">
        <p>${this.p}</p>     
    `;
    document.querySelector(`#${id}`).innerHTML = out;
  }
}
 let img = "https://cdn2.iconfinder.com/data/icons/thin-business-1/24/thin-1089_deal_money_business-2-64.png"
 let p = "Работа 24 часа в сутки, 7 дней в неделю, 365 дней году"

 let header = new Header(img,p)
header.render("header");

 let img2 = "https://cdn1.iconfinder.com/data/icons/shopping-346/24/package-delivery-transport-shipping-truck-64.png"
 let p2 = "Нет географических границ"

 let header2 = new Header(img2, p2)
header2.render("header2");

 let img3 = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/home_house_desktop_dashboard-64.png"
 let p3 = "Ассортимент"

 let header3 = new Header(img3, p3)
header3.render("header3");

 let img4 = "https://cdn2.iconfinder.com/data/icons/business-804/24/justice-law-legal-scales-balance-court-64.png"
 let p4 = "Безопасность"

 let header4 = new Header(img4, p4)
header4.render("header4");

 let img5 = "https://cdn1.iconfinder.com/data/icons/oit-internet-of-things/64/customer-insight-people-behavior-interpretation-search-hr-64.png"
 let p5 = "Сокращение расходов на аренду и персонал"

 let header5 = new Header(img5, p5)
header5.render("header5");

 let img6 = "https://cdn0.iconfinder.com/data/icons/minimal-set-four/32/minimal-19-64.png"
 let p6 = "Партнерские отношения"

 let header6 = new Header(img6, p6)
header6.render("header6");

 let img7 = "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/07.Wallet-64.png"
 let p7 = "Покуптель всегда на связи"

 let header7 = new Header(img7, p7)
header7.render("header7");

 let img8 = "https://cdn3.iconfinder.com/data/icons/ui-10/512/eyeglasses-64.png"
 let p8 = "Комфортный выбор"

 let header8 = new Header(img8, p8)
header8.render("header8");

 let img9 = "https://cdn1.iconfinder.com/data/icons/material-core/20/language-64.png"
 let p9 = "Удобство оплаты"

 let header9 = new Header(img9, p9)
header9.render("header9");
