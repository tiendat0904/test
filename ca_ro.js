let game = document.getElementById("caro");
let data = "<table>";
let size= 3 ;
let board=[];
let check=true;

for(let i = 0; i<size ; i++){
    data+="<tr>";
    board[i]= new Array(size);
    for(let j=0 ; j<size ; j++){
        data+="<td>";
        data += "<input type='button' id='square" + i + "-" + j + "' onclick='setValue(" + i + "," + j + ")' />";
        data+="</td>";
        board[i].push(".");
    }
    data+="</tr>";
    
}
data+="</table>";
game.innerHTML=data;

function setValue(i,j){
    let id_input = document.getElementById('square' + i + "-" + j+ "");
    if(check == true && id_input.value!="O" && id_input.value!="X"){
        id_input.value="X";
        board[i][j]="X";
        check=false;
        if(kiemtradoc(i,j,"X") == true){
            alert("X đã thắng");
        }else if(kiemtrangang(i,j,"X") == true){
            alert("X đã thắng");
        }else if(kiemtracheo1(i,j,"X")==true){
            alert("X đã thắng");
        }else if(kiemtracheo2(i,j,"X")==true){
            alert("X đã thắng");

    }
}

    if(check == false && id_input.value!="O" && id_input.value!="X"){
        id_input.value="O";
        board[i][j]="O";
        check=true;
        if(kiemtradoc(i,j,"O") == true){
            alert("O đã thắng");
        }else if(kiemtrangang(i,j,"O") == true){
            alert("O đã thắng");
        }else if(kiemtracheo1(i,j,"O")==true){
            alert("O đã thắng");
        }else if(kiemtracheo2(i,j,"O")==true){
            alert("O đã thắng");
        }
    }
}

function kiemtradoc(i,j,value){
    var y1 = i;
    var y2 = i;
    var count = 1;
    while (y1 - 1 >= 0 &&   board[y1 - 1][j] == value) {
        count++;
        y1--;
    }
    while (y2 + 1 < size && board[y2 + 1][j] == value) {
        count++;
        y2++;
    }
    if (count == 3) {
        return true;
    }
    return false;
}

function kiemtrangang(i,j,value){
    var x1=j;
    var x2=j;
    var count=1;

    while(x1-1 >=0 && board[i][x1-1] == value){
        count++;
        x1--;
    }

    while(x2+1 <= size && board[i][x2+1] == value){
        count++;
        x2++;
    }

    if(count==3){
        return true;
    }
    return false;
}


function kiemtracheo1(i,j,value){
    var x1=i;
    var x2=i;
    var y1=j;
    var y2=j;

    var count=1;

    while(x1-1 >=0 && y1-1>=0 && board[x1-1][y1-1] == value){
        count++;
        x1--;
        y1--;
    }
    while(x2+1<=size && y2+1<size && board[x2+1][y2+1]== value){
        count++;
        x2++;
        y2++;
    }

    if(count==3){
        return true;
    }
    return false;
}

function kiemtracheo2(i,j,value){
    var x1=i;
    var x2=i;
    var y1=j;
    var y2=j;

    var count=1;

    while(x1-1>=0 && y1+1<size && board[x1-1][y1+1]== value){
        count++;
        x1--;
        y1++;
    }

    while(y2-1>=0 && x2+1<=size && board[y2-1][x2+1]==value){
        count++;
        y2--;
        x2++;
    }
    if(count == 3){
        return true;
    }
    return false;
}
