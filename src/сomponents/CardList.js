import Card from './Card';
import withLoadingDelay from '../hooks/withLoadingDelay';

const CardWithLoading = withLoadingDelay(Card);
function CardList({ items }) {
    return (
        <>
            {items?.map(card => (
                <CardWithLoading
                    //viewOnlyChecked={viewOnlyCheckBoxClick}
                    firstTitle={card.title}
                    firstText={card.text}
                    key={card.id}
                    id={card.id}
                    //checkBoxChange={checkBoxChange}
                />
            ))}
        </>
    );
}

export default CardList;
