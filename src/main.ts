import app from "./app";

function main() {
  app.listen(3000, "localhost", () => {
    console.log("Server running on port 3000.");
  });
}

main();
