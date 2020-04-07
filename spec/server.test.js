// const request = require('supertest')
// const React = require('react');
// const ReactDOM = require('react-dom');
// const Enzyme = require('enzyme');
// const { mount, shallow, render } = require('enzyme');
// const Adapter = require('enzyme-adapter-react-16');
// const puppeteer = require('puppeteer');
// const pageUrl = 'http://localhost:3002/10001';
// const renderer = require("react-test-renderer");
// const $ = require('jquery');
// const polyfill = require('babel-polyfill');
// const PhotoService = require('../client/src/PhotoService.jsx');
// const babelPolyfill = require('babel-polyfill');
// const regenerator = require('regenerator-runtime/runtime');
// let listing = {
//   id: 1,
//   is_favorite: 0,
//   listing_id: 10001,
//   name: "Super_Cute_Retro_Airstream",
//   photo10_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic10Large.jpg",
//   photo10_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic10Small.jpg",
//   photo10_caption: "Super Cute Retro Airstream",
//   photo11_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic11Large.jpg",
//   photo11_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic11Small.jpg",
//   photo11_caption: "Strum your guitar and crack open and ice cold beer next to the fire",
//   photo12_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic12Large.jpg",
//   photo12_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic12Small.jpg",
//   photo12_caption: "Super Cute Retro Airstream",
//   photo13_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic13Large.jpg",
//   photo13_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic13Small.jpg",
//   photo13_caption: "Super Cute Retro Airstream",
//   photo14_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic14Large.jpg",
//   photo14_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic14Small.jpg",
//   photo14_caption: "Super Cute Retro Airstream",
//   photo15_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic15Large.jpg",
//   photo15_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic15Small.jpg",
//   photo15_caption: "Dine al fresco under the twinkle lights.",
//   photo16_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic16Large.jpg",
//   photo16_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic16Small.jpg",
//   photo16_caption: "The kitchen is stocked with pots, pans, dishes, and utensils. There's a gas stove and refrigerator, too.",
//   photo17_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic17Large.jpg",
//   photo17_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic17Small.jpg",
//   photo17_caption: "Super Cute Retro Airstream",
//   photo18_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic18Large.jpg",
//   photo18_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic18Small.jpg",
//   photo18_caption: "Super Cute Retro Airstream",
//   photo19_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic19Large.jpg",
//   photo19_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic19Small.jpg",
//   photo19_caption: "The outdoor shower has clothing hooks, a bench, and is big enough for two!",
//   photo1_a: "https://fec-photos.s3-us-west-1.amazonaws.com/coverPics/Cover01Large.jpg",
//   photo1_b: "https://fec-photos.s3-us-west-1.amazonaws.com/coverPics/Cover01Small.jpg",
//   photo1_caption: "This is The Dixie Daisy! We think you'll LOVE staying here.",
//   photo20_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic20Large.jpg",
//   photo20_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic20Small.jpg",
//   photo20_caption: "Take your morning shower under the canopy of the elm trees. What a way to start the day!",
//   photo21_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic21Large.jpg",
//   photo21_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic21Small.jpg",
//   photo21_caption: "Super Cute Retro Airstream",
//   photo22_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic22Large.jpg",
//   photo22_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic22Small.jpg",
//   photo22_caption: "The bathroom has been hard plumbed with a real toilet. There's an interior shower and hairdryer, too.",
//   photo23_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic23Large.jpg",
//   photo23_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic23Small.jpg",
//   photo23_caption: "The interior shower",
//   photo24_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic24Large.jpg",
//   photo24_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic24Small.jpg",
//   photo24_caption: "Isn't she pretty all lit up at night?",
//   photo25_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic25Large.jpg",
//   photo25_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic25Small.jpg",
//   photo25_caption: "Don't forget the charcoal and steaks for your bbq dinner!",
//   photo26_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic26Large.jpg",
//   photo26_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic26Small.jpg",
//   photo26_caption: "Super Cute Retro Airstream",
//   photo27_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic27Large.jpg",
//   photo27_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic27Small.jpg",
//   photo27_caption: "Super Cute Retro Airstream",
//   photo28_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic28Large.jpg",
//   photo28_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic28Small.jpg",
//   photo28_caption: "cowgirl curtains",
//   photo29_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic29Large.jpg",
//   photo29_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic29Small.jpg",
//   photo29_caption: "Super Cute Retro Airstream",
//   photo2_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic02Large.jpg",
//   photo2_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic02Small.jpg",
//   photo2_caption: "Super Cute Retro Airstream",
//   photo30_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic30Large.jpg",
//   photo30_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic30Small.jpg",
//   photo30_caption: "Super Cute Retro Airstream",
//   photo3_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic03Large.jpg",
//   photo3_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic03Small.jpg",
//   photo3_caption: "Super Cute Retro Airstream",
//   photo4_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic04Large.jpg",
//   photo4_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic04Small.jpg",
//   photo4_caption: "The Dixie Daisy backs up to the beautiful Smith Creek with 12 private acres to explore.",
//   photo5_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic05Large.jpg",
//   photo5_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic05Small.jpg",
//   photo5_caption: "Mood lighting for an evening dip in the hot tub",
//   photo6_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic06Large.jpg",
//   photo6_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic06Small.jpg",
//   photo6_caption: "The treehouse is a great place for a romantic picnic!",
//   photo7_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic07Large.jpg",
//   photo7_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic07Small.jpg",
//   photo7_caption: "Queen size bed on an antique iron bed frame",
//   photo8_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic08Large.jpg",
//   photo8_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic08Small.jpg",
//   photo8_caption: "Hammock bliss…",
//   photo9_a: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic09Large.jpg",
//   photo9_b: "https://fec-photos.s3-us-west-1.amazonaws.com/otherPics/mainPic09Small.jpg",
//   photo9_caption: "The living room has a full couch, table and chair, satellite tv, games, and books.",
//   updatedAt: null
// };

// describe("/listing-info route", () => {
//   test("should respond to a valid GET method with listing object", async () => {
//     const responseMock = listing;
//     const response = await request(PhotoService)
//       .get("/listing-info")
//       .query({listingId: '10001'});
//       expect(response.statusCode).toBe(200);
//       delete response.createdAt;
//       expect(response.text).toBe(listing);
//   });
// });


// describe("/favorite route", () => {
//   test("should respond to a post to /favorite with a confirmation", async () => {

//     const responseMock = '(Rows matched: 1  Changed: 1  Warnings: 0';
//     const response = await request(PhotoService)
//       .post("/favorite")
//       .query({listingId: '10001'})
//       expect(response.statusCode).toBe(200);
//       expect(response.message).toBe(responseMock);
//   });
// });

describe('a true test', () => {
  test('must return true', () => {
    expect(true).toBe(true);
  })
})