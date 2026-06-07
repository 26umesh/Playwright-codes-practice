function check(dayname){
    let day;

    switch (dayname) {
        case 0:
            day="monday";
            break;
        case 1:
                console.log("Sunday");
                break;
        default:
            break;
    }
return day;
}

console.log(check(0));