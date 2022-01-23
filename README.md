# Shortener URL

Shortener URL is simple web application to short your URL. It will generate unique key, with the unique key it will redirect to the original URL.

The application built with Docker, Laravel (Fortify, Sanctum), Next.js (React.js), and Redux.

Demo: https://url-shortener-frontend-three.vercel.app

## Screenshot
![Login page](https://i.ibb.co/Y7wyjzC/Screen-Shot-2022-01-22-at-23-52-51.png%22%20alt=%22Screen-Shot-2022-01-22-at-23-52-51)

![Registration page](https://i.ibb.co/YP7Q0pB/Screen-Shot-2022-01-22-at-23-52-59.png%22%20alt=%22Screen-Shot-2022-01-22-at-23-52-59)

![enter image description here](https://i.ibb.co/ggJ3KJH/Screen-Shot-2022-01-22-at-21-02-42.png%22%20alt=%22Screen-Shot-2022-01-22-at-21-02-42)
## How to install Frontend

 1. git clone https://github.com/abidra/url-shortener-frontend.git
 2. cd  `url-shortener-frontend`
 3. run `npm install`
 4. run `npm run dev`

## Development
```bash
.
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
└── src
    ├── __mocks__
    │   ├── customers.js
    │   └── products.js
    ├── components
    │   ├── dashboard
    │   │   ├── latest-urls.js
    │   │   └── short-url.js
    │   ├── dashboard-layout.js
    │   ├── dashboard-navbar.js
    │   ├── dashboard-sidebar.js
    │   ├── logo.js
    │   ├── nav-item.js
    │   └── severity-pill.js
    ├── icons
    │   ├── bell.js
    │   ├── chart-bar.js
    │   ├── clock.js
    │   ├── cog.js
    │   ├── download.js
    │   ├── facebook.js
    │   ├── google.js
    │   ├── lock.js
    │   ├── menu.js
    │   ├── search.js
    │   ├── selector.js
    │   ├── shopping-bag.js
    │   ├── upload.js
    │   ├── user-add.js
    │   ├── user-circle.js
    │   ├── user.js
    │   ├── users.js
    │   └── x-circle.js
    ├── pages
    │   ├── 404.js
    │   ├── _app.js
    │   ├── _document.js
    │   ├── index.js
    │   ├── login.js
    │   └── register.js
    ├── services
    │   ├── api.js
    │   ├── useAuth.js
    │   └── useRequireAuth.js
    ├── slices
    │   └── short-url.js
    ├── store
    │   └── reduxStore.js
    ├── theme
    │   └── index.js
    └── utils
        ├── create-emotion-cache.js
        └── get-initials.js
```
### Edit API Client Endpoint
1. go to `./src/services/api.js`