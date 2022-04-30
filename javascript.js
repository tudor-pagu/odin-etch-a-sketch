

const gridContainer = document.querySelector(".grid-container");

///returns undefined if it couldn't build grid for some reason, specifically if
///gridSize was too big. returns 1 if it builds grid succesfully
///builds grid in the gridContainer of gridSize * gridSize
function buildGrid(gridSize = 16) {
    if (gridSize >= 100) {
        return undefined;
    }

    const gridRows = document.createElement("div");
    gridRows.classList.add("grid-rows");

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            square.addEventListener("mouseenter", (event) => {
                event.target.classList.add("activated");
            });
            row.appendChild(square);
        }

        gridRows.appendChild(row);
    }

    gridContainer.replaceChildren(gridRows);

    return 1;
}

const resetButton = document.querySelector(".reset-button");

function boardResetEvent(event,firstTime = true) {
    const msg = (firstTime) ? "Enter the new size: " : 
    "The size you entered was too big, try again with a smaller size: ";
    
   const gridSize = prompt(msg);
   if (!gridSize) {
       return undefined;
   }
   
   if (buildGrid(gridSize) === undefined) {
       boardResetEvent(event, false)
   }
}
resetButton.addEventListener("click", (event) => {
    boardResetEvent(event);
});

buildGrid();