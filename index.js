import GlitchedWriter from 'https://cdn.skypack.dev/glitched-writer'
import {presets} from "https://cdn.skypack.dev/glitched-writer";

const phrases = ['Designer', 'Coder']

const writer = new GlitchedWriter("#glitched-text", {...presets.neo}
);


writer.queueWrite(phrases,4000,true);