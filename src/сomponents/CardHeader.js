
import CustomDiv from './CustomDiv';

function CardHeader({
    value,
    inputChange,
    onCansel,
    onSave,
    onChange,
    onEdit,
    checked,
    editing,
    isDisableMode
}) {
    return editing ? (
        <CustomDiv $checked={checked} $title={true}>
            <h2>
                <input
                    type="text"
                    onChange={inputChange}
                    value={value}
                    style={{ width: 110 }}
                />
            </h2>
            <button onClick={onCansel} className="cancelButton">
                Отмена
            </button>
            <button onClick={onSave} className="cardButton">
                Сохранить
            </button>
        </CustomDiv>
    ) : (
        <CustomDiv $checked={checked} $title={true}>
            <h2>{value}</h2>
            <input type="checkbox" className="check1" onChange={onChange} />
            <div style={{ width: 80 }}>
                {!isDisableMode && (
                    <button onClick={onEdit} className="cardButton">
                        Изменить

                    </button>
                )}
            </div>
        </CustomDiv>
    );
}

export default CardHeader;
