function generatequote(){
    const objOfQuote =  {
    
        '- Nelson Mandela -' : ' " The greatest glory in living lies not in never falling, but in rising every time we fall. " '
    ,
    
        ' - Walt Disney -' : ' " The way to get started is to quit talking and begin doing. " '
    ,

        '- Steve Jobs - ' : ' " Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. " '
    ,
    
        ' - Eleanor Roosevelt - ' : 
        ' " The future belongs to those who believe in the beauty of their dreams." '
    ,
    
       ' - James Cameron - ' : 
        ' " If you set your goals ridiculously high and it/\'s a failure, you will fail above everyone else\'s success. " '
    }

let authors = Object.keys(objOfQuote);
let author = authors[Math.floor(Math.random()*authors.length)];




let quote = objOfQuote[author];
document.getElementById('authorname').innerText = author;
document.getElementById('quote').innerText = quote
}
