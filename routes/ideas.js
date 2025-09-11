const express = require("express");

const router = express.Router();

const databaseArr = [
  {
    id: 1,
    idea: "New facebook",
    tag: "social media",
  },
  {
    id: 2,
    idea: "New instagram",
    tag: "social media",
  },
  {
    id: 3,
    idea: "New discord",
    tag: "social media",
  },
];

router.get("/", (req, res) => {
  res.json({ success: true, data: databaseArr });
});

router.get("/:id", (req, res) => {
  const idea = databaseArr.find((idea) => idea.id === Number(req.params.id));
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }
  return res.json({ success: true, data: idea });
});

// POST "/api/ideas"
router.post("/", (req, res) => {
  const idea = {
    id: databaseArr.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    date: new Date().toISOString().slice(0, 10),
  };

  databaseArr.push(idea);

  res.json({ sucess: true, data: idea });
});

// PUT "/api/ideas/:id"
router.put("/:id", (req, res) => {
  const idea = databaseArr.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }

  idea.idea = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  return res.json({ success: true, data: idea });
});

// DELETE "/api/ideas"
router.delete("/:id", (req, res) => {
  const obj = databaseArr.find((item) => {
    return item.id == +req.params.id;
  });
  if (obj) {
    const index = databaseArr.indexOf(obj);
    databaseArr.splice(index, 1);
    return res.json({ success: true, data: obj });
  }

  return res.json({ success: false, data: "none found" });
});

module.exports = router;
