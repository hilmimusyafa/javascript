let toCharacter = "Himeko";
let greeting = null;

switch (toCharacter) {
    case "Himeko":
        greeting = "Hey Himeko, what happened?";
        break;
    case "Welt":
        greeting = "Mister Welt, is there a something?";
        break;
    case "Dan Heng":
        greeting = "Are you call me, Dan Heng?";
        break;
    default:
        greeting = "What Happened?";
}

console.log(greeting);