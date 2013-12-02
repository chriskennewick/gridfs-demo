gridfs-demo
===========

Quick mongoDB GridFS demo that streams a video named 'video.mp4'.

Run
-----------
*This assumes that you have an instance of mongod running locally*

First add a video file to GridFS:
```
mongofiles --db=videos put video.mp4
```
Start node server:
```
node video.js
```
Open index.html and hit play!
