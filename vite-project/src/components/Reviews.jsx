import {ReviewsCard} from "./ReviewsCard"
const ReviewsItem = [
    
    {
      "id": 1,
      "avatar": "[https://placehold.co/64x64?text=E](https://placehold.co/64x64?text=E)",
      "avatarAlt": "Елена",
      "text": "Лучшая карбонара в городе, атмосфера очень уютная, обязательно вернёмся.",
      "author": "Елена В.",
      "dish": "Карбонара"
    },
    {
      "id": 2,
      "avatar": "[https://placehold.co/64x64?text=I](https://placehold.co/64x64?text=I)",
      "avatarAlt": "Игорь",
      "text": "Заказывали пиццу на компанию, все были в восторге от теста и начинки.",
      "author": "Игорь Т.",
      "dish": "Маргарита"
    },
    {
      "id": 3,
      "avatar": "[https://placehold.co/64x64?text=O](https://placehold.co/64x64?text=O)",
      "avatarAlt": "Ольга",
      "text": "Тирамису просто тает во рту, а обслуживание — на высшем уровне.",
      "author": "Ольга Н.",
      "dish": "Тирамису"
    }
  
]
export const Reviews = () => {
    return (<section className="reviews">
        <div className="container">
          <h2 className="section-title">Отзывы гостей</h2>
          <div className="reviews__grid">
                {ReviewsItem.map((item, i) =>(
                    <ReviewsCard key={i} {...item} />
                 ))}
            
          </div>
        </div>
      </section>)
}