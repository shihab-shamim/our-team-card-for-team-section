import { useBlockProps, RichText } from '@wordpress/block-editor';


const Richtext = ({ value, onChange, className, placeholder, tagName = "p" }) => {
    return (
        <div {...useBlockProps()}>
            <RichText
                tagName={tagName}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
            />
        </div>
    );
};

export default Richtext;
