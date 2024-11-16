sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 5 2 2 2 2 2 2 . . . 
        . 2 2 2 5 2 2 5 2 2 5 2 2 . . . 
        . . 2 2 2 2 2 2 5 2 2 2 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    sprites.destroy(gold_enemy, effects.fire, 500)
    info.changeScoreBy(5)
})
let mySprite2: Sprite = null
let gold_enemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    ...6................
    44666...............
    4466f666666666......
    4466f666666666......
    ..66f66666666666....
    ..6666666666666666..
    ...6f....6666666666.
    ...6ffff...66666.6..
    ...6f22ff22.........
    ...6f22ff222........
    ..66ffff............
    ..66f66666666666....
    ..66f666666666666...
    ..66f6666666666666..
    ..66f6666666666666..
    4466f66666666666....
    4446f666..66666.....
    .4466...............
    ....................
    ....................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . . . 1 . . 
        . . . 1 . . . . . . . . . . 1 . 
        . . . 1 . . . 1 1 1 1 . . . 1 . 
        . . . 1 . . 1 1 9 9 1 1 . . 1 . 
        . . . 1 1 1 1 9 9 9 9 1 1 1 1 . 
        . . . 1 1 1 1 9 9 9 9 1 1 1 1 . 
        . . . 1 . . 1 1 9 9 1 1 . . 1 . 
        . . . 1 . . . 1 1 1 1 . . . 1 . 
        . . . 1 . . . . . . . . . . 1 . 
        . . . . 1 . . . . . . . . 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.x = scene.screenWidth()
    mySprite2.vx = -20
    mySprite2.y = randint(10, scene.screenHeight() - 10)
})
game.onUpdateInterval(20000, function () {
    gold_enemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 . . . . . . . . 5 . . 
        . . . 5 . . . . . . . . . . 5 . 
        . . . 5 . . . 5 5 5 5 . . . 5 . 
        . . . 5 . . 5 5 2 2 5 5 . . 5 . 
        . . . 5 5 5 5 2 2 2 2 5 5 5 5 . 
        . . . 5 5 5 5 2 2 2 2 5 5 5 5 . 
        . . . 5 . . 5 5 2 2 5 5 . . 5 . 
        . . . 5 . . . 5 5 5 5 . . . 5 . 
        . . . 5 . . . . . . . . . . 5 . 
        . . . . 5 . . . . . . . . 5 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    gold_enemy.x = scene.screenWidth()
    gold_enemy.vx = -20
    gold_enemy.y = randint(10, scene.screenHeight() - 10)
})
