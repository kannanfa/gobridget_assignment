const Circle = ({customStyle={}}) =>{
    const style={
        "display": "block",
        "background": "var(--primary-yellow)",
        "height": "0.4rem",
        "width": "0.4rem",
        "borderRadius": "50%",
        ...customStyle
    }
    return <div style={style}></div>
}

export default Circle;
