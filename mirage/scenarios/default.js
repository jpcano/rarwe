export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  // let banda = server.create('band');
  // server.createList('song', 5, {title: "pepe", band: banda});


  let band = server.create('band');
  let songs = server.createList('song', 10, {band: band});
}
