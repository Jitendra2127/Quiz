
const questions=[
    {
        'que':"What is the full form of the HTML ?",
        'a': "Hello To My Language",
        'b': "Hey Text Markup Language",
        'c': "Hypertext Markeup Language",
        'd': "Hypertext Markup Language",
        'correct': 'd'
    },
    {
        'que':"What is the full form of the CSS ?",
        'a': "Casecading Style Sheets",
        'b': "Cascading Style Sheep",
        'c': "Cartoon Style Sheets",
        'd': "Casecading Super Sheets",
        'correct': 'a'
    },
    {
        'que':"What is the full form of the HTTP ?",
        'a': "Hypertext Transfer Product",
        'b': "Hypertext test protocol",
        'c': "Hey Transfer Protocol",
        'd': "Hypertext Transfer Protocol",
        'correct':'d'
    },
    {
        'que':"What is the full form of the JS ?",
        'a': "JavaScript",
        'b': "JavaSuper",
        'c': "JustScript",
        'd': "Jordenshoes",
        'correct':'a'
    }

]

let index=0;
let total=questions.length;
let right=0,wrong=0;

const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll(".options")
const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data=questions[index]
    // quesBox.innerText=data.que;
    quesBox.innerText=`Q${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}


const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

 const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
 }

function reset(){
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}


const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style=" width:35%;height:200px; display:flex;justify-content: 
    center;text-align:center;flex-direction: column;margin-left:150px">
    <span>Thank you for playing quiz</span>
    <h2>${right}/${total} are correct</h2>
    
    </div>
    `

}
loadQuestion()