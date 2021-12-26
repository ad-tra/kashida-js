let  kashida = (nudeText, insertionFreq = 3, insertionContrast = 0.8) => { 
    if(nudeText === undefined || nudeText === null) return;
    nudeText = remove(nudeText) //ensure text is nude

    let occurrences,occurrencesArr,distribution=[],a,b,min,y;
    const occurrenceMatch = /(?<=[يئهشسقفغعـضصنمكظطخحجثتب])(?=[يئهشسقفغعضصنمكظطخوـحجثتبلدرا])/gm

    //matches arabic words
    return nudeText =  nudeText.replace(/[\u0600-\u06FF]+/gm, nudeWord => {
        //if(nudeWord.length <3)return nudeWord;
        let wordWithKashida = nudeWord; //result

        occurrencesArr = [...nudeWord.matchAll(occurrenceMatch)];
        if(occurrencesArr === null) return nudeWord; //no opening for kashida insertion  
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
                
                distribution = [...occurrencesArr].map((el, i) => (-a/b * i + a))
                
            }
        }
        let i = 0;
        //console.log(distribution.map(el => Math.round(el)))
       // console.log(distribution)

        wordWithKashida = wordWithKashida.replace(occurrenceMatch, ()=>{
            let frequency = distribution[i];
            i++;
            if(frequency < 0) return "";
            return "ـ".repeat(Math.round(frequency))
        })

        
        return wordWithKashida;
        
    })
    
    
}

let  remove = kashidaText => (
    kashidaText.replace(/ـ/gm, '')
)
export default kashida