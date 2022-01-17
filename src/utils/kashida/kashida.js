

let  kashida = (nudeText, insertionFreq = 3, insertionContrast = 0.8) => { 
    if(nudeText === undefined || nudeText === null) return;
    nudeText = remove(nudeText) //ensure text is nude
    let occurrences,occurrencesArr,distribution=[],a,b,min,y;
    const reg = /(?:[يئهشسقفغعـضصنمكظطخحجثتب])(?:[يئهشسقفغعضصنمكظطخوـحجثتبلدرا])/gm

    //matches arabic words
    return nudeText =  nudeText.replace(/[\u0600-\u06FF]+/gm, nudeWord => {
        //if(nudeWord.length <3)return nudeWord;
        let wordWithKashida = nudeWord; //result

        occurrencesArr = legacyMatch(nudeWord, reg);
        if(occurrencesArr.length === 0) return nudeWord; //no opening for kashida insertion  
        occurrences = occurrencesArr.length

        
        //determine insertions distribution
        if(insertionContrast === 0)
             distribution = Array.apply(null, Array(occurrences)).map(() => Math.round(insertionFreq/occurrences))
        else{
            if(insertionContrast === 1) distribution[0] = insertionFreq
            else{

                min = insertionFreq / occurrences
                //insertionFreq is max;
                a = min + (insertionFreq - min) * insertionContrast
                b =   insertionFreq / a 
                
                distribution = [...occurrencesArr].map((el, i) => Math.round(-a/b * i + a))
                
            }
        }
       // console.log("\n".repeat(3))
       // console.log(distribution)
       // console.log(`the sum of the distribution is:  ${distribution.filter(el => el> 0).reduce((el, a) => el + a, 0)}. \tit should be:  ${insertionFreq}`)
        //console.log(distribution.map(el => Math.round(el)))
       // console.log(distribution)
        let countOfAddedKashida = 0
        for(let i = 0; i < occurrencesArr.length ; i++){
            let frequency = distribution[i];
            if(frequency < 0) continue;

            let occurrence = occurrencesArr[i]

            let beforeKashida = wordWithKashida.substring(0, occurrence.index+countOfAddedKashida+1)
            let kashidaInsert =  "ـ".repeat(frequency) 
            let afterKashida = wordWithKashida.substring(occurrence.index  +1 + countOfAddedKashida)
            
            wordWithKashida =  beforeKashida + kashidaInsert + afterKashida

            countOfAddedKashida += frequency
        }


        return wordWithKashida;
        
    })
    
    
}


//fuck safari and apple for not supporting regex lookbehind 
function legacyMatch(str, regex){
    var string = str;
    var reg = regex
    var matches = [], found;
    while (found = reg.exec(string)) {
        matches.push(found);
        reg.lastIndex = found.index+1;
    }
    return matches;
}

let  remove = kashidaText => (
    kashidaText.replace(/ـ/gm, '')
)

// let text = "حكيم"
// console.log(kashida(text))

export default kashida