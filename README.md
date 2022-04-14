<h1 align="center">eShop</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jtiagosantos/e-shop?color=%green">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jtiagosantos/e-shop?color=blue">
  <a href="https://github.com/jtiagosantos/url-shortener/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jtiagosantos/e-shop?color=purple">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=orange">
   <a href="https://github.com/jtiagosantos/url-shortener/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jtiagosantos/e-shop?style=social">
  </a>
</p>

<h4 align="center"> 
	🚧  eShop ✂️ Completed(90%) 🚀 🚧
</h4>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-run-project">Run Project</a> • 
  <a href="#-technologies">Technologies</a> • 
  <a href="#-author">Author</a> • 
  <a href="#-license">License</a>
</p>

<br>

<h1 align="center">
    <img alt="eShop" src=".github/cover.png" />
</h1>

<hr />

## ⚙️ Features

- [x] See the products
- [x] See a specific product
- [x] Add product to cart
- [x] Update quantity of a product in cart
- [x] Remove product from cart
- [x] Close purchase 
- [x] Add product(admin)
- [x] Product photo upload(admin)
- [x] Update product(admin)
- [x] Delete product(admin)
- [x] Add administrator(admin)   
- [x] Remove administrator(admin)
- [x] Add address
- [x] Delete address

<hr>

## 🚀 Run Project

1️⃣ Clone project and access its folder:

```bash
$ git clone https://github.com/jtiagosantos/e-shop.git
$ cd e-shop
```

2️⃣ Install dependencies:

```bash
$ cd backend
$ npm i 
$ cd ../frotend
$ npm i
```

3️⃣ Create an .env file in the backend folder as below:

```bash
JWT_SECRET_KEY=key
```

4️⃣ Run seed to add admin:

```bash
$ npm install -g mongo-seeding-cli
$ cd backend
$ seed -u mongodb://127.0.0.1:27017/eshop --drop-database ./database/data
```

🔐 Administrator data:

- E-mail: admin_admin42@eshop.com
- Password: r2kw4ycg

5️⃣ Start project:

```bash
$ cd ../backend
$ docker-compose up --build
$ cd ../frontend
$ yarn start
```

<hr>

## 🛠 Technologies

The following tools were used in the construction of project:

**💻 Frontend**:

- React
- Typescript
- Styled Components
- Context API
- React Router Dom
- React Hook Form
- React Toast
- Axios

**📶 Backend**:

- Node.Js
- Docker
- Docker Compose
- Express
- Nodemon
- JWT
- Bcryptjs
- Validator
- Dotenv
- Cors
- Mongoose
- Multer

**💾 Database**:

- Mongodb
- Redis

<hr>

## 👨‍💻 Author

<img src="https://avatars.githubusercontent.com/u/63312141?v=4" width="100" alt="Tiago Santos" style="border-radius: 50px;" />

<strong><a href="https://github.com/jtiagosantos">Tiago Santos </a>🚀</strong>

[![Linkedin Badge](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/jos%C3%A9-tiago-santos-de-lima-aaa4361a4/)](https://www.linkedin.com/in/josetiagosantosdelima/)
[![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:tiago.santos@icomp.ufam.edu.br)

<hr>

## 📝 License

This project is under license [MIT](./LICENSE).
