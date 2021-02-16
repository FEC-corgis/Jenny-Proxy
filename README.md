# Proxy for Airbnb Clones

I built this project from scratch to clone an Airbnb product page carousel. It displays an array of 12 houses, showing 4 houses at a time, and rotates continuously between the first and last turn cycles when clicked. Made with Express, React, and Node, and deployed using Amazon EC2.

## Live Demo Links

  - Proxy: http://3.128.186.14:3000/rooms/80/
  - Reviews: http://3.22.194.10:1984/rooms/80/
  - Carousel: http://18.222.249.216:1985/rooms/80/

## Setup on Local

Before setting up proxy, complete setup for [Reviews](https://github.com/FEC-corgis/Jenny-Service-Reviews) and [Carousel](https://github.com/FEC-corgis/Jenny-Service-MorePlacesToStay).

1. git clone
1. install dependencies with `npm install`
1. in /public/index.html `<body>`, make sure all `localhost` script tags are active, and `s3` bundle scripts are commented out
1. start server with `npm run start`
1. view at PORT/rooms/:id (for id values 0-99)

## Related Projects

  - https://github.com/FEC-corgis/Jenny-Service-Reviews
  - https://github.com/FEC-corgis/Jenny-Service-MorePlacesToStay
