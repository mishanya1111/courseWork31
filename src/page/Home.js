import { useContext, useState } from 'react';
import { CardContext } from '../context/сardArrayContext';
import styled from 'styled-components';
import CardList from '../сomponents/CardList';
import logo from '../logo.svg';

const InputViewOnly = styled.input`
    &:hover {
        scale: 2;
    }
`;

function Home() {
    const {
        viewOnlyCheckBoxClick,
        addNewCard,
        deleteSelectedCard,
        items,
        updateCardIsActive,
        toggleHiddenState,
    } = useContext(CardContext);

    const [showHidden, setShowHidden] = useState(false);

    const filteredItems = items
        .filter(card => (showHidden ? card.isHidden : !card.isHidden))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const handleShowHiddenToggle = () => {
        setShowHidden(prev => {

            if (!prev) {
                updateCardIsActive(cards =>
                    cards.map(card => ({ ...card, isActive: false }))
                );
            }
            return !prev;
        });
    };

    return (
        <div>
            <header className="AppHeader">
                <div className="leftBlock">
                    <img src={logo} className="AppLogo" alt="logo" />
                    <h1>{showHidden ? 'Скрытые дела' : 'Список дел'}</h1>
                </div>

                <div className="centerBlock">
                    <button
                        onClick={handleShowHiddenToggle}
                        className="toggleHiddenButton"
                    >
                        {showHidden ? 'Вернуться к делам' : ' Показать скрытые '}
                    </button>
                </div>

                <div className="rightBlock">
                    <div className="checkboxView">
                        <InputViewOnly
                            type="checkbox"
                            onChange={viewOnlyCheckBoxClick}
                        />
                        <label htmlFor="checboxView">Режим "без изменений"</label>
                    </div>
                    <div style={{ minWidth: 90 }}>
                        <button
                            onClick={addNewCard}
                            className={`actionButton addButton ${showHidden ? 'hidden' : ''}`}
                        >
                            Добавить дело
                        </button>
                    </div>
                    <button
                        onClick={toggleHiddenState}
                        className="actionButton toggleButton"
                    >
                        {showHidden ? 'Вернуть дело' : 'Скрыть дело'}
                    </button>
                    <button
                        onClick={deleteSelectedCard}
                        className="actionButton deleteButton"
                    >
                        Удалить дело
                    </button>
                </div>
            </header>

            <div className="cardContainer">
                <CardList items={filteredItems} />
            </div>
        </div>
    );
}

export default Home;
