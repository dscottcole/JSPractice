let first2 = [
    ["The first Thanksgiving was celebrated by Americans and what other group of people?", ["A) Samoans", "B) Pilgrims", "C) Incas", "D) Egyptians"] , "B"],
    ["How many continents are there?", ["A) 4", "B) 10", "C) 7", "D) too many to count"], "C" ], 
    ["What is the force that cause objects to fall?", ["A) Gravity", "B) Wind", "C) The will of the gods", "D) Magic"], "A"]
]

let second2 = [
    ["Which war was fought between the north and the south regions of the United States?",["A) American Revolution", "B) Civil War", "C) World War", "D) Avengers Infinity War"], "B"], 
    ["In what country is the famous Taj Mahal located?", ["A) Mexico", "B) China", "C) India", "D) Russia"], "C"],
    ["What is H2O also known as?", ["A) Elixir", "B) Water","C) Oil", "D) Salt"], "B"]
]

let questions = [first2, second2]

let askQuestion = () => {

    let name = prompt("What is your name?")

    let grade = 0

    while (grade < 2) {
    
        let randomIndex = Math.floor(Math.random() * 3)
    
        let answer = prompt(
        `${questions[grade][randomIndex][0]}
    
        ${questions[grade][randomIndex][1][0]}
        ${questions[grade][randomIndex][1][1]}
        ${questions[grade][randomIndex][1][2]}
        ${questions[grade][randomIndex][1][3]}`)
    
        if (answer.toUpperCase() !== questions[grade][randomIndex][2]) {
            alert("You're an idiot")
            break
        } else {
            alert(`You're right, ${name}. You are smarter than a ${grade + 1} grader!`)
            grade = grade + 1
            
            if (grade > 1) {
                alert(`Congratulations, ${name}!!! You have won!`)
            }
        }
    }
}

askQuestion()