function solve(input)
{
    let result = [];
    //const [town, lat, lon] = input[0].split('|').filter(x => x).map(x => x.trim());
    for (let i = 1; i < input.length; i++) {
        let [currentTown, currentLatitude, currentLongtitude] = input[i].split('|').filter(x => x).map(x => x.trim());
        let obj = {
            Town: currentTown,
            Latitude: Number(Number(currentLatitude).toFixed(2)),
            Longitude: Number(Number(currentLongtitude).toFixed(2)),
        }
        result.push(obj);
    }
    return JSON.stringify(result);
}


console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
))