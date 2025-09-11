const express = require("express");
const Idea = require("../models/Idea");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
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
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

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
