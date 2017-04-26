const query = (id) => {
  return '{"_id":{"$oid":"' + id + '"}}';
};

module.exports = query;