import texts from './texts.json'
import Linia from './Linia'

export default () => {
    const listTexts = texts.map((text, i) => {
        return <Linia key={i} text={text} />
    })

    return (
        <div>
            {listTexts}
        </div>
    );
};
