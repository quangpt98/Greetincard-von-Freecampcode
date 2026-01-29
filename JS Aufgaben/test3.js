let monaten = prompt("Hay nhap Thang vao : ")

if (!isNaN(monaten) && monaten >1 && monaten <=12) {
    if (monaten === 2){
        let jahren = Number(prompt("Xin hay nhap nam vao"));
        if (jahren%4 === 0 && jahren %100 !== 0) {
            console.log (`${monaten} la Thang co 29 ngay`)
        }
        else {
            console.log(`${monaten.jahren} co 28 ngayf`)
        }
    } else if ( monaten === 4 || monaten === 6 || monaten === 9 || monaten ===11 ) {
        console.log(`${monaten} co 30 ngay`)
    }
    else {
        console.log ( "Thang nay co 31 ngay")
    }
}
else {
    console.log("Ungültigen Eingaben bitte noch mal versuchen !!: ")
}
