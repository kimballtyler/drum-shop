# Drum Shop
A full stack e-commerce website that allows users to shop, add desired products to a cart, and place orders.

## Live Demo

Try the live site here: https://drumshop.tylerkimball.com/

## Technologies Used

- React.js
- Node.js
- PostgreSQL
- Express
- Webpack 4
- Babel
- Bootstrap 4
- HTML5
- CSS3
- font-awesome
- AWS EC2

## Features

- User can view the products for sale.
- User can view the details of a product.
- User can add a product to their cart.
- User can view their cart summary.
- User can place an order.

## Preview

![Drum Shop](server/public/images/demo.gif)

## Development

### System Requirements

- Node.js 10 or higher
- npm 6 or higher
- PostgreSQL

### Getting Started

1. Clone the repository:
    ```shell
    git clone https://github.com/kimballtyler/drum-shop.git
    cd drum-shop
    ```
2. Install npm dependencies:
    ```shell
    npm install
    ```
3. Start PostgreSQL:

   Command if using Linux:
    ```shell
    sudo service postgresql start
    ```
4. Import the example database to PostgreSQL:
    ```shell
    npm run db:import
    ```
5. Start the application:
    ```shell
    npm run dev
    ```
6. Visit http://localhost:3000 in your browser to view the application.
