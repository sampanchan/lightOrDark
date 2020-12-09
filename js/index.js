console.log('hello')

let vader = document.querySelector('.badDad')
let yoda = document.querySelector('.jediGoblin')




// http://circuslabs.net:3000/data/starwars4
// http://circuslabs.net:3000/data/starwars7



let getVotes = function() {
    // when the page loads, display the current vote counts
    axios.get('http://circuslabs.net:3000/data/yoda').then(function (response) {
        console.log('here is the response data for key:', response);
        let yodaVoteSpan = document.querySelector('.yodaVotes')
        yodaVoteSpan.innerHTML = response.data.data.value
    })
    axios.get('http://circuslabs.net:3000/data/vader').then(function (response) {
        console.log('here is the response data for key:', response);
        let vaderVoteSpan = document.querySelector('.vaderVotes')
        vaderVoteSpan.innerHTML = response.data.data.value
    })
}
getVotes()
setInterval(getVotes, 2000)


vader.addEventListener('click', function(){
    console.log('i am dad')
    vader.style.borderColor = "red"
    yoda.style.borderColor = ""
    
    
    axios.post('http://circuslabs.net:3000/data/vader', {
        type: 'number',
        action: '++',
    }).then(getVotes)
    

    
})



yoda.addEventListener('click', function(){
    console.log('yoda i am')
    yoda.style.borderColor = "green"
    vader.style.borderColor = ""



    // setTimeout(function() {
    //     yoda.style.borderColor = ""
    // }, 500)

    
    axios.post('http://circuslabs.net:3000/data/yoda', {
        type: 'number',
        action: '++',
    }).then(getVotes)
    
})
// put in zeros for both values
// axios.post('http://circuslabs.net:3000/data/yoda', {
//   type: 'number',
//   action: '=',
//   value: 13
// })
// axios.post('http://circuslabs.net:3000/data/vader', {
//   type: 'number',
//   action: '=',
//   value: 17
// })



