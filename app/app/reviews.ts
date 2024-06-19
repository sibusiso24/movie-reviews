import { getXataClient } from "./src/xata";

// interface Reviews{
//     movieName: string,
//     rating: number,
//     status: string,
//     movieDescription: string ,
//     imageSrc: string
  
//   }
  
//   interface MovieReviews {
//     [x: string]: any;
//     reviews : [Reviews]
//   }
  
  
  
//   const reviews = [
//     {
//       id: 1,
//       movieName: "Inception",
//       rating: 4.8,
//       status: "Available",
//       movieDescription: "A skilled thief leads a team to infiltrate dreams and extract secrets.",
//       imageSrc: "/inception.jpg"
//     },
//     {
//       id: 2,
//       movieName: "The Matrix",
//       rating: 4.9,
//       status: "Available",
//       movieDescription: "A hacker discovers the world is a simulated reality controlled by machines.",
//       imageSrc: "/matrix.jpg"
//     },
//     {
//       id: 3,
//       movieName: "Interstellar",
//       rating: 4.7,
//       status: "Available",
//       movieDescription: "Explorers travel through a wormhole in space to ensure humanity's survival.",
//       imageSrc: "/interstellar.jpg"
//     },
//     {
//       id: 4,
//       movieName: "The Dark Knight",
//       rating: 4.9,
//       status: "Available",
//       movieDescription: "Batman faces off against the Joker in a battle for Gotham's soul.",
//       imageSrc: "/dark_knight.jpg"
//     },
//     {
//       id: 5,
//       movieName: "The Shawshank Redemption",
//       rating: 4.9,
//       status: "Available",
//       movieDescription: "Two imprisoned men bond over several years, finding solace and redemption.",
//       imageSrc: "/shawshank.jpg"
//     }
//   ];
  
// export default reviews;

// Generated with CLI

const xata = getXataClient();

const page = await xata.db.tag
  .select(["name", "description", "rating"])
  .getPaginated({
    pagination: {
      size: 15,
    },
  });

console.log(page.records);