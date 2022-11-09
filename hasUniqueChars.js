// Write your code below
word = 'hgellooo'
falesCheck = true
function hasUniqueChars(word){
    wordNew = word[0]  
    let wordArray= [];

    for(i=0;i < word.length;i++){
    if (wordArray.includes(word[i])){
        falesCheck =  false
        
    }else{
        wordArray.push(word[i])
        wordNew= word[i]
    }
}if (falesCheck=== false){
    console.log('false');
}else{
console.log('true');

}}
console.log('----------');
hasUniqueChars(word)
