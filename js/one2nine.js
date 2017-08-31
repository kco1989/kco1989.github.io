/**
 * Created by 666666 on 2017/8/31.
 */
$(function () {
    var Globle = {
        numberLength: 100,
        space: 'gray'
    };
    function makeNumberCard(text,index, remake) {
        var group = new Kinetic.Group({
            y: Math.floor(index / 4) * Globle.numberLength,
            x: (index - Math.floor(index / 4) * 4) * Globle.numberLength,
            name : index
        });
        var text = new Kinetic.Text({
            x: Globle.numberLength / 8 * 3,
            y: Globle.numberLength / 4,
            text: text,
            fontSize: Globle.numberLength / 2,
            fontFamily: 'Calibri',
            fill: 'green'
        });
        var rect = new Kinetic.Rect({
            width: Globle.numberLength ,
            height: Globle.numberLength ,
            fill: remake || 'white',
            stroke: 'black',
            strokeWidth: 2
        });
        group.add(rect);
        group.add(text);
        group.remake = remake;
        Kinetic.Group.prototype.moveUp = function (name) {
            this.name(name);
            this.setY(this.getY() - Globle.numberLength);
            layer.clear();
            layer.draw();
        };
        Kinetic.Group.prototype.moveDown = function (name) {
            this.name(name);
            this.setY(this.getY() + Globle.numberLength);
            layer.clear();
            layer.draw();
        };
        Kinetic.Group.prototype.moveLeft = function (name) {
            this.name(name);
            this.setX(this.getX() - Globle.numberLength);
            layer.clear();
            layer.draw();
        };
        Kinetic.Group.prototype.moveRight = function (name) {
            this.name(name);
            this.setX(this.getX() + Globle.numberLength);
            layer.clear();
            layer.draw();
        };
        group.on('click tap', function (event) {
            // Up
            var name = this.name();
            var upName = name - 4;
            if (upName >= 0){
                var space = layer.get("." + upName)[0];
                if (space.remake === Globle.space){
                    this.moveUp(space.name());
                    space.moveDown(name);
                    return;
                }
            }
            // Down
            var downName = name + 4;
            if (downName <= 11){
                var space = layer.get("." + downName)[0];
                if (space.remake === Globle.space){
                    this.moveDown(space.name());
                    space.moveUp(name);
                    return;
                }
            }
            // left
            var leftName = name - 1;
            if (Math.floor(leftName / 4) === Math.floor(name / 4)){
                var space = layer.get("." + leftName)[0];
                if (space.remake === Globle.space){
                    this.moveLeft(space.name());
                    space.moveRight(name);
                    return;
                }
            }
            // right
            var rightName = name + 1;
            if (Math.floor(rightName / 4) === Math.floor(name / 4)){
                var space = layer.get("." + rightName)[0];
                if (space.remake === Globle.space){
                    this.moveRight(space.name());
                    space.moveLeft(name);
                    return;
                }
            }

        });

        return group;
    }


    var stage = new Kinetic.Stage({
        width: Globle.numberLength * 4,
        height: Globle.numberLength * 3,
        container: 'container'
    });
    var layer = new Kinetic.Layer({
        fill: 'blue'
    });
    layer.add(new Kinetic.Rect({
        width: Globle.numberLength * 4,
        height: Globle.numberLength * 3,
        fill: 'rgb(100,100,100)'
    }));
    var one2Nice = [1,2,3,4,5,6,7,8,9];
    for(var i = 0; i < 9; i++){
        layer.add(makeNumberCard(getRandomNumber(one2Nice) + "", i, 'white'));
    }
    layer.add(makeNumberCard("", 9, "white"));
    layer.add(makeNumberCard("", 10, "white"));
    layer.add(makeNumberCard("", 11, Globle.space));

    stage.add(layer);
    stage.draw();
    
    function getRandomNumber(one2Nice) {
        var index = Math.floor(Math.random() * one2Nice.length);
        var number = one2Nice[index];
        one2Nice.splice(index, 1);
        return number;
    }
});
