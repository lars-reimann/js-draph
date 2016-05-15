import {predefinedColors} from "@ignavia/util";

import * as Utils from "../Utils.js";

export const defaultConf = {
    label: "<Placeholder>", // TODO: move style out
    backgroundColor: predefinedColors.white,
    border: {
        color:  predefinedColors.black,
        radius: 5,
        width:  2
    },
    padding: 10,
    margin: 2,

    /**
     * The shape of this node. The values "circle", "ellipse", "rect",
     * "roundedRect" are supported. The default value is "ellipse".
     *
     * @type {String}
     */
    shape: "ellipse",

    text: {
        align:  "left",
        dropShadow: {
            angle:    Math.PI / 4,
            color:    predefinedColors.gray,
            distance: 0
        },
        fillColor: predefinedColors.black,
        font: {
            family: "Arial",
            size:   20,
            style:  "normal",
            weight: "bold"
        },
        stroke: {
            color:     predefinedColors.white,
            thickness: 0
        },
        wordWrapWidth: 0
    }
};

/**
 * Creates a sprite using the given configuration.
 *
 * @param {Object} conf
 * Check the documentation of the default configuration for the structure of
 * this object.
 *
 * @return {DisplayObject}
 * The created sprite.
 */
export function makeSprite(conf, label) {
    const container = makeContainer(conf, label);
    const sprite    = Utils.makeCanvasSprite(container, {
        width:  conf.width,
        height: conf.height
    });

    // Placing the texture at the origin of the coordinate system of the sprite
    sprite.anchor = {
        x: 0.5,
        y: 0.5
    };

//-------- REMOVE
    sprite.x = Math.random() * 1000;
    sprite.y = Math.random() * 1000;
    //_-----------

    return sprite;
}

/**
 * Creates a sprite using the default configuration.
 *
 * @return {DisplayObject}
 * The created sprite.
 */
export function makeSpriteWithDefaultConf() {
    return makeSprite(defaultConf);
}

function makeContainer(conf, text) {
    const container = new PIXI.Container();
    const label     = Utils.makeText(conf.text, text);
    const box       = Utils.makeBox(conf, label);
    const margin    = Utils.makeMargin(conf.margin, box);
    container.addChild(margin);
    container.addChild(box);
    container.addChild(label);
    return container;
}
