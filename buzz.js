function fizzbuzz(maxNum) {

    const paragraph = document.createElement("p");
    document.body.appendChild(paragraph);
    for (let i = 1; i <= maxNum; i++) {
        const numberSpan = document.createElement("span");
        paragraph.appendChild(numberSpan);
        numberSpan.textContent = i;
        if (i % 2 === 0) {
            numberSpan.classList.add("bold");
        }
        if (i % 3 === 0) {
            numberSpan.classList.add("red");
        }
        if (i !== maxNum) {
            paragraph.innerHTML += ', ';
        }
    }
}
fizzbuzz(1000);