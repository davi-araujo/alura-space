const MenuItem = ({ reference = "/", text, image, alt, className }) => {
    return (
        <li className={className}>
            <img src={image} alt={alt}/>
            <a href={reference}>{text}</a>
        </li>
    );
};

export default MenuItem;