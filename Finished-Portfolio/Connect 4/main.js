//The game space
const map = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

var mydoc = document.getElementById("gamespace")
for(var j = 0; j < map.length; j++) {
    for(var i = 0; i < map[j].length; i++) {
        var newdiv = document.createElement("div");
        newdiv.className = "gridcell"
        newdiv.id = "cell_" + j + "_" + i;
        mydoc.appendChild(newdiv);
    }
    var cleardiv = document.createElement("div");
    cleardiv.className = "clear";
    mydoc.appendChild(cleardiv);
}

var currentPlayer = 1

function colSelCheck(event) {
    //console.log(event.target)
    if(event.target === document.getElementById("button0")) {
        colSel = 0
    }
    if(event.target === document.getElementById("button1")) {
        colSel = 1
    }
    if(event.target === document.getElementById("button2")) {
        colSel = 2
    }
    if(event.target === document.getElementById("button3")) {
        colSel = 3
    }
    if(event.target === document.getElementById("button4")) {
        colSel = 4
    }
    if(event.target === document.getElementById("button5")) {
        colSel = 5
    }
    if(event.target === document.getElementById("button6")) {
        colSel = 6
    }
    if(event.target === document.getElementById("skip")) {
        //console.log("skipping turn")
        var span = document.getElementById("span")
        if(currentPlayer === 1) {
            span.textContent = "blue"
            span.className = "blutext"
            currentPlayer = 2
            //console.log(currentPlayer)
            colSel = -1
            return
        } else {
            currentPlayer = 1
            span.textContent = "red"
            span.className = "redtext"
            //console.log(currentPlayer)
            colSel = -1
            return
        }
    }
    //console.log(colSel)
}

handleClick = function (event) {
    colSel = 0
    colSelCheck(event)
    //console.log(colSel)
    for(i = map.length - 1; i >= 0; i -= 1) {
        if(map[i][colSel] === 0) {
            map[i][colSel] = currentPlayer
            var changedCell = document.getElementById("cell_" + i + "_" + colSel)
            if(currentPlayer === 1) {
                changedCell.className = "gridcell red"
                currentPlayer = 2
                var span = document.getElementById("span")
                span.textContent = "blue"
                span.className = "blutext"
            } else {
                changedCell.className = "gridcell blue"
                currentPlayer = 1
                var span = document.getElementById("span")
                span.textContent = "red"
                span.className = "redtext"
            }
            winCheck()
            break;
        }
    }
}
var cells = document.querySelectorAll("button");

for (var i = 0; i < cells.length; i++) {
     cells[i].addEventListener('click', handleClick)
}

function winCheck() {
    //check horizontally
    for(i = map.length - 1;i >= 0; i -= 1) {
        var matches = 0
        var matchSel = 0
        for(j = 0; j < map[i].length; j++) {
            //console.log(i + ";" + j + ";" + matches + ";" + matchSel)
            if(matchSel === 0) {
                matchSel = map[i][j]
                if(map[i][j] > 0) {
                    matches++
                }
                continue;
            }
            if(map[i][j] === matchSel) {
                matches++
                if(matches === 4) {
                    var gamestat = document.getElementById("gamestat")
                    if(matchSel === 1) {
                        gamestat.innerHTML = "Player <span id=\"span\" class=\"redtext\">Red</span> won the game"
                        break;
                    }
                    if(matchSel === 2) {
                        gamestat.innerHTML = "Player <span id=\"span\" class=\"blutext\">Blue</span> won the game"
                        break;
                    }
                }
                
            }
            if(map[i][j] !== matchSel) {
                matches = 1
                matchSel = map[i][j]
                if(matchSel === 0) {
                    matches = 0
                }
                
            }
        }
    }
    //check vertically
    for(i = 0; i < map[0].length; i++) {
        var matches = 0
        var matchSel = 0
        for(j = map.length - 1; j >= 0; j -= 1) {
            //console.log(i + ";" + j + ";" + matches + ";" + matchSel)
            if(matchSel === 0) {
                //console.log(map[j][i])
                matchSel = map[j][i]
                if(map[j][i] > 0) {
                    matches++
                }
                continue;
            }
            if(map[j][i] === matchSel) {
                matches++
                //console.log(matches)
                if(matches === 4) {
                    var gamestat = document.getElementById("gamestat")
                    if(matchSel === 1) {
                        gamestat.innerHTML = "Player <span id=\"span\" class=\"redtext\">Red</span> won the game"
                        break;
                    }
                    if(matchSel === 2) {
                        gamestat.innerHTML = "Player <span id=\"span\" class=\"blutext\">Blue</span> won the game"
                        break;
                    }
                }
                
            }
            if(map[j][i] !== matchSel) {
                matches = 1
                matchSel = map[j][i]
                if(matchSel === 0) {
                    matches = 0
                }
                
            }
        }
    }
    //check diagonally
    for(i = map.length - 1; i >= 3; i -= 1) {   
        for(j = 0; j < map[i].length; j++) {
            console.log("Inside Diagonally")
            var matches = 0
            var matchSel = 0
            //if on left
            if(j < 3) {
                console.log("left running")
                var x = j
                var y = i
                for(k = 1; k <= 4;k++) {
                    if(matchSel === 0) {
                        matchSel = map[y][x]
                        if(map[y][x] > 0) {
                            matches++
                        }
                        x += 1
                        y -= 1
                        continue;
                    }
                    if(map[y][x] === matchSel) {
                        matches++
                        if(matches === 4) {
                            var gamestat = document.getElementById("gamestat")
                            if(matchSel === 1) {
                                gamestat.innerHTML = "Player <span id=\"span\" class=\"redtext\">Red</span> won the game"
                                break;
                            }
                            if(matchSel === 2) {
                                gamestat.innerHTML = "Player <span id=\"span\" class=\"blutext\">Blue</span> won the game"
                                break;
                            }
                        }
                        x += 1
                        y -= 1
                        
                    }
                    if(map[y][x] !== matchSel) {
                        matches = 1
                        matchSel = map[y][x]
                        if(matchSel === 0) {
                            matches = 0
                        }
                        x += 1
                        y -= 1
                    }
                }
            }
            //if on right
            if(j > map[i].length - 4) {
                console.log ("right running")
                var x = j
                var y = i
                for(k = 1; k <= 4;k++) {
                    if(matchSel === 0) {
                        matchSel = map[y][x]
                        if(map[y][x] > 0) {
                            matches++
                        }
                        x -= 1
                        y -= 1
                        continue;
                    }
                    if(map[y][x] === matchSel) {
                        matches++
                        if(matches === 4) {
                            var gamestat = document.getElementById("gamestat")
                            if(matchSel === 1) {
                                gamestat.innerHTML = "Player <span id=\"span\" class=\"redtext\">Red</span> won the game"
                                break;
                            }
                            if(matchSel === 2) {
                                gamestat.innerHTML = "Player <span id=\"span\" class=\"blutext\">Blue</span> won the game"
                                break;
                            }
                        }
                        x -= 1
                        y -= 1
                        
                    }
                    if(map[y][x] !== matchSel) {
                        matches = 1
                        matchSel = map[y][x]
                        if(matchSel === 0) {
                            matches = 0
                        }
                        x -= 1
                        y -= 1
                    }
                }
            }
            //if in middle
            if(j >= 3 && j <= map[i].length - 4) {
                console.log("middle",j);
                var x = j
                var y = i
                //combos on the right
                for(k = 1; k <= 4;k++) {
                    console.log("right check running")
                    if(matchSel === 0) {
                        matchSel = map[y][x]
                        if(map[y][x] > 0) {
                            matches++
                        }
                        x += 1
                        y -= 1
                        continue;
                    }
                    if(map[y][x] === matchSel) {
                        matches++
                        if(matches === 4) {
                            var gamestat = document.getElementById("gamestat")
                            if(matchSel === 1) {
                                gamestat.innerHTML = "Player <span id=\"span\" class=\"redtext\">Red</span> won the game"
                                break;
                            }
                            if(matchSel === 2) {
                                gamestat.innerHTML = "Player <span id=\"span\" class=\"blutext\">Blue</span> won the game"
                                break;
                            }
                        }
                        x += 1
                        y -= 1
                        
                    }
                    if(map[y][x] !== matchSel) {
                        matches = 1
                        matchSel = map[y][x]
                        if(matchSel === 0) {
                            matches = 0
                        }
                        x += 1
                        y -= 1
                    }
                }
                //combos on the left
                for(k = 1; k <= 4;k++) {
                    console.log("left check running")
                    if(matchSel === 0) {
                        console.log("matchSel 0")
                        matchSel = map[y][x]
                        if(map[y][x] > 0) {
                            matches++
                        }
                        
                        x -= 1
                        y -= 1
                        console.log(x)
                        console.log(y)
                        console.log(matches)
                        console.log(matchSel)
                        continue;
                    }
                    if(map[y][x] === matchSel) {
                        console.log("matchSel is map[y][x]")
                        matches++
                        if(matches === 4) {
                            var gamestat = document.getElementById("gamestat")
                            if(matchSel === 1) {
                                gamestat.innerHTML = "Player <span id=\"span\" class=\"redtext\">Red</span> won the game"
                                break;
                            }
                            if(matchSel === 2) {
                                gamestat.innerHTML = "Player <span id=\"span\" class=\"blutext\">Blue</span> won the game"
                                break;
                            }
                        }
                        x -= 1
                        y -= 1
                        console.log(x)
                        console.log(y)
                        console.log(matches)
                        console.log(matchSel)
                    }
                    if(map[y][x] !== matchSel) {
                        console.log("matchSel isn't map[y][x]")
                        matches = 1
                        matchSel = map[y][x]
                        if(matchSel === 0) {
                            matches = 0
                        }
                        x -= 1
                        y -= 1
                        console.log(x)
                        console.log(y)
                        console.log(matches)
                        console.log(matchSel)
                    }
                }

            }
        }
    }
}