
export const MenuCard = ({category, title, weight, description, price, rating, image}) => {
    return (
        <article className="dish-card">
                        <img
                            className="dish-card__image"
                            src={image}
                            alt="Пицца Маргарита"
                        />
                        <div className="dish-card__body">
                            <span className="dish-card__category">{category}</span>
                            <h3 className="dish-card__title">{title}</h3>
                            <p className="dish-card__meta">{weight} · {description}</p>
                            <div className="dish-card__footer">
                                <span className="dish-card__price">{price} ₽</span>
                                <span className="dish-card__rating">★ {rating}</span>
                            </div>
                            <button className="btn btn--primary btn--full">В корзину</button>
                        </div>
                    </article>
    )
}