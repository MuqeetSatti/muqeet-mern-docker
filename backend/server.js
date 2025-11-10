cat > server.js <<'EOF'
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Debugging line
const mongoURI = process.env.MONGO_URI || process.env.MONGO_URL || "MONGO_NOT_SET";
console.log("DEBUG: Mongo URI from env ->", mongoURI);

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.get("/api", (req, res) => {
  res.send("Hello from Muqeet API 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server Running on Port ${PORT}`));
EOF

echo "✅ server.js updated successfully"



