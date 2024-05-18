// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`1000100004050505050505050505050505050506080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080a0a0a0a0a0a0a0a0a0a0a0a0a0a09080b0c0b0b0b0b0b0e0e0b0b0e0e0e0908010b0b10010e0b0e0c0b0b010f0e0908010b0b0b0e0e0c0b0e0b0b0f010109080b0d0c0b0e01010b0e0b0b0b0b0b0907030303030303030303030303030302`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass2,sprites.castle.shrub], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
