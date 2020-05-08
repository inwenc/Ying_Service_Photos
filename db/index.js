const mongoose = require('mongoose');
let json = require('./exampleData.json');
mongoose.connect('mongodb://localhost/photo_gallery', {
  useNewUrlParser: true
});

let photoSchema = mongoose.Schema({
listingId: Number,
is_favorite: Boolean,
imageSet: [{
  photo1_a: String,
  photo1_b: String,
  photo1_caption: String
}]
});



// const getMainRouteString = (listingId) => {
//   return new Promise((resolve, reject) => {
//     let queryString = `SELECT * FROM PhotosTwo WHERE name='${listingId}'`;
//     db.query(queryString, (err, results) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(results);
//     });
//   });
// };
// //insert new set of Data into db

// const insertDataSet = (data) => {

//   return new Promise((resolve, reject) => {
//     let queryString = `INSERT INTO PhotosTwo SET ?`;
//     db.query(queryString, data, (err, results) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(results);
//     });
//   });
// }

// //Delete set of Data where id is...

// const deleteDataSet = (listingId) => {
//   return new Promise ((resolve, reject) => {
//     let queryString = `DELETE FROM PhotosTwo WHERE ID = ${listingId}`;
//     db.query(queryString, (err, results) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(results);
//     })
//   })
// }

// //update data set
// const updateDataSet = (listingId, item, newData) => {
//   return new Promise((resolve, reject) => {
//     let queryString = `UPDATE PhotosTwo SET ${item} = ${newData} WHERE listing_id=${listingId}`;
//     db.query(queryString, (err, results) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(results);
//     });
//   })
// }

// const getMainRouteNum = (listingId) => {
//   return new Promise((resolve, reject) => {
//     let queryString = `SELECT * FROM PhotosTwo WHERE listing_id=${listingId}`;
//     db.query(queryString, (err, results) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

// const toggleFavorite = (id) => {
//   return new Promise((resolve, reject) => {
//     let queryString = `UPDATE PhotosTwo SET is_favorite = 1 - is_favorite WHERE listing_id=${id}`;
//     db.query(queryString, (err, results) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

// const recPhotos = (listingId) => {
//   return new Promise((resolve, reject) => {
//     let queryString = `SELECT photo1_b, photo2_b, photo3_b, photo4_b, photo5_b, photo6_b, photo7_b, photo8_b, photo9_b, photo10_b, photo11_b, photo12_b, photo13_b, photo14_b, photo15_b, photo16_b, photo17_b, photo18_b, photo19_b, photo20_b, photo21_b, photo22_b, photo23_b, photo24_b, photo25_b, photo26_b, photo27_b, photo28_b, photo29_b, photo30_b FROM Photos WHERE listing_id=${listingId}`;
//     db.query(queryString, (err, results) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(results);
//     });
//   });
// };
var Photos = mongoose.model('Photos', photoSchema)

// Photos.insertMany(json, (err, result) => {
//   if (err) {
//     console.log('Error in sample data insert');
//   } else {
//     console.log('Successful sample data insert');
//   }
// })
module.exports = {
Photos
};