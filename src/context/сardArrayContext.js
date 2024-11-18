import { createContext, useState, useEffect } from 'react';
import cardsData from '../data';
import { v4 as uuidv4 } from 'uuid';

export const CardContext = createContext({
    items: [],
    cardCheckBoxClick: () => {},
    viewOnlyCheckBoxClick: () => {},
    addNewCard: () => {},
    deleteSelectedCard: () => {},
    updateCard: () => {},
    toggleHiddenState: () => {},
    updateAllCardIsActive: () => {},
    viewOnly: false
});
export default function CardContextProvider({ children }) {
    const [checked, setChecked] = useState(false);

    // Загружаем данные из localStorage или используем начальные данные
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('cards');
        const initialData = JSON.parse(savedData) || cardsData;
        return initialData.map(card => ({ ...card, isActive: false })); // Устанавливаем isActive: false
    });

    // Синхронизация данных с localStorage
    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(data));
    }, [data]);

    // Изменение активности карточки
    function changeActiveHandler(id) {
        setData(cards =>
            cards.map(card => {
                if (card.id === id) {
                    return { ...card, isActive: !card.isActive };
                }
                return card;
            })
        );
    }

    // Удаление выбранных карточек
    function deleteHandler() {
        setData(cards => cards.filter(card => !card.isActive));
    }

    // Переключение состояния чекбокса
    function changeCheckboxApp() {
        setChecked(!checked);
    }

    // Добавление новой карточки
    function addNewCard() {
        const newCard = {
            id: uuidv4(),
            title: 'Новое дело',
            text: 'Нажми Изменить , чтобы начать редактирование',
            isActive: false,
            isHidden: false,
            createdAt: new Date().toISOString()
        };
        setData([newCard, ...data]);
    }

    function updateCardHandler(id, { title, text }) {
        setData(cards =>
            cards.map(card =>
                card.id === id ? { ...card, text: text, title: title } : card
            )
        );
    }

    // Переключение скрытости карточек
    function toggleHiddenState() {
        setData(cards =>
            cards.map(card =>
                card.isActive
                    ? { ...card, isHidden: !card.isHidden, isActive: false }
                    : card
            )
        );
    }
    function updateCardIsActive(callback) {
        setData(callback);
    }

    const contextValue = {
        items: data,
        cardCheckBoxClick: changeActiveHandler,
        viewOnlyCheckBoxClick: changeCheckboxApp,
        addNewCard: addNewCard,
        deleteSelectedCard: deleteHandler,
        updateCard: updateCardHandler,
        toggleHiddenState: toggleHiddenState,
        updateCardIsActive: updateCardIsActive,
        viewOnly: checked
    };

    return (
        <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
    );
}
