export function randomRGBGenerator(length){
    let colors = [];

    for (let i = 0; i < length; i++){
        let r = getRGB();
        let g = getRGB();
        let b = getRGB();

        let rgb = `rgb(${r}, ${g}, ${b})`;

        colors.push(rgb);
    }

    return colors;
}

function getRGB(){
    return Math.floor(Math.random() * 256);
}

export function calculatePercentage(total, itemValue){
    return (itemValue/total * 100).toFixed(0);
}