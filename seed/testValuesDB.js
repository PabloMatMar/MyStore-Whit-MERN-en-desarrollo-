const emojis = require('emojis-list');
// emojis.map((e, i) => { if (i > 0) console.log(e, i) })
const games = require('./games').products;


//Me aseguro de que los parametros de los objetos de mi api esten bien relacionados, no haya categorias extra
// debido a errores al escribir, que no tenga otras consolas si es exclusivo y viceversa, etc 
//(Los errores por no darle unicidad, o el tipo de dato que mongo espera ya me los canta mongo asi que no tiene
// sentido añadirlos aqui, al menos de momento.)

//Podria usar un solo map para todo pero entonces los errores se imprimirian en orden de aparicion en lugar de por categorias por lo que el test seria mucho menos legible y de un codigo mucho mas sucio. es de destacar que el exceso de console log es para que sea mas visible el error en consola, no el codigo que pese a todo, no deja de ser sencillo.

//ESTE TEST NO SE PREOCUPA DE LOS ERRORES DE INDEXADO, PUES ESOS YA LOS DEVUELVE MONGO.
const testing = () => {
    console.log("----------------------------------");
    console.log("IM TESTING THE OBJECT OF DATA BASE");
    console.log("----------------------------------\n");
    
    console.log("PROPERTY: TRAILER\n");

    let errorImage = false;
    games.map(e => {
        if (!e.image.startsWith('../assets/') || !e.image.endsWith('.jpg')) {
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            console.log(`Search the string: ${e.image} and correct it.`);
            console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944]);
            errorImage = true;
        }
    });
    if (!errorImage) {
        console.log(emojis[2996], emojis[3053], " OK", emojis[3053], emojis[2996]);
        console.log("The values in property price are in the parameters!");
        console.log(emojis[2996], emojis[3052], " OK", emojis[3052], emojis[2996]);
    };
    console.log("----------------------------------");

    console.log("----------------------------------\n");

    console.log("PROPERTY: CONSOLE\n");

    let consoles = {};
    let errorConsole = false;
    games.map(e => {
        if (consoles[e.console] == undefined) consoles[e.console] = 1
    });

    Object.keys(consoles).length > 3 ? (
        console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]),
        console.log("There is a writing error in the *console* section. Check the array with the console names to search the wrong name in the API:\n"),
        console.log(Object.keys(consoles)),
        console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944]),
        errorConsole = true
    ) : (
        console.log(emojis[2996], emojis[3053], " OK", emojis[3053], emojis[2996]),
        console.log("The values in property Console are in the parameters!"),
        console.log(emojis[2996], emojis[3052], " OK", emojis[3052], emojis[2996])
    );
    console.log("----------------------------------");

    console.log("----------------------------------\n");
    console.log("PROPERTY: PRICE\n");


    let errorPrice = false;
    games.map(e => {
        if (e.price > 100 || e.price < 15) {
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            console.log(`The price: ${e.price} is definitely a writing error`);
            console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944]);
            errorPrice = true;
        }
    });
    if (!errorPrice) {
        console.log(emojis[2996], emojis[3053], " OK", emojis[3053], emojis[2996]);
        console.log("The values in property price are in the parameters!");
        console.log(emojis[2996], emojis[3052], " OK", emojis[3052], emojis[2996]);
    };
    console.log("----------------------------------");

    console.log("----------------------------------\n");
    console.log("PROPERTY: OPINION\n");

    let errorOpinion = false;
    games.map(e => {
        if (e.opinion > 5.0 || e.opinion < 0.0) {
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            console.log(`The points in the Opinion ${e.opinion} is definitely a writing error`);
            console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944]);
            errorOpinion = true;
        }
    });
    if (!errorOpinion) {
        console.log(emojis[2996], emojis[3053], " OK", emojis[3053], emojis[2996]);
        console.log("The values in property opinion are in the parameters!");
        console.log(emojis[2996], emojis[3052], " OK", emojis[3052], emojis[2996]);
    };
    console.log("----------------------------------");

    console.log("----------------------------------\n");
    console.log("PROPERTY: AGE\n");

    let errorAge = false;
    games.map(e => {
        if (e.age != 3 && e.age != 7 && e.age != 12 && e.age != 16 && e.age != 18) {
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            console.log(`The age: ${e.age} is definitely a writing error`);
            console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944]);
            errorAge = true;
        }
    });
    if (!errorAge) {
        console.log(emojis[2996], emojis[3053], " OK", emojis[3053], emojis[2996]);
        console.log("The values in property age are in the parameters!");
        console.log(emojis[2996], emojis[3052], " OK", emojis[3052], emojis[2996]);
    };
    console.log("----------------------------------");

    console.log("----------------------------------\n");
    console.log("PROPERTY: EXCLUSIVENESS\n");

    let errorExclusiveness = false;
    games.map(e => {
        if (e.exclusiveness && e.sharedWith.length != 0) {
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            console.log(`The value of exclusiveneess is ${true} And there are consoles name in the Array of the property "sharedWith". Check if the game ${e.name} is unique. If it is, remove the names of consoles from the array, else, change the value to ${false}`);
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            errorExclusiveness = true;
        } else if(!e.exclusiveness && e.sharedWith.length == 0) {
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            console.log(`The value of exclusiveneess is ${false} And there are NOT consoles name in the Array of the property "sharedWith". Check if the game ${e.name} is unique. If it is, change the value to ${true}, else, add to the array (of the sharedWith property) the names of the consoles with which it shares the game`);
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            errorExclusiveness = true;
        };
    });
    if (!errorExclusiveness) {
        console.log(emojis[2996], emojis[3053], " OK", emojis[3053], emojis[2996]);
        console.log("The values in property exclusiveness are in the parameters!");
        console.log(emojis[2996], emojis[3052], " OK", emojis[3052], emojis[2996]);
    };
    console.log("----------------------------------");

    console.log("----------------------------------\n");
    console.log("PROPERTY: OTHERS\n");

    let errorSharedWith = false;
    let sharedWithConsoles = {};
    games.map(e => {
        if (e.sharedWith.includes(e.console)) {
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            console.log(`The name of the console is equal to one of the contents in the "sharedWith" array. ${emojis[2944]}ATTENTION.${emojis[2944]} Check if the game: ${e.name} is available on other consoles, if it is, see if the replay are in the console property or in the sharedWhit property. If, no, remove the name from the array, and set the uniqueness state to true.
            `);
            console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944]);
            errorSharedWith = true;
        };
        if (e.sharedWith.length > 2 || (e.sharedWith[0] != undefined && e.sharedWith[1] != undefined && e.sharedWith[0] == e.sharedWith[1])) {
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            console.log(`There are a repeat or extra name in the sharedWith array in the game: ${e.name}`);
            console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944]);
            errorSharedWith = true;
        };
        e.sharedWith.map(el => {
            if (sharedWithConsoles[el] == undefined) sharedWithConsoles[el] = 1
            if (Object.keys(sharedWithConsoles).length > 3 && errorSharedWith == false) errorSharedWith = true;
        });

    });

    if (Object.keys(sharedWithConsoles).length > 3) {
        console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
        console.log('There is a writing error in the "sharedWith" property. Check the array with the console names to search the wrong name in the API:\n');
        console.log(Object.keys(sharedWithConsoles));
        console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944])
    }
    if (!errorSharedWith) {
        console.log(emojis[2996], emojis[3053], " OK", emojis[3053], emojis[2996]);
        console.log("The values in property sharedWith are in the parameters!");
        console.log(emojis[2996], emojis[3052], " OK", emojis[3052], emojis[2996]);
    };
    console.log("----------------------------------");

    console.log("----------------------------------\n");
    console.log("PROPERTY: GENRE\n");

    let errorGenre = false;
    let genres = {};
    games.map(e => {
        e.genre.map(el => {
            if (genres[el] == undefined) genres[el] = 1;
            if (Object.keys(genres).length > 11 && errorGenre == false) errorGenre = true;
        });

    });

    if (Object.keys(genres).length > 11) {
        console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
        console.log('There is a writing error in the "genre" property. Check the array with the console names to search the wrong name in the API:\n');
        console.log(Object.keys(genres));
        console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944])
    }
    if (!errorGenre) {
        console.log(emojis[2996], emojis[3053], " OK", emojis[3053], emojis[2996]);
        console.log("The values in property genre are in the parameters!");
        console.log(emojis[2996], emojis[3052], " OK", emojis[3052], emojis[2996]);
    };
    console.log("----------------------------------\n");

    console.log("----------------------------------\n");
    console.log("PROPERTY: TRAILER\n");

    let errorTrailer = false;
    games.map(e => {
        if (!e.trailer.includes('embed')) {
            console.log(emojis[2944], emojis[3053], " ERROR", emojis[3053], emojis[2944]);
            console.log(`Search the string: watch?v= and changes it to: embed/ 
            Be careful not to add spaces.`);
            console.log(emojis[2944], emojis[3052], " ERROR", emojis[3052], emojis[2944]);
            errorTrailer = true;
        }
    });
    if (!errorTrailer) {
        console.log(emojis[2996], emojis[3053], " OK", emojis[3053], emojis[2996]);
        console.log("The values in property price are in the parameters!");
        console.log(emojis[2996], emojis[3052], " OK", emojis[3052], emojis[2996]);
    };
    console.log("----------------------------------");

    if (!errorPrice && !errorAge && !errorExclusiveness && !errorOpinion && !errorSharedWith && !errorGenre && !errorConsole && !errorTrailer && !errorImage) {
        console.log("----------------------------------");
        console.log(emojis[3056], emojis[2155], "All propertys are ok!", emojis[2155], emojis[3056]);
        console.log("----------------------------------");
        return true;
    } else {
        console.log("----------------------------------");
        console.log(emojis[2944], emojis[2944], "There are parameters outside the ranges", emojis[2944], emojis[2944]);
        console.log("----------------------------------");
        return false;
    }
};
testing();
module.exports = {
    testing: testing()
}