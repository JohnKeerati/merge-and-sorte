function merge(collection_1:number[],collection_2:number[]):number[]
{
    let result:number[] = [];

    for(let i = 0; i < collection_1.length ; i++){
        result.push(collection_1[i]);
    }
    for(let j = 0; j < collection_2.length ; j++){
        result.push(collection_2[j]);
    }
    console.log("Before sorting : " + result);

    for(let i = 0; i < result.length ;i++){
        for(let j = 0; j < result.length ;j++){
            if(result[i] < result [j]){
                let x;
                x = result[i];
                result[i] = result[j];
                result[j] = x;
            }
        }
    }

    return result;
}

//Merging test
const testMerge:number[] = merge([2, 4, 6, 10, 9, 0], [1, 3, 5, 8, 7]);
console.log("After sorting : " + testMerge);