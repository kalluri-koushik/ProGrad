let queen = {
    direction: "S",
    poisition: {
        x: 0,
        y: 4
    },
}

var input = prompt("Please enter your name", "S2");
//imput is string in form of (N2 NE3 NW1)
function seperate(input) {

    inp = input.split(" ");
    for (i = 0; i < inp.length; i++) {
        if (inp[i].length < 3) {
            steps = inp[i].slice(-1);
            direction = inp[i].slice(0, 1);
            changedirection(direction, steps);
        } else {
            steps = inp[i].slice(-1);
            direction = inp[i].slice(0, 2);
            changedirection(direction, steps);
        }
    }
}

function posqueen(_qx, _qy) {
    if (qy == 0) {
        po = A + 'qx';
        console.log(po);
    }
    if (qy == 1) {
        po = A + 'qx';
        console.log(po);
    }
    if (qy == 2) {
        po = B + 'qx';
        console.log(po);
    }
    if (qy == 3) {
        po = C + 'qx';
        console.log(po);
    }
    if (qy == 4) {
        po = D + 'qx';
        console.log(po);
    }
    if (qy == 5) {
        po = E + 'qx';
        console.log(po);
    }
    if (qy == 6) {
        po = F + 'qx';
        console.log(po);
    }
    if (qy == 7) {
        po = G + 'qx';
        console.log(po);
    }
    console.log(po)
}

function changedirection(directon, steps) {
    switch (directon) {

        case N:
            temp = queen.poisition.x - steps;
            if (bordercheck(temp)) {
                queen.poisition.x = temp;
                qy = queen.poisition.y;
                qx = queen.poisition.x;

            } else {
                console.log("Illegal move");
            }

            break;
        case E:
            temp = queen.poisition.y + steps;
            if (bordercheck(temp)) {
                queen.poisition.y = temp;
                qy = queen.poisition.y;
                qx = queen.poisition.x;
            } else {
                console.log("Illegal move");
            }
            break;
        case W:
            temp = queen.poisition.y - steps;
            if (bordercheck(temp)) {
                queen.poisition.y = temp;
                qy = queen.poisition.y;
                qx = queen.poisition.x;
            } else {
                console.log("Illegal move");
            }
            break;
        case NE:
            temp = queen.poisition.x - steps;
            temp1 = queen.poisition.y + steps;
            if (bordercheck(temp)) {
                if (bordercheck(temp1)) {
                    queen.poisition.x = temp;
                    queen.poisition.y = temp1;
                    qy = queen.poisition.y;
                    qx = queen.poisition.x;
                }
            } else {
                console.log("Illegal move");
            }
            break;
        case NW:
            temp = queen.poisition.x - steps;
            temp1 = queen.poisition.y - steps;
            if (bordercheck(temp)) {
                if (bordercheck(temp1)) {
                    queen.poisition.x = temp;
                    queen.poisition.y = temp1;
                    qy = queen.poisition.y;
                    qx = queen.poisition.x;
                }
            } else {
                console.log("Illegal move");
            }
            break;
        case WS:
            temp = queen.poisition.x + steps;
            temp1 = queen.poisition.y - steps;
            if (bordercheck(temp)) {
                if (bordercheck(temp1)) {
                    queen.poisition.x = temp;
                    queen.poisition.y = temp1;
                    qy = queen.poisition.y;
                    qx = queen.poisition.x;
                }
            } else {
                console.log("Illegal move");
            }
            break;
        case SE:
            temp = queen.poisition.x + steps;
            temp1 = queen.poisition.y + steps;
            if (bordercheck(temp)) {
                if (bordercheck(temp1)) {
                    queen.poisition.x = temp;
                    queen.poisition.y = temp1;
                    qy = queen.poisition.y;
                    qx = queen.poisition.x;
                }
            } else {
                console.log("Illegal move");
            }
            break;
        case S:
            temp = temp = queen.poisition.x + steps;
            if (bordercheck(temp)) {
                queen.poisition.x = temp;
                qy = queen.poisition.y;
                qx = queen.poisition.x;
            } else {
                console.log("Illegal move");
            }
    }
    posqueen(qx, qy);
}

function bordercheck(pos) {
    if (pos >= 0 || pos <= 7) {
        return true;
    } else {
        return false;
    }
}