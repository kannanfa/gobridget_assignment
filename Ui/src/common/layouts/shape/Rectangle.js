const Rectangle = ({customStyle={}}) =>{
    const style={
        "display": "block",
        "background": "var(--primary)",
        "height": "2rem",
        "width": "0.3rem",
        "position": "absolute",
        "left": "-20px",
        "top":"20px",
        "borderRadius": "0px 1rem 1rem 0px",
        ...customStyle
    }
    return <div style={style}></div>
}

export default Rectangle;