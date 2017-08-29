/**
 * Created by 666666 on 2017/8/28.
 */
$(function () {
    var content = {
        N : 30,
        circle:{
            radius: 100,
            x: 200,
            y: 200
        },
        points: []
    };
    var stage = new Kinetic.Stage({
       container: 'container',
       width: 600,
       height: 400
    });
    var layer = new Kinetic.Layer();
    for (var i = 0; i < 2 * content.N; i ++){
       var jiao = Math.PI / content.N * i;
        content.points.push({
           x: Math.cos(jiao - Math.PI / 2) * content.circle.radius + content.circle.x,
           y: Math.sin(jiao - Math.PI / 2) * content.circle.radius + content.circle.y
       })
    }
    console.log("%o", content.points);
    var circle = new Kinetic.Circle({
       radius: content.circle.radius,
       x: content.circle.x,
       y: content.circle.y,
       fill: 'yellow',
       stroke: 'black',
       strokeWidth: 4
    });
    layer.add(circle);
    function get(array, index) {
        return array[(index + array.length) % array.length];
    }
    for (var i = 0; i <= content.N / 2; i ++){
       layer.add((function (index) {
           return new Kinetic.Line({
               points:[
                   get(content.points, index).x,
                   get(content.points, index).y,
                   get(content.points, index + content.N / 2).x,
                   get(content.points, index + content.N / 2).y
               ],
               stroke: 'red',
               strokeWidth: 1
           });
       })(i));
        layer.add((function (index) {
            return new Kinetic.Line({
                points:[
                    get(content.points, index + content.N).x,
                    get(content.points, index + content.N).y,
                    get(content.points, index + content.N * 3 / 2).x,
                    get(content.points, index + content.N * 3 / 2).y
                ],
                strokeWidth: 1,
                stroke: 'red'
            });
        })(i));
        layer.add((function (index) {
            return new Kinetic.Line({
                points:[
                    get(content.points, content.N / 2 - index).x,
                    get(content.points, content.N / 2 - index).y,
                    get(content.points, content.N * 2 - 2 * index).x,
                    get(content.points, content.N * 2 - 2 * index).y
                ],
                strokeWidth: 1,
                stroke: 'red'
            });
        })(i));
        layer.add((function (index) {
            return new Kinetic.Line({
                points:[
                    get(content.points, content.N * 2 - index).x,
                    get(content.points, content.N * 2 - index).y,
                    get(content.points, content.N - 2 * index).x,
                    get(content.points, content.N - 2 * index).y
                ],
                strokeWidth: 1,
                stroke: 'red'
            });
        })(i));
    }

    stage.add(layer);
    stage.draw();
});