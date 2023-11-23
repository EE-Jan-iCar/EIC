let dice_num = 0;
let dices = [7,7,7,7,7];
let dices2 = [0,0,0,0,0];
let counter = 0;
let t_counter = 1;

let flag_ace = true;
let flag_ace2 = false;
let flag_duce = true;
let flag_duce2 = false;
let flag_tray = true;
let flag_tray2 = false;
let flag_four = true;
let flag_four2 = false;
let flag_five = true;
let flag_five2 = false;
let flag_six = true;
let flag_six2 = false;
let flag_choice = true;
let flag_choice2 = false;
let flag_fourdice = true;
let flag_fourdice2 = false;
let flag_fullhouse = true;
let flag_fullhouse2 = false;
let flag_sst = true;
let flag_sst2 = false;
let flag_bst = true;
let flag_bst2 = false;
let flag_yacht = true;
let flag_yacht2 = false;
let flag_bonus = true;

let total_value = 0;
let ace_value = 0;
let duce_value = 0;
let tray_value = 0;
let four_value = 0;
let five_value = 0;
let six_value = 0;
let choice_value = 0;
let fourdice_value = 0;
let fullhouse_value = 0;
let sst_value = 0;
let bst_value = 0;
let yacht_value = 0;
let bonus = 0;

function disab(){
    document.getElementById("roll_ace").disabled = true;
    document.getElementById("roll_duce").disabled = true;
    document.getElementById("roll_tray").disabled = true;
    document.getElementById("roll_four").disabled = true;
    document.getElementById("roll_five").disabled = true;
    document.getElementById("roll_six").disabled = true;
    document.getElementById("roll_choice").disabled = true;  
    document.getElementById("roll_fourdice").disabled = true;  
    document.getElementById("roll_fullhouse").disabled = true;  
    document.getElementById("roll_sst").disabled = true;  
    document.getElementById("roll_bst").disabled = true;  
    document.getElementById("roll_yacht").disabled = true;    
}

function reset(){
    disab();
    dices = [7,7,7,7,7];
    dices2 = [0,0,0,0,0];
    document.getElementById("left_button").innerHTML = "";
    document.getElementById("right_button").innerHTML = "サイコロを振る";
    document.getElementById("right_button").setAttribute('onclick', 'aaa()');
    document.getElementById("left_button").setAttribute('onclick', 'bbb()');
    dice_num = 0;
    counter = 0;
    document.getElementById("left_button").disabled = true;

    if(flag_ace2){
        flag_ace = false;
        bonus = ace_value + bonus;
        total_value = ace_value + total_value;
        ace_value = 0;
    }

    if(flag_duce2){
        flag_duce = false;
        bonus =  duce_value + bonus;
        total_value = duce_value + total_value;
        duce_value = 0;
    }

    if(flag_tray2){
        flag_tray = false;
        bonus = tray_value + bonus;
        total_value = tray_value + total_value;
        tray_value = 0;
    }

    if(flag_four2){
        flag_four = false;
        bonus = four_value + bonus;
        total_value = four_value + total_value;
        four_value = 0;
    }

    if(flag_five2){
        flag_five = false;
        bonus = five_value + bonus;
        total_value = five_value + total_value;
        five_value = 0;
    }

    if(flag_six2){
        flag_six = false;
        bonus = six_value + bonus;
        total_value = six_value + total_value;
        six_value = 0;
    }

    if(flag_choice2){
        flag_choice = false;
        total_value = choice_value + total_value;
        choice_value = 0;
    }

    if(flag_fourdice2){
        flag_fourdice = false;
        total_value = fourdice_value + total_value;
        fourdice_value = 0;
    }

    if(flag_fullhouse2){
        flag_fullhouse = false;
        total_value = fullhouse_value + total_value;
        fullhouse_value = 0;
    }

    if(flag_sst2){
        flag_sst = false;
        total_value = sst_value + total_value;
        sst_value = 0;
    }

    if(flag_bst2){
        flag_bst = false;
        total_value = bst_value + total_value;
        bst_value = 0;
    }

    if(flag_yacht2){
        flag_yacht = false;
        total_value = yacht_value + total_value;
        yacht_value = 0;
    }

    for(let n = 1; n<6; n++){
        for (let i = 1; i < 7; i++){
            let j = "dice" + i;
            document.getElementById('dice_' +n).classList.remove(j);
            document.getElementById('dice__' +n).classList.remove(j);
        }
    }
    
    document.getElementById("bonus").innerHTML = bonus +"/63";
    if(bonus>62&&flag_bonus){
        total_value = 35 + total_value;
        flag_bonus = false;
        document.getElementById("p35").innerHTML = "+35";
    }
    document.getElementById("totalval").innerHTML = total_value;

    t_counter = 1 + t_counter;
    if(t_counter<13){
        document.getElementById("turncount").innerHTML = t_counter +"/12";
    }
    if(t_counter==13){
        document.getElementById("right_button").innerHTML = "リセット";
        document.getElementById("right_button").setAttribute('onclick', 'allreset()');
    }
}

function allreset(){
    disab();
    dices = [7,7,7,7,7];
    dices2 = [0,0,0,0,0];
    document.getElementById("left_button").innerHTML = "";
    document.getElementById("right_button").innerHTML = "サイコロを振る";
    document.getElementById("right_button").setAttribute('onclick', 'aaa()');
    document.getElementById("left_button").setAttribute('onclick', 'bbb()');
    dice_num = 0;
    counter = 0;
    document.getElementById("left_button").disabled = true;
    flag_ace = true;
    flag_ace2 = false;
    flag_duce = true;
    flag_duce2 = false;
    flag_tray = true;
    flag_tray2 = false;
    flag_four = true;
    flag_four2 = false;
    flag_five = true;
    flag_five2 = false;
    flag_six = true;
    flag_six2 = false;
    flag_choice = true;
    flag_choice2 = false;
    flag_fourdice = true;
    flag_fourdice2 = false;
    flag_fullhouse = true;
    flag_fullhouse2 = false;
    flag_sst = true;
    flag_sst2 = false;
    flag_bst = true;
    flag_bst2 = false;
    flag_yacht = true;
    flag_yacht2 = false;
    flag_bonus = true;

    total_value = 0;
    ace_value = 0;
    duce_value = 0;
    tray_value = 0;
    four_value = 0;
    five_value = 0;
    six_value = 0;
    choice_value = 0;
    fourdice_value = 0;
    fullhouse_value = 0;
    sst_value = 0;
    bst_value = 0;
    yacht_value = 0;
    bonus = 0;
    t_counter = 1;
    document.getElementById("totalval").innerHTML = total_value;
    document.getElementById("bonus").innerHTML = bonus +"/63";
    document.getElementById("turncount").innerHTML = t_counter +"/12";
    document.getElementById("roll_ace").innerHTML = ace_value;
    document.getElementById("roll_duce").innerHTML = duce_value;
    document.getElementById("roll_tray").innerHTML = tray_value;
    document.getElementById("roll_four").innerHTML = four_value;
    document.getElementById("roll_five").innerHTML = five_value;
    document.getElementById("roll_six").innerHTML = six_value;
    document.getElementById("roll_choice").innerHTML = choice_value;
    document.getElementById("roll_fourdice").innerHTML = fourdice_value;
    document.getElementById("roll_fullhouse").innerHTML = fullhouse_value;
    document.getElementById("roll_sst").innerHTML = sst_value;
    document.getElementById("roll_bst").innerHTML = bst_value;
    document.getElementById("roll_yacht").innerHTML = yacht_value;
    reset2();
}

function remove_dice(n){
    for (let i = 1; i < 7; i++){
        let j = "dice" + i;
        document.getElementById('dice_' +n).classList.remove(j);
    }
}
function define_dice(n){
    dice_num = Math.floor( Math.random() * 6) +1;
    remove_dice(n);
    let imagenum = "dice" + dice_num;
    dices[n-1] = dice_num;
    document.getElementById('dice_' +n).classList.add(imagenum);
    document.getElementById('dice_' +n).style.display = "block";
    document.getElementById('dice_' +n).disabled = false;
    //alert(dice_num);
    //alert(imagenum);
}

function vanish_dish(n){
    if(n!=0){
        for (let i = 1; i < 7; i++){
            let j = "dice" + i;
            document.getElementById('dice_' +n).classList.remove(j);
        }
        document.getElementById('dice_' +n).disabled = true;
        dice_num = dices[n-1];
        dices2[n-1] = dice_num;
        dices[n-1] = 0;

        if(dices2[n-1] !== 0){
            for (let i = 1; i < 7; i++){
                let j = "dice" + i;
                document.getElementById('dice__' +n).classList.remove(j);
            }
        }
    
        //alert(dice_num);
        let imagenum = "dice" + dice_num;
        document.getElementById('dice__' +n).classList.add(imagenum);
        document.getElementById('dice__' +n).style.display = "block";
        document.getElementById('dice__' +n).disabled = false;
    }

    let total = dices2[0]*dices2[1]*dices2[2]*dices2[3]*dices2[4];
        if(total!==0){
            document.getElementById("left_button").disabled = false;
        }
}

function vanish_dish2(n){
    if(n!=0){
        for (let i = 1; i < 7; i++){
            let j = "dice" + i;
            document.getElementById('dice__' +n).classList.remove(j);
        }
        document.getElementById('dice__' +n).disabled = true;
        dice_num = dices2[n-1];
        dices[n-1] = dice_num;
        //alert(dices[n-1]);
        dices2[n-1] = 0;
    
        if(dices[n-1] !== 0){
            for (let i = 1; i < 7; i++){
                let j = "dice" + i;
                document.getElementById('dice_' +n).classList.remove(j);
            }
        }
        
        //alert(dice_num);
        let imagenum = "dice" + dice_num;
        document.getElementById('dice_' +n).classList.add(imagenum);
        document.getElementById('dice_' +n).style.display = "block";
        document.getElementById('dice_' +n).disabled = false;
        
        let total = dices2[0]*dices2[1]*dices2[2]*dices2[3]*dices2[4];
        if(total==0){
            document.getElementById("left_button").disabled = true;
        }
    }
}

function aaa(){
    counter = counter + 1;
    for (let i = 0; i < 5; i++){
        if (dices[i] !== 0) {
            dices.push(define_dice(i+1));
        }
        
    }
    if(counter==3){
        document.getElementById("right_button").innerHTML = "";
        document.getElementById("right_button").disabled = true;
    }
    else{
        document.getElementById("left_button").innerHTML = "役を決める";
        document.getElementById("right_button").innerHTML = "ふりなおす";
    }
    
    if(flag_ace){
        c_ace();
    }
    if(flag_duce){
        c_duce();
    }
    if(flag_tray){
        c_tray();
    }
    if(flag_four){
        c_four();
    }
    if(flag_five){
        c_five();
    }
    if(flag_six){
        c_six();
    }
    if(flag_choice){
        c_choice();
    }
    if(flag_fourdice){
        c_fourdice();
    }
    if(flag_fullhouse){
        c_fullhouse();
    }
    if(flag_sst){
        c_sst();
    }
    if(flag_bst){
        c_bst();
    }
    if(flag_yacht){
        c_yacht();
    }
}

function quit(){
    for(let i=1; i<6; i++){
        document.getElementById('dice__' +i).disabled = false;
    }
    if(counter!==3){
        document.getElementById("right_button").disabled = false;
    }
    
    document.getElementById("left_button").innerHTML = "役を決める";
    document.getElementById("right_button").innerHTML = "ふりなおす";
    document.getElementById("left_button").setAttribute('onclick', 'bbb()');
    document.getElementById("right_button").setAttribute('onclick', 'aaa()');
    flag_ace2 = false;
    flag_duce2 = false;
    flag_tray2 = false;
    flag_four2 = false;
    flag_five2 = false;
    flag_six2 = false;
    flag_choice2 = false;
    flag_fourdice2 = false;
    flag_fullhouse2 = false;
    flag_sst2 = false;
    flag_bst2 = false;
    flag_yacht2 = false;

    if(flag_ace){
        document.getElementById("roll_ace").disabled = true;
    }

    if(flag_duce){
        document.getElementById("roll_duce").disabled = true;
    }

    if(flag_tray){
        document.getElementById("roll_tray").disabled = true;
    }

    if(flag_four){
        document.getElementById("roll_four").disabled = true;
    }

    if(flag_five){
        document.getElementById("roll_five").disabled = true;
    }

    if(flag_six){
        document.getElementById("roll_six").disabled = true;
    }

    if(flag_choice){
        document.getElementById("roll_choice").disabled = true;
    }

    if(flag_fourdice){
        document.getElementById("roll_fourdice").disabled = true;
    }

    if(flag_fullhouse){
        document.getElementById("roll_fullhouse").disabled = true;
    }

    if(flag_sst){
        document.getElementById("roll_sst").disabled = true;
    }

    if(flag_bst){
        document.getElementById("roll_bst").disabled = true;
    }

    if(flag_yacht){
        document.getElementById("roll_yacht").disabled = true;
    }
}

function bbb(){
    for(let i=1; i<6; i++){
        document.getElementById('dice__' +i).disabled = true;
    }
    if(flag_ace){
        document.getElementById("roll_ace").disabled = false;
    }

    if(flag_duce){
        document.getElementById("roll_duce").disabled = false;
    }

    if(flag_tray){
        document.getElementById("roll_tray").disabled = false;
    }

    if(flag_four){
        document.getElementById("roll_four").disabled = false;
    }

    if(flag_five){
        document.getElementById("roll_five").disabled = false;
    }

    if(flag_six){
        document.getElementById("roll_six").disabled = false;
    }

    if(flag_choice){
        document.getElementById("roll_choice").disabled = false;
    }

    if(flag_fourdice){
        document.getElementById("roll_fourdice").disabled = false;
    }

    if(flag_fullhouse){
        document.getElementById("roll_fullhouse").disabled = false;
    }

    if(flag_sst){
        document.getElementById("roll_sst").disabled = false;
    }

    if(flag_bst){
        document.getElementById("roll_bst").disabled = false;
    }

    if(flag_yacht){
        document.getElementById("roll_yacht").disabled = false;
    }

    document.getElementById("right_button").disabled = true;
    document.getElementById("left_button").innerHTML = "やめる";
    document.getElementById("right_button").innerHTML = "決定";
    document.getElementById("left_button").setAttribute('onclick', 'quit()');
}

function select_roll(){
    if(counter==3){
        document.getElementById("left_button").disabled = true;
    }
    document.getElementById("left_button").setAttribute('onclick', 'quit()');
    document.getElementById("right_button").disabled = false;
    document.getElementById("right_button").setAttribute('onclick', 'reset()');
}

function reset2(){
    if(flag_ace){
        flag_ace2 = false;
        document.getElementById("roll_ace").disabled = false;
        document.getElementById("roll_ace").classList.remove("yellow");
    }
    if(flag_duce){
        flag_duce2 = false;
        document.getElementById("roll_duce").disabled = false;
        document.getElementById("roll_duce").classList.remove("yellow");
    }
    if(flag_tray){
        flag_tray2 = false;
        document.getElementById("roll_tray").disabled = false;
        document.getElementById("roll_tray").classList.remove("yellow");
    }
    if(flag_four){
        flag_four2 = false;
        document.getElementById("roll_four").disabled = false;
        document.getElementById("roll_four").classList.remove("yellow");
    }
    if(flag_five){
        flag_five2 = false;
        document.getElementById("roll_five").disabled = false;
        document.getElementById("roll_five").classList.remove("yellow");
    }
    if(flag_six){
        flag_six2 = false;
        document.getElementById("roll_six").disabled = false;
        document.getElementById("roll_six").classList.remove("yellow");
    }
    if(flag_choice){
        flag_choice2 = false;
        document.getElementById("roll_choice").disabled = false;
        document.getElementById("roll_choice").classList.remove("yellow");
    }
    if(flag_fourdice){
        flag_fourdice2 = false;
        document.getElementById("roll_fourdice").disabled = false;
        document.getElementById("roll_fourdice").classList.remove("yellow");
    }
    if(flag_fullhouse){
        flag_fullhouse2 = false;
        document.getElementById("roll_fullhouse").disabled = false;
        document.getElementById("roll_fullhouse").classList.remove("yellow");
    }
    if(flag_sst){
        flag_sst2 = false;
        document.getElementById("roll_sst").disabled = false;
        document.getElementById("roll_sst").classList.remove("yellow");
    }
    if(flag_bst){
        flag_bst2 = false;
        document.getElementById("roll_bst").disabled = false;
        document.getElementById("roll_bst").classList.remove("yellow");
    }
    if(flag_yacht){
        flag_yacht2 = false;
        document.getElementById("roll_yacht").disabled = false;
        document.getElementById("roll_yacht").classList.remove("yellow");
    }
}

//calc

function c_ace(){
    ace_value = 0;
    for(i=0;i<5;i++){
        if(dices2[i]==1){
            ace_value = ace_value +1;
        }
    }
    for(i=0;i<5;i++){
        if(dices[i]==1){
            ace_value = ace_value +1;
        }
    }
    document.getElementById("roll_ace").innerHTML = ace_value;
}

function c_duce(){
    duce_value = 0;
    for(i=0;i<5;i++){
        if(dices2[i]==2){
            duce_value = duce_value +2;
        }
    }
    for(i=0;i<5;i++){
        if(dices[i]==2){
            duce_value = duce_value +2;
        }
    }
    document.getElementById("roll_duce").innerHTML = duce_value;
}

function c_tray(){
    tray_value = 0;
    for(i=0;i<5;i++){
        if(dices2[i]==3){
            tray_value = tray_value +3;
        }
    }
    for(i=0;i<5;i++){
        if(dices[i]==3){
            tray_value = tray_value +3;
        }
    }
    document.getElementById("roll_tray").innerHTML = tray_value;
}

function c_four(){
    four_value = 0;
    for(i=0;i<5;i++){
        if(dices2[i]==4){
            four_value = four_value +4;
        }
    }
    for(i=0;i<5;i++){
        if(dices[i]==4){
            four_value = four_value +4;
        }
    }
    document.getElementById("roll_four").innerHTML = four_value;
}

function c_five(){
    five_value = 0;
    for(i=0;i<5;i++){
        if(dices2[i]==5){
            five_value = five_value +5;
        }
    }
    for(i=0;i<5;i++){
        if(dices[i]==5){
            five_value = five_value +5;
        }
    }
    document.getElementById("roll_five").innerHTML = five_value;
}

function c_six(){
    six_value = 0;
    for(i=0;i<5;i++){
        if(dices2[i]==6){
            six_value = six_value +6;
        }
    }
    for(i=0;i<5;i++){
        if(dices[i]==6){
            six_value = six_value +6;
        }
    }
    document.getElementById("roll_six").innerHTML = six_value;
}

function c_choice(){
    choice_value = 0;
    for(i=0;i<5;i++){
        choice_value = dices2[i] + dices[i] + choice_value;
    }
    document.getElementById("roll_choice").innerHTML = choice_value;
}

function c_fourdice(){
    fourdice_value = 0;
    dices_marged = dices.concat(dices2);
    let nom1 = dices_marged.filter(function(x){return x===1}).length
    let nom2 = dices_marged.filter(function(x){return x===2}).length
    let nom3 = dices_marged.filter(function(x){return x===3}).length
    let nom4 = dices_marged.filter(function(x){return x===4}).length
    let nom5 = dices_marged.filter(function(x){return x===5}).length
    let nom6 = dices_marged.filter(function(x){return x===6}).length
    if(nom1>=4){
        for(i=0;i<5;i++){
            fourdice_value = dices2[i] + dices[i] + fourdice_value;
        }
    }
    if(nom2>=4){
        for(i=0;i<5;i++){
            fourdice_value = dices2[i] + dices[i] + fourdice_value;
        }
    }
    if(nom3>=4){
        for(i=0;i<5;i++){
            fourdice_value = dices2[i] + dices[i] + fourdice_value;
        }
    }
    if(nom4>=4){
        for(i=0;i<5;i++){
            fourdice_value = dices2[i] + dices[i] + fourdice_value;
        }
    }
    if(nom5>=4){
        for(i=0;i<5;i++){
            fourdice_value = dices2[i] + dices[i] + fourdice_value;
        }
    }
    if(nom6>=4){
        for(i=0;i<5;i++){
            fourdice_value = dices2[i] + dices[i] + fourdice_value;
        }
    }
    document.getElementById("roll_fourdice").innerHTML = fourdice_value;
}

function c_fullhouse(){
    fullhouse_value = 0;
    dices_marged = dices.concat(dices2);
    let nom1 = dices_marged.filter(function(x){return x===1}).length
    let nom2 = dices_marged.filter(function(x){return x===2}).length
    let nom3 = dices_marged.filter(function(x){return x===3}).length
    let nom4 = dices_marged.filter(function(x){return x===4}).length
    let nom5 = dices_marged.filter(function(x){return x===5}).length
    let nom6 = dices_marged.filter(function(x){return x===6}).length
    if(nom1==3||nom1==5){
        if(nom1==5){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
        if(nom2==2||nom3==2||nom4==2||nom5==2||nom6==2){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
    }
    if(nom2==3||nom2==5){
        if(nom2==5){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
        if(nom1==2||nom3==2||nom4==2||nom5==2||nom6==2){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
    }
    if(nom3==3||nom3==5){
        if(nom3==5){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
        if(nom1==2||nom2==2||nom4==2||nom5==2||nom6==2){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
    }    
    if(nom4==3||nom4==5){
        if(nom4==5){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
        if(nom2==2||nom3==2||nom1==2||nom5==2||nom6==2){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
    }
    if(nom5==3||nom5==5){
        if(nom5==5){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
        if(nom2==2||nom3==2||nom4==2||nom1==2||nom6==2){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
    }
    if(nom6==3||nom6==5){
        if(nom6==5){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
        if(nom2==2||nom3==2||nom4==2||nom5==2||nom1==2){
            for(i=0;i<5;i++){
                fullhouse_value = dices2[i] + dices[i] + fullhouse_value;
            }
        }
    }
    document.getElementById("roll_fullhouse").innerHTML = fullhouse_value;
}

function c_sst(){
    sst_value = 0;
    dices_marged = dices.concat(dices2);
    let nom1 = dices_marged.filter(function(x){return x===1}).length
    let nom2 = dices_marged.filter(function(x){return x===2}).length
    let nom3 = dices_marged.filter(function(x){return x===3}).length
    let nom4 = dices_marged.filter(function(x){return x===4}).length
    let nom5 = dices_marged.filter(function(x){return x===5}).length
    let nom6 = dices_marged.filter(function(x){return x===6}).length
    if(nom1>=1&&nom2>=1&&nom3>=1&&nom4>=1){
        sst_value = 15;
    }
    if(nom5>=1&&nom2>=1&&nom3>=1&&nom4>=1){
        sst_value = 15;
    }
    if(nom5>=1&&nom6>=1&&nom3>=1&&nom4>=1){
        sst_value = 15;
    }
    document.getElementById("roll_sst").innerHTML = sst_value;
}

function c_bst(){
    bst_value = 0;
    dices_marged = dices.concat(dices2);
    let nom1 = dices_marged.filter(function(x){return x===1}).length
    let nom2 = dices_marged.filter(function(x){return x===2}).length
    let nom3 = dices_marged.filter(function(x){return x===3}).length
    let nom4 = dices_marged.filter(function(x){return x===4}).length
    let nom5 = dices_marged.filter(function(x){return x===5}).length
    let nom6 = dices_marged.filter(function(x){return x===6}).length
    if(nom1==1&&nom2==1&&nom3==1&&nom4==1&&nom5==1){
        bst_value = 30;
    }
    if(nom6==1&&nom2==1&&nom3==1&&nom4==1&&nom5==1){
        bst_value = 30;
    }
    document.getElementById("roll_bst").innerHTML = bst_value;
}


function c_yacht(){
    yacht_value = 0;
    dices_marged = dices.concat(dices2);
    let nom1 = dices_marged.filter(function(x){return x===1}).length
    let nom2 = dices_marged.filter(function(x){return x===2}).length
    let nom3 = dices_marged.filter(function(x){return x===3}).length
    let nom4 = dices_marged.filter(function(x){return x===4}).length
    let nom5 = dices_marged.filter(function(x){return x===5}).length
    let nom6 = dices_marged.filter(function(x){return x===6}).length
    if(nom1==5||nom2==5||nom3==5||nom4==5|nom5==5||nom6==5){
        yacht_value = 50;
    }
    document.getElementById("roll_yacht").innerHTML = yacht_value;
}

//rolls

function Ace(){
    if(flag_ace){
        select_roll();
        reset2()
        document.getElementById("roll_ace").disabled = true;
       document.getElementById("roll_ace").classList.add("yellow");
        flag_ace2 = true;
    }
}

function Duce(){
    if(flag_duce){
        select_roll();
        reset2()
        document.getElementById("roll_duce").disabled = true;
       document.getElementById("roll_duce").classList.add("yellow");
        flag_duce2 = true;
    }
}

function Tray(){
    if(flag_tray){
        select_roll();
        reset2()
        document.getElementById("roll_tray").disabled = true;
        document.getElementById("roll_tray").classList.add("yellow");
        flag_tray2 = true;
    }
}

function Four(){
    if(flag_four){
        select_roll();
        reset2()
        document.getElementById("roll_four").disabled = true;
        document.getElementById("roll_four").classList.add("yellow");
        flag_four2 = true;
    }
}

function Five(){
    if(flag_five){
        select_roll();
        reset2()
        document.getElementById("roll_five").disabled = true;
        document.getElementById("roll_five").classList.add("yellow");
        flag_five2 = true;
    }
}

function Six(){
    if(flag_six){
        select_roll();
        reset2()
        document.getElementById("roll_six").disabled = true;
        document.getElementById("roll_six").classList.add("yellow");
        flag_six2 = true;
    }
}

function Choice(){
    if(flag_choice){
        select_roll();
        reset2()
        document.getElementById("roll_choice").disabled = true;
        document.getElementById("roll_choice").classList.add("yellow");
        flag_choice2 = true;
    }
}

function Fourdice(){
    if(flag_fourdice){
        select_roll();
        reset2()
        document.getElementById("roll_fourdice").disabled = true;
        document.getElementById("roll_fourdice").classList.add("yellow");
        flag_fourdice2 = true;
    }
}

function Fullhouse(){
    if(flag_fullhouse){
        select_roll();
        reset2()
        document.getElementById("roll_fullhouse").disabled = true;
        document.getElementById("roll_fullhouse").classList.add("yellow");
        flag_fullhouse2 = true;
    }
}

function Sst(){
    if(flag_sst){
        select_roll();
        reset2()
        document.getElementById("roll_sst").disabled = true;
        document.getElementById("roll_sst").classList.add("yellow");
        flag_sst2 = true;
    }
}

function Bst(){
    if(flag_bst){
        select_roll();
        reset2()
        document.getElementById("roll_bst").disabled = true;
        document.getElementById("roll_bst").classList.add("yellow");
        flag_bst2 = true;
    }
}

function Yacht(){
    if(flag_yacht){
        select_roll();
        reset2()
        document.getElementById("roll_yacht").disabled = true;
        document.getElementById("roll_yacht").classList.add("yellow");
        flag_yacht2 = true;
    }
}