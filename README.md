# Microfrontend App

This is a simple microfrontend application with a host application and a product microfrontend. The host application displays a sidebar with links to various microfrontends. Currently, it supports loading the `Product`, `Dashboard`, `Account` microfrontend dynamically.

## Architecture

- **Host Application**: 
  - Runs on `http://localhost:8080`.
  - Contains a sidebar with a link to load the `Product`, `Dashboard`, and `Account` micro frontends.
- **Product Microfrontend**: 
  - Runs on `http://localhost:8081`.
  - Provides a simple component that is dynamically loaded by the host application.
- **Dashboard Microfrontend**: 
  - Runs on `http://localhost:8084`.
  - Provides a simple component that is dynamically loaded by the host application.
- **Account Microfrontend**: 
  - Runs on `http://localhost:8082`.
  - Provides a simple component that is dynamically loaded by the host application.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**

   ```
   git clone https://github.com/garvit-001/microfrontend-app.git
   cd microfrontend-app
   ```
   
2. **Install dependencies**
  - for Host application:
     ```
    cd ../product
    npm install
    ```
     
 - for Product application:
    ```
   cd ../product
   npm install
    ```
- for Dashboard application:
    ```
   cd ../dashboard
   npm install
    ```
 - for Account application:
    ```
   cd ../account
   npm install
    ```
3. **Running the Application**
  - Start Host application:
    ```
    cd host
    npm start
    ```
    - The host application will be available at `http://localhost:8080`.
    
- Start product application:
    ```
   cd ../product
   npm start
    ```
   - The host application will be available at `http://localhost:8081`.
     
- Start Dashboard application:
    ```
   cd ../dashboard
   npm start
    ```
    - The host application will be available at `http://localhost:8084`.
      
 - Start Account application:
    ```
   cd ../account
   npm start
    ```
    - The host application will be available at `http://localhost:8082`.
   
4. **Usage**
   - Navigate to `http://localhost:8080` in your browser.
   - Click on the "Product", "Dashboard", and "Account" links in the sidebar to load the micro frontends dynamically
