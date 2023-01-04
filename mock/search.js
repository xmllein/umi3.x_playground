export default {
  'GET /api/getLists': {
    lists: ['a', 'b', 'c'],
  },
  'GET /api/getListsAsync': (req, res) => {
    setTimeout(() => {
      res.json({
        status: 200,
        lists: Array(10).fill(req.query.value),
        // lists: req.query.value,
      });
    }, 1000);
  },
};
