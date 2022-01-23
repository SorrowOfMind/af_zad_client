export function randomRGBGenerator(length){
    if (isNaN(length)) return false;
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
    if(isNaN(total) || isNaN(itemValue)) return false;
    return (itemValue/total * 100).toFixed(0);
}