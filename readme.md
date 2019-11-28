<p align="center"><img src="https://local-pizzeria.herokuapp.com/img/logo.png" width="400"></p>



## Local Man Pizzeria Overview
This is a pizza ordering app.It allows a user to order one type of pizza of arbitrary quantity and an array of toppings and accompanying drinks.On clicking checkout,the customer is taken to a checkout details page where he fills in shipping and billing details. on  clicking submit,payment request is submitted and if successful,an order is placed and a temporary url to order summary is generated and returned to user.when a user navigates to the temporary (that expires after 15 minutes) He's able to view his order details including the shipping address.From there he can download a PDF version of the receipt through a temporary URL that is generated when the page is navigated to.
### Limitations
The app provides limited validation for entries and should generally be viewed as a proof of concept.Input in the *Checkout Details* is not validated for null|empty entries,thus it is imperative to fill all input fields as prompted to experience the full capabilities of the app

## Requirements
- [Laravel 5.8 environment basic requirements](https://laravel.com/docs/5.8/installation#server-requirements)
- ext-gd 
- ext-imagick
- ext-zip
- MySQL Server 5.7
- Dompdf
- Paypal Braintree Sandbox developer account

## Installation

Clone the code repository

`git clone https://github.com/amolocaleb/prometheus.git `

Install dependencies

`composer install`

`npm install`

Generate application key

`php artisan key:generate`

Create a database and import tables from the file `pizzaapp.sql` at the root of the application

`projectrootdir$ sudo mysql -u USER -p -D DATABASENAME < pizzaapp.sql`,

or simply import using GUI tools eg DBeaver or Phpmyadmin;

Alternatively,you may run `php artisan migrate` command. If this is done,then only the `INSERT` statements in the `pizzaapp.sql` should be executed. all other DDL statements should be commented out to prevent errors during importation

 #### Braintree Intergration

Export these Braintree environment variables to your `.env` file

```
BT_ENVIRONMENT=sandbox

BT_MERCHANT_ID=REPLACE_WITH_YOUR_MERCHANT_ID

BT_PUBLIC_KEY=REPLACE_WITH_YOUR_PUBLIC_KEY

BT_PRIVATE_KEY=REPLACE_WITH_YOUR_PRIVATE_KEY
```
Do not modify the entry for `BT_ENVIRONMENT`

Details about your braintree API keys can be found [**Here**](https://sandbox.braintreegateway.com/) in the API section

If you dont have a Braintree account set up yet,set it up [**Here**](https://www.braintreepayments.com/sandbox) 

**YOU ARE SET***

Spin up the server by running `php artisan serve` and start ordering pizzas

