import CustomDiv from './CustomDiv';

function CardBody({ editing, checked, value, onChange }) {
    return editing ? (
        <CustomDiv $checked={checked}>
            <textarea onChange={onChange} className="textAreaBox" value={value} />
        </CustomDiv>
    ) : (
        <CustomDiv $checked={checked}>{value}</CustomDiv>
    );
}

export default CardBody;
