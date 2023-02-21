let guest_points = 0 

function first_guest(){

    guest_points +=1
    document.getElementById("number_guest").innerHTML = guest_points 
}


function second_guest(){
    guest_points +=2
    document.getElementById("number_guest").innerHTML = guest_points 
}

function third_guest(){
    guest_points +=3
    document.getElementById("number_guest").innerHTML = guest_points 
}

//home points 

let home_points = 0 

function first_home(){

    home_points +=1
    document.getElementById("number_home").innerHTML = home_points 
}


function second_home(){
    home_points +=2
    document.getElementById("number_home").innerHTML = home_points 
}

function third_home(){
    home_points +=3
    document.getElementById("number_home").innerHTML = home_points 
}