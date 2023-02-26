function solve(num, cmd1, cmd2, cmd3, cmd4, cmd5) {
    cmds = [cmd1, cmd2, cmd3, cmd4, cmd5]

    while (cmds.length !== 0) {
        currAction = cmds.shift();
        if (currAction === 'chop') {
            num /= 2;
        } else if (currAction === 'dice') {
            num = Math.sqrt(num);
        } else if (currAction === 'spice') {
            num++;
        } else if (currAction === 'bake') {
            num *= 3;
        } else if (currAction === 'fillet') {
            num *= 0.80
        }
        console.log(num)

    }

}


solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')