namespace SpriteKind {
    export const Damager = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Damager, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
})
info.onScore(1000, function () {
    if (true) {
        sprites.destroy(mySprite)
        game.gameOver(true)
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.y += -2
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 2
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.y += 2
})
info.onLifeZero(function () {
    if (true) {
        sprites.destroy(mySprite)
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(5)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += -2
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Food)
mySprite.x = 20
music.play(music.createSong(assets.song`song`), music.PlaybackMode.UntilDone)
scene.setBackgroundImage(assets.image`red`)
mySprite.setBounceOnWall(true)
info.setLife(20)
let mySprite3 = sprites.create(assets.image`myImage1`, SpriteKind.Damager)
mySprite3.y = 10
