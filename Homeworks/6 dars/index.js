
    let yosh = prompt("Yoshingiz nechida?");
    let talaba = prompt("Siz talabamisiz? (ha yoki yo'q)");

    if (yosh < 18 || talaba === "ha") {
    console.log("Chipta narxi: 5000 so'm");
    } else {
    console.log("Chipta narxi: 10000 so'm");
    }

