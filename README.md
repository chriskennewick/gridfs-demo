gridfs-demo
===========

Quick mongoDB GridFS demo that streams a video named 'video.mp4'.

Run
-----------
*This assumes that you have an instance of mongod running locally and that you will provide a file named video.mp4*

First add a video file to GridFS:
```
mongofiles --db=videos put video.mp4
```
Start node server:
```
node video.js
```
Open index.html and hit play!
