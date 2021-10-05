export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export function getPokeId(pokeId) {
    var prefix = "#";
    if (pokeId < 10) {
        prefix += "00"
    } else if (pokeId < 100) {
        prefix += "0"
    }

    return prefix + pokeId;
};

export function getTypeBakgroundColor(poketype) {
    switch (poketype) {
        case "grass": {
            return { backgroundColor: "#9bcc50" }
        }
        case "poison": {
            return { backgroundColor: "#b97fc9", color: "#fff" }
        }
        case "fire": {
            return { backgroundColor: "#fd7d24", color: "#fff" }
        }
        case "electric": {
            return { backgroundColor: "#eed535" }
        }
        case "steel": {
            return { backgroundColor: "#9eb7b8" }
        }
        case "water": {
            return { backgroundColor: "#4592c4", color: "#fff" }
        }
        case "flying": {
            return { backgroundColor: "#3dc7ef", background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)" }
        }
        case "dragon": {
            return { backgroundColor: "#53a4cf", background: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)", color: "#fff" }
        }
        case "ground": {
            return { backgroundColor: "#f7de3f", background: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)" }
        }
        case "fairy": {
            return { backgroundColor: "#fdb9e9" }
        }
        case "fighting": {
            return { backgroundColor: "#d56723", color: "#fff" }
        }
        case "psychic": {
            return { backgroundColor: "#f366b9", color: "#fff" }
        }
        case "ghost": {
            return { backgroundColor: "#7b62a3", color: "#fff" }
        }
        case "rock": {
            return { backgroundColor: "#a38c21", color: "#fff" }
        }
        case "bug": {
            return { backgroundColor: "#729f3f", color: "#fff" }
        }
        case "dark": {
            return { backgroundColor: "#707070", color: "#fff" }
        }
        default: {
            return { backgroundColor: "#a4acaf" }
        }
    }
};

export function getPokemonHeight(height) {
    return height*10 + "cm";
};

export function getPokemonWeight(weight) {
    return weight/10 + "kg";
};