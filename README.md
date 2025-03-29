# LIB-STYLES

Lib styles for microfrontends in workspace project.

## Prerequisites

- Node.js (>= 22.x)
- npm (>= 10.x) or yarn (>= 1.x)

## Getting Started

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/luismab95/workspace-lib-styles.git
    cd your-project
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server, run:
```sh
npm run watch
# or
yarn watch
```

The server will start on `http://localhost:3000`.

### Building the Application

To build the project, run:
```sh
npm run build
# or
yarn build
```


The compiled JavaScript files will be in the `dist` directory.

### Project Structure

```
.
├── src
│   ├── images
│   ├── scss
|   │   ├── app.scss
├── package.json
├── load-svg.js
├── nginx.conf
└── README.md
```

- `src/images`: Images and icons.
- `src/scss`: Styles in scss files.
  - `app.scss`: Index style file.
- `package.json`: npm configuration file.
- `nginx.conf`: Nginx configuration.
- `README.md`: Project documentation.

### Scripts

- `build`: Run the application in development mode.
- `watch`: Compile TypeScript to JavaScript.

## License

This project is licensed under the MIT License.