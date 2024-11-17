import { createContext, useState } from 'react';
import cardsData from '../data';
import { v4 as uuidv4 } from 'uuid';
export const CardContext = createContext({
    items: [],
    cardCheckBoxClick: () => {},
    viewOnlyCheckBoxClick: () => {},
    addNewCard: () => {},
    deleteSelectedCard: () => {},
    viewOnly: false
});

export default function CardContextProvider({ children }) {
    const [checked, setChecked] = useState(false);
    const [data, setData] = useState(cardsData);

    function changeActiveHandler(id) {
        setData(cards =>
            cards.map(card => {
                if (card.id === id) {
                    const prev = { ...card };
                    prev.isActive = !card.isActive;
                    return prev;
                }
                return card;
            })
        );
    }

    function deleteHandler() {
        setData(card => card.filter(el => !el.isActive));
    }

    function changeCheckboxApp() {
        setChecked(!checked);
    }

    function addNewCard() {
        setData([
            {
                id: uuidv4(),
                title: '',
                text: '',
                isActive: false
            },
            ...data
        ]);
    }

    const contextValue = {
        items: data,
        cardCheckBoxClick: changeActiveHandler,
        viewOnlyCheckBoxClick: changeCheckboxApp,
        addNewCard: addNewCard,
        deleteSelectedCard: deleteHandler,
        viewOnly: checked
    };
    return (
        <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
    );
}
