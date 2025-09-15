const express = require("express");
const Idea = require("../models/Idea");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

// POST "/api/ideas"
router.post("/", async (req, res) => {
  console.log(req.body);
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

// PUT "/api/ideas/:id"
router.put("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    // match username
    if (idea.username === req.body.username) {
      const updateIdea = await Idea.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            tag: req.body.tag,
          },
        },
        {
          new: true,
        }
      );
      return res.json({ success: true, data: updateIdea });
    }
    // username does not match
    res
      .status(403)
      .json({ success: false, error: "You are not authorize to update" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

// DELETE "/api/ideas"
router.delete("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    // match the usernames
    if (idea.username === req.body.username) {
      await Idea.findByIdAndDelete(req.params.id);
      return res.json({ success: true, data: {} });
    }
    // username do not match
    res
      .status(403)
      .json({ success: false, error: "You are not authorize to delete" });
  } catch (error) {
    res.status(500).json({ success: false, error: "something went wrong" });
  }
});

module.exports = router;
