var http = require('http'),
    mongodb = require('mongodb');

var mongoServer = new mongodb.Server('localhost', mongodb.Connection.DEFAULT_PORT, {});
var mongoClient = new mongodb.Db('videos', mongoServer, {});

http.createServer(function(request, response) {
    var video = 'video';
    mongoClient.open(function(err, db) {
        var gs = new mongodb.GridStore(db, video + '.mp4', "r");
        gs.open(function(err, gs) {
            console.log("streaming...");
            response.writeHeader(200, {
                'Content-type': 'video/mp4',
                'content-disposition': 'attachment; filename=' + video + '.mp4',
                'X-Pad': 'avoid browser bug',
                'Cache-Control': 'no-cache',
                'Content-Length': gs.length
            });
            gs.stream(true).pipe(response);
        });
    });
}).listen(8080);
