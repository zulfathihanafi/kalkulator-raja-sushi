const Piring = ({color, price}) => {

    const size = 100;
    return (
        <svg width={`${size}`} height={`${size}`} xmlns="http://www.w3.org/2000/svg">
            {/* Outer grey circle */}
            <circle cx={`${size/2}`} cy={`${size/2}`} r={`${size/2}`} fill="lightgrey" />
            
            {/* Inner dynamic color circle */}
            <circle cx={`${size/2}`} cy={`${size/2}`} r={`${(size/2)-8}`} fill={color} />
            
            {/* Inner white circle */}
            <circle cx={`${size/2}`} cy={`${size/2}`} r={`${(size/2)-20}`} fill="white" />

            {/* Centered text */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fontSize="16"
                fontFamily="Arial"
                fill="black"
                fontWeight={"bold"}
            >
                {Number(price/100).toFixed(2)}
            </text>
        </svg>
    );
}

export default Piring;