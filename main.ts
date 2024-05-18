controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.y += -2
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 2
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.y += 2
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += -2
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`red`)
music.play(music.createSong(assets.song`song`), music.PlaybackMode.UntilDone)
