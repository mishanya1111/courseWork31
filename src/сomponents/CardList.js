import Card from './Card';
import withLoadingDelay from '../hooks/withLoadingDelay';

const CardWithLoading = withLoadingDelay(Card);
function CardList({ items }) {
    return (
        <>
            {items?.map(card => (
                <CardWithLoading
                    firstTitle={card.title}
                    firstText={card.text}
                    key={card.id}
                    id={card.id}
                    editing={card.editing} // Передаем свойство
                />
            ))}
        </>
    );
}

export default CardList;
