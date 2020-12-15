console.log('hello')

let vader = document.querySelector('.badDad')
let yoda = document.querySelector('.jediGoblin')

// saber percentages selectors

let yodaSaber = document.querySelector('.beam-yoda')
let vaderSaber = document.querySelector('.beam-vader')
let vaderVote = 0
let yodaVote = 0


// EVERYTHING
let getVotes = function() {
    // when the page loads, display the current vote counts
    axios.get('http://circuslabs.net:3000/data/yoda').then(function (response) {
        console.log('here is the response data for key:', response);
        let yodaVoteSpan = document.querySelector('.yodaVotes')
        yodaVote = response.data.data.value
        yodaVoteSpan.innerHTML = yodaVote
        updateBars()
    })
    axios.get('http://circuslabs.net:3000/data/vader').then(function (response) {
        console.log('here is the response data for key:', response);
        let vaderVoteSpan = document.querySelector('.vaderVotes')
        vaderVote = response.data.data.value
        vaderVoteSpan.innerHTML = vaderVote
        updateBars()
       
    })
    

}

getVotes()
setInterval(getVotes, 2000)





// percentage bars

let updateBars= function(){
    vaderSaber.style.width = vaderVote/yodaVote *100 +'%'
    // if (vaderVote === yodaVote){
    //     vaderSaber.style.width = '50%'
    // }
    yodaSaber.style.width = yodaVote/vaderVote *100 + '%'
    // if (yodaVote === vaderVote){
    //     yodaSaber.style.width = '50%'
    // }
}


// clicks and votes
vader.addEventListener('click', function(){
    console.log('i am dad')
    vader.style.borderColor = "red"
    
    vader.style.borderRadius ="50px"
    vader.style.padding = "10px"
    vader.style.boxShadow = "-10px 20px 30px red"
    yoda.style.borderColor = ""
    yoda.style.borderRadius = ""
    yoda.style.padding = ""
    yoda.style.boxShadow = ""
    
    axios.post('http://circuslabs.net:3000/data/vader', {
        type: 'number',
        action: '++',
    }).then(getVotes)

   
})




yoda.addEventListener('click', function(){
    console.log('yoda i am')
    yoda.style.borderColor = "green"
    yoda.style.borderRadius ="50px"
    yoda.style.padding = "10px"
    yoda.style.boxShadow = "10px 20px 30px green"
    vader.style.borderColor = ""
    vader.style.borderColor = ""
    vader.style.borderRadius = ""
    vader.style.padding = ""
    vader.style.boxShadow = ""


    axios.post('http://circuslabs.net:3000/data/yoda', {
        type: 'number',
        action: '++',
    }).then(getVotes)
    
})







axios.post('http://circuslabs.net:3000/data/vader', {
        type: 'number',
        action: '=',
        value: 0
})
axios.post('http://circuslabs.net:3000/data/yoda', {
        type: 'number',
        action: '=',
        value: 0
})









