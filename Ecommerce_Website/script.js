let i = 0;
timedCount = () => {
    i++;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();