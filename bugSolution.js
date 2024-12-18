```javascript
// Correct usage of $inc and $setOnInsert operators
db.collection('myCollection').updateOne({ name: 'John' }, { $inc: { age: -1 }, $setOnInsert: { age: -1 } });
```