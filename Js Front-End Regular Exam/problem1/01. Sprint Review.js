function sprint(inputData) {
    const playersObj = {};
    let n = Number(inputData.shift());

    for (let index = 0; index < n; index++) {
        let [assignee, taskId, title, status, points] = inputData.shift().split(':')
        if (!playersObj[assignee]) {
            playersObj[assignee] = [];
        }
        playersObj[assignee].push({
            taskId, title, status, points: Number(points),
        });
    }

    let remainingCommands = inputData.length;
    for (let i = 0; i < remainingCommands; i++) {
        let line = inputData.shift().split(":");
        let action = line[0];
        let assignee = line[1];
        if (!playersObj[assignee]) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            continue;
        }

        if (action === "Add New") {
            playersObj[assignee].push({
                taskId: line[2],
                title: line[3],
                status: line[4],
                points: Number(line[5]),
            })

        } else if (action === 'Change Status') {
            const index = playersObj[assignee].findIndex(task => task.taskId === line[2]);
            if (index === -1) {
                console.log(`Task with ID ${line[2]} does not exist for ${assignee}!`);
                continue;
            }
            playersObj[assignee][index].status = line[3];

        } else if (action === 'Remove Task') {
            const index = Number(line[2]);
            if (index < 0 || index >= playersObj[assignee].length) {
                console.log('Index is out of range!');
                continue;
            }
            playersObj[assignee].splice(index, 1);
        }
    }

    let totalToDo = 0;
    let totalInProgress = 0;
    let totalCodeReview = 0;
    let totalDone = 0;
    
    for (const assignee of Object.values(playersObj)) {
        for (const task of assignee) {
            if (task.status === 'ToDo') {
                totalToDo += task.points
            } else if (task.status === 'In Progress') {
                totalInProgress += task.points
            } else if (task.status === 'Code Review') {
                totalCodeReview += task.points
            } else if (task.status === 'Done') {
                totalDone += task.points
            }
        }
    }

    console.log(`ToDo: ${totalToDo}pts`);
    console.log(`In Progress: ${totalInProgress}pts`);
    console.log(`Code Review: ${totalCodeReview}pts`);
    console.log(`Done Points: ${totalDone}pts`);

    if (totalDone >= totalToDo + totalInProgress + totalCodeReview) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }
}

sprint(
    [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done'
    ]
)
