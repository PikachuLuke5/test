info.onScore(1000, function () {
    sprites.destroy(mySprite)
    mySprite2.sayText("Game over!")
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(5)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += -2
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Food)
mySprite.x = 20
music.play(music.createSong(assets.song`song`), music.PlaybackMode.UntilDone)
scene.setBackgroundImage(assets.image`red`)
mySprite.setBounceOnWall(true)
