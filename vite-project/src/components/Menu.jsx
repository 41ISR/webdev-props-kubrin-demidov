import {MenuCard} from "./MenuCard"

const menuItems =

 [
            {
                "id": 1,
                "category": "Пицца",
                "title": "Маргарита",
                "weight": "330 г",
                "description": "Вегетарианское",
                "price": 590,
                "rating": 4.9,
                "image": " https://avatars.mds.yandex.net/get-vertis-journal/4471904/bd5251cd-f198-4f0b-a247-f97bfa4edf56.jpg/1600x1600"
            },
            {
                "id": 2,
                "category": "Паста",
                "title": "Карбонара",
                "weight": "280 г",
                "description": "Классика",
                "price": 490,
                "rating": 4.8,
                "image": "https://images.gastronom.ru/TqvoFX-RMDDiEazL4cMR2LwKsBTB9MHM_0DehJUqiEs/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzYwZjQ3Y2FiLWRiYzAtNDUxZi1hMTQ4LTJmZDNmZDMzMzA0Mi5qcGc.webp"
            },
            {
                "id": 3,
                "category": "Десерт",
                "title": "Тирамису",
                "weight": "150 г",
                "description": "С кофе",
                "price": 350,
                "rating": 4.9,
                "image": "https://images.gastronom.ru/dxp1rKNmuXQtp55gWF3DqxZuC--wnBI8XxLJnsJSH-I/pr:article-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzNkZGNiMDUyLWFjYmItNDdlNC1iYjZjLWM4NWUzOWY2NmYwNi5qcGc.webp"
            },
            {
                "id": 4,
                "category": "Закуски",
                "title": "Брускетта с томатами",
                "weight": "180 г",
                "description": "Вегетарианское",
                "price": 290,
                "rating": 4.6,
                "image": "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDIzMDkxNi80RURSWEEuanBlZw.jpg"
            },
            {
                "id": 5,
                "category": "Основные блюда",
                "title": "Ризотто с грибами",
                "weight": "320 г",
                "description": "Острое",
                "price": 560,
                "rating": 4.7,
                "image": "https://yandex-images.clstorage.net/c1B0T0315/feb30144lqG/kqQws7K9igBp_eRuiAzqnF19l0SBhLy82-KnM4RFCnQsylRhUgJIpzwgCf1x_3ypmwHKT-EQ_Grt1q7xeGXOVkf1pGIjfUsCLW-jahjI6d8NvpLQEgWvaFlipmcfilRpJRDfLQ1ew2x79lx98O96rEhO08o_xSWxqsrsuW93EQ5eKXx29KoLhOwsYmwIxGZUSHCUSxrD6H2ftLJ5lsBaYmQeGSXM141neTeb9zHoIWrMg1HWfwPtf-ADZzBiu9OLkqQ4czRmSQskpC6rBs1vmgu81YDWhCG9WXd2sx0IEmIjHZ5kghGI7juyFHZybWVqiQreW7FJY_EnSmM7Y7iWQFiiuT30ZMJKY6rsrYtFJxhOdJILX8Sl_R43MbtZwxHh5dFXZERXhKO0918_Pa9to0TLWhe-wax958ch-yBwF8aTKXL1u2NIiytga6WBxuHSBLtfCtzKL_veeTiw3c3f4aQVkmBP1AtrvfXVOD-kYaFBxx1TfkQivCLLI7LmeJpBXuexdjAjiIfo427ojownWQp9Hskbime9U3u-ftCNVaVhk1CjBFKC57X_0fA0pGhiiMKSHDoJLfSiRqV843CbwByoej7_LIDDKGJhaoEPKZ4FNFyBWsJvNlY3tL2cy9_lbVNVaw5aSuH89duy86mjaYNJnRZ0x2N-aQZqeemw1MGT7bL_8G_PQuftLG-PDmfTTPKTD9iCITObNbw3kolV6iUVXKEHlUFuPT9SuXjqLKoNgtbSdo1lNC9P4HMrtNsLluL6MzAoDc8grC5vBouvX8ewl0oYjqs0H_A-v9PGnWnuFlEsRZELKjx3Fzi7ayMux40V2f0O6HGlh-3zbnTTRt7nfnv07cWF4KVu6MlFYlNKNF8NVg6q-xC-t_uUiZ-oIVsXbYvUC2U59xowvO0pYsCI1de5TGT5L07o-C-62ItfqbS2dGKEAebr52XPSGCSjTyXwBPCqrUe8Li4Uw"
            },
            {
                "id": 6,
                "category": "Десерт",
                "title": "Панна-котта",
                "weight": "140 г",
                "description": "С ягодным соусом",
                "price": 320,
                "rating": 4.8,
                "image": "https://img.povar.ru/mobile/88/d0/c2/91/panna_kotta_iz_tapioki-856632.jpg"
            }
        ]
    

export const Menu = () => {
    return (
        <section className="menu">
            <div className="container">
                <h2 className="section-title">Наше меню</h2>
                <div className="menu__grid">
                    {menuItems.map((item, i) => (
                        <MenuCard key={i} {...item} /> 
                    ))}
                </div>
            </div>
        </section>
    )
}