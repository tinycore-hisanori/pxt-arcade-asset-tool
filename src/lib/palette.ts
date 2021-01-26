import * as util from "./util";

export const defaultPalette: PaletteFile = {
    id: -1,
    name: "__def__",
    extension: ".txt",
    data: "",
    parsed: {
        name: "default",
        colors: [
            "#000000",
            "#ffffff",
            "#ff2121",
            "#ff93c4",
            "#ff8135",
            "#fff609",
            "#249ca3",
            "#78dc52",
            "#003fad",
            "#87f2ff",
            "#8e2ec4",
            "#a4839f",
            "#5c406c",
            "#e5cdc4",
            "#91463d",
            "#000000"        ]
    }
}

export const paletteTaffyt16: PaletteFile = {
    id: 2,
    name: "__taffy16__",
    extension: ".txt",
    data: "",
    parsed: {
        name: "taffy16",
        colors: [
"#000000",
"#6275ba",
"#a3c0e6",
"#fafffc",
"#ffab7b",
"#ff6c7a",
"#dc435b",
"#3f48c2",
"#448de7",
"#2bdb72",
"#a7f547",
"#ffeb33",
"#f58931",
"#db4b3d",
"#a63d57",
"#36354d"
        ]
    }
}


export const paletteSweet16: PaletteFile = {
    id: 3,
    name: "__sweetie16__",
    extension: ".txt",
    data: "",
    parsed: {
        name: "sweetie16",
        colors: [
"#000000",
"#5d275d",
"#b13e53",
"#ef7d57",
"#ffcd75",
"#a7f070",
"#38b764",
"#257179",
"#29366f",
"#3b5dc9",
"#41a6f6",
"#73eff7",
"#f4f4f4",
"#94b0c2",
"#566c86",
"#333c57"
        ]
    }
}

export const palettePICO8: PaletteFile = {
    id: 4,
    name: "__pico8__",
    extension: ".txt",
    data: "",
    parsed: {
        name: "pico8",
        colors: [
"#000000",
"#1D2B53",
"#7E2553",
"#008751",
"#AB5236",
"#5F574F",
"#C2C3C7",
"#FFF1E8",
"#FF004D",
"#FFA300",
"#FFEC27",
"#00E436",
"#29ADFF",
"#83769C",
"#FF77A8",
"#FFCCAA"
        ]
    }
}

export const paletteStreamOct: PaletteFile = {
    id: 5,
    name: "__stoct__",
    extension: ".txt",
    data: "",
    parsed: {
        name: "stoct",
        colors: [
"#000000",
"#3a604a",
"#4f7754",
"#a19f7c",
"#77744f",
"#775c4f",
"#603b3a",
"#3b2137",
"#170e19",
"#2f213b",
"#433a60",
"#4f5277",
"#65738c",
"#7c94a1",
"#a0b9ba",
"#c0d1cc"
        ]
    }
}

export const paletteNA16: PaletteFile = {
    id: 6,
    name: "__na16__",
    extension: ".txt",
    data: "",
    parsed: {
        name: "na16",
        colors: [
"#000000",
"#584563",
"#3e2137",
"#9a6348",
"#d79b7d",
"#f5edba",
"#c0c741",
"#647d34",
"#e4943a",
"#9d303b",
"#d26471",
"#70377f",
"#7ec4c1",
"#34859d",
"#17434b",
"#1f0e1c"
        ]
    }
}

export const paletteEROGE: PaletteFile = {
    id: 7,
    name: "__eroge__",
    extension: ".txt",
    data: "",
    parsed: {
        name: "eroge",
        colors: [
"#000000",
"#4f2b24",
"#825b31",
"#c59154",
"#f0bd77",
"#fbdf9b",
"#fff9e4",
"#bebbb2",
"#7bb24e",
"#74adbb",
"#4180a0",
"#32535f",
"#2a2349",
"#7d3840",
"#c16c5b",
"#e89973"
         ]
    }
}


export const paletteFANTA16: PaletteFile = {
    id: 8,
    name: "__eroge__",
    extension: ".txt",
    data: "",
    parsed: {
        name: "fantasy16",
        colors: [
"#000000",
"#513a18",
"#332710",
"#14130c",
"#461820",
"#a63c1e",
"#d37b1e",
"#e7bc4f",
"#eeeefa",
"#d9d55b",
"#757320",
"#14210f",
"#040405",
"#1c1b2f",
"#435063",
"#60a18f"
         ]
    }
}


const supportedTypes = [".gpl", ".txt", ".hex"];

export function isPaletteFile(extension: string) {
    return supportedTypes.indexOf(extension.toLowerCase()) !== -1;
}

export function parsePaletteFile(file: SourceFile): PaletteInfo {
    let res: PaletteInfo;

    const text = atob(file.data);

    switch (file.extension.toLowerCase()) {
        case ".gpl":
            res = parseGPL(text);
            break;
        case ".hex":
            res = parseHEX(text);
            break;
        case ".txt":
            res = parseTXT(text);
            break;
        case ".json":
            res = parseJSON(text);
            break;
    }

    if (!res.name) {
        res.name = file.name;
    }

    return res;
}

export function parseJSON(text: string) :PaletteInfo{
let  name = "test";

const colors: string[]  = [
"#000000",
"#6275ba",
"#a3c0e6",
"#fafffc",
"#ffab7b",
"#ff6c7a",
"#dc435b",
"#3f48c2",
"#448de7",
"#2bdb72",
"#a7f547",
"#ffeb33",
"#f58931",
"#db4b3d",
"#a63d57",
"#36354d"
        ];

return {
	name,
        colors
	}
}

export function parseGPL(text: string): PaletteInfo {
    const lines = text.split(/\n/);
    let name: string;
    const colors: string[] = ["#000000"];

    for (const line of lines) {
        if (line.indexOf("#Palette Name:") === 0) {
            name = line.substr(14).trim();
        }
        else if (startsWith(line, "GIMP") || startsWith(line, "#") || !line.trim()) {
            continue;
        }
        else {
            const color = line.split(/\s+/).filter(c => startsWith(c, "#"));
            if (color.length === 1) {
                colors.push(color[0].toLowerCase());
            }
        }
    }

    return {
        name,
        colors
    }
}

export function parseHEX(text: string): PaletteInfo {
    const lines = text.split(/\n/);
    const colors: string[] = ["#000000"];

    for (let line of lines) {
        if (/[A-Fa-f0-9]{6}/.test(line)) {
            colors.push("#" + line.toLowerCase());
        }
    }

    return {
        colors
    }
}

export function parseTXT(text: string): PaletteInfo {
    const lines = text.split(/\n/);
    let name: string;
    const colors: string[] = ["#000000"];

    for (let line of lines) {
        line = line.trim();
        if (startsWith(line, ";Palette Name:")) {
            name = line.substr(14);
        }
        else if (/[A-Fa-f0-9]{6}/.test(line)) {
            colors.push("#" + line.toLowerCase());
        }
        else if (/[A-Fa-f0-9]{8}/.test(line)) {
            // First two characters are alpha, just strip it out
            colors.push("#" + line.substr(2).toLowerCase());
        }
    }

    return {
        name,
        colors
    }
}

export function encodePalette(colors: string[]) {
    const buf = new Uint8Array(colors.length * 3);
    for (let i = 0; i < colors.length; i++) {
        const color = parseColorString(colors[i]);
        const start = i * 3;
        buf[start] = _r(color);
        buf[start + 1] = _g(color);
        buf[start + 2] = _b(color);
    }
    return util.toHex(buf);
}

export function toNumbers(colors: string[]): number[][] {
    const res: number[][] = [];
    for (let i = 0; i < colors.length; i++) {
        const color = parseColorString(colors[i]);
        res.push([_r(color), _g(color), _b(color)]);
    }
    return res;
}

export function getName(file: PaletteFile) {
    return file.parsed.name || file.name.substr(0, file.name.length - file.extension.length)
}

function parseColorString(color: string) {
    if (color) {
        if (color.length === 6) {
            return parseInt("0x" + color);
        }
        else if (color.length === 7) {
            return parseInt("0x" + color.substr(1));
        }
    }
    return 0;
}

function _r(color: number) { return (color >> 16) & 0xff }
function _g(color: number) { return (color >> 8) & 0xff }
function _b(color: number) { return color & 0xff }

function startsWith(str: string, prefix: string) { return str.indexOf(prefix) === 0 }
