export const Footer = () => {
    return (   <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__col">
            <div className="logo logo--light">
              Bella
              <span>Vita</span>
            </div>
            <p className="footer__text">
              Итальянский ресторан в самом центре города с 2012 года
            </p>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Разделы</h4>
            <a href="#" className="footer__link">
              Меню
            </a>
            <a href="#" className="footer__link">
              О нас
            </a>
            <a href="#" className="footer__link">
              Отзывы
            </a>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Контакты</h4>
            <p className="footer__text">Ежедневно 11:00–23:00</p>
            <p className="footer__text">+7 (999) 765-43-21</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Bella Vita. Все права защищены.</p>
        </div>
      </footer>)
}