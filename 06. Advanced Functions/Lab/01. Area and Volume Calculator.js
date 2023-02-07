function areaVol(areaFunc, volFunc, shapesJson)
{
    const shapes = JSON.parse(shapesJson);

    const result = [];
    for (const shape of shapes) {
        const area = areaFunc.call(shape);
        const volume = volFunc.call(shape);

        const current = {
            area,
            volume
        }

        result.push(current);
    }
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}