const List = require('../models/list');

// @desc      create list
// @route     POST /api/lists
// @access    Private

exports.createList = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const listExists = await List.findOne({ title: req.body.title });
      if (listExists) {
        return res.status(400).json({ error: 'list already exists' });
      }

      if (!listExists) {
        const newList = await List.create(req.body);
        return res.status(200).json(newList);
      }
    } else {
      res.status(403).json({ error: 'you are not authorized to create a list' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc      delete list
// @route     DELETE /api/lists/:id
// @access    Private

exports.deleteList = async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: 'list deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(403).json({ error: 'you are not authorized to delete a list' });
  }
};

// @desc      fetch list
// @route     GET /api/lists | /api/lists?type=series
// @access    Private

exports.getLists = async (req, res, next) => {
  try {
    const queryType = req.query.type;
    const genreType = req.query.genre;
    let list = [];
    if (queryType) {
      if (genreType) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: queryType, genre: genreType } },
        ]);
      } else {
        list = await List.aggregate([{ $sample: { size: 10 } }, { $match: { type: queryType } }]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
