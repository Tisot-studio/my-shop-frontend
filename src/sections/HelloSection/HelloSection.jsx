import './helloSection.scss';


const HelloSection = ({products, loading})=> 
(
        <div className='section-hello'>
                <div className='hello-section-img-container'>
            {
                loading ? null: <p> {products[0].title} </p>
            }
                </div>
                <div className='hello-section-text-container'>
                Сообщение с приветствием, кратким описанием бренда, 
                миссии, политики, почему стоит выбирать нас
                </div>
        </div>
    );

export default HelloSection;