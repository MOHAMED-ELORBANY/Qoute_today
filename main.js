/*
array of objects  
استخدمتها عشان اقدر امسك كل اقتباس ف شكل قيمه واقدر بعد كدا استدعيها

*/
//array of objects 
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },  
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];
//عملت فانكشن للمولد اللى هيجبلى كل مره اقتباس عشوائى من الكود 
function generator(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;   
}
